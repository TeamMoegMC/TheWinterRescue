#   Dep PV  Ero Con Tmp Hum Wrd
surface_tree_vanilla_style = {
    0: {
        # valleys
        0: {
            # low erosion
            (0, 1): {
                (3, 4): valley_glacier,
                5: frozen_river,
                (6, C_MAX): {
                    0: middle_biomes_t0,
                    1: middle_biomes_t1,
                    2: middle_biomes_t2,
                    3: middle_biomes_t3,
                    (4, T_MAX): badland_biomes_humidity
                }
            },
            # mid erosion
            (2, 5): {
                (3, 4): tidewater_glacier,
                (5, C_MAX): frozen_river
            },
            # high erosion
            (6, 6): {
                (3, 4): tidewater_glacier,
                (5, C_MAX): {
                    (0, 0): frozen_river,
                    (1, 3): destroyed_marsh,
                    (4, T_MAX): fossil_deposits,
                },
            }
        },
        
        # low
        1: {
            (0, 1): {
                3: stony_shore,
                4: {
                    0: middle_biomes_t0,
                    1: middle_biomes_t1,
                    2: middle_biomes_t2,
                    3: middle_biomes_t3,
                    (4, T_MAX): badland_biomes_humidity
                },
                (5, C_MAX): {
                    0: {
                        (0, 1): snowy_slopes,
                        (2, E_MAX): grove
                    },
                    1: middle_biomes_t1,
                    2: middle_biomes_t2,
                    3: middle_biomes_t3,
                    (4, T_MAX): badland_biomes_humidity
                }
            },
            2: {
                3: stony_shore,
                4: middle_biomes,
                (5, C_MAX): {
                    0: middle_biomes_t0,
                    1: middle_biomes_t1,
                    2: middle_biomes_t2,
                    3: middle_biomes_t3,
                    (4, T_MAX): badland_biomes_humidity
                }
            },
            3: {
                3: beach_biomes,
                4: middle_biomes,
                (5, C_MAX): {
                    0: middle_biomes_t0,
                    1: middle_biomes_t1,
                    2: middle_biomes_t2,
                    3: middle_biomes_t3,
                    (4, T_MAX): badland_biomes_humidity
                }
            },
            4: {
                3: beach_biomes,
                (4, C_MAX): middle_biomes,
            },
            5: {
                3: beach_or_middle_biomes,
                (4, C_MAX): middle_biomes
            },
            6: {
                3: beach_biomes,
                (4, C_MAX): {
                    (0, 0): middle_biomes_t0,
                    (1, 3): destroyed_marsh,
                    (4, T_MAX): fossil_deposits
                }
            }
        },
        
        # mid
        2: {
            0: {
                3: stony_shore,
                (4, C_MAX): {
                    (0, 2): {
                        (0, 1): snowy_slopes,
                        (2, H_MAX): grove
                    },
                    3: plataeu_biomes_t3,
                    (4, T_MAX): plataeu_biomes_t4andabove
                }
            },
            1: {
                3: stony_shore,
                (4, 5): {
                    0: {
                        (0, 1): snowy_slopes,
                        (2, H_MAX): grove
                    },
                    1: middle_biomes_t1,
                    2: middle_biomes_t2,
                    3: middle_biomes_t3,
                    4: badland_biomes_humidity
                },
                (6, C_MAX): {
                    0: {
                        (0, 1): snowy_slopes,
                        (2, H_MAX): grove
                    },
                    1: plataeu_bioems_t1,
                    2: plataeu_biomes_t2,
                    3: plataeu_biomes_t3,
                    (4, T_MAX): plataeu_biomes_t4andabove
                }
            },
            2: {
                3: stony_shore,
                4: middle_biomes,
                5: {
                    0: middle_biomes_t0,
                    1: middle_biomes_t1,
                    2: middle_biomes_t2,
                    3: middle_biomes_t3,
                    (4, T_MAX): badland_biomes_humidity
                },
                6: plataeu_biomes
            },
            3: {
                3: middle_biomes,
                4: middle_biomes,
                5: {
                    0: middle_biomes_t0,
                    1: middle_biomes_t1,
                    2: middle_biomes_t2,
                    3: middle_biomes_t3,
                    (4, T_MAX): badland_biomes_humidity
                },
                (6, C_MAX): {
                    0: middle_biomes_t0,
                    1: middle_biomes_t1,
                    2: middle_biomes_t2,
                    3: middle_biomes_t3,
                    (4, T_MAX): badland_biomes_humidity
                },
            },
            4: {
                (3, C_MAX): beach_or_middle_biomes,
            },
            5: {
                3: beach_or_middle_biomes,
                4: middle_biomes,
                (5, C_MAX): shattered_biomes
            },
            6: {
                3: beach_or_middle_biomes,
                (4, C_MAX): {
                    0: middle_biomes_t0,
                    (1, 2): destroyed_marsh,
                    (3, T_MAX): fossil_deposits
                }
            }
        },
        
        # high
        3: {
            0: {
                3: middle_biomes,
                4: {
                    (0, 2): {
                        (0, 1): snowy_slopes,
                        (2, H_MAX): grove
                    },
                    3: plataeu_biomes_t3,
                    (4, T_MAX): plataeu_biomes_t4andabove
                },
                (5, C_MAX): {
                    (0, 2): {
                        (0, H_MAX): {
                            0: jagged_peaks,
                            1: frozen_peaks
                        }
                    },
                    3: frozen_peaks,
                    (4, T_MAX): badland_biomes_humidity
                }
            },
            1: {
                3: middle_biomes,
                4: {
                    0: {
                        (0, 1): snowy_slopes,
                        (2, H_MAX): grove
                    },
                    1: middle_biomes_t1,
                    2: middle_biomes_t2,
                    3: middle_biomes_t3,
                    (4, T_MAX): badland_biomes_humidity
                },
                (5, C_MAX): {
                    (0, 2): {
                        (0, 1): snowy_slopes,
                        (2, H_MAX): grove
                    },
                    3: plataeu_biomes_t3,
                    (4, T_MAX): plataeu_biomes_t4andabove
                }
            },
            2: {
                3: middle_biomes,
                4: middle_biomes,
                5: plataeu_biomes,
                (6, C_MAX): plataeu_biomes
            },
            3: {
                3: middle_biomes,
                4: middle_biomes,
                5: {
                    0: middle_biomes_t0,
                    1: middle_biomes_t1,
                    2: middle_biomes_t2,
                    3: middle_biomes_t3,
                    (4, T_MAX): badland_biomes_humidity
                },
                (6, C_MAX): plataeu_biomes
            },
            4: {
                (0, C_MAX): middle_biomes
            },
            5: {
                (3, 4): middle_biomes,
                (5, C_MAX): shattered_biomes
            },
            6: {
                (0, C_MAX): middle_biomes
            }
        },
        
        # peaks
        4: {
            0: {
                (3, C_MAX): {
                    (0, 2): {
                        (0, H_MAX): {
                            0: jagged_peaks,
                            1: frozen_peaks
                        }
                    },
                    3: frozen_peaks,
                    4: badland_biomes_humidity
                }
            },
            1: {
                (3, 4): {
                    0: {
                        (0, 1): snowy_slopes,
                        (2, H_MAX): grove
                    },
                    1: middle_biomes_t1,
                    2: middle_biomes_t2,
                    3: middle_biomes_t3,
                    4: badland_biomes_humidity
                },
                (5, C_MAX): {
                    (0, 2): {
                        (0, H_MAX): {
                            0: jagged_peaks,
                            1: frozen_peaks
                        }
                    },
                    3: frozen_peaks,
                    4: badland_biomes_humidity
                }
            },
            2: {
                3: middle_biomes,
                4: middle_biomes,
                5: plataeu_biomes,
                (6, C_MAX): plataeu_biomes
            },
            3: {
                3: middle_biomes,
                4: middle_biomes,
                5: {
                    0: middle_biomes_t0,
                    1: middle_biomes_t1,
                    2: middle_biomes_t2,
                    3: middle_biomes_t3,
                    (4, T_MAX): badland_biomes_humidity
                },
                (6, C_MAX): plataeu_biomes
            },
            4: {
                (0, C_MAX): middle_biomes
            },
            5: {
                (3, 4): middle_biomes,
                (5, C_MAX): shattered_biomes
            },
            6: {
                (0, C_MAX): middle_biomes
            }
        }
    }
}