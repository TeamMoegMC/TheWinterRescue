import json
from collections import Counter, defaultdict
from copy import deepcopy
from functools import lru_cache

# 1) Constants
# --------------------------------------------------------------------
# 1.  Pre-defined vanilla-style label → numeric range tables
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
    "weirdness": [
        (-1.0, 0.0),
        (0.0, 1.0)
    ],
}

D_MAX = 4
P_MAX = 4
E_MAX = 6
C_MAX = 8
T_MAX = 7
H_MAX = 6
W_MAX = 1

PARAM_ORDER = ["depth", "PV", "erosion", "continentalness", "temperature", "humidity", "weirdness"]


# ============================================================
# 2) biome defs
# Re-defining all biome variables in the form of {"biome": biome_name}
badlands = {"biome": "minecraft:badlands"}
deep_frozen_ocean = {"biome": "minecraft:deep_frozen_ocean"}
dripstone_caves = {"biome": "minecraft:dripstone_caves"}
desert = {"biome": "minecraft:desert"}
eroded_badlands = {"biome": "minecraft:eroded_badlands"}
frozen_ocean = {"biome": "minecraft:frozen_ocean"}
frozen_peaks = {"biome": "minecraft:frozen_peaks"}
frozen_river = {"biome": "minecraft:frozen_river"}
grove = {"biome": "minecraft:grove"}
ice_spikes = {"biome": "minecraft:ice_spikes"}
jagged_peaks = {"biome": "minecraft:jagged_peaks"}
lush_caves = {"biome": "minecraft:lush_caves"}
snowy_beach = {"biome": "minecraft:snowy_beach"}
snowy_plains = {"biome": "minecraft:snowy_plains"}
snowy_slopes = {"biome": "minecraft:snowy_slopes"}
snowy_taiga = {"biome": "minecraft:snowy_taiga"}
stony_shore = {"biome": "minecraft:stony_shore"}

destroyed_birch_forest = {"biome": "the_winter_rescue:nature/destroyed_birch_forest"}
destroyed_marsh = {"biome": "the_winter_rescue:nature/destroyed_marsh"}
frozen_forest = {"biome": "the_winter_rescue:frozen_forest"}
jack_pine_woodland = {"biome": "the_winter_rescue:jack_pine_woodland"}
frostbough_forest = {"biome": "the_winter_rescue:nature/frostbough_forest"}
frostpine_grove = {"biome": "the_winter_rescue:nature/frostpine_grove"}
glacier = {"biome": "the_winter_rescue:nature/glacier"}
ironwinter_hollow = {"biome": "the_winter_rescue:nature/ironwinter_hollow"}
scree_pine_grove = {"biome": "the_winter_rescue:nature/scree_pine_grove"}
slabback_massif = {"biome": "the_winter_rescue:nature/slabback_masif"}
snowy_shrubland = {"biome": "the_winter_rescue:nature/snowy_shrubland"}

active_volcano = {"biome": "the_winter_rescue:active_volcano"}
andesite_caves = {"biome": "the_winter_rescue:andesite_caves"}
brine_deposits = {"biome": "the_winter_rescue:brine_deposits"}
crust_chasms = {"biome": "the_winter_rescue:crust_chasms"}
darkfang_caves = {"biome": "the_winter_rescue:darkfang_caves"}
destroyed_forest = {"biome": "the_winter_rescue:destroyed_forest"}
diorite_caves = {"biome": "the_winter_rescue:diorite_caves"}
fossil_deposits = {"biome": "the_winter_rescue:fossil_deposits"}
hydrothermal_deposits = {"biome": "the_winter_rescue:hydrothermal_deposits"}
ice_caves = {"biome": "the_winter_rescue:ice_caves"}
magmatic_deposits = {"biome": "the_winter_rescue:magmatic_deposits"}
mycelium_caves = {"biome": "the_winter_rescue:mycelium_caves"}
glacial_fungus_caves = {"biome": "the_winter_rescue:glacial_fungus_caves"}
underwater_volcano = {"biome": "the_winter_rescue:underwater_volcano"}
volcanic_hills = {"biome": "the_winter_rescue:volcanic_hills"}

ice_cap = {"biome": "the_winter_rescue:ice_cap"}
alpine_glacier = {"biome": "the_winter_rescue:alpine_glacier"}
tidewater_glacier = {"biome": "the_winter_rescue:tidewater_glacier"}
valley_glacier = {"biome": "the_winter_rescue:valley_glacier"}
glacial_lakes = {"biome": "the_winter_rescue:glacial_lakes"}
glacial_ices = {"biome": "the_winter_rescue:glacial_ices"}
tundra = {"biome": "the_winter_rescue:tundra"}


# ============================================================
# 3) Trees
# -----------------------------------------------------------
#  Example tree spec
# -----------------------------------------------------------
# order: depth, PV, erosion, continentalness, temperature, humidity, weirdness

# depth: 0-4
# PV: 0-4
# erosion: 0-6
# continentalness: 0-8
# temperature: 0-7
# humidity: 0-6
# weirdness: 0-1


# ocean_tree = {
#
# }

middle_biomes_t0 = {
    0: {
        0: ice_cap,
        1: badlands
    },
    1: ice_cap,
    2: ice_spikes,
    3: glacial_ices,
    (4, H_MAX): snowy_plains
}

middle_biomes_t1 = {
    0: {
        0: ice_cap,
        1: badlands
    },
    1: ice_spikes,
    2: glacial_ices,
    3: snowy_plains,
    4: tundra,
    (5, H_MAX): jack_pine_woodland
}

middle_biomes_t2 = {
    0: {
        0: ice_spikes,
        1: desert
    },
    1: glacial_ices,
    2: snowy_plains,
    3: frozen_forest,
    4: destroyed_forest,
    (5, H_MAX): snowy_taiga
}

middle_biomes_t3 = {
    0: desert,
    1: snowy_plains,
    2: tundra,
    3: frozen_forest,
    4: snowy_taiga,
    (5, H_MAX): fossil_deposits
}

middle_biomes_t4 = {
    0: snowy_plains,
    1: tundra,
    2: snowy_shrubland,
    3: snowy_taiga,
    4: frostbough_forest,
    (5, H_MAX): fossil_deposits
}

middle_biomes_t5 = {
    0: tundra,
    1: snowy_shrubland,
    2: snowy_taiga,
    3: frostbough_forest,
    4: ironwinter_hollow,
    (5, H_MAX): fossil_deposits
}

middle_biomes = {
    0: middle_biomes_t0,
    1: middle_biomes_t1,
    2: middle_biomes_t2,
    3: middle_biomes_t3,
    4: middle_biomes_t4,
    (5, T_MAX): middle_biomes_t5
}

lowland_biomes = {
    0: {
        (0, 1): fossil_deposits,
        (2, H_MAX): glacial_ices
    },
    1: {
        (0, 1): fossil_deposits,
        (2, 4): destroyed_marsh,
        (5, H_MAX): glacial_lakes
    },
    2: {
        (0, 1): fossil_deposits,
        (2, 4): destroyed_marsh,
        (5, H_MAX): tundra
    },
    3: {
        0: fossil_deposits,
        (1, 3): tundra,
        (4, H_MAX): snowy_shrubland
    },
    (4, T_MAX): {
        0: fossil_deposits,
        (1, 3): snowy_shrubland,
        (4, H_MAX): snowy_taiga
    }
}


plataeu_biomes_t0 = {
    (0, 2): {
        0: snowy_plains,
        1: ice_cap
    },
    1: snowy_plains,
    2: {
        0: destroyed_forest,
        1: snowy_plains
    },
    3: {
        0: tundra,
        1: snowy_plains
    },
    (4, H_MAX): {
        0: tundra,
        1: snowy_plains
    }
}

plataeu_bioems_t1 = {
    0: {
        0: snowy_plains,
        1: ice_spikes
    },
    1: snowy_plains,
    2: {
        0: destroyed_forest,
        1: snowy_plains
    },
    3: {
        0: tundra,
        1: snowy_plains
    },
    (4, H_MAX): {
        0: snowy_shrubland,
        1: snowy_plains
    }
}

plataeu_biomes_t2 = {
    (0, 1): {
        0: tundra,
        1: scree_pine_grove
    },
    2: {
        0: tundra,
        1: destroyed_forest
    },
    3: {
        0: tundra,
        1: destroyed_birch_forest
    },
    (4, H_MAX): {
        0: snowy_shrubland,
        1: snowy_taiga
    }
}

plataeu_biomes_t3 = {
    (0, 1): {
        0: snowy_shrubland,
        1: scree_pine_grove
    },
    (2, 3): destroyed_forest,
    (4, 5): frostbough_forest,
    (5, H_MAX): fossil_deposits
}

plataeu_biomes_t4andabove = {
    (0, 1): {
        0: snowy_shrubland,
        1: scree_pine_grove
    },
    2: snowy_taiga,
    (3, 4): ironwinter_hollow,
    (5, H_MAX): fossil_deposits
}

# T-H plane
plataeu_biomes = {
    0: plataeu_biomes_t0,
    1: plataeu_bioems_t1,
    2: plataeu_biomes_t2,
    3: plataeu_biomes_t3,
    (4, T_MAX): plataeu_biomes_t4andabove
}

slope_biomes = {
    (0, 2): snowy_slopes,
    (3, T_MAX): {
        (0, 3): grove,
        (4, H_MAX): frostpine_grove
    }
}

glacial_biomes = {
    (0, 2): tidewater_glacier,
    (3, T_MAX): {
        (0, 2): stony_shore,
        (3, H_MAX): snowy_beach
    }
}

#   Dep PV  Ero Con Tmp Hum Wrd
surface_tree = {
    0: {
        # valleys
        0: {
            # low erosion
            (0, 1): {
                (3, 5): frozen_river,
                (6, C_MAX): middle_biomes
            },
            # mid erosion
            (2, 5): {
                (3, 4): frozen_river,
                (5, C_MAX): middle_biomes,
            },
            # high erosion
            (6, 6): {
                (3, 4): frozen_river,
                (5, C_MAX): lowland_biomes
            }
        },

        # low
        1: {
            (0, 1): {
                3: tidewater_glacier,
                4: valley_glacier,
                (5, C_MAX): slope_biomes
            },
            2: {
                3: tidewater_glacier,
                4: valley_glacier,
                (5, C_MAX): middle_biomes
            },
            3: {
                3: tidewater_glacier,
                4: valley_glacier,
                (5, C_MAX): middle_biomes
            },
            4: {
                3: tidewater_glacier,
                4: valley_glacier,
                (5, C_MAX): middle_biomes,
            },
            5: {
                3: tidewater_glacier,
                4: valley_glacier,
                (5, C_MAX): middle_biomes
            },
            6: {
                3: tidewater_glacier,
                4: valley_glacier,
                (5, C_MAX): lowland_biomes
            }
        },

        # mid
        2: {
            0: {
                3: glacial_biomes,
                (4, 5): slope_biomes,
                (6, C_MAX): plataeu_biomes
            },
            1: {
                3: glacial_biomes,
                4: middle_biomes,
                5: slope_biomes,
                (6, C_MAX): plataeu_biomes
            },
            2: {
                3: glacial_biomes,
                (4, 5): middle_biomes,
                (6, C_MAX): plataeu_biomes
            },
            3: {
                (3, C_MAX): middle_biomes
            },
            4: {
                (3, C_MAX): middle_biomes,
            },
            5: {
                (3, C_MAX): middle_biomes
            },
            6: {
                (3, C_MAX): lowland_biomes
            }
        },

        # high
        3: {
            0: {
                3: middle_biomes,
                4: slope_biomes,
                (5, C_MAX): {
                    (0, 3): {
                        (0, 3): jagged_peaks,
                        (4, H_MAX): frozen_peaks
                    },
                    (4, T_MAX): active_volcano
                }
            },
            1: {
                (3, 4): middle_biomes,
                (5, C_MAX): plataeu_biomes
            },
            2: {
                (3, 4): middle_biomes,
                (5, C_MAX): plataeu_biomes
            },
            3: {
                (3, 5): middle_biomes,
                (6, C_MAX): plataeu_biomes
            },
            4: {
                (3, 6): middle_biomes,
                (7, C_MAX): plataeu_biomes
            },
            5: {
                (3, 7): middle_biomes,
                (8, C_MAX): plataeu_biomes
            },
            6: {
                (3, C_MAX): middle_biomes
            }
        },

        # peaks
        4: {
            # low erosion, highest peaks
            0: {
                # coasts: glaciers, peaks
                (3, 4): {
                    (0, 3): {
                        (0, 3): jagged_peaks,
                        (4, H_MAX): frozen_peaks
                    },
                    (4, T_MAX): active_volcano
                },
                # inland: ice caps, peaks
                (5, C_MAX): {
                    # low temp: frozen peaks
                    (0, 3): {
                        (0, 3): jagged_peaks,
                        (4, H_MAX): frozen_peaks
                    },
                    # high temp: volcanic peaks
                    (4, T_MAX): active_volcano
                }
            },
            # mild erosion, peaks and slopes
            1: {
                (3, 4): {
                    (0, T_MAX): {
                        (0, 1): snowy_slopes,
                        (2, H_MAX): grove
                    }
                },
                (5, C_MAX): {
                    (0, 3): {
                        (0, 3): jagged_peaks,
                        (4, H_MAX): frozen_peaks
                    },
                    (4, T_MAX): active_volcano
                }
            },
            # gradual replacement of middle biomes into plataeu biomes
            2: {
                (3, 4): middle_biomes,
                (5, C_MAX): plataeu_biomes
            },
            3: {
                (3, 5): middle_biomes,
                (6, C_MAX): plataeu_biomes
            },
            4: {
                (3, 6): middle_biomes,
                (7, C_MAX): plataeu_biomes
            },
            5: {
                (3, 7): middle_biomes,
                (8, C_MAX): plataeu_biomes
            },
            6: {
                (3, C_MAX): middle_biomes
            }
        }
    }
}

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
                    (6, 7): {'biome': 'the_winter_rescue:magmatic_deposits'}
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


# ============================================================
# 4) Tree parsing
def tree_to_spec(tree):
    spec = []

    def dfs(node, depth_idx, acc_params):
        if isinstance(node, dict) and "biome" in node:
            biome_id = node["biome"]
            biome_dict = {
                "biome": biome_id,
                "params": {}
            }

            for k, v in acc_params.items():
                if v is not None:
                    biome_dict["params"][k] = v
            spec.append(biome_dict)
            return

        if depth_idx >= len(PARAM_ORDER):
            raise ValueError("Tree deeper than expected param order")

        param_key = PARAM_ORDER[depth_idx]

        for key, child in node.items():
            if key == "*":
                next_params = deepcopy(acc_params)
                dfs(child, depth_idx + 1, next_params)
                continue

            if isinstance(key, tuple) and len(key) == 2:
                labels = list(range(min(key), max(key) + 1))
            elif isinstance(key, int):
                labels = [key]
            elif isinstance(key, (list, set)):
                labels = list(key)
            else:
                raise TypeError(f"Unsupported key type: {key}")

            next_params = deepcopy(acc_params)
            next_params[param_key] = labels
            dfs(child, depth_idx + 1, next_params)

    dfs(tree, 0, {})
    return spec


# ============================================================
# 5) Interval conversion helpers
def _expand(param, value):
    n = len(LABEL_RANGES[param])
    if value is None:
        return range(n)
    if isinstance(value, int):
        return [value]
    if isinstance(value, tuple) and len(value) == 2:
        lo, hi = sorted(value)
        return range(lo, hi + 1)
    if isinstance(value, (list, set, tuple)):
        return list(value)
    raise TypeError(f"Bad spec {value!r} for {param}")


def _pv_to_w(interval, w_sign=0):
    all_pv_intervals = []

    p_low = interval[0]
    p_high = interval[1]

    if p_low < -1 or p_high > 1 or p_low > p_high:
        raise ValueError("Interval must be in the range [-1, 1] and low must be less than high")

    u_low = 1 - p_high
    u_high = 1 - p_low

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

    if u_high >= 1 and u_high <= 2 and u_low >= 0 and u_low <= 1:
        u_mid = 1

        w_a_low_I = (u_mid - 2) / 3
        w_a_high_I = (u_high - 2) / 3
        w_c_low_I = (u_high - 2) / (-3)
        w_c_high_I = (u_mid - 2) / (-3)

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


def simplify_intervals(intervals, eps=1e-5, precision=4):
    if not intervals:
        return []

    arr = []
    for a, b in intervals:
        if a > b:
            a, b = b, a
        arr.append([a, b])

    arr.sort(key=lambda x: x[0])
    merged = [arr[0][:]]

    for lo, hi in arr[1:]:
        cur = merged[-1]
        if lo <= cur[1] + eps:
            cur[1] = max(cur[1], hi)
        else:
            merged.append([lo, hi])

    rounded = []
    for lo, hi in merged:
        lo = round(lo, precision)
        hi = round(hi, precision)
        if lo > hi:
            lo, hi = hi, lo
        rounded.append([lo, hi])

    rounded.sort(key=lambda x: x[0])
    merged2 = [rounded[0][:]]
    eps2 = 10 ** (-precision)

    for lo, hi in rounded[1:]:
        cur = merged2[-1]
        if lo <= cur[1] + eps2:
            cur[1] = max(cur[1], hi)
        else:
            merged2.append([lo, hi])

    return merged2


def _interval(param, labels):
    lows  = [LABEL_RANGES[param][i][0] for i in labels]
    highs = [LABEL_RANGES[param][i][1] for i in labels]
    return [min(lows), max(highs)]


def convert(spec, eps=1e-5, precision=4):
    rows = []
    for biome_dict in spec:
        biome = biome_dict["biome"]
        params = biome_dict["params"]

        weirdness_labels = _expand("weirdness", params.get("weirdness"))
        if len(weirdness_labels) == 2:
            sign_of_weirdness = 0
        elif len(weirdness_labels) == 1:
            if weirdness_labels[0] == 0:
                sign_of_weirdness = -1
            elif weirdness_labels[0] == 1:
                sign_of_weirdness = 1
            else:
                raise ValueError("Weirdness label must be 0 or 1")
        else:
            raise ValueError("Weirdness must be one label or both labels [0,1]")

        pv_interval = _interval("PV", _expand("PV", params.get("PV")))
        w_intervals = simplify_intervals(
            _pv_to_w(pv_interval, w_sign=sign_of_weirdness),
            eps=eps,
            precision=precision
        )

        for w_interval in w_intervals:
            pjson = {}
            pjson["weirdness"] = w_interval

            for p in LABEL_RANGES.keys():
                if p == "PV" or p == "weirdness":
                    continue
                pjson[p] = _interval(p, _expand(p, params.get(p)))

            pjson["offset"] = params.get("offset", 0)
            rows.append({"biome": biome, "parameters": pjson})

    return rows


# ============================================================
# 6) Row compression
def compress_biome_rows(rows, eps=1e-5, precision=4, verbose=False):
    """
    Compress biome rows by:
    1) merging rows with same biome + same params except weirdness
    2) merging rows that differ on exactly one interval axis if that axis is mergeable
    Repeat until stable.
    """
    if not rows:
        return []

    interval_keys = ["depth", "continentalness", "erosion", "temperature", "humidity", "weirdness"]

    def canon(row):
        row = deepcopy(row)
        params = row["parameters"]
        for k in interval_keys:
            lo, hi = params[k]
            if lo > hi:
                lo, hi = hi, lo
            params[k] = [round(lo, precision), round(hi, precision)]
        params["offset"] = params.get("offset", 0)
        return row

    def key_except_weirdness(row):
        params = row["parameters"]
        items = []
        for k, v in params.items():
            if k == "weirdness":
                continue
            if isinstance(v, list):
                items.append((k, tuple(v)))
            else:
                items.append((k, v))
        return (row["biome"], tuple(sorted(items)))

    def try_merge_rows(r1, r2):
        if r1["biome"] != r2["biome"]:
            return None

        p1 = r1["parameters"]
        p2 = r2["parameters"]

        if p1.get("offset", 0) != p2.get("offset", 0):
            return None

        diff_keys = [k for k in interval_keys if p1[k] != p2[k]]
        if len(diff_keys) != 1:
            return None

        k = diff_keys[0]
        merged = simplify_intervals([p1[k], p2[k]], eps=eps, precision=precision)
        if len(merged) != 1:
            return None

        out = deepcopy(r1)
        out["parameters"][k] = merged[0]
        return out

    working = [canon(r) for r in rows]
    changed = True
    round_idx = 0

    while changed:
        changed = False
        round_idx += 1

        if verbose:
            print(f"[compress] round {round_idx} start: {len(working)}")

        grouped = defaultdict(list)
        template = {}

        for row in working:
            k = key_except_weirdness(row)
            grouped[k].append(row["parameters"]["weirdness"])
            template[k] = row

        merged_rows = []
        before = len(working)

        for k, weirdness_list in grouped.items():
            merged_w = simplify_intervals(weirdness_list, eps=eps, precision=precision)
            base = deepcopy(template[k])
            del base["parameters"]["weirdness"]

            for w in merged_w:
                new_row = deepcopy(base)
                new_row["parameters"]["weirdness"] = w
                merged_rows.append(canon(new_row))

        working = merged_rows
        if len(working) < before:
            changed = True
            if verbose:
                print(f"[compress] weirdness merge: {before} -> {len(working)}")

        used = [False] * len(working)
        new_rows = []
        before = len(working)

        for i in range(len(working)):
            if used[i]:
                continue

            merged_any = False
            for j in range(i + 1, len(working)):
                if used[j]:
                    continue

                merged = try_merge_rows(working[i], working[j])
                if merged is not None:
                    used[i] = True
                    used[j] = True
                    new_rows.append(canon(merged))
                    merged_any = True
                    changed = True
                    break

            if not merged_any and not used[i]:
                used[i] = True
                new_rows.append(working[i])

        working = new_rows

        if verbose and len(working) < before:
            print(f"[compress] single-axis merge: {before} -> {len(working)}")

        if verbose:
            print(f"[compress] round {round_idx} end: {len(working)}")

    return working


# ============================================================
# 7) Unified rows -> selector generator
# Runtime-first atomic-cell compiler
# ============================================================
def generate_unified_selector_code_json_from_rows_runtime_optimized(
    biome_rows,
    biome_code_map,
    output_path="unified_biome_selector.json",
    print_debug=True,
    top_level_cache=True
):
    """
    Compile final biome rows into a runtime-optimized hard-edged range_choice selector.

    Input rows are expected to already represent final continuous selector semantics,
    i.e. after PV -> weirdness interval conversion.

    Strategy:
    1) Collect all numeric breakpoints from rows on each runtime dimension
    2) Build atomic half-open cells from adjacent breakpoints
    3) For each atomic cell, resolve the unique biome code
    4) Build an optimized decision tree over atomic cells
    5) Compile that tree into Minecraft JSON
    6) Top-level cache_once + inner Y-independent subtree flat_cache

    Notes:
    - cache_min_score / cache_min_complexity / cache_min_freq are retained in the
      function signature for compatibility with older call sites, but are not used
      in this simplified caching strategy.
    """

    # ============================================================
    # A) Runtime dimensions / refs
    DIM_ORDER = ["depth", "weirdness", "erosion", "continentalness", "temperature", "humidity"]

    DIMENSION_FN_REFS = {
        "temperature": "minecraft:overworld/temperature",
        "humidity": "minecraft:overworld/vegetation",
        "continentalness": "minecraft:overworld/effective_continentalness",
        "erosion": "minecraft:overworld/erosion",
        "depth": "minecraft:overworld/depth",
        "weirdness": "minecraft:overworld/ridges"
    }

    DIM_INDEX = {dim: i for i, dim in enumerate(DIM_ORDER)}

    # ============================================================
    # B) Debug / stats
    compile_stats = {
        "input_row_count": len(biome_rows),
        "atomic_breakpoint_count_by_dim": {dim: 0 for dim in DIM_ORDER},
        "atomic_segment_count_by_dim": {dim: 0 for dim in DIM_ORDER},
        "atomic_cell_count_total": 0,
        "nonzero_atomic_cell_count": 0,
        "decision_tree_unique_subtrees": 0,
        "decision_tree_max_depth": 0,
        "decision_tree_leaf_count": 0,
        "decision_tree_split_count": 0,
        "decision_tree_split_count_by_dim": {dim: 0 for dim in DIM_ORDER},
        "json_range_choice_count": 0,
        "json_cache_once_count": 0,
        "json_flat_cache_count": 0,
        "json_constant_count": 0,
    }

    # ============================================================
    # C) Generic expression / JSON helpers
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

    def expr_signature(expr):
        return canonicalize_expr(expr)

    def df_const(v):
        compile_stats["json_constant_count"] += 1
        return {
            "type": "minecraft:constant",
            "argument": float(v)
        }

    def df_range_choice(input_expr, low, high, when_in, when_out):
        compile_stats["json_range_choice_count"] += 1
        return {
            "type": "minecraft:range_choice",
            "input": input_expr,
            "min_inclusive": float(low),
            "max_exclusive": float(high),
            "when_in_range": when_in,
            "when_out_of_range": when_out
        }

    def df_cache_once(arg):
        compile_stats["json_cache_once_count"] += 1
        return {
            "type": "minecraft:cache_once",
            "argument": arg
        }

    def df_flat_cache(arg):
        compile_stats["json_flat_cache_count"] += 1
        return {
            "type": "minecraft:flat_cache",
            "argument": arg
        }

    # ============================================================
    # D) Row / interval helpers
    def row_interval(row, dim_name):
        lo, hi = row["parameters"][dim_name]
        return (float(lo), float(hi))

    def row_covers_cell(row, cell_bounds):
        """
        Atomic cell is half-open in every dimension:
          [lo, hi)

        A row covers the cell iff the row covers the whole cell on every dimension.
        """
        for dim_name in DIM_ORDER:
            rlo, rhi = row_interval(row, dim_name)
            clo, chi = cell_bounds[dim_name]
            if not (rlo <= clo and rhi >= chi):
                return False
        return True

    # ============================================================
    # E) Build atomic breakpoints and atomic segments
    def collect_breakpoints(rows, dim_name):
        points = set()
        for row in rows:
            lo, hi = row_interval(row, dim_name)
            points.add(float(lo))
            points.add(float(hi))
        out = sorted(points)
        compile_stats["atomic_breakpoint_count_by_dim"][dim_name] = len(out)
        return out

    def build_atomic_segments(points):
        segs = []
        for i in range(len(points) - 1):
            lo = points[i]
            hi = points[i + 1]
            if hi > lo:
                segs.append((lo, hi))
        return segs

    breakpoints_by_dim = {
        dim: collect_breakpoints(biome_rows, dim)
        for dim in DIM_ORDER
    }

    segments_by_dim = {
        dim: build_atomic_segments(breakpoints_by_dim[dim])
        for dim in DIM_ORDER
    }

    for dim in DIM_ORDER:
        compile_stats["atomic_segment_count_by_dim"][dim] = len(segments_by_dim[dim])

    # ============================================================
    # F) Resolve atomic cell -> biome code
    # ------------------------------------------------------------
    # Since breakpoints come from final rows, every atomic cell should be either:
    #   - fully covered by a stable set of rows
    #   - or uncovered
    #
    # To preserve original semantics robustly, we resolve each cell by:
    #   1) finding all rows that cover the whole cell
    #   2) if none -> 0
    #   3) if all covering rows map to one biome code -> that code
    #   4) if multiple biome codes cover the same atomic cell -> error
    #
    # If your source rows intentionally overlap with priority semantics,
    # you should resolve priority here explicitly.
    # ------------------------------------------------------------
    def resolve_cell_code(cell_bounds):
        matched_rows = [row for row in biome_rows if row_covers_cell(row, cell_bounds)]
        if not matched_rows:
            return 0

        matched_codes = {
            biome_code_map.get(row["biome"], 0)
            for row in matched_rows
        }

        # no conflict
        if len(matched_codes) == 1:
            return next(iter(matched_codes))

        # mask-style overlap resolution:
        # if exactly one non-zero code exists, let it dominate zero
        nonzero_codes = sorted(c for c in matched_codes if c != 0)

        if len(nonzero_codes) == 1:
            return nonzero_codes[0]

        raise ValueError(
            "Conflicting biome rows overlap on atomic cell. "
            f"cell={cell_bounds}, codes={sorted(matched_codes)}"
        )

    # ============================================================
    # G) Build atomic cell table
    # ------------------------------------------------------------
    # A state key is a tuple of atomic segment indices:
    #   (depth_i, weirdness_i, erosion_i, continentalness_i, temperature_i, humidity_i)
    #
    # Each state corresponds to one atomic hyper-rectangle in final continuous space.
    # ------------------------------------------------------------
    from itertools import product

    atomic_index_ranges = [
        range(len(segments_by_dim[dim]))
        for dim in DIM_ORDER
    ]

    cell_table = {}

    for state_key in product(*atomic_index_ranges):
        cell_bounds = {}
        for dim, idx in zip(DIM_ORDER, state_key):
            cell_bounds[dim] = segments_by_dim[dim][idx]

        code = resolve_cell_code(cell_bounds)
        cell_table[state_key] = code

    compile_stats["atomic_cell_count_total"] = len(cell_table)
    compile_stats["nonzero_atomic_cell_count"] = sum(1 for v in cell_table.values() if v != 0)

    # ============================================================
    # H) Discrete decision tree helpers
    # ------------------------------------------------------------
    # Internal node forms:
    #
    # leaf:
    #   ("leaf", biome_code, state_count)
    #
    # split:
    #   ("split", dim_name, branches, state_count)
    #
    # branches:
    #   [(lo_idx, hi_idx, child_node), ...]
    #
    # where lo_idx..hi_idx are consecutive atomic segment indices on that dimension.
    # ------------------------------------------------------------
    def make_leaf(code, state_count):
        return ("leaf", int(code), int(state_count))

    def make_split(dim, branches, state_count):
        return ("split", dim, branches, int(state_count))

    def count_states(node):
        t = node[0]
        if t == "leaf":
            return node[2]
        elif t == "split":
            return node[3]
        raise ValueError(f"Unknown node type: {t}")

    def tree_depth(node):
        t = node[0]
        if t == "leaf":
            return 1
        return 1 + max(tree_depth(child) for _, _, child in node[2])

    def collect_tree_shape_stats(node):
        leaf_count = 0
        split_count = 0
        split_count_by_dim = Counter()

        def walk(n):
            nonlocal leaf_count, split_count
            if n[0] == "leaf":
                leaf_count += 1
                return
            split_count += 1
            split_count_by_dim[n[1]] += 1
            for _, _, child in n[2]:
                walk(child)

        walk(node)
        return {
            "leaf_count": leaf_count,
            "split_count": split_count,
            "split_count_by_dim": dict(split_count_by_dim),
            "max_depth": tree_depth(node)
        }

    def partition_by_dim(state_keys, dim):
        idx = DIM_INDEX[dim]
        groups = defaultdict(list)
        for key in state_keys:
            groups[key[idx]].append(key)
        return {k: tuple(v) for k, v in groups.items()}

    def discrete_node_signature(node):
        t = node[0]

        if t == "leaf":
            _, code, _state_count = node
            return ("leaf", code)

        if t == "split":
            _, dim, branches, _state_count = node
            return (
                "split",
                dim,
                tuple((lo, hi, discrete_node_signature(child)) for lo, hi, child in branches)
            )

        raise ValueError(f"Unknown node type: {t}")

    def group_consecutive_labels_by_childsig(label_to_child_sig):
        """
        Input:
          {label_index: child_signature}

        Output:
          [(lo_idx, hi_idx, child_signature), ...]
        """
        labels = sorted(label_to_child_sig.keys())
        if not labels:
            return []

        out = []
        start = prev = labels[0]
        cur_sig = label_to_child_sig[start]

        for x in labels[1:]:
            sig = label_to_child_sig[x]
            if x == prev + 1 and sig == cur_sig:
                prev = x
            else:
                out.append((start, prev, cur_sig))
                start = prev = x
                cur_sig = sig

        out.append((start, prev, cur_sig))
        return out

    _dep_dims_cache = {}

    def dependent_dims(node):
        sig = discrete_node_signature(node)
        if sig in _dep_dims_cache:
            return _dep_dims_cache[sig]

        t = node[0]
        if t == "leaf":
            out = frozenset()
        else:
            _, dim, branches, _state_count = node
            deps = {dim}
            for _, _, child in branches:
                deps |= set(dependent_dims(child))
            out = frozenset(deps)

        _dep_dims_cache[sig] = out
        return out

    # ============================================================
    # I) Runtime-oriented cost function
    DIM_SPLIT_BONUS = {
        "continentalness": -0.20,
        "erosion": -0.12,
        "depth": -0.08,
        "weirdness": 0.00,
        "temperature": 0.03,
        "humidity": 0.03,
    }

    def runtime_cost(node):
        """
        Lower is better.
        Approximate expected runtime cost under uniform atomic-cell sampling.
        """
        t = node[0]

        if t == "leaf":
            return 1.0

        _, dim, branches, state_count = node

        base = 1.0
        branch_penalty = 0.35 * len(branches)

        weighted_child = 0.0
        for _, _, child in branches:
            child_states = count_states(child)
            weight = child_states / state_count
            weighted_child += weight * runtime_cost(child)

        leaf_ratio = (
            sum(count_states(child) for _, _, child in branches if child[0] == "leaf") / state_count
            if state_count > 0 else 0.0
        )
        leaf_bonus = -0.4 * leaf_ratio

        dim_bonus = DIM_SPLIT_BONUS.get(dim, 0.0)

        return base + branch_penalty + weighted_child + leaf_bonus + dim_bonus

    # ============================================================
    # J) Build runtime-optimized decision tree over atomic cells
    def build_optimal_runtime_tree(cell_table_local):
        all_keys = tuple(sorted(cell_table_local.keys()))

        @lru_cache(maxsize=None)
        def solve(state_keys, remaining_dims):
            state_count = len(state_keys)

            values = {cell_table_local[k] for k in state_keys}
            if len(values) == 1:
                return make_leaf(next(iter(values)), state_count)

            if not remaining_dims:
                return make_leaf(cell_table_local[state_keys[0]], state_count)

            best_node = None
            best_cost = None

            for dim in remaining_dims:
                groups = partition_by_dim(state_keys, dim)
                if len(groups) <= 1:
                    continue

                next_remaining = tuple(d for d in remaining_dims if d != dim)

                child_nodes = {}
                label_to_sig = {}

                for label_idx, child_keys in groups.items():
                    child_keys = tuple(sorted(child_keys))
                    child_node = solve(child_keys, next_remaining)
                    child_nodes[label_idx] = child_node
                    label_to_sig[label_idx] = discrete_node_signature(child_node)

                merged_idx_groups = group_consecutive_labels_by_childsig(label_to_sig)

                branches = []
                for lo_idx, hi_idx, _sig in merged_idx_groups:
                    child_node = child_nodes[lo_idx]
                    branches.append((lo_idx, hi_idx, child_node))

                candidate = make_split(dim, branches, state_count)
                c = runtime_cost(candidate)

                if best_cost is None or c < best_cost:
                    best_cost = c
                    best_node = candidate

            if best_node is None:
                return make_leaf(cell_table_local[state_keys[0]], state_count)

            return best_node

        return solve(all_keys, tuple(DIM_ORDER))

    # ============================================================
    # K) Subtree structure stats
    def collect_subtree_frequencies(node):
        counter = Counter()

        def walk(n):
            sig = discrete_node_signature(n)
            counter[sig] += 1

            if n[0] == "split":
                for _, _, child in n[2]:
                    walk(child)

        walk(node)
        return counter

    # ============================================================
    # L) Compile decision tree -> Minecraft JSON
    def atomic_index_range_to_numeric_interval(dim, lo_idx, hi_idx):
        """
        Convert consecutive atomic segment indices [lo_idx..hi_idx] into one numeric interval:
          [ segment_lo(lo_idx), segment_hi(hi_idx) )
        """
        lo = segments_by_dim[dim][lo_idx][0]
        hi = segments_by_dim[dim][hi_idx][1]
        return (float(lo), float(hi))

    def compile_decision_tree_to_json_with_cache(node, is_root=False, parent_is_y_independent=False):
        t = node[0]

        if t == "leaf":
            _, code, _state_count = node
            return df_const(code)

        deps = dependent_dims(node)
        current_is_y_independent = ("depth" not in deps)

        _, dim, branches, _state_count = node

        input_expr = DIMENSION_FN_REFS[dim]
        compiled_branches = []

        for lo_idx, hi_idx, child_node in branches:
            child_expr = compile_decision_tree_to_json_with_cache(
                child_node,
                is_root=False,
                parent_is_y_independent=current_is_y_independent
            )
            lo, hi = atomic_index_range_to_numeric_interval(dim, lo_idx, hi_idx)
            compiled_branches.append((lo, hi, child_expr))

        expr = df_const(0)
        for lo, hi, child_expr in reversed(compiled_branches):
            expr = df_range_choice(
                input_expr=input_expr,
                low=lo,
                high=hi,
                when_in=child_expr,
                when_out=expr
            )

        # --------------------------------------------------------
        # flat_cache rule:
        # Wrap only at the outermost boundary of a Y-independent subtree.
        #
        # That means:
        # - current subtree is Y-independent
        # - parent subtree is not Y-independent
        # - current subtree is not root
        # --------------------------------------------------------
        if (
            not is_root and
            current_is_y_independent and
            not parent_is_y_independent
        ):
            if not (isinstance(expr, dict) and expr.get("type") == "minecraft:constant"):
                expr = df_flat_cache(expr)

        return expr

    # ============================================================
    # M) Post-compile simplification
    def simplify_expr(expr):
        if isinstance(expr, (int, float, str)):
            return expr

        if isinstance(expr, list):
            return [simplify_expr(x) for x in expr]

        if not isinstance(expr, dict):
            return expr

        t = expr.get("type")

        if t == "minecraft:constant":
            return expr

        if t in ("minecraft:cache_once", "minecraft:cache_2d", "minecraft:flat_cache"):
            arg = simplify_expr(expr["argument"])
            if isinstance(arg, dict) and arg.get("type") == "minecraft:constant":
                return arg
            if isinstance(arg, dict) and arg.get("type") == t:
                return arg
            return {
                "type": t,
                "argument": arg
            }

        if t == "minecraft:range_choice":
            inp = simplify_expr(expr["input"])
            win = simplify_expr(expr["when_in_range"])
            wout = simplify_expr(expr["when_out_of_range"])

            if expr_signature(win) == expr_signature(wout):
                return win

            return {
                "type": "minecraft:range_choice",
                "input": inp,
                "min_inclusive": float(expr["min_inclusive"]),
                "max_exclusive": float(expr["max_exclusive"]),
                "when_in_range": win,
                "when_out_of_range": wout
            }

        out = {}
        for k, v in expr.items():
            out[k] = simplify_expr(v)
        return out

    # ============================================================
    # N) Build pipeline
    decision_tree = build_optimal_runtime_tree(cell_table)

    tree_shape_stats = collect_tree_shape_stats(decision_tree)
    compile_stats["decision_tree_leaf_count"] = tree_shape_stats["leaf_count"]
    compile_stats["decision_tree_split_count"] = tree_shape_stats["split_count"]
    compile_stats["decision_tree_max_depth"] = tree_shape_stats["max_depth"]
    for dim, cnt in tree_shape_stats["split_count_by_dim"].items():
        compile_stats["decision_tree_split_count_by_dim"][dim] = cnt

    freq_map = collect_subtree_frequencies(decision_tree)
    compile_stats["decision_tree_unique_subtrees"] = len(freq_map)

    selector_json = compile_decision_tree_to_json_with_cache(
        decision_tree,
        is_root=True,
        parent_is_y_independent=False
    )

    if top_level_cache:
        selector_json = df_cache_once(selector_json)

    selector_json = simplify_expr(selector_json)

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(selector_json, f, ensure_ascii=False, indent=2)

    # ============================================================
    # O) Debug output
    all_leaf_biome_codes = sorted(set(cell_table.values()))
    debug_info = {
        "output_path": output_path,
        "mode": "runtime_optimized_atomic_cell_selector_from_rows",
        "row_count": len(biome_rows),
        "leaf_biome_code_count": len(all_leaf_biome_codes),
        "compile_stats": compile_stats
    }

    if print_debug:
        print("\n=== SELECTOR DEBUG INFO ===")
        print(json.dumps(debug_info, ensure_ascii=False, indent=2))

    return selector_json, debug_info, decision_tree, cell_table


# ============================================================
def remap_rows_to_single_target(rows, target_biome, non_target_proxy):
    """
    Preserve the target biome id, but remap all non-target biomes
    to a single proxy biome.
    """
    out = []
    for row in rows:
        new_row = deepcopy(row)
        if new_row["biome"] != target_biome:
            new_row["biome"] = non_target_proxy
        out.append(new_row)
    return out


# 8) Helper: derive a single-biome 0/1 mask from selector code
def generate_biome_mask_from_selector_code(
    selector_ref,
    biome_code,
    output_path="biome_mask_from_selector.json"
):
    """
    Build a 0/1 mask from a unified selector code density function.

    selector_ref: density function ID string, e.g.
        "the_winter_rescue:unified_biome_selector"

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


# ============================================================
# 9) Evaluator
NOISE_ROUTER_INPUT_MAP = {
    "minecraft:overworld/temperature": "temperature",
    "minecraft:overworld/vegetation": "humidity",
    "minecraft:overworld/effective_continentalness": "continentalness",
    "minecraft:overworld/erosion": "erosion",
    "minecraft:overworld/depth": "depth",
    "minecraft:overworld/ridges": "weirdness",
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

    elif t == "minecraft:flat_cache":
        return evaluate_density_function(expr["argument"], inputs)

    elif t == "minecraft:range_choice":
        v = evaluate_density_function(expr["input"], inputs)
        if float(expr["min_inclusive"]) <= v < float(expr["max_exclusive"]):
            return evaluate_density_function(expr["when_in_range"], inputs)
        else:
            return evaluate_density_function(expr["when_out_of_range"], inputs)

    else:
        raise ValueError(f"Unsupported expression type: {t}")


def test_selector_value(selector_json, depth, weirdness, erosion, continentalness, temperature, humidity):
    inputs = {
        "depth": depth,
        "weirdness": weirdness,
        "erosion": erosion,
        "continentalness": continentalness,
        "temperature": temperature,
        "humidity": humidity,
    }
    value = evaluate_density_function(selector_json, inputs)
    print("inputs =", inputs)
    print("selector code =", value)
    return value


# ============================================================
# 10) Stats
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


# ============================================================
# 11) usage
if __name__ == "__main__":

    target_biome = "the_winter_rescue:ice_cap"
    proxy_biome = "the_winter_rescue:non_target_proxy"
    underground_spec = tree_to_spec(underground_tree)
    surface_spec = tree_to_spec(surface_tree)
    underground_rows_raw = convert(underground_spec)
    surface_rows_raw = convert(surface_spec)
    biome_rows = underground_rows_raw + surface_rows_raw
    biome_rows = compress_biome_rows(biome_rows)

    filtered_biome_rows = remap_rows_to_single_target(
        biome_rows,
        target_biome="the_winter_rescue:ice_cap",
        non_target_proxy="the_winter_rescue:non_target_proxy"
    )
    filtered_biome_code_map = {
        "the_winter_rescue:ice_cap": 118,
        "the_winter_rescue:non_target_proxy": 0
    }

    selector_json, debug_info, decision_tree, table = generate_unified_selector_code_json_from_rows_runtime_optimized(
        biome_rows=filtered_biome_rows,
        biome_code_map=filtered_biome_code_map,
        output_path="fastest_biome_selector.json",
        print_debug=True,
        top_level_cache=True
    )

    print_density_tree_stats(
        selector_json,
        title="Runtime optimized discrete biome selector"
    )

    print_selector_compile_stats(debug_info)
