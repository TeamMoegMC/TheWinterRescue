//priority = 800

ServerEvents.recipes((event) => {
    let flint_workbench = [
        "minecraft:furnace"
    ]
    flint_workbench.forEach((Item) => {
        event.remove({ type: "stone_age:flint_workbench", output: Item })
    })
    let workbench = [
        "immersiveengineering:cloche",
        "immersiveengineering:dynamo",
        "immersiveengineering:drillhead_iron",
        "immersiveengineering:drillhead_steel",
        "immersiveengineering:circuit_table",
        "immersiveengineering:watermill",
        "immersiveengineering:windmill",
        "immersiveengineering:windmill_blade",
        "immersiveengineering:waterwheel_segment",
        "immersiveengineering:sample_drill",
        "minecraft:blast_furnace",
        "minecraft:smoker",
        "immersiveengineering:thermoelectric_generator",
        "immersiveengineering:blueprint",
        "immersiveengineering:toolbox",
        "minecraft:cobweb",
        "charcoal_pit:copper_block",
        "immersiveengineering:crate",
        "create:schematicannon",
        "supplementaries:present",
        "supplementaries:planter",
        "supplementaries:sack",
        "supplementaries:cog_block",
        "supplementaries:spring_launcher",
        "supplementaries:bellows",
        "supplementaries:wind_vane",
        "supplementaries:faucet",
        "supplementaries:bomb",
        "crockpot:crock_pot_advanced",
        "crockpot:crock_pot_ultimate",
        "minecraft:green_dye",
    ]
    workbench.forEach((Item) => {
        event.remove({ type: "minecraft:crafting_shaped", output: Item })
    })
    let shapeless = [
        "minecraft:ender_eye",
        "#forge:plates",
        "minecraft:rabbit_stew",
        "minecraft:wheat",
        "minecraft:mushroom_stew",
        "create:tree_fertilizer"
    ]
    let recipeID = [
        "minecraft:bucket",
        "stone_age:backpack",
        "minecraft:white_wool_from_string",
        "immersiveengineering:crafting/nugget_copper_to_copper_ingot",
        "minecraft:campfire"
    ]
    recipeID.forEach((Item) => {
        event.remove({ id: Item })
    })
    /*let Pot = [
        "potato_souffle",
        "perogies",
        "moqueca",
        "gazpacho",
        "asparagus_soup",
        "tea",
        "veg_stinger",
        "bone_soup",
        "surf_n_turf",
        "hot_cocoa",
        "seafood_gumbo",
        "tropical_bouillabaisse",
        "mushy_cake",
        "ceviche",
        "avaj",
        "iced_tea",
        "california_roll",
        "monster_tartare"
    ]
    Pot.forEach((Item) => {
        event.remove({id: "crock_pot:crock_pot_cooking/"+Item})
    })*/
    let shaped = [
        "#elevatorid:elevators"
    ]
    shaped.forEach((Item) => {
        event.remove({ type: "minecraft:crafting_shaped", output: Item })
    })
    shapeless.forEach((Item) => {
        event.remove({ type: "minecraft:crafting_shapeless", output: Item })
    })
    let smelting = [
        "minecraft:iron_ingot",
        "minecraft:iron_nugget",
        "minecraft:air"
    ]
    smelting.forEach((Item) => {
        event.remove({ type: "minecraft:blasting", output: Item })
    })

    let blueprint = [
        "immersiveengineering:circuit_board",
        "immersiveengineering:component_iron",
        "immersiveengineering:component_steel",
        "immersiveengineering:electron_tube",
        "immersiveengineering:graphite_electrode"
    ]
    blueprint.forEach((Item) => {
        event.remove({ type: "immersiveengineering:blueprint", output: Item })
    })

    let createMillingAndCrushing = [
        "minecraft:black_dye",
        "create:wheat_flour"
    ]
    createMillingAndCrushing.forEach((Item) => {
        event.remove({ type: "create:milling", output: Item })
        event.remove({ type: "create:crushing", output: Item })
    })

    // Remove by Types
    event.remove({ type: "immersiveengineering:turn_and_copy", output: "immersiveengineering:radiator" })
    event.remove({ type: "immersiveengineering:turn_and_copy", output: "immersiveengineering:rs_engineering" })
    event.remove({ type: "immersiveengineering:hammer_crushing" })
    event.remove({ type: "immersiveengineering:generated_list" })
    event.remove({ type: "minecraft:crafting_shapeless", input: "immersiveengineering:hammer" })
    event.remove({ type: "create:splashing", input: "minecraft:gravel" })
    event.remove({ type: "create:splashing", input: "minecraft:red_sand" })
    event.remove({ input: "notreepunching:plant_string" })
    event.remove({ mod: "theoneprobe" })
    event.remove({ mod: "steampowered" })
    event.remove({ type: "immersiveengineering:crusher", input: "#forge:ores" })
    event.remove({ type: "immersiveengineering:arc_furnace", input: "#forge:ores" })
    event.remove({ input: "minecraft:sugar_cane", output: "minecraft:paper" })
    event.remove({ input: "immersiveengineering:dust_wood", output: "minecraft:paper" })
    event.remove({ input: "minecraft:redstone_ore" })
    event.remove({ output: "#minecraft:planks" })
    event.remove({ output: "create:chromatic_compound" })
    event.remove({ input: "create:dough" })
    event.remove({ type: "minecraft:blasting", output: "immersiveengineering:ingot_hop_graphite" })
    event.remove({ type: "minecraft:smelting", output: "immersiveengineering:ingot_hop_graphite" })
    //event.remove({type: "minecraft:blasting"})

    let disabledItems = [
        // stone age
        "stone_age:copper_hammer",
        "stone_age:bronze_hammer",
        "stone_age:stone_hammer",
        "stone_age:aqueduct",

        // ie
        "immersiveengineering:toolbox",
        "immersiveengineering:sorter",
        "immersiveengineering:fluid_sorter",

        // create power devices: we have steam power
        "create:water_wheel",
        "create:cogwheel",
        "create:large_cogwheel",
        "create:windmill_bearing",
        "create:flywheel",
        "create:furnace_engine",
        "create:steam_engine",

        // create: causes infinite power
        "create:mechanical_piston",
        "create:sticky_mechanical_piston",
        "create:piston_extension_pole",
        "create:cart_assembler",

        // create: will be available in later tech
        "create:mechanical_drill",
        "create:mechanical_bearing",

        // contraptions
        // "create:wand_of_symmetry",
        // "create:clockwork_bearing",
        // "create:sticker",
        // "create:rope_pulley",
        // "create:schematicannon",
        // "create:mechanical_plough",
    ]
    disabledItems.forEach((disabledItem) => {
        event.remove({ output: disabledItem })
    })

    let removeOnly = [
        "storagedrawers:emerald_storage_upgrade",
        "storagedrawers:diamond_storage_upgrade",
        "storagedrawers:gold_storage_upgrade",
        "create:brass_ingot",
        "create:zinc_ingot",
        "create:copper_ingot",
        "create:andesite_alloy",
        "#create:crushed_ores",
        "immersiveengineering:capacitor_lv",
        "immersiveengineering:capacitor_mv",
        "immersiveengineering:capacitor_hv",
        "immersiveengineering:dust_hop_graphite"
    ]
    removeOnly.forEach((removeItem) => {
        event.remove({ output: removeItem })
    })
})