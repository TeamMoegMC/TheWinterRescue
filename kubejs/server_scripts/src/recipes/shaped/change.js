/**
 * For creating all standard minecraft:crafting_shaped recipes
 */
ServerEvents.recipes((event) => {
    let {kubejs} = event.recipes

    let changeShapedRecipes = [
        [
            "charcoal_pit:mechanical_bellows", [
            "AAA",
            "BC ",
            "AAA"
        ], {
            A: "minecraft:stone",
            B: "minecraft:piston",
            C: "charcoal_pit:bellows"
        }
        ],
        [
            "charcoal_pit:bellows", [
            "ABA",
            "CCC",
            "ABA"
        ], {
            A: "immersiveengineering:treated_wood_horizontal",
            B: "immersiveengineering:slab_treated_wood_horizontal",
            C: "minecraft:leather"
        }
        ],
        [
            "charcoal_pit:fire_starter", [
            " A",
            "AB"
        ], {
            A: "minecraft:stick",
            B: "charcoal_pit:straw"
        }
        ],
        [
            "minecraft:stone_bricks", 4, [
            "ABA",
            "B B",
            "ABA"
        ], {
            A: "minecraft:stone",
            B: "frostedheart:mortar"
        }
        ],
        [
            "charcoal_pit:sandy_collector", [
            "A A",
            "ABA",
            "AAA"
        ], {
            A: "charcoal_pit:sandy_brick_item",
            B: "minecraft:bucket"
        }
        ],
        [
            "charcoal_pit:sandy_collector", [
            "A A",
            "ABA",
            "AAA"
        ], {
            A: "charcoal_pit:sandy_brick_item",
            B: "frostedheart:ceramic_bucket"
        }
        ],
        [
            "charcoal_pit:sandy_brick", [
            "BAB",
            "ABA",
            "BAB"
        ], {
            A: "frostedheart:mortar",
            B: "charcoal_pit:sandy_brick_item"
        }
        ],
        [
            "charcoal_pit:unfired_sandy_brick", 4, [
            "ABA",
            "BAB",
            "ABA"
        ], {
            A: "minecraft:sand",
            B: "minecraft:clay_ball"
        }
        ],
        [
            "create:brass_funnel", 2, [
            " A ",
            "BCB",
            " C "
        ], {
            A: "create:electron_tube",
            B: "#forge:ingots/brass",
            C: "#the_winter_rescue:leather"
        }
        ],
        [
            "create:andesite_funnel", 4, [
            " A ",
            "ACA",
            " C "
        ], {
            A: "#forge:rods/cast_iron",
            C: "#the_winter_rescue:leather"
        }
        ],
        [
            "minecraft:hay_block", [
            "AAA",
            "AAA",
            "AAA"
        ], {
            A: "charcoal_pit:straw"
        }
        ],
        [
            [
                "immersiveengineering:blueprint", {blueprint: "molds"}
            ], [
            "A A",
            "CBC",
            "CCC"
        ], {
            A: "minecraft:ink_sac",
            B: "#forge:plates/steel",
            C: "minecraft:paper"
        }
        ],
        [
            "immersiveengineering:alloybrick", 2, [
            "ABA",
            "B B",
            "ABA"
        ], {
            A: "minecraft:brick",
            B: "#twr:plates/structural"
        }
        ],
        [
            "immersiveindustry:burning_chamber", 2, [
            "ABA",
            "BAB",
            "ABA"
        ], {
            A: "#forge:plates/iron",
            B: "frostedheart:cast_iron_sheet"
        }
        ],
        [
            "frostedheart:steel_rod", 4, [
            "  A",
            " A ",
            "A  "
        ], {
            A: "#forge:ingots/steel"
        }
        ],
        [
            "frostedheart:cast_iron_rod", 4, [
            "  A",
            " A ",
            "A  "
        ], {
            A: "#forge:ingots/cast_iron"
        }
        ],
        [
            "frostedheart:iron_rod", 4, [
            "  A",
            " A ",
            "A  "
        ], {
            A: "#forge:ingots/iron"
        }
        ],
        [
            "frostedheart:aluminum_rod", 4, [
            "  A",
            " A ",
            "A  "
        ], {
            A: "#forge:ingots/aluminum"
        }
        ],
        [
            "frostedheart:electrum_rod", 4, [
            "  A",
            " A ",
            "A  "
        ], {
            A: "#forge:ingots/electrum"
        }
        ],
        [
            "frostedheart:constantan_rod", 4, [
            "  A",
            " A ",
            "A  "
        ], {
            A: "#forge:ingots/constantan"
        }
        ],
        [
            "frostedheart:copper_rod", 4, [
            "  A",
            " A ",
            "A  "
        ], {
            A: "#forge:ingots/copper"
        }
        ],
        [
            "immersiveengineering:conveyor_basic", 6, [
            "ACA",
            "ABA"
        ], {
            A: "#forge:plates/steel",
            B: "kubejs:motor",
            C: "create:belt_connector"
        }
        ],
        [
            "create:wrench", [
            "AA",
            "AB",
            " C"
        ], {
            A: "#twr:plates/structural",
            B: "#the_winter_rescue:cogwheels",
            C: "immersiveengineering:stick_treated"
        }
        ],
        [
            "immersiveengineering:heavy_engineering", 2, [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: "#forge:plates/duralumin",
            B: "immersiveengineering:component_steel",
            C: "#forge:ingots/duralumin"
        }
        ],
        [
            "immersiveengineering:light_engineering", 2, [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: "#forge:plates/aluminum",
            B: "immersiveengineering:component_iron",
            C: "#forge:ingots/steel"
        }
        ],
        [
            "immersiveengineering:fluid_pump", [
            "CDC",
            "ABA",
            "ABA"
        ], {
            A: "#forge:plates/steel",
            B: "immersiveengineering:fluid_pipe",
            C: "#forge:plates/aluminum",
            D: "kubejs:servo_core"
        }
        ],
        [
            "immersiveengineering:generator", 2, [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: "immersiveengineering:sheetmetal_steel",
            B: "#forge:plates/copper",
            C: "immersiveengineering:coil_mv"
        }
        ],
        [
            "frostedheart:refractory_bricks", 2, [
            "ABA",
            "BAB",
            "ABA"
        ], {
            A: "frostedheart:refractory_brick",
            B: "frostedheart:mortar"
        }
        ],
        [
            "frostedheart:high_refractory_bricks", 2, [
            "ABA",
            "BAB",
            "ABA"
        ], {
            A: "frostedheart:high_refractory_brick",
            B: "frostedheart:mortar"
        }
        ],
        [
            "minecraft:comparator", [
            " B ",
            "BCB",
            "AAA"
        ], {
            A: "#forge:plates/iron",
            B: "minecraft:redstone_torch",
            C: "#forge:wires/copper"
        }
        ],
        [
            "minecraft:piston", [
            "AAA",
            "BAB",
            "BCB"
        ], {
            A: "#minecraft:planks",
            B: "minecraft:stone",
            C: "#the_winter_rescue:cogwheels"
        }
        ],
        [
            "immersiveengineering:cokebrick", 3, [
            "ABA",
            "CAC",
            "ABA"
        ], {
            A: "charcoal_pit:sandy_brick_item",
            B: "frostedheart:mortar",
            C: "#twr:plates/structural"
        }
        ],
        [
            "immersiveengineering:blastbrick", 4, [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: "#twr:plates/high_temp",
            B: "frostedheart:mortar",
            C: "frostedheart:refractory_bricks"
        }
        ],
        [
            "immersiveengineering:wirecutter", [
            "A A",
            " B ",
            "B B"
        ], {
            A: "#forge:plates/iron",
            B: "immersiveengineering:stick_treated"
        }
        ],
        [
            "elevatorid:elevator_white", [
            "AAA",
            "BBB",
            "AAA"
        ], {
            A: "#forge:plates/steel",
            B: "#minecraft:wool"
        }
        ],
        [
            "frostedheart:synthetic_leather", [
            "AAA",
            "BBB",
            "AAA"
        ], {
            A: "frostedheart:pulp",
            B: "#forge:string"
        }
        ],
        [
            "create:belt_connector", 3, [
            "AAA",
            "BBB",
            "AAA"
        ], {
            A: "#forge:rubber",
            B: "#forge:wires/copper"
        }
        ],
//        [
//            "create:fluid_pipe", 6, [
//            "AAA",
//            "   ",
//            "AAA"
//        ], {
//            A: "#forge:plates/bronze"
//        }
//        ],
        [
            "create:shaft", 12, [
            "A",
            "A"
        ], {
            A: "#forge:rods/cast_iron"
        }
        ],
        [
            "immersiveengineering:reinforced_crate", [
            "ABA",
            "CDC",
            "ABA"
        ], {
            A: "#forge:treated_wood",
            B: "#forge:plates/iron",
            C: "#forge:rods/iron",
            D: "#forge:chests/wooden"
        }
        ],
        [
            "steampowered:bronze_cogwheel", 8, [
            " B ",
            "BAB",
            " B "
        ], {
            A: "create:shaft",
            B: "#forge:plates/bronze"
        }
        ],
        [
            "steampowered:bronze_large_cogwheel", 4, [
            "BCB",
            "CAC",
            "BCB"
        ], {
            A: "create:shaft",
            B: "#forge:plates/bronze",
            C: "#forge:ingots/bronze"
        }
        ],
        [
            "steampowered:cast_iron_cogwheel", 8, [
            " B ",
            "BAB",
            " B "
        ], {
            A: "create:shaft",
            B: "#forge:plates/cast_iron"
        }
        ],
        [
            "steampowered:cast_iron_large_cogwheel", 4, [
            "BCB",
            "CAC",
            "BCB"
        ], {
            A: "create:shaft",
            B: "#forge:plates/cast_iron",
            C: "#forge:ingots/cast_iron"
        }
        ],
        [
            "steampowered:steel_cogwheel", 8, [
            " B ",
            "BAB",
            " B "
        ], {
            A: "create:shaft",
            B: "#forge:plates/steel"
        }
        ],
        [
            "steampowered:steel_large_cogwheel", 4, [
            "BCB",
            "CAC",
            "BCB"
        ], {
            A: "create:shaft",
            B: "#forge:plates/steel",
            C: "#forge:ingots/steel"
        }
        ],
        [
            "steampowered:bronze_boiler", [
            "B B",
            "BAB",
            "BBB"
        ], {
            A: "create:fluid_pipe",
            B: "#forge:plates/bronze"
        }
        ],
        [
            "steampowered:cast_iron_boiler", [
            "B B",
            "BAB",
            "BBB"
        ], {
            A: "create:fluid_pipe",
            B: "#forge:plates/cast_iron"
        }
        ],
        [
            "steampowered:steel_boiler", [
            "B B",
            "BAB",
            "BBB"
        ], {
            A: "create:fluid_pipe",
            B: "#forge:plates/steel"
        }
        ],
        [
            "steampowered:bronze_burner", [
            "BCB",
            "B B",
            "AAA"
        ], {
            A: "frostedheart:refractory_bricks",
            B: "#forge:plates/bronze",
            C: "#forge:plates/copper"
        }
        ],
        [
            "steampowered:cast_iron_burner", [
            "BCB",
            "B B",
            "AAA"
        ], {
            A: "frostedheart:refractory_bricks",
            B: "#forge:plates/cast_iron",
            C: "#forge:plates/copper"
        }
        ],
        [
            "steampowered:steel_burner", [
            "BCB",
            "B B",
            "AAA"
        ], {
            A: "frostedheart:high_refractory_bricks",
            B: "#forge:plates/steel",
            C: "#forge:plates/copper"
        }
        ],
        [
            "create:wand_of_symmetry", [
            " DC",
            "BCD",
            "AB "
        ], {
            A: "#forge:obsidian",
            B: "#forge:ingots/tungsten",
            C: "create:refined_radiance",
            D: "minecraft:white_stained_glass_pane"
        }
        ],
        [
            "supplementaries:daub", 2, [
            "AB",
            "BA"
        ], {
            A: "minecraft:clay",
            B: "charcoal_pit:straw"
        }
        ],
        [
            "frostedheart:steam_core", [
            "ASA",
            "BWB",
            "ACA"
        ], {
            A: ["#forge:plates/cast_iron", "#forge:plates/steel"],
            B: ["#forge:rods/cast_iron", "#forge:rods/steel"],
            W: ["steampowered:cast_iron_steam_engine", "steampowered:steel_steam_engine"],
            C: "frostedheart:heat_pipe",
            S: "create:shaft"
        }
        ],
        [
            "supplementaries:cage", [
            "AAA",
            "WBW",
            "CCC"
        ], {
            A: "#forge:plates/steel",
            B: "#immersiveengineering:scaffoldings/steel",
            W: "frostedheart:gambeson",
            C: "#forge:treated_wood"
        }
        ],
        [
            "create:mechanical_mixer", [
            " A ",
            "DCD",
            " B "
        ], {
            A: "#forge:ingots/iron",
            B: "create:whisk",
            C: "#forge:sheetmetals/iron",
            D: "#the_winter_rescue:cogwheels"
        }
        ],
        [
            "create:hand_crank", [
            " C ",
            "BBB",
            "  A"
        ], {
            A: "#forge:rods/iron",
            B: "#minecraft:planks",
            C: "create:shaft"
        }
        ],
        [
            "create:gantry_shaft", 3, [
            "DAD",
            "CAC",
            "DAD"
        ], {
            A: "#forge:rods/cast_iron",
            C: "#forge:dusts/redstone",
            D: "#minecraft:planks"
        }
        ],
        [
            "minecraft:chest", [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "#forge:treated_wood",
            B: "#twr:nuggets/structural"
        }
        ],
        [
            "create:fluid_tank", 2, [
            " A ",
            "ABA",
            " A "
        ], {
            A: "#forge:plates/copper",
            B: "#forge:glass"
        }
        ],
        [
            "minecraft:barrel", [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "#minecraft:planks",
            B: "#twr:nuggets/structural"
        }
        ],
        [
            "minecraft:flower_pot", [
            "A A",
            " A ",
            "   "
        ], {
            A: "minecraft:brick"
        }
        ],
        [
            "minecraft:shears", [
            "A ",
            " A"
        ], {
            A: "#twr:plates/structural"
        }
        ],
        [
            "minecraft:spyglass", [
            "B",
            "A",
            "A"
        ], {
            A: "#twr:plates/structural",
            B: "minecraft:amethyst_shard"
        }
        ],
        [
            "minecraft:shield", [
            "BAB",
            "BAB",
            "BAB"
        ], {
            A: "#twr:plates/structural",
            B: "#minecraft:planks"
        }
        ],
        [
            "minecraft:bow", [
            " BA",
            "B A",
            " BA"
        ], {
            A: "#twr:advanced_string",
            B: "#forge:rods/wooden"
        }
        ],
        [
            "minecraft:crossbow", [
            "BCB",
            "AAA",
            " B "
        ], {
            A: "#twr:advanced_string",
            B: "#forge:rods/wooden",
            C: "#twr:ingots/structural"
        }
        ],
        [
            "minecraft:iron_trapdoor", [
            "AAA",
            "AAA"
        ], {
            A: "#twr:plates/structural"
        }
        ],
        [
            "minecraft:heavy_weighted_pressure_plate", [
            "AA"
        ], {
            A: "#twr:plates/structural"
        }
        ],
        [
            "minecraft:light_weighted_pressure_plate", [
            "AA"
        ], {
            A: "#twr:plates/heavy"
        }
        ],
        [
            "create:mechanical_press", [
            " B ",
            " A ",
            " C "
        ], {
            A: "create:andesite_casing",
            B: "create:shaft",
            C: "#twr:storage_blocks/hard"
        }
        ],
        [
            "minecraft:bucket", [
            "A A",
            " A "
        ], {
            A: "#twr:plates/structural"
        }
        ],
        [
            "minecraft:iron_door", [
            "AA ",
            "AA ",
            "AA "
        ], {
            A: "#twr:plates/structural"
        }
        ],
        [
            "minecraft:flint_and_steel", [
            "A ",
            " B",
        ], {
            A: "#forge:rods/cast_iron",
            B: "minecraft:flint"
        }
        ],
        [
            "minecraft:flint_and_steel", [
            "A ",
            " B",
        ], {
            A: "#forge:rods/steel",
            B: "minecraft:flint"
        }
        ],
        [
            "minecraft:anvil", [
            "BBB",
            " A ",
            "AAA"
        ], {
            A: "#twr:ingots/hard",
            B: "#twr:storage_blocks/hard"
        }
        ],
        [
            "minecraft:hopper", [
            "A A",
            "ABA",
            " A "
        ], {
            A: "#twr:ingots/structural",
            B: "#forge:chests"
        }
        ],
        [
            "storagedrawers:iron_storage_upgrade", [
            "AAA",
            "CBC",
            "AAA"
        ], {
            A: "#forge:rods/wooden",
            B: "storagedrawers:upgrade_template",
            C: "#forge:storage_blocks/iron"
        }
        ],
        // TODO: stainless steel
        [
            "minecraft:cauldron", [
            "A A",
            "A A",
            "AAA"
        ], {
            A: "#twr:ingots/structural"
        }
        ],
        [
            "minecraft:compass", [
            " A ",
            "ABA",
            " C "
        ], {
            A: "#twr:ingots/structural",
            B: "minecraft:redstone",
            C: "#twr:rods/magnetic"
        }
        ],
        [
            "immersiveengineering:coil_lv", [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "immersiveengineering:wirecoil_copper",
            B: "#forge:rods/cast_iron"
        }
        ],
        [
            "immersiveengineering:coil_mv", [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "immersiveengineering:wirecoil_electrum",
            B: "#forge:rods/steel"
        }
        ],
        [
            "immersiveengineering:coil_hv", [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "immersiveengineering:wirecoil_steel",
            B: "#forge:rods/aluminum"
        }
        ],
        [
            "charcoal_pit:sandy_tuyere", [
            "BAB",
            "ACA",
            "BAB"
        ], {
            A: "frostedheart:mortar",
            B: "charcoal_pit:sandy_brick_item",
            C: "#forge:plates/bronze"
        }
        ],
        [
            "handcrafted:wood_plate", 2, [
            "AA"
        ], {
            A: "#minecraft:wooden_slabs"
        }
        ],
        [
            "minecraft:furnace", 1, [
            "AAA",
            "B B",
            "AAA"
        ], {
            A: "#minecraft:stone_bricks",
            B: "#forge:plates/bronze"
        }
        ],
        [
            "create:mechanical_bearing", 1, [
            "A",
            "B",
            "C"
        ], {
            A: "#minecraft:wooden_slabs",
            B: "immersiveengineering:heavy_engineering",
            C: "create:shaft"
        }
        ],
        [
            "create:mechanical_drill", 1, [
            " A ",
            "ABA",
            " C "
        ], {
            A: "#forge:ingots/steel",
            B: "#forge:ingots/duralumin",
            C: "immersiveengineering:heavy_engineering"
        }
        ],
        [
            "minecraft:spruce_boat", 1, [
            "ABA",
            "AAA"
        ], {
            A: "minecraft:spruce_planks",
            B: "#forge:rods/treated_wood"
        }
        ],
        [
            "minecraft:oak_boat", 1, [
            "ABA",
            "AAA"
        ], {
            A: "minecraft:oak_planks",
            B: "#forge:rods/treated_wood"
        }
        ],
        [
            "minecraft:birch_boat", 1, [
            "ABA",
            "AAA"
        ], {
            A: "minecraft:birch_planks",
            B: "#forge:rods/treated_wood"
        }
        ],
        [
            "minecraft:jungle_boat", 1, [
            "ABA",
            "AAA"
        ], {
            A: "minecraft:jungle_planks",
            B: "#forge:rods/treated_wood"
        }
        ],
        [
            "minecraft:acacia_boat", 1, [
            "ABA",
            "AAA"
        ], {
            A: "minecraft:acacia_planks",
            B: "#forge:rods/treated_wood"
        }
        ],
        [
            "minecraft:dark_oak_boat", 1, [
            "ABA",
            "AAA"
        ], {
            A: "minecraft:dark_oak_planks",
            B: "#forge:rods/treated_wood"
        }
        ],
        [
            "minecraft:mangrove_boat", 1, [
            "ABA",
            "AAA"
        ], {
            A: "minecraft:mangrove_planks",
            B: "#forge:rods/treated_wood"
        }
        ],
        [
            "minecraft:cherry_boat", 1, [
            "ABA",
            "AAA"
        ], {
            A: "minecraft:cherry_planks",
            B: "#forge:rods/treated_wood"
        }
        ],
        [
            "caupona:walnut_boat", 1, [
            "ABA",
            "AAA"
        ], {
            A: "caupona:walnut_planks",
            B: "#forge:rods/treated_wood"
        }
        ],
        [
            "tetra:rack", 1, [
                "ABA"
            ], {
                A: "#minecraft:wooden_slabs",
                B: "#forge:cobblestone"
            }
        ],
        [
            "immersiveengineering:hammer", [
            " AC",
            " BA",
            "B  "
        ], {
            A: "#twr:ingots/structural",
            B: "#forge:rods/wooden",
            C: "#twr:advanced_string"
        }
        ],
        [
            "create:mechanical_plough", [
                " A ",
                "BAB",
                " C "
            ], {
                A: "#forge:plates/cast_iron",
                B: "#forge:ingots/iron",
                C: "create:andesite_casing"
            }
        ],
        [
            "create:mechanical_harvester", [
                "BAB",
                "BAB",
                " C "
            ], {
                A: "#forge:rods/cast_iron",
                B: "#forge:ingots/iron",
                C: "create:andesite_casing"
            }
        ],
        [
            "create:metal_girder", 16, [
                "BAB",
            ], {
                A: "#forge:rods/cast_iron",
                B: "#forge:ingots/cast_iron",
            }
        ],
        [
            "create:display_board", 2, [
                "AB",
            ], {
                A: "#forge:plates/cast_iron",
                B: "create:electron_tube",
            }
        ],
        [
            "create:hose_pulley", [
                " A ",
                "BBB",
                " C ",
            ], {
                A: "create:copper_casing",
                B: "frostedheart:vulcanized_rubber",
                C: "#forge:plates/copper",
            }
        ],
        [
            "create:elevator_pulley", [
                " A ",
                "BBB",
                " C ",
            ], {
                A: "create:brass_casing",
                B: "frostedheart:vulcanized_rubber",
                C: "#forge:plates/cast_iron",
            }
        ],
        [
            "minecraft:redstone_lamp", [
                " A ",
                "ABA",
                " A ",
            ], {
                A: "minecraft:redstone",
                B: "immersiveengineering:light_bulb",
            }
        ],
        [
            "immersiveengineering:lantern", 4, [
                " A ",
                "CBC",
                " A ",
            ], {
                A: "#forge:plates/iron",
                B: "minecraft:lantern",
                C: "minecraft:glass_pane",
            }
        ],
        [
            "supplementaries:redstone_illuminator", [
                " A ",
                "ABA",
                " A ",
            ], {
                A: "minecraft:redstone",
                B: "minecraft:redstone_lamp",
            }
        ],
        [
            "supplementaries:stone_lamp", [
                "AAA",
                "ABA",
                "AAA",
            ], {
                A: "minecraft:stone",
                B: "minecraft:lantern",
            }
        ],
        [
            "supplementaries:deepslate_lamp", [
                "AAA",
                "ABA",
                "AAA",
            ], {
                A: "minecraft:deepslate",
                B: "minecraft:lantern",
            }
        ],
        [
            "supplementaries:blackstone_lamp", [
                "AAA",
                "ABA",
                "AAA",
            ], {
                A: "minecraft:blackstone",
                B: "minecraft:lantern",
            }
        ],
        [
            "storagedrawers:illumination_upgrade", 12, [
                "CAC",
                "ABA",
                "CAC",
            ], {
                A: "#forge:rods/wooden",
                B: "storagedrawers:upgrade_template",
                C: "immersiveengineering:light_bulb",
            }
        ],
        [
            "immersiveengineering:fluorescent_tube", [
                "CAC",
                "CBC",
                "CBC",
            ], {
                A: 'immersiveengineering:graphite_electrode',
                B: "minecraft:redstone",
                C: "#forge:glass",
            }
        ],

    ]
    changeShapedRecipes.forEach((recipe, index) => {
        let [
            output,
            quantity,
            pattern,
            keys
        ] = recipe.length === 4 ? recipe : [recipe[0], 1, recipe[1], recipe[2]]

        // Ensure that the output is a valid item ID and NBT processing
        if (Array.isArray(output)) {
            // If it is an item with NBT
            let [itemID, nbt] = output
            // Ensure that the NBT is an object, even if it is empty
            output = Item.of(itemID, quantity).withNBT(nbt || {})
        } else {
            // Ordinary items, default without NBT
            output = Item.of(output, quantity)
        }

        // Remove old recipes
        event.remove({output: output, type: "minecraft:crafting_shaped"})
        event.remove({output: output, type: "minecraft:crafting_shapeless"})

        // Add new Recipes
        kubejs.shaped(output, pattern, keys)
            .id(`the_winter_rescue:minecraft/crafting_shaped/change/${index}`)
    })
})