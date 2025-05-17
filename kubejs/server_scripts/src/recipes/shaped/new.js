/**
 * For creating all standard minecraft:crafting_shaped recipes
 */
ServerEvents.recipes((event) => {
    let {kubejs} = event.recipes

    let addShapedRecipes = [
        [
            "frostedheart:snowshoes", [
            "B  ",
            "BBB",
            "AAA"
        ], {
            A: "#minecraft:planks",
            B: "minecraft:leather"
        }
        ],
        [
            "frostedheart:snowshoes", [
            "B  ",
            "BBB",
            "AAA"
        ], {
            A: "#minecraft:planks",
            B: "stone_age:grass_mesh"
        }
        ],
        [
            "frostedheart:ice_skates", [
            "A  ",
            "AAA",
            "BBB"
        ], {
            A: "#forge:leather",
            B: "#forge:nuggets/iron"
        }
        ],
        [
            "frostedheart:sled", [
            "A  ",
            "AAA",
            "BBB"
        ], {
            A: "#forge:treated_wood",
            B: "#forge:rods/treated_wood"
        }
        ],
        [
            "stone_age:dried_grass_bed", [
            "  B",
            "BBB",
            "AAA"
        ], {
            A: "#minecraft:wooden_slabs",
            B: "charcoal_pit:straw"
        }
        ],
        [
            "charcoal_pit:log_pile", [
            "AAA",
            "AAA",
            "AAA"
        ], {
            A: "#minecraft:logs_that_burn"
        }
        ],
        [
            "stone_age:millstone", [
            " B ",
            " C ",
            "AAA"
        ], {
            A: "#forge:stone",
            B: "minecraft:stick",
            C: "minecraft:stone"
        }
        ],
        [
            "stone_age:stone_chest", [
            "BBB",
            "ACA",
            "AAA"
        ], {
            A: "minecraft:stone",
            B: "minecraft:stone_slab",
            C: "minecraft:clay_ball"
        }
        ],
        [
            "stone_age:grass_mesh", [
            "AAA",
            "AAA",
            "AAA"
        ], {
            A: "stone_age:grass_lead"
        }
        ],
        [
            "stone_age:cobweb_mesh", [
            "AAA",
            "AAA",
            "AAA"
        ], {
            A: "minecraft:string"
        }
        ],
        [
            "stone_age:fishing_net", [
            "BAB",
            "ACA",
            "BAB"
        ], {
            A: "#twr:advanced_string",
            B: "#forge:rods/treated_wood",
            C: "#forge:treated_wood_slab"
        }
        ],
        [
            "stone_age:fishing_net", [
            "BAB",
            "ACA",
            "BAB"
        ], {
            A: "#forge:wires/copper",
            B: "#forge:rods/treated_wood",
            C: "#forge:treated_wood_slab"
        }
        ],
        [
            "stone_age:feeder", [
            "BCB",
            "ACA",
            "BCB"
        ], {
            A: "#minecraft:logs",
            B: "#forge:crops/wheat",
            C: "#minecraft:wooden_slabs"
        }
        ],
        [
            "stone_age:tanning_rack", [
            "A A",
            " A ",
            "AAA"
        ], {
            A: "#forge:rods/wooden"
        }
        ],
        [
            "minecraft:crafting_table", [
            "AA",
            "AA"
        ], {
            A: "#minecraft:planks"
        }
        ],
        [
            "stone_age:drying_rack", [
            "AA",
            "AA"
        ], {
            A: "#forge:rods/wooden"
        }
        ],
        [
            "frostedheart:makeshift_pickaxe", [
            "CC",
            "BA"
        ], {
            A: "#forge:rods/wooden",
            B: "#forge:string",
            C: "#twr:sharp_materials"
        }
        ],
        [
            "frostedheart:makeshift_axe", [
            "CB",
            "CA"
        ], {
            A: "#forge:rods/wooden",
            B: "#forge:string",
            C: "#twr:sharp_materials"
        }
        ],
        [
            "frostedheart:makeshift_shovel", [
            "BC",
            " A"
        ], {
            A: "#forge:rods/wooden",
            B: "#forge:string",
            C: "#twr:sharp_materials"
        }
        ],
        [
            "frostedheart:makeshift_knife", [
            "A ",
            " A"
        ], {
            A: "#twr:sharp_materials"
        }
        ],
        [
            "frostedheart:makeshift_hoe", [
            "CB",
            " A"
        ], {
            A: "#forge:rods/wooden",
            B: "#forge:string",
            C: "#twr:sharp_materials"
        }
        ],
        [
            "stone_age:tree_stump", [
            "AA",
            "BB"
        ], {
            A: "#minecraft:logs",
            B: "minecraft:stone",
        }
        ],
        [
            "frostedheart:stone_hammer", [
            "CC",
            "BA"
        ], {
            A: "#forge:rods/wooden",
            B: "#forge:string",
            C: "#forge:stone"
        }
        ],
        [
            "minecraft:campfire", [
            "AA",
            "BB"
        ], {
            A: "charcoal_pit:straw",
            B: "#minecraft:logs",
        }
        ],
        [
            "frostedheart:heat_incubator", [
            "  D",
            " CA",
            "DBD"
        ], {
            A: "frostedheart:heat_pipe",
            B: "#forge:plates/cast_iron",
            C: "frostedheart:incubator",
            D: "#forge:plates/copper"
        }
        ],
        [
            "frostedheart:gas_vent", [
            "ABA",
            "BCB"
        ], {
            A: "#forge:plates/invar",
            B: "immersiveengineering:fluid_pipe",
            C: "#forge:plates/steel"
        }
        ],
        [
            "immersiveengineering:radiator", 2, [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: "immersiveengineering:sheetmetal_steel",
            B: "#forge:plates/steel",
            C: "immersiveengineering:plantoil_bucket"
        }
        ],
        [
            "frostedresearch:rubbing_pad", [
            "A",
            "B",
        ], {
            A: "#forge:plates/cast_iron",
            B: "#forge:ingots/cast_iron"
        }
        ],
        [
            "kubejs:motor", [
            " AC",
            "ABA",
            " A "
        ], {
            A: "immersiveengineering:wirecoil_copper",
            B: "#forge:rods/cast_iron",
            C: "#forge:plates/aluminum"
        }
        ],
        [
            "create:filter", [
            "A A",
            "B B",
            "A A"
        ], {
            A: "minecraft:string",
            B: "#forge:nuggets/iron"
        }
        ],
        [
            "create:attribute_filter", [
            "A A",
            "B B",
            "A A"
        ], {
            A: "minecraft:string",
            B: "#forge:nuggets/brass"
        }
        ],
        [
            "create:nozzle", [
            "ABA",
            "A A",
            "BBB"
        ], {
            A: "minecraft:string",
            B: "#forge:ingots/cast_iron"
        }
        ],
        [
            "frostedheart:oil_burner", [
            "A A",
            "AAA",
            "BBB"
        ], {
            A: "#forge:plates/copper",
            B: "minecraft:stone_bricks"
        }
        ],
        [
            "frostedheart:soil_thermometer", [
            "BDB",
            "ACA",
            " A "
        ], {
            A: "#forge:plates/iron",
            B: "minecraft:glass",
            C: "minecraft:redstone",
            D: "create:precision_mechanism"
        }
        ],
        [
            "frostedheart:buff_coat", [
            "AAA",
            "CBC",
            "AAA"
        ], {
            A: "minecraft:leather",
            B: "stone_age:fish_bone",
            C: "#twr:advanced_string"
        }
        ],
        [
            "frostedheart:gambeson", [
            "AAA",
            "CBC",
            "AAA"
        ], {
            A: "#minecraft:wool",
            B: "stone_age:fish_bone",
            C: "#twr:advanced_string"
        }
        ],
        [
            "frostedheart:kelp_lining", [
            "AAA",
            "CBC",
            "AAA"
        ], {
            A: "minecraft:dried_kelp",
            B: "stone_age:fish_bone",
            C: "#forge:string"
        }
        ],
        [
            "frostedheart:mercury_body_thermometer", [
            " BB",
            "BAB",
            "CB "
        ], {
            A: "minecraft:redstone",
            B: "minecraft:glass",
            C: "#forge:plates/iron"
        }
        ],
        [
            "frostedheart:heat_pipe", 6, [
            " B ",
            "ACA",
            " B "
        ], {
            A: "#forge:plates/cast_iron",
            B: "immersiveengineering:treated_wood_horizontal",
            C: "#forge:plates/copper"
        }
        ],
        [
            "frostedheart:heater_vest", [
            "ACA",
            "BDB",
            "ACA"
        ], {
            A: "#forge:plates/steel",
            B: "minecraft:leather",
            C: "#forge:plates/copper",
            D: "immersiveengineering:metal_barrel"
        }
        ],
        [
            "frostedheart:charger", [
            "CBC",
            "DCD",
            "AAA"
        ], {
            A: "immersiveengineering:treated_wood_horizontal",
            B: "#forge:plates/cast_iron",
            C: "#forge:plates/copper",
            D: "minecraft:bucket"
        }
        ],
        [
            "frostedheart:sauna_vent", [
            "DBD",
            "BCB",
            "AAA"
        ], {
            A: "immersiveengineering:treated_wood_horizontal",
            B: "#forge:plates/invar",
            C: "minecraft:bucket",
            D: "#forge:ingots/invar"
        }
        ],
        [
            "frostedheart:advanced_thermos", [
            "ABA",
            "CBC",
            "CBC"
        ], {
            A: "#forge:plates/iron",
            B: "#forge:plates/steel",
            C: "#forge:plates/aluminum"
        }
        ],
        [
            "frostedheart:iron_pro_pick", [
            "ABA",
            " B ",
            " B "
        ], {
            A: "#forge:ingots/iron",
            B: "immersiveengineering:stick_treated"
        }
        ],
        [
            "frostedheart:steel_pro_pick", [
            "ABA",
            " B ",
            " B "
        ], {
            A: "#forge:ingots/steel",
            B: "immersiveengineering:stick_treated"
        }
        ],
        [
            "frostedheart:iron_core_spade", [
            "A",
            "B",
            "B"
        ], {
            A: "#forge:plates/iron",
            B: "immersiveengineering:stick_treated"
        }
        ],
        [
            "frostedheart:steel_core_spade", [
            "A",
            "B",
            "B"
        ], {
            A: "#forge:plates/steel",
            B: "immersiveengineering:stick_treated"
        }
        ],
        [
            "frostedheart:iron_geologists_hammer", [
            "CBA",
            " B ",
            " B "
        ], {
            A: "#forge:plates/iron",
            B: "immersiveengineering:stick_treated",
            C: "#forge:ingots/iron"
        }
        ],
        [
            "frostedheart:steel_geologists_hammer", [
            "CBA",
            " B ",
            " B "
        ], {
            A: "#forge:plates/steel",
            B: "immersiveengineering:stick_treated",
            C: "#forge:ingots/steel"
        }
        ],
        [
            "immersiveengineering:rs_engineering", [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: "immersiveengineering:sheetmetal_iron",
            B: "#forge:plates/copper",
            C: "kubejs:servo_core"
        }
        ],
        [
            "create:shaft", 8, [
            "A",
            "A"
        ], {
            A: "#forge:rods/iron"
        }
        ],
        [
            "create:whisk", [
            " A ",
            "BAB",
            "BBB"
        ], {
            A: "#forge:rods/iron",
            B: "#forge:plates/iron"
        }
        ],
        [
            "create:basin", [
            "A A",
            "AAA"
        ], {
            A: "#forge:plates/iron"
        }
        ],
        [
            "create:precision_mechanism", [
            " B ",
            "DCD",
            " A "
        ], {
            A: "#forge:plates/brass",
            B: "create:electron_tube",
            C: "create:shaft",
            D: "#the_winter_rescue:cogwheels"
        }
        ],
        [
            "frostedheart:invar_block", [
            "AAA",
            "AAA",
            "AAA"
        ], {
            A: "#forge:plates/invar"
        }
        ],
        [
            "frostedheart:incubator", [
            "AAA",
            "A B",
            "BBB"
        ], {
            A: "#minecraft:planks",
            B: "minecraft:stone"
        }
        ],
        [
            "minecraft:arrow", 4, [
            "A",
            "B",
            "C"
        ], {
            A: "stone_age:bone_arrow_head",
            B: "#forge:rods/wooden",
            C: "#forge:feathers"
        }
        ],
        [
            "minecraft:arrow", 4, [
            "A",
            "B",
            "C"
        ], {
            A: "#twr:nuggets/structural",
            B: "#forge:rods/wooden",
            C: "#forge:feathers"
        }
        ],
        [
            "frostedheart:hand_stove", [
            " B ",
            "BAB",
            " B "
        ], {
            A: "#forge:clay",
            B: "#forge:plates/copper"
        }
        ],
        [
            "frostedheart:straw_lining", [
            "AAA",
            "CBC",
            "AAA"
        ], {
            A: "charcoal_pit:straw",
            B: "stone_age:fish_bone",
            C: "#forge:string"
        }
        ],
        [
            "frostedheart:thermos", [
            "ACA",
            "BCB",
            "BAB"
        ], {
            A: "#forge:plates/copper",
            B: "#minecraft:logs",
            C: "#minecraft:planks"
        }
        ],
        [
            "frostedheart:copper_pro_pick", [
            "ABA",
            " B ",
            " B "
        ], {
            A: "#forge:ingots/copper",
            B: "#forge:rods/wooden"
        }
        ],
        [
            "frostedheart:copper_core_spade", [
            "A",
            "B",
            "B"
        ], {
            A: "#forge:plates/copper",
            B: "#forge:rods/wooden"
        }
        ],
        [
            "frostedheart:copper_geologists_hammer", [
            "CBA",
            " B ",
            " B "
        ], {
            A: "#forge:plates/copper",
            B: "#forge:rods/wooden",
            C: "#forge:ingots/copper"
        }
        ],
        [
            "frostedheart:generator_brick", 4, [
            "ABA",
            "BAB",
            "ABA"
        ], {
            A: "minecraft:stone_bricks",
            B: "minecraft:brick"
        }
        ],
        [
            "frostedheart:generator_amplifier_r1", [
            "ABA",
            "DCD",
            "ABA"
        ], {
            A: "minecraft:stone_bricks",
            B: "minecraft:brick",
            C: "#forge:plates/copper",
            D: "minecraft:clay_ball"
        }
        ],
        [
            "frostedheart:generator_core_t1", [
            "ACA",
            "CBC",
            "ACA"
        ], {
            A: "minecraft:brick",
            B: "frostedheart:energy_core",
            C: "#forge:ingots/copper"
        }
        ],
        [
            "frostedheart:wooden_cup", 4, [
            "A A",
            "A A",
            " A "
        ], {
            A: "#minecraft:planks"
        }
        ],
        [
            "kubejs:wet_straw_briquette", [
            "AAA",
            "A A",
            "AAA"
        ], {
            A: "charcoal_pit:straw"
        }
        ],
        [
            "frostedheart:hide_hat", [
            "AAA",
            "A A",
            "B C"
        ], {
            A: "stone_age:raw_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:hide_jacket", [
            "ACA",
            "ABA",
            "AAA"
        ], {
            A: "stone_age:raw_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:hide_pants", [
            "ABA",
            "ACA",
            "A A"
        ], {
            A: "stone_age:raw_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:hide_boots", [
            "ABA",
            "ACA"
        ], {
            A: "stone_age:raw_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:hide_gloves", [
            "ABC"
        ], {
            A: "stone_age:raw_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        // rabbit
        [
            "frostedheart:rabbit_fur_hat", [
            "AAA",
            "A A",
            "B C"
        ], {
            A: "minecraft:rabbit_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:rabbit_fur_jacket", [
            "ACA",
            "ABA",
            "AAA"
        ], {
            A: "minecraft:rabbit_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:rabbit_fur_pants", [
            "ABA",
            "ACA",
            "A A"
        ], {
            A: "minecraft:rabbit_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:rabbit_fur_socks", [
            "ABA",
            "ACA"
        ], {
            A: "minecraft:rabbit_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:rabbit_fur_gloves", [
            "ABC"
        ], {
            A: "minecraft:rabbit_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        // wolf
        [
            "frostedheart:wolf_fur_hat", [
            "AAA",
            "A A",
            "B C"
        ], {
            A: "frostedheart:wolf_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:wolf_fur_jacket", [
            "ACA",
            "ABA",
            "AAA"
        ], {
            A: "frostedheart:wolf_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:wolf_fur_pants", [
            "ABA",
            "ACA",
            "A A"
        ], {
            A: "frostedheart:wolf_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:wolf_fur_socks", [
            "ABA",
            "ACA"
        ], {
            A: "frostedheart:wolf_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:wolf_fur_gloves", [
            "ABC"
        ], {
            A: "frostedheart:wolf_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        // fox
        [
            "frostedheart:fox_fur_hat", [
            "AAA",
            "A A",
            "B C"
        ], {
            A: "frostedheart:fox_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:fox_fur_jacket", [
            "ACA",
            "ABA",
            "AAA"
        ], {
            A: "frostedheart:fox_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:fox_fur_pants", [
            "ABA",
            "ACA",
            "A A"
        ], {
            A: "frostedheart:fox_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:fox_fur_socks", [
            "ABA",
            "ACA"
        ], {
            A: "frostedheart:fox_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:fox_fur_gloves", [
            "ABC"
        ], {
            A: "frostedheart:fox_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        // polar bear
        [
            "frostedheart:polar_bear_fur_hat", [
            "AAA",
            "A A",
            "B C"
        ], {
            A: "frostedheart:polar_bear_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:polar_bear_fur_jacket", [
            "ACA",
            "ABA",
            "AAA"
        ], {
            A: "frostedheart:polar_bear_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:polar_bear_fur_pants", [
            "ABA",
            "ACA",
            "A A"
        ], {
            A: "frostedheart:polar_bear_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:polar_bear_fur_socks", [
            "ABA",
            "ACA"
        ], {
            A: "frostedheart:polar_bear_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:polar_bear_fur_gloves", [
            "ABC"
        ], {
            A: "frostedheart:polar_bear_hide",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        // wool
        [
            "frostedheart:wool_hat", [
            "AAA",
            "A A",
            "B C"
        ], {
            A: "#minecraft:wool",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:wool_jacket", [
            "ACA",
            "ABA",
            "AAA"
        ], {
            A: "#minecraft:wool",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:wool_pants", [
            "AAA",
            "ABA",
            "ACA"
        ], {
            A: "#minecraft:wool",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:wool_boots", [
            "ABA",
            "ACA"
        ], {
            A: "#minecraft:wool",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:wool_gloves", [
            "ABC"
        ], {
            A: "#minecraft:wool",
            B: "#twr:advanced_string",
            C: "stone_age:fish_bone"
        }
        ],
        [
            "frostedheart:hay_hat", [
            "AAA",
            "A A",
            "B B"
        ], {
            A: "charcoal_pit:straw",
            B: "stone_age:grass_lead"
        }
        ],
        [
            "frostedheart:hay_jacket", [
            "ABA",
            "ABA",
            "AAA"
        ], {
            A: "charcoal_pit:straw",
            B: "stone_age:grass_lead"
        }
        ],
        [
            "frostedheart:hay_pants", [
            "AAA",
            "ABA",
            "ABA"
        ], {
            A: "charcoal_pit:straw",
            B: "stone_age:grass_lead"
        }
        ],
        [
            "frostedheart:hay_boots", [
            "ABA",
            "ABA"
        ], {
            A: "charcoal_pit:straw",
            B: "stone_age:grass_lead"
        }
        ],
        [
            "frostedheart:hay_gloves", [
            "ABA"
        ], {
            A: "charcoal_pit:straw",
            B: "stone_age:grass_lead"
        }
        ],
        [
            "kubejs:clay_bucket", [
            "A A",
            "A A",
            " A "
        ], {
            A: "minecraft:clay_ball"
        }
        ],
        [
            "frostedresearch:drawing_desk", [
            "BB ",
            "CAB",
            "AAB"
        ], {
            A: "#minecraft:planks",
            B: "#minecraft:wooden_slabs",
            C: "#forge:plates/copper"
        }
        ],
        [
            "frostedresearch:charcoal", [
            "A ",
            " A"
        ], {
            A: "#forge:charcoal"
        }
        ],
        [
            "comforts:sleeping_bag_brown", [
            "BBB",
            "ACA",
            "BBB"
        ], {
            A: "#twr:advanced_string",
            B: "#forge:leather",
            C: "frostedheart:straw_lining"
        }
        ],
        [
            "frostedheart:bronze_hammer", [
            "AAC",
            " BA",
            "B A"
        ], {
            A: "#forge:ingots/bronze",
            B: "#forge:rods/wooden",
            C: "#twr:advanced_string"
        }
        ],
        [
            "frostedheart:bronze_pickaxe", [
            "AAA",
            " B ",
            " B "
        ], {
            A: "#forge:ingots/bronze",
            B: "#forge:rods/wooden"
        }
        ],
        [
            "frostedheart:bronze_axe", [
            "AA",
            "AB",
            " B"
        ], {
            A: "#forge:ingots/bronze",
            B: "#forge:rods/wooden"
        }
        ],
        [
            "frostedheart:bronze_hoe", [
            "AA",
            " B",
            " B"
        ], {
            A: "#forge:ingots/bronze",
            B: "#forge:rods/wooden"
        }
        ],
        [
            "frostedheart:bronze_sword", [
            "A",
            "A",
            "B"
        ], {
            A: "#forge:ingots/bronze",
            B: "#forge:rods/wooden"
        }
        ],
        [
            "frostedheart:bronze_shovel", [
            "A",
            "B",
            "B"
        ], {
            A: "#forge:ingots/bronze",
            B: "#forge:rods/wooden"
        }
        ],
        [
            "frostedheart:bronze_knife", [
            " A",
            "B "
        ], {
            A: "#forge:ingots/bronze",
            B: "#forge:rods/wooden"
        }
        ],
        [
            "charcoal_pit:main_bloomery", [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: "frostedheart:mortar",
            B: "#forge:plates/bronze",
            C: "charcoal_pit:sandy_brick"
        }
        ],
        [
            "charcoal_pit:coal_pile", [
            "AAA",
            "A A",
            "AAA"
        ], {
            A: "minecraft:coal"
        }
        ],
        [
            "minecraft:lead", [
            "AA ",
            "A A",
            " AA"
        ], {
            A: "#forge:string"
        }
        ],
        /*[
            "supplementaries:lunch_basket", [
            "B B",
            "AAA",
            "BBB"
        ], {
            A: "stone_age:grass_mesh",
            B: "#forge:rods/treated_wood"
        }
        ],*/
        [
            "frostedheart:packed_snow_slab", 6, [
            "AAA"
        ], {
            A: "frostedheart:packed_snow"
        }
        ],
        [
            "minecraft:bell", 1, [
            "BBB",
            "ACA",
            "ACA"
        ], {
            A: "#forge:rods/iron",
            B: "#forge:rods/wooden",
            C: "#forge:plates/gold"
        }
        ],
        [
            "frostedheart:leather_water_bag", 1, [
            " B ",
            "ABA",
            " A "
        ], {
            A: "minecraft:leather",
            B: "#forge:string"
        }
        ],
        [
            "frostedheart:iron_bottle", 1, [
            "ABA",
            "A A",
            "AAA"
        ], {
            A: "#forge:plates/iron",
            B: "#forge:ingots/iron"
        }
        ],
        [
            "frostedheart:duralumin_sheetmetal", 4, [
            " A ",
            "A A",
            " A "
        ], {
            A: "#forge:plates/duralumin"
        }
        ],
        [
            "minecraft:torch", 4, [
            "A",
            "B"
        ], {
            A: "minecraft:coal",
            B: "#forge:rods/wooden",
        }
        ],
        [
            "minecraft:torch", 4, [
            "A",
            "B"
        ], {
            A: "minecraft:charcoal",
            B: "#forge:rods/wooden",
        }
        ],
        [
            "minecraft:leather_chestplate", 1, [
            "ABA",
            "ACA",
            "AAA"
        ], {
            A: "#forge:leather",
            B: "#forge:string",
            C: "stone_age:fish_bone",
        }
        ],
        [
            "minecraft:leather_chestplate", 1, [
            "ABA",
            "ACA",
            "AAA"
        ], {
            A: "#forge:leather",
            B: "#forge:string",
            C: "immersiveengineering:wirecutter"
        }
        ],
        [
            "minecraft:leather_helmet", 1, [
            "AAA",
            "A A",
            "B C"
        ], {
            A: "#forge:leather",
            B: "#forge:string",
            C: "stone_age:fish_bone",
        }
        ],
        [
            "minecraft:leather_helmet", 1, [
            "AAA",
            "A A",
            "B C"
        ], {
            A: "#forge:leather",
            B: "#forge:string",
            C: "immersiveengineering:wirecutter"
        }
        ],
        [
            "minecraft:leather_boots", 1, [
            "ABA",
            "ACA"
        ], {
            A: "#forge:leather",
            B: "#forge:string",
            C: "stone_age:fish_bone",
        }
        ],
        [
            "minecraft:leather_boots", 1, [
            "ABA",
            "ACA"
        ], {
            A: "#forge:leather",
            B: "#forge:string",
            C: "immersiveengineering:wirecutter"
        }
        ],
        [
            "minecraft:leather_leggings", 1, [
            "AAA",
            "ABA",
            "ACA"
        ], {
            A: "#forge:leather",
            B: "#forge:string",
            C: "stone_age:fish_bone",
        }
        ],
        [
            "minecraft:leather_leggings", 1, [
            "AAA",
            "ABA",
            "ACA"
        ], {
            A: "#forge:leather",
            B: "#forge:string",
            C: "immersiveengineering:wirecutter"
        }
        ],
        [
            "caupona:wolf_statue", 1, [
                "AA ",
                "ABC",
                " D "
            ], {
                A: "#forge:ingots/copper",
                B: "frostedheart:temperature_probe",
                C: "minecraft:lightning_rod",
                D: "minecraft:cut_copper"
            }
        ],
        [
            "caupona:wolf_statue", 1, [
                "AA ",
                "ABC",
                " D "
            ], {
                A: "#forge:ingots/copper",
                B: "frostedheart:temperature_probe",
                C: "minecraft:lightning_rod",
                D: "minecraft:copper_block"
            }
        ],
        [
            "minecraft:torch", 1, [
                "A",
                "B",
            ], {
                A: "#forge:raw_materials/peat",
                B: "#forge:rods/wooden"
            }
        ],
        [
            "supplementaries:rope", 2, [
                "A",
                "A",
                "A"
            ], {
                A: "stone_age:grass_lead"
            }
        ],
        [
            "kubejs:constantan_coil", 4, [
                " A ",
                "ABA",
                " A "
            ], {
                A: "#forge:wires/constantan",
                B: "#forge:rods/wooden"
            }
        ],
        [
            "frostedheart:rusted_copper_ingot", 1, [
                "AAA",
                "AAA",
                "AAA"
            ], {
                A: "frostedheart:rusted_copper_nugget",
            }
        ],
        [
            "frostedheart:rusted_iron_ingot", 1, [
                "AAA",
                "AAA",
                "AAA"
            ], {
                A: "frostedheart:rusted_iron_nugget",
            }
        ],
        [
            "frostedheart:gray_tin_ingot", 1, [
                "AAA",
                "AAA",
                "AAA"
            ], {
                A: "frostedheart:gray_tin_nugget",
            }
        ],
        [
            "create:linear_chassis", 4, [
                "BAB",
            ], {
                A: "#forge:plates/cast_iron",
                B: "#minecraft:logs",
            }
        ],
        [
            "create:radial_chassis", 4, [
                "B",
                "A",
                "B",
            ], {
                A: "#forge:plates/cast_iron",
                B: "#minecraft:logs",
            }
        ],
        [
            "frostedheart:basic_preserved_fertilizer", 3, [
                "AAA"
            ], {
                A: "#frostedheart:mulch_material"
            }
        ],
        [
            "frostedheart:advanced_preserved_fertilizer", 3, [
                "AAA"
            ], {
                A: "#frostedheart:advanced_mulch_material"
            }
        ],
        [
            "frostedheart:wardrobe", [
                "AAA",
                "BCB",
                "AAA",
            ], {
                A: "#forge:treated_wood_slab",
                B: "#forge:treated_wood",
                C: "minecraft:chest",
            }
        ],
        [
            "immersiveengineering:light_bulb", 3, [
                " A ",
                "BBB",
                " C ",
            ], {
                A: "#forge:glass",
                B: "#twr:basic_filament",
                C: "#forge:plates/copper",
            }
        ],
        [
            "immersiveengineering:light_bulb", 4, [
                " A ",
                " B ",
                " C ",
            ], {
                A: "#forge:glass",
                B: "#forge:nuggets/tungsten",
                C: "#forge:plates/copper",
            }
        ],
        [
            'frostedheart:peat_block', [
                "AA",
                "AA",
            ], {
                A: "frostedheart:peat",
            }
        ],
        [
            'frostedheart:bauxite_block', [
                "AA",
                "AA",
            ], {
                A: "frostedheart:bauxite",
            }
        ],
        [
            'frostedheart:kaolin_block', [
                "AA",
                "AA",
            ], {
                A: "frostedheart:kaolin",
            }
        ],

    ]
    addShapedRecipes.forEach((recipe, index) => {
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
        /*if (output==null)
        {
        console.log(keys)
        console.log(pattern)
        console.log(output)
        }*/
        // Add new Recipes
        kubejs.shaped(output, pattern, keys)
            .id(`the_winter_rescue:minecraft/crafting_shaped/new/${index}`)
    })
})