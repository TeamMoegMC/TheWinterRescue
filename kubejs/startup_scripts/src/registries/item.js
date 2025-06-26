console.info("[KUBEJS_THE_WINTER_RESCUE] TWR Items Registered!")

StartupEvents.registry("item", (event) => {

    let generalItems = [
        "clay_bucket",
        "activated_carbon",
        "constantan_coil",
        "cut_stone",
        "sawdust_rye_dough",

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

        "incomplete_bronze_cogwheel",
        "incomplete_cast_iron_cogwheel",
        "incomplete_steel_cogwheel",
        "incomplete_large_bronze_cogwheel",
        "incomplete_large_cast_iron_cogwheel",
        "incomplete_large_steel_cogwheel",
    ]

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
        generalItems.push(`${plate}_plate`)
    })

    generalItems.forEach((item) => {
        event.create(item)
    })

    let createTransitionalItems = [
        "incomplete_capacitor_lv",
        "incomplete_capacitor_mv",
        "incomplete_capacitor_hv"
    ]
    createTransitionalItems.forEach((item) => {
        event.create(item, "create:sequenced_assembly")
            .texture(`kubejs:item/transitional/${item}`)
    })
})