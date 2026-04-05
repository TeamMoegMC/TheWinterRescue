import json
from collections import Counter

# ============================================================
# 1) Constants
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



# 2) biome defs
glacial_fungus_caves = {"biome": "the_winter_rescue:glacial_fungus_caves"}
ice_caves = {"biome": "the_winter_rescue:ice_caves"}
dripstone_caves = {"biome": "the_winter_rescue:dripstone_caves"}
andesite_caves = {"biome": "the_winter_rescue:andesite_caves"}
mycelium_caves = {"biome": "the_winter_rescue:mycelium_caves"}
brine_deposits = {"biome": "the_winter_rescue:brine_deposits"}
lush_caves = {"biome": "the_winter_rescue:lush_caves"}


# 3) Underground tree
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



# 4) Unified biome-code selector generator
def generate_forward_selector_code_json(
    biome_code_map,
    output_path="underground_biome_selector.json",
    include_pv=True,
    print_debug=True
):
    """
    Compile underground_tree forward into a hard-edged range_choice selector.

    Leaves return biome code from biome_code_map.

    Example biome_code_map:
    {
        "the_winter_rescue:glacial_fungus_caves": 1,
        "the_winter_rescue:ice_caves": 2,
        "the_winter_rescue:dripstone_caves": 3,
        ...
    }

    Important:
    - Every biome appearing in underground_tree should ideally exist in biome_code_map
    - Unmapped biomes default to 0
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

    active_dim_order = ["depth", "erosion", "continentalness", "temperature", "humidity"]
    if include_pv:
        active_dim_order = ["depth", "pv", "erosion", "continentalness", "temperature", "humidity"]

    compile_stats = {
        "range_choice_by_dim": {dim: 0 for dim in active_dim_order},
        "raw_branch_count_by_dim": {dim: 0 for dim in active_dim_order},
        "grouped_branch_count_by_dim": {dim: 0 for dim in active_dim_order},
        "compact_branch_count_by_dim": {dim: 0 for dim in active_dim_order},
        "pv_inverse_stats": {
            "pv_branch_count": 0,
            "pv_inverse_interval_count_before_merge": 0,
            "pv_inverse_interval_count_after_merge": 0
        }
    }

    temperature_debug_records = []

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

    def bucket_span_to_value_range(label, bucket_lo, bucket_hi):
        actual_label = "PV" if label == "pv" else label
        ranges = LABEL_RANGES[actual_label]
        low = ranges[bucket_lo][0]
        high = ranges[bucket_hi][1]
        return (low, high)

    def expr_signature(expr):
        return canonicalize_node(expr)

    def all_exprs_equal(exprs):
        if not exprs:
            return True
        first = expr_signature(exprs[0])
        return all(expr_signature(e) == first for e in exprs[1:])

    def merge_compiled_branches(branches, eps=1e-12):
        """
        branches: [(low, high, child_expr), ...]

        Merge adjacent / overlapping numeric intervals if child_expr is identical.
        This is a post-compile merge.
        """
        if not branches:
            return []

        # group by child expr
        grouped = {}
        child_examples = {}

        for low, high, child_expr in branches:
            sig = expr_signature(child_expr)
            grouped.setdefault(sig, []).append((min(low, high), max(low, high)))
            child_examples[sig] = child_expr

        merged_output = []
        for sig, intervals in grouped.items():
            merged_intervals = merge_numeric_intervals(intervals, eps=eps)
            child_expr = child_examples[sig]
            for low, high in merged_intervals:
                merged_output.append((low, high, child_expr))

        merged_output.sort(key=lambda x: (x[0], x[1]))
        return merged_output

    def get_full_dimension_domain(dim_name):
        """
        Return the full numeric domain represented by this dimension's bucket table.
        """
        full_low, full_high = bucket_span_to_value_range(dim_name, 0, DIM_MAX[dim_name])
        return (full_low, full_high)

    def is_full_domain_interval(dim_name, low, high, eps=1e-12):
        """
        Check whether [low, high) effectively covers full domain for this dimension.
        For non-pv dims this is straightforward.
        For pv we skip this optimization because pv->w inverse is multi-interval.
        """
        if dim_name == "pv":
            return False

        full_low, full_high = get_full_dimension_domain(dim_name)
        return abs(low - full_low) < eps and abs(high - full_high) < eps

    # PV conversion
    def _pv_to_w(interval, w_sign=0):
        all_pv_intervals = []

        p_low = interval[0]
        p_high = interval[1]

        if p_low < -1 or p_high > 1 or p_low > p_high:
            raise ValueError("Interval must be in the range [-1, 1] and low must be less than high")

        u_low = 1 - p_high
        u_high = 1 - p_low

        # both in section I
        if u_low >= 1 and u_low <= 2 and u_high >= 1 and u_high <= 2:
            w_a_low = (u_low - 2) / 3
            w_a_high = (u_high - 2) / 3
            w_c_low = (u_high - 2) / (-3)
            w_c_high = (u_low - 2) / (-3)
            if w_sign <= 0:
                all_pv_intervals.append([w_a_low, w_a_high])
            if w_sign >= 0:
                all_pv_intervals.append([w_c_low, w_c_high])
            return all_pv_intervals

        # both in section II
        if u_low >= 0 and u_low <= 1 and u_high >= 0 and u_high <= 1:
            w_a_low = (u_low - 2) / 3
            w_a_high = (u_high - 2) / 3
            w_c_low = (u_high - 2) / (-3)
            w_c_high = (u_low - 2) / (-3)

            w_d_low = (u_low + 2) / 3
            w_d_high = (u_high + 2) / 3
            w_b_low = (u_high + 2) / (-3)
            w_b_high = (u_low + 2) / (-3)

            if w_sign <= 0:
                all_pv_intervals.append([w_a_low, w_a_high])
                all_pv_intervals.append([w_b_low, w_b_high])
            if w_sign >= 0:
                all_pv_intervals.append([w_c_low, w_c_high])
                all_pv_intervals.append([w_d_low, w_d_high])
            return all_pv_intervals

        # crossing section boundary
        if u_high >= 1 and u_high <= 2 and u_low >= 0 and u_low <= 1:
            u_mid = 1

            # section I
            w_a_low_I = (u_mid - 2) / 3
            w_a_high_I = (u_high - 2) / 3
            w_c_low_I = (u_high - 2) / (-3)
            w_c_high_I = (u_mid - 2) / (-3)

            # section II
            w_a_low_II = (u_low - 2) / 3
            w_a_high_II = (u_mid - 2) / 3
            w_c_low_II = (u_mid - 2) / (-3)
            w_c_high_II = (u_low - 2) / (-3)

            w_d_low_II = (u_low + 2) / 3
            w_d_high_II = (u_mid + 2) / 3
            w_b_low_II = (u_mid + 2) / (-3)
            w_b_high_II = (u_low + 2) / (-3)

            if w_sign <= 0:
                all_pv_intervals.append([w_a_low_I, w_a_high_I])
                all_pv_intervals.append([w_a_low_II, w_a_high_II])
                all_pv_intervals.append([w_b_low_II, w_b_high_II])
            if w_sign >= 0:
                all_pv_intervals.append([w_c_low_I, w_c_high_I])
                all_pv_intervals.append([w_c_low_II, w_c_high_II])
                all_pv_intervals.append([w_d_low_II, w_d_high_II])
            return all_pv_intervals

        return all_pv_intervals

    def merge_numeric_intervals(intervals, eps=1e-12):
        if not intervals:
            return []

        normalized = [(min(a, b), max(a, b)) for a, b in intervals]
        normalized.sort(key=lambda x: (x[0], x[1]))

        merged = [list(normalized[0])]
        for lo, hi in normalized[1:]:
            cur_lo, cur_hi = merged[-1]
            if lo <= cur_hi + eps:
                merged[-1][1] = max(cur_hi, hi)
            else:
                merged.append([lo, hi])

        return [tuple(x) for x in merged]

    def merge_bucket_intervals(intervals):
        if not intervals:
            return []

        normalized = [(min(a, b), max(a, b)) for a, b in intervals]
        normalized.sort(key=lambda x: (x[0], x[1]))

        merged = [list(normalized[0])]
        for lo, hi in normalized[1:]:
            cur_lo, cur_hi = merged[-1]
            if lo <= cur_hi + 1:
                merged[-1][1] = max(cur_hi, hi)
            else:
                merged.append([lo, hi])

        return [tuple(x) for x in merged]

    def canonicalize_key(key):
        if isinstance(key, tuple):
            return ("tuple", tuple(canonicalize_key(x) for x in key))
        if isinstance(key, list):
            return ("list", tuple(canonicalize_key(x) for x in key))
        if isinstance(key, (int, float, str)):
            return (type(key).__name__, key)
        return ("other", repr(key))

    def canonicalize_node(node):
        if isinstance(node, tuple):
            return ("tuple", tuple(canonicalize_node(x) for x in node))
        if isinstance(node, list):
            return ("list", tuple(canonicalize_node(x) for x in node))
        if isinstance(node, dict):
            items = tuple(
                sorted(
                    ((canonicalize_key(k), canonicalize_node(v)) for k, v in node.items()),
                    key=lambda x: x[0]
                )
            )
            return ("dict", items)
        if isinstance(node, (int, float, str)):
            return (type(node).__name__, node)
        return ("other", repr(node))

    def group_same_child_keys(node, dim_name):
        child_groups = {}
        child_examples = {}

        for key, child in node.items():
            bucket_interval = normalize_bucket_key(key, DIM_MAX[dim_name])
            child_sig = canonicalize_node(child)

            child_groups.setdefault(child_sig, []).append(bucket_interval)
            child_examples[child_sig] = child

        merged_entries = []
        for sig, bucket_intervals in child_groups.items():
            merged_bucket_list = merge_bucket_intervals(bucket_intervals)
            child = child_examples[sig]
            for merged_bucket in merged_bucket_list:
                merged_entries.append((merged_bucket, child))

        merged_entries.sort(key=lambda x: (x[0][0], x[0][1]))
        return merged_entries

    def dim_bucket_interval_to_input_intervals(dim_name, bucket_interval):
        lo_bucket, hi_bucket = bucket_interval
        low, high = bucket_span_to_value_range(dim_name, lo_bucket, hi_bucket)

        if dim_name == "pv":
            compile_stats["pv_inverse_stats"]["pv_branch_count"] += 1

            w_intervals = _pv_to_w([low, high], w_sign=0)
            compile_stats["pv_inverse_stats"]["pv_inverse_interval_count_before_merge"] += len(w_intervals)

            normalized = []
            for a, b in w_intervals:
                lo = min(a, b)
                hi = max(a, b)
                normalized.append((lo, hi))

            normalized = merge_numeric_intervals(normalized)
            compile_stats["pv_inverse_stats"]["pv_inverse_interval_count_after_merge"] += len(normalized)

            return normalized

        return [(low, high)]

    def format_path(path_entries):
        out = []
        for dim, bucket_interval in path_entries:
            out.append({
                "dim": dim,
                "bucket_interval": bucket_interval
            })
        return out

    def expr_node_count(expr):
        if isinstance(expr, (int, float, str)):
            return 1
        if isinstance(expr, list):
            return 1 + sum(expr_node_count(x) for x in expr)
        if isinstance(expr, dict):
            return 1 + sum(expr_node_count(v) for v in expr.values())
        return 1

    def reorder_branches_semantics_preserving(branches):
        """
        Reorder non-overlapping branches without changing semantics.

        branches: [(low, high, child_expr), ...]

        Strategy:
          1. non-constant child first
          2. larger / more complex child first
          3. wider interval first
          4. stable by low/high
        """
        def branch_priority(branch):
            low, high, child_expr = branch

            is_constant = (
                isinstance(child_expr, dict)
                and child_expr.get("type") == "minecraft:constant"
            )

            complexity = expr_node_count(child_expr)
            width = high - low

            return (
                1 if not is_constant else 0,   # non-constant first
                complexity,                    # more complex first
                width,                         # wider interval first
                -low,                          # deterministic fallback
                -high
            )

        return sorted(branches, key=branch_priority, reverse=True)

    # Density builders
    def df_const(v):
        return {
            "type": "minecraft:constant",
            "argument": float(v)
        }

    def df_range_choice(input_expr, low, high, when_in, when_out):
        return {
            "type": "minecraft:range_choice",
            "input": input_expr,
            "min_inclusive": float(low),
            "max_exclusive": float(high),
            "when_in_range": when_in,
            "when_out_of_range": when_out
        }

    def df_max(a, b):
        return {
            "type": "minecraft:max",
            "argument1": a,
            "argument2": b
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

    def nested_max(exprs):
        if not exprs:
            return df_const(0.0)
        result = exprs[0]
        for e in exprs[1:]:
            result = df_max(result, e)
        return result


    # Utility: collect all leaf biomes
    def collect_leaf_biomes(node, out=None):
        if out is None:
            out = set()

        leaf_biome = normalize_leaf_biome(node)
        if leaf_biome is not None:
            out.add(leaf_biome)
            return out

        if isinstance(node, dict):
            if "__union__" in node:
                for child in node["__union__"]:
                    collect_leaf_biomes(child, out)
            else:
                for child in node.values():
                    collect_leaf_biomes(child, out)
        return out


    # If include_pv=False, compress out pv layer by unioning children
    def merge_pv_children(node, dim_idx=0):
        leaf_biome = normalize_leaf_biome(node)
        if leaf_biome is not None:
            return node

        if not isinstance(node, dict):
            return node

        if dim_idx >= len(DIM_ORDER):
            return node

        dim_name = DIM_ORDER[dim_idx]

        if dim_name == "pv":
            merged_children = []
            for _, child in node.items():
                merged_children.append(merge_pv_children(child, dim_idx + 1))
            return {"__union__": merged_children}

        out = {}
        for key, child in node.items():
            out[key] = merge_pv_children(child, dim_idx + 1)
        return out

    def compile_union_nodes(nodes, dim_idx):
        compiled = [compile_node(n, dim_idx) for n in nodes]
        return nested_max(compiled)

    # Forward compiler: leaves return biome code
    compile_cache = {}
    def compile_node(node, dim_idx=0, path_entries=None):
        if path_entries is None:
            path_entries = []
        cache_key = (dim_idx, canonicalize_node(node))
        if cache_key in compile_cache:
            return compile_cache[cache_key]

        leaf_biome = normalize_leaf_biome(node)
        if leaf_biome is not None:
            result = df_const(biome_code_map.get(leaf_biome, 0))
            compile_cache[cache_key] = result
            return result

        if isinstance(node, dict) and "__union__" in node:
            result = compile_union_nodes(node["__union__"], dim_idx)
            compile_cache[cache_key] = result
            return result

        if not isinstance(node, dict):
            result = df_const(0)
            compile_cache[cache_key] = result
            return result

        if dim_idx >= len(active_dim_order):
            leaf_biome = normalize_leaf_biome(node)
            result = df_const(biome_code_map.get(leaf_biome, 0) if leaf_biome is not None else 0)
            compile_cache[cache_key] = result
            return result

        dim_name = active_dim_order[dim_idx]
        input_expr = DIMENSION_FN_REFS[dim_name]

        # raw sibling count at this dimension before any grouping
        compile_stats["raw_branch_count_by_dim"][dim_name] += len(node)

        grouped_entries = group_same_child_keys(node, dim_name)

        # grouped sibling count after same-child bucket merge
        compile_stats["grouped_branch_count_by_dim"][dim_name] += len(grouped_entries)

        branches = []
        for bucket_interval, child in grouped_entries:
            child_path = path_entries + [(dim_name, bucket_interval)]
            child_expr = compile_node(child, dim_idx + 1, child_path)

            input_intervals = dim_bucket_interval_to_input_intervals(dim_name, bucket_interval)
            for low, high in input_intervals:
                branches.append((low, high, child_expr))

        # 同一个 child_expr 的数值区间再合并一次
        merged_by_child = {}
        child_examples = {}

        for low, high, child_expr in branches:
            child_sig = canonicalize_node(child_expr)
            merged_by_child.setdefault(child_sig, []).append((low, high))
            child_examples[child_sig] = child_expr

        compact_branches = []
        for child_sig, intervals in merged_by_child.items():
            merged_intervals = merge_numeric_intervals(intervals)
            child_expr = child_examples[child_sig]
            for low, high in merged_intervals:
                compact_branches.append((low, high, child_expr))

        compact_branches.sort(key=lambda x: (x[0], x[1]))


        # Step 3: post-compile adjacent same-result interval merge
        compact_branches = merge_compiled_branches(compact_branches)

        compact_branches = reorder_branches_semantics_preserving(compact_branches)

        compile_stats["compact_branch_count_by_dim"][dim_name] += len(compact_branches)

        if dim_name == "temperature":
            branch_summaries = []
            for low, high, child_expr in compact_branches:
                if isinstance(child_expr, dict) and child_expr.get("type") == "minecraft:constant":
                    child_summary = {
                        "type": "minecraft:constant",
                        "value": child_expr.get("argument")
                    }
                else:
                    child_summary = {
                        "type": child_expr.get("type") if isinstance(child_expr, dict) else type(child_expr).__name__
                    }

                branch_summaries.append({
                    "interval": [low, high],
                    "child_summary": child_summary
                })

            temperature_debug_records.append({
                "path": format_path(path_entries),
                "raw_branch_count": len(node),
                "grouped_branch_count": len(grouped_entries),
                "compact_branch_count": len(compact_branches),
                "branches": branch_summaries
            })

        # Step 1: fold identical child subtrees
        # If every branch leads to the same expr, this dimension is irrelevant.
        if compact_branches:
            child_exprs = [child_expr for _, _, child_expr in compact_branches]
            if all_exprs_equal(child_exprs):
                result = child_exprs[0]
                compile_cache[cache_key] = result
                return result


        # Step 2: fold single full-domain branch
        # If only one branch covers the whole dimension domain, just return child.
        if len(compact_branches) == 1:
            low, high, child_expr = compact_branches[0]
            if is_full_domain_interval(dim_name, low, high):
                result = child_expr
                compile_cache[cache_key] = result
                return result

        # After folding/merging is complete, attach cache_2d to surviving depth children
        if dim_name == "depth":
            compact_branches = [
                (low, high, df_cache_2d(child_expr))
                for (low, high, child_expr) in compact_branches
            ]

        expr = df_const(0)
        for low, high, child_expr in reversed(compact_branches):
            compile_stats["range_choice_by_dim"][dim_name] += 1
            expr = df_range_choice(
                input_expr=input_expr,
                low=low,
                high=high,
                when_in=child_expr,
                when_out=expr
            )
        compile_cache[cache_key] = expr
        return expr

    # Build selector
    tree_to_compile = underground_tree
    if not include_pv:
        tree_to_compile = merge_pv_children(underground_tree, 0)

    # Step 2 optimization: simplify raw tree before compile

    all_leaf_biomes = sorted(collect_leaf_biomes(tree_to_compile))
    missing_codes = [b for b in all_leaf_biomes if b not in biome_code_map]

    selector_json = compile_node(tree_to_compile, 0, [])
    selector_json = df_cache_once(selector_json)

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(selector_json, f, ensure_ascii=False, indent=2)

    temperature_debug_records_sorted = sorted(
        temperature_debug_records,
        key=lambda x: (-x["compact_branch_count"], -x["raw_branch_count"])
    )

    debug_info = {
        "include_pv": include_pv,
        "active_dim_order": active_dim_order,
        "output_path": output_path,
        "mode": "forward_selector_biome_code",
        "biome_code_map": biome_code_map,
        "leaf_biome_count": len(all_leaf_biomes),
        "missing_codes": missing_codes,
        "compile_cache_size": len(compile_cache),
        "compile_stats": compile_stats,
        # "temperature_debug_top": temperature_debug_records_sorted[:10]
    }

    if print_debug:
        print("\n=== SELECTOR DEBUG INFO ===")
        print(json.dumps(debug_info, ensure_ascii=False, indent=2))

    return selector_json, debug_info



# 5) Helper: derive a single-biome 0/1 mask from selector code
def generate_biome_mask_from_selector_code(
    selector_ref,
    biome_code,
    output_path="biome_mask_from_selector.json"
):
    """
    Build a 0/1 mask from a unified selector code density function.

    selector_ref: density function ID string, e.g.
        "the_winter_rescue:underground_biome_selector"

    biome_code: numeric code assigned to the biome
    """

    mask_json = {
        "type": "minecraft:range_choice",
        "input": selector_ref,
        "min_inclusive": float(biome_code),
        "max_exclusive": float(biome_code + 1),
        "when_in_range": 1.0,
        "when_out_of_range": 0.0
    }

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(mask_json, f, ensure_ascii=False, indent=2)

    return mask_json



# 6) Evaluator
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
        return evaluate_density_function(expr["argument"], inputs)

    elif t == "minecraft:cache_2d":
        return evaluate_density_function(expr["argument"], inputs)

    elif t == "minecraft:range_choice":
        v = evaluate_density_function(expr["input"], inputs)
        if float(expr["min_inclusive"]) <= v < float(expr["max_exclusive"]):
            return evaluate_density_function(expr["when_in_range"], inputs)
        else:
            return evaluate_density_function(expr["when_out_of_range"], inputs)

    else:
        raise ValueError(f"Unsupported expression type: {t}")


def test_selector_value(selector_json, depth, erosion, continentalness, temperature, humidity, pv=0.0):
    inputs = {
        "depth": depth,
        "erosion": erosion,
        "continentalness": continentalness,
        "temperature": temperature,
        "humidity": humidity,
        "pv": pv,
    }
    value = evaluate_density_function(selector_json, inputs)
    print("inputs =", inputs)
    print("selector code =", value)
    return value


# 7) Stats
def canonicalize_expr(expr):
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


def analyze_density_tree(expr):
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
            for v in node.values():
                walk(v, depth + 1)
            return

        stats["other_nodes"] += 1

    walk(expr)

    return {
        **stats,
        "type_counts": dict(type_counter),
        "unique_structural_nodes": len(unique_nodes),
    }


def print_density_tree_stats(expr, title="Density Function Stats"):
    stats = analyze_density_tree(expr)
    print(f"\n=== {title} ===")
    print(json.dumps(stats, ensure_ascii=False, indent=2))
    return stats

def print_selector_compile_stats(debug_info):
    stats = debug_info.get("compile_stats")
    if not stats:
        print("\n=== SELECTOR COMPILE STATS ===")
        print("No compile stats found.")
        return

    print("\n=== SELECTOR COMPILE STATS ===")
    print(json.dumps(stats, ensure_ascii=False, indent=2))

def print_temperature_debug(debug_info):
    records = debug_info.get("temperature_debug_top")
    print("\n=== TEMPERATURE DEBUG TOP ===")
    if not records:
        print("No temperature debug records.")
        return
    print(json.dumps(records, ensure_ascii=False, indent=2))



# ============================================================

# 8) usage
if __name__ == "__main__":
    biome_code_map = {
        "the_winter_rescue:glacial_fungus_caves": 1,
        "the_winter_rescue:ice_caves": 2,
        "the_winter_rescue:dripstone_caves": 3,
        "the_winter_rescue:andesite_caves": 4,
        "the_winter_rescue:mycelium_caves": 5,
        "the_winter_rescue:brine_deposits": 6,
        "the_winter_rescue:lush_caves": 7,
        "the_winter_rescue:darkfang_caves": 8,
        "the_winter_rescue:magmatic_deposits": 9,
        "the_winter_rescue:hydrothermal_deposits": 10,
        "the_winter_rescue:crust_chasms": 11,
        "the_winter_rescue:diorite_caves": 12,
    }

    selector_json, debug_info = generate_forward_selector_code_json(
        biome_code_map=biome_code_map,
        output_path="underground_biome_selector.json",
        include_pv=True,
        print_debug=True
    )

    test_selector_value(
        selector_json,
        depth=0.3,
        erosion=-0.5,
        continentalness=0.2,
        temperature=-0.3,
        humidity=-0.2,
        pv=0.5
    )

    print_density_tree_stats(
        selector_json,
        title="Unified biome code selector"
    )

    generate_biome_mask_from_selector_code(
        selector_ref="the_winter_rescue:underground_biome_selector",
        biome_code=1,
        output_path="glacial_mask.json"
    )

    print_selector_compile_stats(debug_info)
    # print_temperature_debug(debug_info)
