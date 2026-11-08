import itertools
import json
import random
import tempfile
import unittest
from collections import Counter
from copy import deepcopy
from pathlib import Path

from spline_biome_selector import factor_minmax, generate_smooth_hypercube_mask


def combine(operation, *operands):
    result = operands[0]
    for operand in operands[1:]:
        result = {"type": "minecraft:" + operation, "argument1": result, "argument2": operand}
    return result


def evaluate(expr, leaves):
    if isinstance(expr, str):
        return leaves[expr]
    operation = min if expr["type"] == "minecraft:min" else max
    return operation(evaluate(expr["argument1"], leaves), evaluate(expr["argument2"], leaves))


def count_types(expr):
    result = Counter()
    if isinstance(expr, dict):
        if "type" in expr:
            result[expr["type"]] += 1
        for value in expr.values():
            result.update(count_types(value))
    elif isinstance(expr, list):
        for value in expr:
            result.update(count_types(value))
    return result


def cartesian_mask(with_depth=False):
    common = ["depth"] if with_depth else []
    return combine("max", *(
        combine("min", *common, weirdness, "erosion", "continents", temperature, humidity)
        for temperature, humidity in (("t1", "h1"), ("t2", "h2"))
        for weirdness in ("w1", "w2")
    ))


class FactoringTests(unittest.TestCase):
    def test_all_cartesian_leaf_value_combinations(self):
        for with_depth in (False, True):
            original = cartesian_mask(with_depth)
            factored = factor_minmax(original)
            names = ["erosion", "continents", "w1", "w2", "t1", "h1", "t2", "h2"]
            if with_depth:
                names.append("depth")
            for values in itertools.product((0.0, 0.5, 1.0), repeat=len(names)):
                leaves = dict(zip(names, values))
                self.assertEqual(evaluate(original, leaves), evaluate(factored, leaves), leaves)
            self.assertEqual(count_types(factored)["minecraft:min"], 6 if with_depth else 5)
            self.assertEqual(count_types(factored)["minecraft:max"], 2)

    def test_temperature_humidity_pairs_keep_their_correlation(self):
        leaves = dict.fromkeys(("erosion", "continents", "w1", "w2"), 1)
        leaves.update(t1=1, h1=0, t2=0, h2=1)
        self.assertEqual(evaluate(factor_minmax(cartesian_mask()), leaves), 0)

    def test_absorption_and_duplicates(self):
        for outer, inner in (("min", "max"), ("max", "min")):
            self.assertEqual(factor_minmax(combine(outer, "a", combine(inner, "a", "b"))), "a")
            self.assertEqual(factor_minmax(combine(outer, "a", "a")), "a")

    def test_factoring_is_repeatable_and_does_not_mutate_input(self):
        original = cartesian_mask()
        snapshot = deepcopy(original)
        optimized = factor_minmax(original)
        self.assertEqual(original, snapshot)
        self.assertEqual(factor_minmax(original), optimized)
        self.assertEqual(factor_minmax(optimized), optimized)

    def test_random_finite_minmax_trees(self):
        rng = random.Random(20261023)

        def tree(depth):
            if not depth or rng.random() < 0.3:
                return rng.choice("abcde")
            return combine(rng.choice(("min", "max")), tree(depth - 1), tree(depth - 1))

        for _ in range(150):
            original = tree(5)
            optimized = factor_minmax(original)
            for _ in range(25):
                values = {key: rng.uniform(-10, 10) for key in "abcde"}
                self.assertEqual(evaluate(original, values), evaluate(optimized, values))


class MaskGeneratorTests(unittest.TestCase):
    def setUp(self):
        self.folder = tempfile.TemporaryDirectory()
        self.addCleanup(self.folder.cleanup)
        self.output = Path(self.folder.name) / "mask.json"

    @staticmethod
    def rows():
        return [{"biome": "test:target", "parameters": {
            "depth": [0.2, 0.5], "erosion": [-1, 0.05], "continentalness": [-0.19, 1],
            "weirdness": weirdness, "temperature": temperature, "humidity": humidity,
        }} for weirdness in ([-0.9, -0.4], [0.4, 0.9])
            for temperature, humidity in (([-1, -0.4], [-0.4, -0.1]), ([-0.5, -0.1], [-1, -0.3]))]

    def generate(self, **kwargs):
        return generate_smooth_hypercube_mask(
            biome_rows=self.rows(), target_biome="test:target", transition_width=0.06,
            output_path=self.output, **kwargs
        )

    def test_default_six_dimensional_mask_keeps_depth_and_cache_once(self):
        expr = self.generate()
        self.assertEqual(expr["type"], "minecraft:cache_once")
        self.assertEqual(count_types(expr)["minecraft:spline"], 9)
        self.assertIn("minecraft:overworld/depth", self.output.read_text(encoding="utf-8"))

    def test_explicit_flat_cache_produces_eight_splines_and_preserves_points(self):
        expr = self.generate(ignore_dims=["depth"], cache_type="minecraft:flat_cache")
        self.assertEqual(expr["type"], "minecraft:flat_cache")
        self.assertEqual(count_types(expr)["minecraft:spline"], 8)
        self.assertEqual(json.loads(self.output.read_text(encoding="utf-8")), expr)
        self.assertNotIn("minecraft:overworld/depth", self.output.read_text(encoding="utf-8"))
        # The erosion ramp keeps the requested width and the original zero derivatives.
        erosion = []

        def walk(node):
            if isinstance(node, dict):
                if node.get("type") == "minecraft:spline":
                    if node["spline"]["coordinate"] == "minecraft:overworld/erosion":
                        erosion.append(node["spline"]["points"])
                for value in node.values():
                    walk(value)

        walk(expr)
        self.assertEqual(len(erosion), 1)
        self.assertEqual([point["location"] for point in erosion[0]], [-2.0, -1.06, -1, 0.05, 0.11, 2.0])
        self.assertTrue(all(point["derivative"] == 0.0 for point in erosion[0]))

    def test_flat_cache_is_not_selected_implicitly(self):
        self.assertEqual(self.generate(ignore_dims=["depth"])["type"], "minecraft:cache_once")

    def test_flat_cache_rejects_a_height_dependent_mask(self):
        with self.assertRaisesRegex(ValueError, "depth"):
            self.generate(cache_type="minecraft:flat_cache")
        self.assertFalse(self.output.exists())

    def test_cache_can_be_disabled_without_dropping_depth(self):
        expr = self.generate(top_level_cache=False)
        counts = count_types(expr)
        self.assertEqual(counts["minecraft:cache_once"] + counts["minecraft:flat_cache"], 0)
        self.assertIn("minecraft:overworld/depth", self.output.read_text(encoding="utf-8"))

    def test_single_interval_remains_supported(self):
        expr = generate_smooth_hypercube_mask(
            intervals=self.rows()[0]["parameters"], transition_width=0.06, output_path=self.output,
        )
        self.assertEqual(count_types(expr)["minecraft:spline"], 6)


if __name__ == "__main__":
    unittest.main()
