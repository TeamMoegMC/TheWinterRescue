console.info("[KUBEJS_THE_WINTER_RESCUE] TWR Items Registered!")

StartupEvents.registry("item", (event) => {
    let rankineItems = [
        // "mortar",
        // "vulcanized_rubber",
        // "pulp",
        // "fire_clay_ball",
        // "high_refractory_brick",
        // "kaolinite", // become frostedheart:kaolin, and block is frostedheart:kaolin_block
        // "sawdust",
        // "biomass",
        // "synthetic_leather",
        // "sodium_sulfide", // become with dust
        // "sodium_ingot",
        // "sodium_hydroxide", // become with dust
        // "alumina", // become with dust
        // "sodium_chloride", // become with dust
        // "sulfur", // become with dust
        // "refractory_brick", 
        // "quicklime",
        // "magnesia", // become with dust
        "asparagus",
        "artist_conk_mushroom",
        "tinder_conk_mushroom",
        "turkey_tail_mushroom",
        "cinnabar_polypore_mushroom"
    ]

    let rankineTools = [
        "flint_knife",
        "flint_axe",
        "flint_pickaxe",
        "flint_shovel",
        "flint_hoe",
        "flint_spear",
        "bronze_knife",
        "bronze_axe",
        "bronze_pickaxe",
        "bronze_shovel",
        "bronze_hoe",
        "bronze_spear",
        "stone_hammer",
        "bronze_hammer",
        "invar_shovel",
        "snow_shoes",
        "ice_shoes",
        "diving_helmet"
    ]

    let generalItems = [
        "flux",
        "clay_bucket",
        "activated_carbon",
        "aluminium_oxide_dust",
        "constantan_coil",

        // Frozen meats
        "frozen_auroch_meat",
        "frozen_beef",
        "frozen_boar_meat",
        "frozen_chicken",
        "frozen_fat",
        "frozen_fowl_meat",
        "frozen_mammoth_meat",
        "frozen_mouflon_meat",
        "frozen_mutton",
        "frozen_porkchop",
        "frozen_rhino_meat",
        "frozen_tiger_meat",
        "frozen_venison",
        "frozen_rabbit",
        "frozen_white_turnip",

        // graphite
        "bounded_graphite",
        "shaped_bounded_graphite",
        "rough_graphite_electrode",

        // nutrition labels
        "fruits_and_vegs",
        "grains",
        "plant_oil",
        "protein",
        "diabetes_risks",
        "vitamin_toxicity",

        // Broken items
        "damaged_gpu",
        "damaged_circuit_board",
        "damaged_electric_motor",
        "damaged_camera",
        "burnt_circuit_board",
        "broken_robot_1",
        "broken_robot_2",

        // Tech parts
        "servo_core",
        "motor",
        "pcb_base",

        // Chemistry
        "creosoted_sawdust",
    ];

    let ingots = []

    let nuggets = []

    let plates = []

    ingots.forEach((ingot) => {
        generalItems.push(`${ingot}_ingot`)
    })

    nuggets.forEach((nugget) => {
        generalItems.push(`${nugget}_nugget`)
    })

    plates.forEach((plate) => {
        generalItems.push(`${plate}_plate`);
    });

    generalItems.forEach((item) => {
        event.create(item).texture(`kubejs:item/${item}`);
    });

    // rankineItems.forEach((item) => {
    // 	event.create(item).texture(`kubejs:item/${item}`);
    // });

    // rankineTools.forEach((item) => {
    // 	event.create(item).texture(`kubejs:item/${item}`);
    // });

    let createTransitionalItems = [
        "incomplete_capacitor_lv",
        "incomplete_capacitor_mv",
        "incomplete_capacitor_hv"
    ]
    createTransitionalItems.forEach((item) => {
        event.create(item)
            .texture(`kubejs:item/transitional/${item}`)
    })
})