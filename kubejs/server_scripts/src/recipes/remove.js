//priority = 800

ServerEvents.recipes((event) => {
	let workbench = [
		"supplementaries:lunch_basket",
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
		"minecraft:green_dye",
        "minecraft:bread",
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
		"create:tree_fertilizer",
        "immersiveengineering:fertilizer",
	]

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
		event.remove({ output: Item, type: "create:splashing"})
		event.remove({ output: Item, type: "minecraft:smelting"})
	})
	event.remove({"id":"minecraft:brick"})

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

	let recipesType = [
		"create:pressing"
	]
	recipesType.forEach((type) => {
		event.remove({ type: type })
	})

	// Remove by Types
    event.remove({ type: "stone_age:flint_workbench"})
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
	event.remove({ output: "#minecraft:planks" })
	event.remove({ output: "create:chromatic_compound" })
	event.remove({ input: "create:dough" })
	event.remove({ type: "minecraft:blasting", output: "immersiveengineering:ingot_hop_graphite" })
	event.remove({ type: "minecraft:smelting", output: "immersiveengineering:ingot_hop_graphite" })

	let disabledItems = [
		// stone age
        "stone_age:dried_grass",
        "stone_age:thatch_block",
        "stone_age:flint_workbench",
        "stone_age:unlit_torch_shaped",

		// ie
		"immersiveengineering:toolbox",
		"immersiveengineering:sorter",
		"immersiveengineering:fluid_sorter",

		// create power devices: we have steam power
		"create:water_wheel",
		"create:cogwheel",
		"create:large_cogwheel",
		"create:windmill_bearing",
		"create:steam_engine",

		// create: causes infinite power
		"create:mechanical_piston",
		"create:sticky_mechanical_piston",
		"create:piston_extension_pole",
		"create:cart_assembler",

        // materials
        "create:crushed_raw_tin",
        "create:crushed_raw_aluminum",
        "immersiveengineering:raw_aluminum",
        "immersiveengineering:raw_block_aluminum",
        "immersiveengineering:ore_aluminum",
        "immersiveengineering:deepslate_ore_aluminum",
	]
	disabledItems.forEach((disabledItem) => {
		event.remove({ output: disabledItem })
	})

	let recipeID = [
		"minecraft:bucket",
		"minecraft:white_wool_from_string",
		"immersiveengineering:crafting/nugget_copper_to_copper_ingot",
		"minecraft:campfire",
		"minecraft:copper_ingot_from_waxed_copper_block",
		"immersiveengineering:blastfurnace/steel",
        "immersiveindustry:crafting/refractory_kiln_brick",
        "minecraft:bone_meal",
        "create:milling/calcite",
        "create:milling/dripstone_block",
        "immersiveindustry:crafting/electrolyzer",
        "immersiveengineering:arcfurnace/raw_ore_aluminum",
        "immersiveengineering:arcfurnace/raw_block_aluminum",
        "immersiveindustry:crucible/steel",
        "charcoal_pit:ore_kiln_recipes/copper",
		"immersiveindustry:chemical"
        // "stone_age:grass_lead",
        // "stone_age:dried_grass",
        // "stone_age:fishing_net_meshes",
	]
	recipeID.forEach((Item) => {
		event.remove({ id: Item })
	})

	let removeOnly = [
		"storagedrawers:emerald_storage_upgrade",
		"storagedrawers:diamond_storage_upgrade",
		"storagedrawers:gold_storage_upgrade",
		"create:brass_ingot",
		"create:zinc_ingot",
		"create:copper_ingot",
		"#create:crushed_ores",
		"immersiveengineering:capacitor_lv",
		"immersiveengineering:capacitor_mv",
		"immersiveengineering:capacitor_hv",
		"immersiveengineering:dust_hop_graphite",
	]
	removeOnly.forEach((removeItem) => {
		event.remove({ output: removeItem })
	})
})