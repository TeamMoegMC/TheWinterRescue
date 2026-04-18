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


# ============================================================
# 7) Unified rows -> selector generator
# Runtime-first atomic-cell compiler
# ============================================================
def generate_smooth_hypercube_mask(
    biome_rows=None,
    target_biome=None,
    intervals=None,
    transition_width=1e-6,
    output_path="smooth_hypercube_mask.json",
    top_level_cache=True,
    merge_rectangles=False,
    ignore_dims=None
):
    DIM_ORDER = ["depth", "weirdness", "erosion", "continentalness", "temperature", "humidity"]
    DIMENSION_FN_REFS = {
        "depth": "minecraft:overworld/depth",
        "weirdness": "minecraft:overworld/ridges",
        "erosion": "minecraft:overworld/erosion",
        "continentalness": "minecraft:overworld/effective_continentalness",
        "temperature": "minecraft:overworld/temperature",
        "humidity": "minecraft:overworld/vegetation",
    }

    if ignore_dims is None:
        ignore_dims = []
    active_dims = [d for d in DIM_ORDER if d not in ignore_dims]

    if intervals is not None:
        rects = [intervals]
    else:
        if biome_rows is None or target_biome is None:
            raise ValueError("必须提供 intervals 或 (biome_rows + target_biome)")
        target_rows = [row for row in biome_rows if row["biome"] == target_biome]
        if not target_rows:
            raise ValueError(f"未找到目标群系: {target_biome}")
        rects = [row["parameters"] for row in target_rows]

    def make_rect_mask(rect):
        if not active_dims:
            return {"type": "minecraft:constant", "argument": 1.0}
        dim_splines = []
        for dim in active_dims:
            lo, hi = rect[dim]
            trans = max(transition_width, 1e-9)
            left_start = lo - trans
            right_end = hi + trans
            points = [
                {"location": -2.0, "value": 0.0, "derivative": 0.0},
                {"location": left_start, "value": 0.0, "derivative": 0.0},
                {"location": lo, "value": 1, "derivative": 0.0},
                {"location": hi, "value": 1, "derivative": 0.0},
                {"location": right_end, "value": 0.0, "derivative": 0.0},
                {"location": 2.0, "value": 0.0, "derivative": 0.0},
            ]
            spl = {"type": "minecraft:spline", "spline": {"coordinate": DIMENSION_FN_REFS[dim], "points": points}}
            dim_splines.append(spl)
        min_expr = dim_splines[0]
        for spl in dim_splines[1:]:
            min_expr = {"type": "minecraft:min", "argument1": min_expr, "argument2": spl}
        return min_expr

    if merge_rectangles:
        merged_rect = {}
        for dim in DIM_ORDER:
            if dim in ignore_dims:
                continue
            lows = [r[dim][0] for r in rects]
            highs = [r[dim][1] for r in rects]
            merged_rect[dim] = [min(lows), max(highs)]
        if not merged_rect:
            final_expr = {"type": "minecraft:constant", "argument": 1.0}
        else:
            final_expr = make_rect_mask(merged_rect)
    else:
        if not active_dims:
            final_expr = {"type": "minecraft:constant", "argument": 1.0}
        else:
            rect_masks = [make_rect_mask(r) for r in rects]
            final_expr = rect_masks[0]
            for rm in rect_masks[1:]:
                final_expr = {"type": "minecraft:max", "argument1": final_expr, "argument2": rm}

    if top_level_cache:
        final_expr = {"type": "minecraft:cache_once", "argument": final_expr}

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(final_expr, f, indent=2)

    return final_expr

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

def scale_biome_rows_for_target(biome_rows, target_biome, dim_factors, global_ranges):
    """
    对目标群系的所有矩形，按 dim_factors 缩放每个维度的区间。
    dim_factors: dict, e.g. {"depth": 0.0, "weirdness": 1.0, ...}
    global_ranges: dict, 每个维度的全局范围（当 factor=0 时使用），例如
        {"depth": [-0.005, 1.0], "weirdness": [-1.0, 1.0], ...}
    """
    import copy
    new_rows = []
    for row in biome_rows:
        if row["biome"] != target_biome:
            new_rows.append(row)
            continue
        # 对目标群系的每个矩形进行缩放
        new_row = copy.deepcopy(row)
        params = new_row["parameters"]
        for dim, factor in dim_factors.items():
            if dim not in params:
                continue
            lo, hi = params[dim]
            center = (lo + hi) / 2.0
            half_span = (hi - lo) / 2.0
            if factor == 0.0:
                # 忽略该维度 -> 设为全局范围
                new_lo, new_hi = global_ranges[dim]
            else:
                new_half = half_span * factor
                new_lo = center - new_half
                new_hi = center + new_half
            params[dim] = [new_lo, new_hi]
        new_rows.append(new_row)
    return new_rows



# ============================================================
# 11) usage
if __name__ == "__main__":

    target_biome = "the_winter_rescue:glacial_fungus_caves"
    proxy_biome = "the_winter_rescue:non_target_proxy"
    underground_spec = tree_to_spec(underground_tree)
    surface_spec = tree_to_spec(surface_tree)
    underground_rows_raw = convert(underground_spec)
    surface_rows_raw = convert(surface_spec)
    biome_rows = underground_rows_raw + surface_rows_raw
    biome_rows = compress_biome_rows(biome_rows)

    filtered_biome_rows = remap_rows_to_single_target(
        biome_rows,
        target_biome=target_biome,
        non_target_proxy="the_winter_rescue:non_target_proxy"
    )

    global_ranges = {
        "depth": [-0.005, 1.0],
        "weirdness": [-1.0, 1.0],
        "erosion": [-1.0, 1.0],
        "continentalness": [-1.2, 1.0],
        "temperature": [-1.0, 1.0],
        "humidity": [-1.0, 1.0],
    }

    dim_factors = {
        "depth": 0.0,
        "weirdness": 0.88,
        "erosion": 0.88,
        "continentalness": 0.88,
        "temperature": 0.88,
        "humidity": 0.88,
    }

    filtered_biome_rows = scale_biome_rows_for_target(
        filtered_biome_rows,
        target_biome=target_biome,
        dim_factors=dim_factors,
        global_ranges=global_ranges
    )

    filtered_biome_code_map = {
        target_biome: 118,
        "the_winter_rescue:non_target_proxy": 0
    }

    for row in filtered_biome_rows:
        if row["biome"] == target_biome:
            print(row["parameters"])

    generate_smooth_hypercube_mask(
        biome_rows=filtered_biome_rows,
        target_biome=target_biome,
        transition_width=0.05,
        output_path="glacial_fungus_caves_spline.json",
        ignore_dims=["depth"]
    )
