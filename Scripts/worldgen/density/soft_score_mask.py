

# This is a fallback solution. It has now been replaced by hard_tree_mask.

# ============================================================
LABEL_RANGES = {
    "depth": [
        (-0.005, 0.2),
        (0.2, 0.35),
        (0.35, 0.5),
        (0.5, 0.75),
        (0.75, 1.0)
    ],
    "PV": [
        (-1.0, -0.85),
        (-0.85, -0.6),
        (-0.6, 0.2),
        (0.2, 0.7),
        (0.7, 1.0),
    ],
    "erosion": [
        (-1.0, -0.78),
        (-0.78, -0.375),
        (-0.375, -0.2225),
        (-0.2225, 0.05),
        (0.05, 0.45),
        (0.45, 0.55),
        (0.55, 1.0),
    ],
    "continentalness": [
        (-1.2, -1.05),
        (-1.05, -0.455),
        (-0.455, -0.19),
        (-0.19, -0.11),
        (-0.11, 0.03),
        (0.03, 0.3),
        (0.3, 0.6),
        (0.6, 0.8),
        (0.8, 1.0),
    ],
    "temperature": [
        (-1.0, -0.45),
        (-0.45, -0.15),
        (-0.15, 0.2),
        (0.2, 0.35),
        (0.35, 0.55),
        (0.55, 0.75),
        (0.75, 0.85),
        (0.85, 1.0)
    ],
    "humidity": [
        (-1.0, -0.35),
        (-0.35, -0.1),
        (-0.1, 0.1),
        (0.1, 0.3),
        (0.3, 0.6),
        (0.6, 0.8),
        (0.8, 1.0),
    ],
}

D_MAX = 4
P_MAX = 4
E_MAX = 6
C_MAX = 8
T_MAX = 7
H_MAX = 6



# 2) Example leaf biome defs
# Replace these with yours if needed
glacial_fungus_caves = {"biome": "the_winter_rescue:glacial_fungus_caves"}
ice_caves = {"biome": "the_winter_rescue:ice_caves"}
dripstone_caves = {"biome": "the_winter_rescue:dripstone_caves"}
andesite_caves = {"biome": "the_winter_rescue:andesite_caves"}
mycelium_caves = {"biome": "the_winter_rescue:mycelium_caves"}
brine_deposits = {"biome": "the_winter_rescue:brine_deposits"}
lush_caves = {"biome": "the_winter_rescue:lush_caves"}



# 3) Your underground tree
# IMPORTANT:
# The nesting order must match DIM_ORDER below.
# Current script assumes:
#   depth -> pv -> erosion -> continentalness -> temperature -> humidity
# If your actual tree order differs, change DIM_ORDER in the function.

underground_tree = {
    (1, 2): {
        (0, 0): {
            (4, 6): {
                (3, 5): {
                    (0, 7): brine_deposits
                }
            }
        },
        (1, 2): {
            (0, 6): {
                (6, 8): {
                    (0, 2): andesite_caves,
                    (3, 5): mycelium_caves
                }
            },
            (0, 3): {
                (3, 5): {
                    (0, 2): ice_caves,
                    (3, 5): dripstone_caves
                }
            }
        },
        (3, 4): {
            (0, 3): {
                (3, 8): {
                    0: {
                        0: ice_caves,
                        1: glacial_fungus_caves,
                        (2, H_MAX): ice_caves
                    },
                    1: {
                        0: glacial_fungus_caves,
                        1: glacial_fungus_caves,
                        (2, H_MAX): ice_caves
                    },
                    (2, 5): dripstone_caves
                },
                (3, 3): {
                    (0, 2): ice_caves,
                    (3, 5): dripstone_caves
                }
            },
            (4, 6): {
                (6, 8): {
                    (0, 2): andesite_caves,
                    (3, 5): mycelium_caves
                }
            }
        }
    },

    3: {
        '*': {
            '*': {
                (6, 8): {
                    (0, 2): {'biome': 'the_winter_rescue:darkfang_caves'},
                    (3, 3): {'biome': 'the_winter_rescue:andesite_caves'},
                    (4, 4): {
                        (0, 2): mycelium_caves,
                        (3, H_MAX): lush_caves
                    },
                    (5, 5): {'biome': 'the_winter_rescue:magmatic_deposits'},
                    (6, 6): {'biome': 'the_winter_rescue:hydrothermal_deposits'}
                }
            }
        }
    },

    4: {
        '*': {
            (0, 6): {
                (6, 8): {
                    (0, 2): {'biome': 'the_winter_rescue:darkfang_caves'},
                    (3, 3): {'biome': 'the_winter_rescue:andesite_caves'},
                    (4, 4): {
                        (0, 2): mycelium_caves,
                        (3, H_MAX): lush_caves
                    },
                    (5, 5): {'biome': 'the_winter_rescue:magmatic_deposits'},
                    (6, 7): {'biome': 'the_winter_rescue:crust_chasms'}
                },
                (3, 5): {'biome': 'the_winter_rescue:darkfang_caves'},
                (1, 2): {
                    (0, 2): {'biome': 'the_winter_rescue:darkfang_caves'},
                    (3, 3): {'biome': 'the_winter_rescue:diorite_caves'},
                    (4, 4): {
                        (0, 2): mycelium_caves,
                        (3, H_MAX): lush_caves
                    },
                    (5, 5): {'biome': 'the_winter_rescue:hydrothermal_deposits'},
                    (6, 7): {'biome': 'the_winter_rescue:crust_chasms'}
                }
            }
        }
    }
}


# 4) generator
def generate_single_file_region_mask_json(
    target_biome="the_winter_rescue:glacial_fungus_caves",
    output_path="gf_region_mask.json",
    include_pv=False,
    print_debug=False
):
    """
    Generate one single-file region_mask.json for target_biome.

    Optimized version:
      - common prefix extraction
      - max instead of add+clamp
      - cache_once on reusable masks
    """

    DIM_ORDER = ["depth", "pv", "erosion", "continentalness", "temperature", "humidity"]

    DIM_MAX = {
        "depth": D_MAX,
        "pv": P_MAX,
        "erosion": E_MAX,
        "continentalness": C_MAX,
        "temperature": T_MAX,
        "humidity": H_MAX,
    }

    DIMENSION_FN_REFS = {
        "temperature": "minecraft:overworld/temperature",
        "humidity": "minecraft:overworld/vegetation",
        "continentalness": "minecraft:overworld/effective_continentalness",
        "erosion": "minecraft:overworld/erosion",
        "depth": "minecraft:overworld/depth",
        "pv": "minecraft:overworld/ridges"
    }

    SOFTNESS_BY_DIM = {
        "depth": 0.06,
        "pv": 0.08,
        "erosion": 0.08,
        "continentalness": 0.08,
        "temperature": 0.06,
        "humidity": 0.06,
    }

    dims_to_use = ["depth", "erosion", "continentalness", "temperature", "humidity"]
    if include_pv:
        dims_to_use = ["depth", "pv", "erosion", "continentalness", "temperature", "humidity"]

    # ------------------------------------------------------------
    # Helpers
    def normalize_leaf_biome(value):
        if isinstance(value, dict) and "biome" in value:
            return value["biome"]

        if isinstance(value, str):
            return value

        if hasattr(value, "get") and callable(value.get):
            biome = value.get("biome")
            if biome is not None:
                return biome

        return None

    def normalize_bucket_key(key, max_index):
        if key == "*":
            return (0, max_index)
        if isinstance(key, int):
            return (key, key)
        if isinstance(key, tuple) and len(key) == 2:
            return key
        raise ValueError(f"Unsupported key: {key}")

    def extract_biome_branches(tree, target_biome):
        branches = []

        def _walk(node, dim_idx, current_path):
            if dim_idx >= len(DIM_ORDER):
                leaf_biome = normalize_leaf_biome(node)
                if leaf_biome == target_biome:
                    branches.append(current_path.copy())
                return

            leaf_biome = normalize_leaf_biome(node)
            if leaf_biome is not None:
                if leaf_biome == target_biome:
                    path = current_path.copy()
                    for j in range(dim_idx, len(DIM_ORDER)):
                        dn = DIM_ORDER[j]
                        path[dn] = (0, DIM_MAX[dn])
                    branches.append(path)
                return

            if not isinstance(node, dict):
                return

            dim_name = DIM_ORDER[dim_idx]

            for key, child in node.items():
                lo, hi = normalize_bucket_key(key, DIM_MAX[dim_name])
                new_path = current_path.copy()
                new_path[dim_name] = (lo, hi)
                _walk(child, dim_idx + 1, new_path)

        _walk(tree, 0, {})
        return branches

    def bucket_span_to_value_range(label, bucket_lo, bucket_hi):
        actual_label = "PV" if label == "pv" else label
        ranges = LABEL_RANGES[actual_label]
        value_lo = ranges[bucket_lo][0]
        value_hi = ranges[bucket_hi][1]
        return (value_lo, value_hi)

    def branch_to_value_ranges(branch):
        out = {}
        for dim, (lo, hi) in branch.items():
            out[dim] = bucket_span_to_value_range(dim, lo, hi)
        return out

    def can_merge_ranges(r1, r2):
        """
        Two bucket ranges can merge if they overlap or are adjacent.
        Example:
          (0,0) + (1,1) -> (0,1)
          (0,1) + (2,2) -> (0,2)
        """
        a_lo, a_hi = r1
        b_lo, b_hi = r2
        return not (a_hi + 1 < b_lo or b_hi + 1 < a_lo)

    def merge_ranges(r1, r2):
        return (min(r1[0], r2[0]), max(r1[1], r2[1]))

    def try_merge_two_branches(branch1, branch2, dims):
        """
        Merge only if:
          - all dims except exactly one are identical
          - the differing dim ranges are adjacent/overlapping
        """
        diff_dims = []

        for dim in dims:
            r1 = branch1.get(dim)
            r2 = branch2.get(dim)

            if r1 != r2:
                diff_dims.append(dim)

        if len(diff_dims) != 1:
            return None

        dim = diff_dims[0]
        if not can_merge_ranges(branch1[dim], branch2[dim]):
            return None

        merged = branch1.copy()
        merged[dim] = merge_ranges(branch1[dim], branch2[dim])
        return merged

    def merge_branches(branches, dims):
        """
        Repeatedly merge branches until no more merges are possible.
        """
        branches = branches[:]
        changed = True

        while changed:
            changed = False
            used = [False] * len(branches)
            new_branches = []

            for i in range(len(branches)):
                if used[i]:
                    continue

                current = branches[i]
                merged_any = True

                while merged_any:
                    merged_any = False
                    for j in range(i + 1, len(branches)):
                        if used[j]:
                            continue

                        merged = try_merge_two_branches(current, branches[j], dims)
                        if merged is not None:
                            current = merged
                            used[j] = True
                            changed = True
                            merged_any = True

                used[i] = True
                new_branches.append(current)

            branches = new_branches

        return branches

    # Density JSON node builders
    def df_const(v):
        return {
            "type": "minecraft:constant",
            "argument": float(v)
        }

    def df_add(a, b):
        return {
            "type": "minecraft:add",
            "argument1": a,
            "argument2": b
        }

    def df_mul(a, b):
        return {
            "type": "minecraft:mul",
            "argument1": a,
            "argument2": b
        }

    def df_min(a, b):
        return {
            "type": "minecraft:min",
            "argument1": a,
            "argument2": b
        }

    def df_max(a, b):
        return {
            "type": "minecraft:max",
            "argument1": a,
            "argument2": b
        }

    def df_clamp(inp, min_v=0.0, max_v=1.0):
        return {
            "type": "minecraft:clamp",
            "input": inp,
            "min": float(min_v),
            "max": float(max_v)
        }

    def df_cache_once(arg):
        return {
            "type": "minecraft:cache_once",
            "argument": arg
        }

    def df_cache_2d(arg):
        return {
            "type": "minecraft:cache_2d",
            "argument": arg
        }

    def nested_mul(exprs):
        if not exprs:
            return df_const(1.0)
        result = exprs[0]
        for e in exprs[1:]:
            result = df_mul(result, e)
        return result

    def nested_max(exprs):
        if not exprs:
            return df_const(0.0)
        result = exprs[0]
        for e in exprs[1:]:
            result = df_max(result, e)
        return result

    # ------------------------------------------------------------
    # Range mask cache
    # ------------------------------------------------------------
    range_mask_cache = {}

    def build_range_mask_json(function_ref, low, high, softness):
        """
        Soft interval mask:
            mask = clamp(min(v - low, high - v) / softness, 0, 1)
        cached with cache_once
        """
        cache_key = (function_ref, float(low), float(high), float(softness))
        if cache_key in range_mask_cache:
            return range_mask_cache[cache_key]

        v = function_ref

        left_margin = df_add(v, df_const(-low))  # v - low
        right_margin = df_add(df_const(high), df_mul(df_const(-1.0), v))  # high - v

        inside_margin = df_min(left_margin, right_margin)
        scaled = df_mul(inside_margin, df_const(1.0 / softness))
        expr = df_cache_once(df_clamp(scaled, 0.0, 1.0))

        range_mask_cache[cache_key] = expr
        return expr

    def build_dim_mask(dim, branch_value_ranges):
        low, high = branch_value_ranges[dim]
        function_ref = DIMENSION_FN_REFS[dim]
        softness = SOFTNESS_BY_DIM[dim]
        return build_range_mask_json(function_ref, low, high, softness)

    # ------------------------------------------------------------
    # Common prefix grouping
    # ------------------------------------------------------------
    def group_branches_by_prefix(branches, prefix_dims):
        """
        Group branches by identical ranges on prefix_dims.
        Returns:
            {
              prefix_key: [branch1, branch2, ...]
            }
        """
        groups = {}
        for branch in branches:
            key = tuple((dim, branch[dim]) for dim in prefix_dims if dim in branch)
            groups.setdefault(key, []).append(branch)
        return groups

    def make_branch_signature(branch, dims):
        return tuple((dim, branch[dim]) for dim in dims if dim in branch)

    def deduplicate_branches(branches, dims):
        seen = set()
        out = []
        for branch in branches:
            sig = make_branch_signature(branch, dims)
            if sig not in seen:
                seen.add(sig)
                out.append(branch)
        return out

    def build_mask_for_dims(branch_value_ranges, selected_dims):
        masks = []
        for dim in selected_dims:
            if dim in branch_value_ranges:
                masks.append(build_dim_mask(dim, branch_value_ranges))
        return nested_mul(masks)

    # ------------------------------------------------------------
    # Main build
    # ------------------------------------------------------------
    bucket_branches = extract_biome_branches(underground_tree, target_biome)

    if print_debug:
        print("=== BUCKET BRANCHES (ORIGINAL) ===")
        print(json.dumps(bucket_branches, ensure_ascii=False, indent=2))

    bucket_branches_merged = merge_branches(bucket_branches, dims_to_use)

    if print_debug:
        print("\n=== BUCKET BRANCHES (MERGED) ===")
        print(json.dumps(bucket_branches_merged, ensure_ascii=False, indent=2))

    value_branches = [branch_to_value_ranges(b) for b in bucket_branches_merged]
    value_branches = deduplicate_branches(value_branches, dims_to_use)

    # ------------------------------------------------------------
    # Prefix strategy:
    #
    # Use all dims except the last 2 as common prefix:
    #   common prefix: depth, [pv], erosion, continentalness
    #   leaf subcases: temperature, humidity
    #
    # This exactly matches your current repeated-subtree pattern.
    # ------------------------------------------------------------
    if len(dims_to_use) >= 2:
        prefix_dims = dims_to_use[:-2]
        suffix_dims = dims_to_use[-2:]
    else:
        prefix_dims = dims_to_use
        suffix_dims = []

    grouped = group_branches_by_prefix(value_branches, prefix_dims)

    grouped_masks = []

    for prefix_key, branches_in_group in grouped.items():
        prefix_branch = {dim: vr for dim, vr in prefix_key}

        depth_prefix_dims = [d for d in prefix_dims if d == "depth"]
        non_depth_prefix_dims = [d for d in prefix_dims if d != "depth"]

        depth_prefix_mask = build_mask_for_dims(prefix_branch, depth_prefix_dims)
        non_depth_prefix_mask = build_mask_for_dims(prefix_branch, non_depth_prefix_dims)

        suffix_masks = []
        for branch in branches_in_group:
            suffix_part = {dim: branch[dim] for dim in suffix_dims if dim in branch}
            suffix_mask = build_mask_for_dims(suffix_part, suffix_dims)
            suffix_masks.append(suffix_mask)

        if suffix_masks:
            group_suffix_mask = nested_max(suffix_masks)
            non_depth_group_mask = nested_mul([non_depth_prefix_mask, group_suffix_mask])
        else:
            non_depth_group_mask = non_depth_prefix_mask

        non_depth_group_mask = df_cache_2d(non_depth_group_mask)
        non_depth_group_mask = df_cache_once(non_depth_group_mask)

        group_mask = nested_mul([depth_prefix_mask, non_depth_group_mask])
        grouped_masks.append(group_mask)

    # final union = max over groups
    region_mask_json = nested_max(grouped_masks)

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(region_mask_json, f, ensure_ascii=False, indent=2)

    debug_info = {
        "target_biome": target_biome,
        "include_pv": include_pv,
        "dims_to_use": dims_to_use,
        "branch_count_original": len(bucket_branches),
        "branch_count_merged": len(bucket_branches_merged),
        "branch_count_deduplicated": len(value_branches),
        "prefix_dims": prefix_dims,
        "suffix_dims": suffix_dims,
        "group_count": len(grouped_masks),
        "output_path": output_path
    }

    if print_debug:
        print("\n=== DEBUG INFO ===")
        print(json.dumps(debug_info, ensure_ascii=False, indent=2))

    return region_mask_json, debug_info



# 5) usage
NOISE_ROUTER_INPUT_MAP = {
    "minecraft:overworld/temperature": "temperature",
    "minecraft:overworld/vegetation": "humidity",
    "minecraft:overworld/effective_continentalness": "continentalness",
    "minecraft:overworld/erosion": "erosion",
    "minecraft:overworld/depth": "depth",
    "minecraft:overworld/ridges": "pv",
}


def evaluate_density_function(expr, inputs):
    if isinstance(expr, (int, float)):
        return float(expr)

    if isinstance(expr, str):
        key = NOISE_ROUTER_INPUT_MAP.get(expr)
        if key is None:
            raise ValueError(f"Unknown function reference: {expr}")
        return float(inputs[key])

    if not isinstance(expr, dict):
        raise ValueError(f"Unsupported expression node: {expr}")

    t = expr.get("type")

    if t == "minecraft:constant":
        return float(expr["argument"])

    elif t == "minecraft:add":
        return (
            evaluate_density_function(expr["argument1"], inputs) +
            evaluate_density_function(expr["argument2"], inputs)
        )

    elif t == "minecraft:mul":
        return (
            evaluate_density_function(expr["argument1"], inputs) *
            evaluate_density_function(expr["argument2"], inputs)
        )

    elif t == "minecraft:min":
        return min(
            evaluate_density_function(expr["argument1"], inputs),
            evaluate_density_function(expr["argument2"], inputs)
        )

    elif t == "minecraft:max":
        return max(
            evaluate_density_function(expr["argument1"], inputs),
            evaluate_density_function(expr["argument2"], inputs)
        )

    elif t == "minecraft:clamp":
        v = evaluate_density_function(expr["input"], inputs)
        return max(float(expr["min"]), min(float(expr["max"]), v))

    elif t == "minecraft:cache_once":
        # 本地 evaluator 不做缓存，直接求 argument
        return evaluate_density_function(expr["argument"], inputs)

    elif t == "minecraft:cache_2d":
        # 本地 evaluator 不做二维缓存，直接透传
        return evaluate_density_function(expr["argument"], inputs)

    else:
        raise ValueError(f"Unsupported expression type: {t}")


def test_mask_value(region_mask_json, depth, erosion, continentalness, temperature, humidity, pv=0.0):
    inputs = {
        "depth": depth,
        "erosion": erosion,
        "continentalness": continentalness,
        "temperature": temperature,
        "humidity": humidity,
        "pv": pv,
    }
    value = evaluate_density_function(region_mask_json, inputs)
    print("inputs =", inputs)
    print("mask value =", value)
    return value



# 7) Stats for generated density-function tree
def canonicalize_expr(expr):
    """
    Convert expression into a canonical immutable representation,
    used for structural deduplication.
    """
    if isinstance(expr, (int, float)):
        return ("number", float(expr))

    if isinstance(expr, str):
        return ("string", expr)

    if isinstance(expr, list):
        return ("list", tuple(canonicalize_expr(x) for x in expr))

    if isinstance(expr, dict):
        # sort keys so equivalent dicts become same canonical form
        items = tuple(sorted((k, canonicalize_expr(v)) for k, v in expr.items()))
        return ("dict", items)

    return ("other", repr(expr))


def analyze_density_tree(expr):
    """
    Analyze a density-function JSON tree.

    Returns:
      {
        "total_nodes": ...,
        "dict_nodes": ...,
        "string_nodes": ...,
        "number_nodes": ...,
        "list_nodes": ...,
        "other_nodes": ...,
        "max_depth": ...,
        "type_counts": {...},
        "unique_structural_nodes": ...
      }
    """

    type_counter = Counter()

    stats = {
        "total_nodes": 0,
        "dict_nodes": 0,
        "string_nodes": 0,
        "number_nodes": 0,
        "list_nodes": 0,
        "other_nodes": 0,
        "max_depth": 0,
    }

    unique_nodes = set()

    def walk(node, depth=1):
        stats["total_nodes"] += 1
        stats["max_depth"] = max(stats["max_depth"], depth)
        unique_nodes.add(canonicalize_expr(node))

        if isinstance(node, (int, float)):
            stats["number_nodes"] += 1
            return

        if isinstance(node, str):
            stats["string_nodes"] += 1
            return

        if isinstance(node, list):
            stats["list_nodes"] += 1
            for item in node:
                walk(item, depth + 1)
            return

        if isinstance(node, dict):
            stats["dict_nodes"] += 1

            node_type = node.get("type")
            if node_type is not None:
                type_counter[node_type] += 1
            else:
                type_counter["<dict_without_type>"] += 1

            for k, v in node.items():
                # 不统计 key，只统计 value
                walk(v, depth + 1)
            return

        stats["other_nodes"] += 1

    walk(expr)

    result = {
        **stats,
        "type_counts": dict(type_counter),
        "unique_structural_nodes": len(unique_nodes),
    }
    return result


def print_density_tree_stats(expr, title="Density Function Stats"):
    stats = analyze_density_tree(expr)
    print(f"\n=== {title} ===")
    print(json.dumps(stats, ensure_ascii=False, indent=2))
    return stats
import json
from collections import Counter



# 8) Repeated subtree frequency analyzer
def canonicalize_expr(expr):
    """
    Convert expression into a canonical immutable representation,
    so structurally identical subtrees hash to the same key.
    """
    if isinstance(expr, (int, float)):
        return ("number", float(expr))

    if isinstance(expr, str):
        return ("string", expr)

    if isinstance(expr, list):
        return ("list", tuple(canonicalize_expr(x) for x in expr))

    if isinstance(expr, dict):
        items = tuple(sorted((k, canonicalize_expr(v)) for k, v in expr.items()))
        return ("dict", items)

    return ("other", repr(expr))


def summarize_expr(expr, max_len=180):
    """
    Make a short readable summary for console output.
    """
    if isinstance(expr, (int, float)):
        return repr(float(expr))

    if isinstance(expr, str):
        return expr

    if isinstance(expr, dict):
        t = expr.get("type")
        if t:
            summary = {"type": t}

            # 常见字段挑几个做摘要
            for key in ("argument", "argument1", "argument2", "input", "min", "max",
                        "min_inclusive", "max_exclusive", "when_in_range", "when_out_of_range"):
                if key in expr:
                    v = expr[key]
                    if isinstance(v, dict):
                        summary[key] = {"type": v.get("type", "<dict>")}
                    else:
                        summary[key] = v

            s = json.dumps(summary, ensure_ascii=False)
            return s if len(s) <= max_len else s[:max_len] + "..."
        else:
            s = json.dumps(expr, ensure_ascii=False)
            return s if len(s) <= max_len else s[:max_len] + "..."

    if isinstance(expr, list):
        s = json.dumps(expr, ensure_ascii=False)
        return s if len(s) <= max_len else s[:max_len] + "..."

    return repr(expr)[:max_len]


def count_subtree_nodes(expr):
    """
    Count total nodes in a subtree (rough size estimate).
    """
    if isinstance(expr, (int, float, str)):
        return 1
    if isinstance(expr, list):
        return 1 + sum(count_subtree_nodes(x) for x in expr)
    if isinstance(expr, dict):
        return 1 + sum(count_subtree_nodes(v) for v in expr.values())
    return 1


def find_repeated_subtrees(expr, min_count=2, min_subtree_nodes=1, top_n=30):
    """
    Find structurally repeated subtrees.

    Returns a list of dicts sorted by:
      - occurrence count desc
      - subtree size desc

    Parameters:
      min_count: only keep subtrees appearing at least this many times
      min_subtree_nodes: ignore tiny subtrees smaller than this
      top_n: max number of repeated subtree entries to return
    """
    counter = Counter()
    examples = {}
    subtree_sizes = {}

    def walk(node):
        key = canonicalize_expr(node)
        counter[key] += 1

        if key not in examples:
            examples[key] = node
            subtree_sizes[key] = count_subtree_nodes(node)

        if isinstance(node, dict):
            for v in node.values():
                walk(v)
        elif isinstance(node, list):
            for item in node:
                walk(item)

    walk(expr)

    results = []
    for key, count in counter.items():
        if count < min_count:
            continue

        size = subtree_sizes[key]
        if size < min_subtree_nodes:
            continue

        sample = examples[key]
        saved_nodes_estimate = (count - 1) * size

        entry = {
            "count": count,
            "subtree_nodes": size,
            "estimated_redundant_nodes": saved_nodes_estimate,
            "root_kind": (
                sample.get("type")
                if isinstance(sample, dict) and "type" in sample
                else type(sample).__name__
            ),
            "summary": summarize_expr(sample),
            "sample": sample
        }
        results.append(entry)

    results.sort(key=lambda x: (-x["count"], -x["subtree_nodes"]))
    return results[:top_n]


def print_repeated_subtrees(expr, min_count=2, min_subtree_nodes=1, top_n=30, title="Repeated Subtrees"):
    results = find_repeated_subtrees(
        expr,
        min_count=min_count,
        min_subtree_nodes=min_subtree_nodes,
        top_n=top_n
    )

    print(f"\n=== {title} ===")
    print(json.dumps(results, ensure_ascii=False, indent=2))
    return results
if __name__ == "__main__":
    region_mask_json, debug_info = generate_single_file_region_mask_json(
        target_biome="the_winter_rescue:glacial_fungus_caves",
        output_path="glacial_fungus_caves_region_mask.json",
        include_pv=True,
        print_debug=False
    )

    test_mask_value(
        region_mask_json,
        depth=0.3,
        erosion=-0.5,
        continentalness=0.2,
        temperature=-0.3,
        humidity=-0.2,
        pv=0.5
    )
    print_density_tree_stats(region_mask_json, title="glacial_fungus_caves region_mask")

    print_repeated_subtrees(
        region_mask_json,
        min_count=2,
        min_subtree_nodes=3,
        top_n=20,
        title="Most repeated subtrees in region_mask"
    )

