ServerEvents.tags("item", (event) => {
    // Ores
    event.add("forge:crushed_raw_materials/silver", "create:crushed_raw_silver")
    event.add("forge:crushed_raw_materials/lead", "create:crushed_raw_lead")
    event.add("forge:dusts/aluminum_hydroxide", "frostedheart:aluminium_hydroxide_dust")


    let colors = [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "light_gray",
        "cyan",
        "purple",
        "blue",
        "brown",
        "black",
        "green",
        "red"
    ]
    colors.forEach((clr) => {
        event.add("minecraft:shulker_box", `minecraft:${clr}_shulker_box`)
    })
    event.add("itemfilters:check_nbt", "tetra:modular_double")
    event.add("forge:plates/bronze", "steampowered:bronze_sheet")
    event.add("forge:plates/cast_iron", "frostedheart:cast_iron_sheet")
    event.add("forge:plates/tungsten_steel", "frostedheart:tungsten_steel_sheet")
    event.add("forge:ingots/tungsten_steel", "frostedheart:tungsten_steel_ingot")
    event.add("forge:plates/battery_alloy", "frostedheart:lead_sheet")
    event.add("forge:ingots/battery_alloy", "frostedheart:lead_ingot")
    event.add("forge:dusts/wood", "frostedheart:sawdust")
    event.add("forge:rods/cast_iron", "frostedheart:cast_iron_rod")
    event.add("frostedheart:ash", "charcoal_pit:ash")
    event.add("frostedheart:cow_feed", "charcoal_pit:straw")
    event.add("kubejs:coal_dust", "kubejs:coal_dust")
    event.add("forge:dusts/zinc", "frostedheart:zinc_dust")
    event.add("kubejs:tetra_hammer", "tetra:modular_double")
    event.add("forge:hammers", "tetra:modular_double")
    event.add("forge:swords", "tetra:modular_sword")
    event.add("minecraft:axes", "tetra:modular_double")
    event.add("minecraft:swords", "tetra:modular_sword")

    event.add("minecraft:shulker_box", "minecraft:shulker_box")
    event.add("caupona:meats/meat", "frostedheart:military_rations")
    event.add("caupona:meats", "frostedheart:chocolate")
    event.add("caupona:eggs", "crockpot:cooked_egg")
    event.add("forge:string", "stone_age:grass_lead")
    event.add("forge:string", "stone_age:leather_strip")
    event.add("forge:raw_materials/magnesium", "frostedheart:raw_magnesite")

    event.add("caupona:container", "#frostedheart:thermos")
	event.add("caupona:container", "frostedheart:leather_water_bag")
	event.add("caupona:container", "frostedheart:wooden_cup")
	event.add("caupona:container", "frostedheart:wooden_cup_drink")
	event.add("caupona:container", "frostedheart:iron_bottle")
	event.add("caupona:container", "frostedheart:fluid_bottle")

    event.add("the_winter_rescue:bloom_nickel", [
        "immersiveengineering:raw_nickel",
        "charcoal_pit:bloom_nickel_cool",
        "charcoal_pit:bloom_nickel_fail"
    ])
    event.add("the_winter_rescue:bloom_iron", [
        "minecraft:raw_iron",
        "charcoal_pit:bloom_cool",
        "frostedheart:raw_pyrite",
        "charcoal_pit:bloom_fail",
        "frostedheart:rusted_iron_ingot"
    ])
    event.add("the_winter_rescue:flour", [
        "stone_age:flour",
        "frostedheart:rye_flour"
    ])
    event.add("the_winter_rescue:flux_block", [
        "minecraft:dripstone_block",
        "minecraft:pointed_dripstone",
        "minecraft:calcite",
        "create:limestone"
    ])
    event.add("the_winter_rescue:cogwheels", [
        "steampowered:bronze_cogwheel",
        "steampowered:cast_iron_cogwheel",
        "steampowered:steel_cogwheel"
    ])
    event.add("the_winter_rescue:large_cogwheels", [
        "steampowered:bronze_large_cogwheel",
        "steampowered:cast_iron_large_cogwheel",
        "steampowered:steel_large_cogwheel"
    ])
    event.add("immersiveengineering:forbidden_in_crates", [
        "#create:toolboxes",
        "tetra:modular_toolbelt",
        "#charcoal_pit:ceramic_pots",
        "charcoal_pit:clay_pot",
        "#storagedrawers:drawers",
        "storagedrawers:compacting_drawers_3"
    ])
    event.add("kubejs:fuel_stick", [
        "frostedheart:charcoal_stick",
        "frostedheart:coal_stick",
        "kubejs:straw_briquette"
    ])
    event.add("kubejs:kiln_dust", [
        "kubejs:charcoal_dust",
        "kubejs:coal_dust"
    ])
    event.add("kubejs:fuel_glue", [
        "minecraft:slime_ball",
        "create:dough",
        "#forge:bitumen"
    ])
    event.add("kubejs:straw_briquettes", [
        "kubejs:wet_straw_briquette",
        "kubejs:straw_briquette"
    ])
    event.add("caupona:cereals/baked", [
        "frostedheart:military_rations",
        "frostedheart:rye_bread",
        "stone_age:raw_bread"
    ])
    event.add("caupona:meats", [
        "stone_age:venison",
        "stone_age:fowl_meat",
        "stone_age:auroch_meat",
        "stone_age:tiger_meat",
        "stone_age:mouflon_meat",
        "stone_age:boar_meat",
        "stone_age:rhino_meat",
        "stone_age:mammoth_meat"
    ])
    event.add("caupona:meats/meat", [
        "stone_age:fat",
        "stone_age:venison",
        "stone_age:fowl_meat",
        "stone_age:auroch_meat",
        "stone_age:tiger_meat",
        "stone_age:mouflon_meat",
        "stone_age:boar_meat",
        "stone_age:rhino_meat",
        "stone_age:mammoth_meat"
    ])

    event.add("caupona:vegetables", [
        "frostedheart:white_turnip_block",
        "frostedheart:dried_vegetables",
        "frostedheart:military_rations"
    ])
    event.add("frostedheart:mushroom_base", [
        "frostedheart:straw_briquette_red_mushroom",
        "frostedheart:straw_briquette_brown_mushroom"
    ])
    event.add("the_winter_rescue:leather", [
        "minecraft:leather",
        "#forge:rubber"
    ])
    event.add("frostedheart:electronic_junk", [
        "kubejs:damaged_gpu",
        "kubejs:damaged_circuit_board",
        "kubejs:damaged_electric_motor",
        "kubejs:damaged_camera",
        "kubejs:burnt_circuit_board",
        "kubejs:broken_robot_1",
        "kubejs:broken_robot_2"
    ])
    event.add("frostedheart:garbage", [
        "frostedheart:rusted_iron_ingot",
        "frostedheart:rusted_copper_ingot",
        "minecraft:flint"
    ])
    event.add("frostedheart:raw_food", [
        "minecraft:chicken",
        "minecraft:porkchop",
        "minecraft:mutton",
        "minecraft:rabbit",
        "minecraft:beef",
        "stone_age:venison",
        "stone_age:fowl_meat",
        "stone_age:auroch_meat",
        "stone_age:tiger_meat",
        "stone_age:mouflon_meat",
        "stone_age:boar_meat",
        "stone_age:rhino_meat",
        "stone_age:mammoth_meat"
    ])
    event.add("frostedheart:bad_food", [
        "stone_age:venison",
        "stone_age:fowl_meat",
        "stone_age:auroch_meat",
        "stone_age:tiger_meat",
        "stone_age:mouflon_meat",
        "stone_age:boar_meat",
        "stone_age:rhino_meat",
        "stone_age:mammoth_meat"
    ])
    event.add("caupona:aspics", [
        "minecraft:snowball",
        "minecraft:snow_block"
    ])
    // event.remove("forge:ingots", [
    //     "create:andesite_alloy"
    // ])
    // event.remove("create:create_ingots", [
    //     "create:andesite_alloy"
    // ])
    // event.remove("forge:storage_blocks", [
    //     "create:andesite_alloy_block"
    // ])
    // event.remove("forge:storage_blocks/andesite_alloy", [
    //     "create:andesite_alloy_block"
    // ])

    // Why we disable ftb ultimine? We consider it have a bad impact on player experience, since it greatly reduce difficulty of this modpack and can easily cause bug or cheat.
    // 为何要禁止连锁挖矿？我们以前认为使用连锁挖矿是个人行为，可以让后期不想挖矿的玩家偷懒。
    // 但是部分玩家和游戏UP向各种所有玩家推荐连锁挖矿。
    // 甚至一些新手玩家刚刚下载整合包就已经前来询问连锁挖矿相关问题，并直接安装连锁挖矿，而不是先体验整合包内容。
    // 而新手玩家上手直接使用连锁挖矿显然是非常影响整体游戏体验的，也与我们设计的初衷相悖，因此我们被迫提高连锁挖矿的门槛。
    // 如果你坚持要使用连锁挖矿，可以自行把对应的内容去除，但是出现任何问题后果自负。并且请不要向他人宣传连锁挖矿。
    // 最终，我们是不推荐擅自修改整合包内容的，这样极大降低游戏体验。如果实在要爽，不如直接开创造。
    event.add("ftbultimine:included_tools", "create:cogwheel")


    /*	let metalGroup = [
            "netherite",
            "gold",
            "steel",
            "titanium",
            "iron",
            "electrum",
            "aluminum",
            "magnesium",
            "nickel",
            "bronze",
            "tin",
            "copper",
            "lead",
            "sodium",
            "silver",
            "duralumin",
            "uranium",
            "constantan",
            "invar",
            "brass",
            "zinc",
            "tungsten",
            "tungsten_steel",
            "cast_iron"
        ]*/

    const structuralMetals = [
        "steel",
        "titanium",
        "iron",
        "aluminum",
        "duralumin",
        "cast_iron",
        "bronze",
    ];

    const conductiveMetals = [
        "gold",
        "copper",
        "silver",
        "electrum",
        "iron",
        "steel"
    ];

    const heatingMetals = [
        "copper",
        "constantan",
        "nickel"
    ]

    const corrosionResistantMetals = [
        "titanium",
        "nickel",
        "silver",
        "gold",
        "invar"
    ];

    const lightweightMetals = [
        "aluminum",
        "magnesium",
        "titanium",
        "duralumin"
    ];

    const highTemperatureAlloys = [
        "tungsten",
        "tungsten_steel",
        "invar",
        "netherite",
        "nickel"
    ];

    const magneticMetals = [
        "iron",
        "nickel",
        "steel"
    ];

    structuralMetals.forEach((material) => {
        event.add("twr:nuggets/structural", [
            `#forge:nuggets/${material}`
        ])

        event.add("twr:ingots/structural", [
            `#forge:ingots/${material}`
        ])

        event.add("twr:plates/structural", [
            `#forge:plates/${material}`
        ])

        event.add("twr:storage_blocks/structural", [
            `#forge:storage_blocks/${material}`
        ])

        event.add("twr:rods/structural", [
            `#forge:rods/${material}`
        ])

        event.add("twr:wires/structural", [
            `#forge:wires/${material}`
        ])
    })

    conductiveMetals.forEach((material) => {
        event.add("twr:nuggets/conductive", [
            `#forge:nuggets/${material}`
        ])

        event.add("twr:ingots/conductive", [
            `#forge:ingots/${material}`
        ])

        event.add("twr:plates/conductive", [
            `#forge:plates/${material}`
        ])

        event.add("twr:storage_blocks/conductive", [
            `#forge:storage_blocks/${material}`
        ])

        event.add("twr:rods/conductive", [
            `#forge:rods/${material}`
        ])

        event.add("twr:wires/conductive", [
            `#forge:wires/${material}`
        ])
    })

    heatingMetals.forEach((material) => {
        event.add("twr:nuggets/heating", [
            `#forge:nuggets/${material}`
        ])

        event.add("twr:ingots/heating", [
            `#forge:ingots/${material}`
        ])

        event.add("twr:plates/heating", [
            `#forge:plates/${material}`
        ])

        event.add("twr:storage_blocks/heating", [
            `#forge:storage_blocks/${material}`
        ])

        event.add("twr:rods/heating", [
            `#forge:rods/${material}`
        ])

        event.add("twr:wires/heating", [
            `#forge:wires/${material}`
        ])
    })

    highTemperatureAlloys.forEach((material) => {
        event.add("twr:nuggets/high_temp", [
            `#forge:nuggets/${material}`
        ])

        event.add("twr:ingots/high_temp", [
            `#forge:ingots/${material}`
        ])

        event.add("twr:plates/high_temp", [
            `#forge:plates/${material}`
        ])

        event.add("twr:storage_blocks/high_temp", [
            `#forge:storage_blocks/${material}`
        ])

        event.add("twr:rods/high_temp", [
            `#forge:rods/${material}`
        ])

        event.add("twr:wires/high_temp", [
            `#forge:wires/${material}`
        ])
    })

    lightweightMetals.forEach((material) => {
        event.add("twr:nuggets/light", [
            `#forge:nuggets/${material}`
        ])

        event.add("twr:ingots/light", [
            `#forge:ingots/${material}`
        ])

        event.add("twr:plates/light", [
            `#forge:plates/${material}`
        ])

        event.add("twr:storage_blocks/light", [
            `#forge:storage_blocks/${material}`
        ])

        event.add("twr:rods/light", [
            `#forge:rods/${material}`
        ])

        event.add("twr:wires/light", [
            `#forge:wires/${material}`
        ])
    })

    corrosionResistantMetals.forEach((material) => {
        event.add("twr:nuggets/resistant", [
            `#forge:nuggets/${material}`
        ])

        event.add("twr:ingots/resistant", [
            `#forge:ingots/${material}`
        ])

        event.add("twr:plates/resistant", [
            `#forge:plates/${material}`
        ])

        event.add("twr:storage_blocks/resistant", [
            `#forge:storage_blocks/${material}`
        ])

        event.add("twr:rods/resistant", [
            `#forge:rods/${material}`
        ])

        event.add("twr:wires/resistant", [
            `#forge:wires/${material}`
        ])
    })

    magneticMetals.forEach((material) => {
        event.add("twr:nuggets/magnetic", [
            `#forge:nuggets/${material}`
        ])

        event.add("twr:ingots/magnetic", [
            `#forge:ingots/${material}`
        ])

        event.add("twr:plates/magnetic", [
            `#forge:plates/${material}`
        ])

        event.add("twr:storage_blocks/magnetic", [
            `#forge:storage_blocks/${material}`
        ])

        event.add("twr:rods/magnetic", [
            `#forge:rods/${material}`
        ])

        event.add("twr:wires/magnetic", [
            `#forge:wires/${material}`
        ])
    })

    const hardnessRankedMetals = [
        "tungsten",        // ~7.5 (very hard, brittle)
        "titanium",        // ~6 (strong, corrosion-resistant)
        "steel",           // ~4–8 (depends on carbon and treatment; tool steel is very hard)
        "cast_iron",       // ~5.5 (brittle but relatively hard)
        "invar",           // ~5.5 (nickel-iron alloy)
        "nickel",          // ~4
        "iron",            // ~4
        "bronze",          // ~3–4
        "brass",           // ~3–4
        "constantan",      // ~3–3.5
        "duralumin",       // ~2.5–3 (aluminum alloy)
        "aluminum",        // ~2.5–3
        "electrum",        // ~2.5–3 (soft due to gold/silver)
        "silver",          // ~2.5–3
        "copper",          // ~2.5–3
        "gold",            // ~2.5–3 (very soft in pure form)
        "lead",            // ~1.5 (very soft)
        "tin",             // ~1.5
        "zinc",            // ~2.5
        "magnesium",       // ~2.5
        "sodium",          // ~0.5 (very soft, cuts with knife)
    ];

    const hardMetals = [
        "tungsten",        // ~7.5 (very hard, brittle)
        "tungsten_steel",
        "titanium",        // ~6 (strong, corrosion-resistant)
        "steel",           // ~4–8 (depends on carbon and treatment; tool steel is very hard)
        "cast_iron",       // ~5.5 (brittle but relatively hard)
    ];

    hardMetals.forEach((material) => {
        event.add("twr:nuggets/hard", [
            `#forge:nuggets/${material}`
        ])

        event.add("twr:ingots/hard", [
            `#forge:ingots/${material}`
        ])

        event.add("twr:plates/hard", [
            `#forge:plates/${material}`
        ])

        event.add("twr:storage_blocks/hard", [
            `#forge:storage_blocks/${material}`
        ])

        event.add("twr:rods/hard", [
            `#forge:rods/${material}`
        ])

        event.add("twr:wires/hard", [
            `#forge:wires/${material}`
        ])
    })

    const heavyMetals = [
        "tungsten",        // ~19.3 g/cm³
        "tungsten_steel",
        "uranium",         // ~18.9 g/cm³
        "gold",            // ~19.3 g/cm³
        "lead",            // ~11.3 g/cm³
        "silver",          // ~10.5 g/cm³
    ];

    heavyMetals.forEach((material) => {
        event.add("twr:nuggets/heavy", [
            `#forge:nuggets/${material}`
        ])

        event.add("twr:ingots/heavy", [
            `#forge:ingots/${material}`
        ])

        event.add("twr:plates/heavy", [
            `#forge:plates/${material}`
        ])

        event.add("twr:storage_blocks/heavy", [
            `#forge:storage_blocks/${material}`
        ])

        event.add("twr:rods/heavy", [
            `#forge:rods/${material}`
        ])

        event.add("twr:wires/heavy", [
            `#forge:wires/${material}`
        ])
    })

    /*metalGroup.forEach((material) => {
        event.get(`forge:ingots/metal/${material}`)
            .add(`#forge:ingots/${material}`)
        event.get(`forge:ingots/metal`)
            .add(`#forge:ingots/${material}`)

        event.get(`forge:nuggets/metal/${material}`)
            .add(`#forge:nuggets/${material}`)
        event.get(`forge:nuggets/metal`)
            .add(`#forge:nuggets/${material}`)

        event.get(`forge:plates/metal/${material}`)
            .add(`#forge:plates/${material}`)
        event.get(`forge:plates/metal`)
            .add(`#forge:plates/${material}`)

        event.get(`forge:storage_blocks/metal/${material}`)
            .add(`#forge:storage_blocks/${material}`)
        event.get(`forge:storage_blocks/metal`)
            .add(`#forge:storage_blocks/${material}`)
    })*/
})