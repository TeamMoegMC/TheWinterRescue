/**
 * For creating all standard minecraft:crafting_shaped recipes
 */

ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

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
		/*
		[
			"frostedheart:beehive_oven_pit", [
				" A ",
				"ABA",
				" A "
			], {
				A: "frostedheart:refractory_bricks",
				B: "minecraft:iron_ingot"
			}
		],
		*/
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
				"immersiveengineering:blueprint", { blueprint: "molds" }
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
		/*
		[
			"frostedheart:tree_tap", [
				"AAA",
				"  B"
			], {
				A: "#forge:rods/cast_iron",
				B: "minecraft:bucket"
			}
		],
		*/
		[
			"immersiveengineering:stick_steel", 4, [
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
			"immersiveengineering:conveyor_basic", 3, [
				"ACA",
				"ABA"
			], {
				A: "#forge:plates/steel",
				B: "minecraft:redstone",
				C: "create:belt_connector"
			}
		],
		[
			"immersiveengineering:conveyor_basic", 3, [
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
				A: "#forge:plates/bronze",
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
				A: "#forge:plates/tungsten_steel",
				B: "immersiveengineering:component_steel",
				C: "frostedheart:tungstensteel_ingot"
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
				C: "immersiveengineering:wire_copper"
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
				A: "minecraft:brick",
				B: "frostedheart:mortar",
				C: "steampowered:bronze_sheet"
			}
		],
		[
			"immersiveengineering:blastbrick", 4, [
				"ABA",
				"BCB",
				"ABA"
			], {
				A: "frostedheart:invar_sheet",
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
		/*
		[
			"stone_age:grass_lead", [
				"AA",
				"A "
			], {
				A: "charcoal_pit:straw"
			}
		],
		*/
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
		[
			"create:fluid_pipe", 6, [
				"AAA",
				"AAA"
			], {
				A: "#forge:plates/bronze"
			}
		],
		[
			"create:shaft", 4, [
				"A",
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
			"steampowered:bronze_cogwheel", 4, [
				" B ",
				"BAB",
				" B "
			], {
				A: "create:shaft",
				B: "#forge:plates/bronze"
			}
		],
		[
			"steampowered:bronze_large_cogwheel", 2, [
				"BBB",
				"BAB",
				"BBB"
			], {
				A: "create:shaft",
				B: "#forge:plates/bronze"
			}
		],
		[
			"steampowered:cast_iron_cogwheel", 4, [
				" B ",
				"BAB",
				" B "
			], {
				A: "create:shaft",
				B: "#forge:plates/cast_iron"
			}
		],
		[
			"steampowered:cast_iron_large_cogwheel", 2, [
				"BBB",
				"BAB"
				, "BBB"
			], {
				A: "create:shaft",
				B: "#forge:plates/cast_iron"
			}
		],
		[
			"steampowered:steel_cogwheel", 4, [
				" B ",
				"BAB",
				" B "
			], {
				A: "create:shaft",
				B: "#forge:plates/steel"
			}
		],
		[
			"steampowered:steel_large_cogwheel", 2, [
				"BBB",
				"BAB",
				"BBB"
			], {
				A: "create:shaft",
				B: "#forge:plates/steel"
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
				A: "#forge:plates/steel",
				B: "#immersiveengineering:scaffoldings/steel",
				W: ["steampowered:steel_steam_engine", "steampowered:cast_iron_steam_engine"],
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
				A: "#forge:ingots/iron",
				B: "#minecraft:planks",
				C: "create:shaft"
			}
		],
		[
			"create:gantry_shaft", [
				"BAD",
				"BCB",
				"DAB"
			], {
				A: "#forge:rods/cast_iron",
				B: "#forge:ingots/cast_iron",
				C: "#forge:dusts/redstone",
				D: "#minecraft:planks"
			}
		],
		[
			"minecraft:chest", 8, [
				"AAA",
				"A A",
				"AAA"
			], {
				A: "#forge:treated_wood"
			}
		]
	]
	changeShapedRecipes.forEach((recipe, index) => {
		let [output, quantity, pattern, keys] = recipe.length === 4 ? recipe : [recipe[0], 1, recipe[1], recipe[2]]

		// 确保输出是有效物品 ID 和 NBT 处理
		if (Array.isArray(output)) {
			// 如果是带 NBT 的物品
			let [itemId, nbt] = output
			// 确保 NBT 是对象，即使为空
			output = Item.of(itemId, quantity)
				.withNBT(nbt || {})
		} else {
			// 普通物品，默认不带 NBT
			output = Item.of(output, quantity)
		}

		// 删除旧配方
		event.remove({ output: output, type: "minecraft:crafting_shaped" })

		// 添加新配方
		kubejs.shaped(output, pattern, keys)
			.id(`the_winter_rescue:minecraft/crafting_shaped/change/${index}`)
	})

	let newShapedRecipes = [
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
				C: "#frostedheart:garbage"
			}
		],
		[
			"frostedheart:makeshift_axe", [
				"CB",
				"CA"
			], {
				A: "#forge:rods/wooden",
				B: "#forge:string",
				C: "#frostedheart:garbage"
			}
		],
		[
			"frostedheart:makeshift_shovel", [
				"BC",
				" A"
			], {
				A: "#forge:rods/wooden",
				B: "#forge:string",
				C: "#frostedheart:garbage"
			}
		],
		[
			"frostedheart:makeshift_spear", [
				"CB",
				"A "
			], {
				A: "#forge:rods/wooden",
				B: "#forge:string",
				C: "#frostedheart:garbage"
			}
		],
		[
			"frostedheart:makeshift_knife", [
				"A ",
				" A"
			], {
				A: "#frostedheart:garbage"
			}
		],
		[
			"frostedheart:makeshift_hoe", [
				"CB",
				" A"
			], {
				A: "#forge:rods/wooden",
				B: "#forge:string",
				C: "#frostedheart:garbage"
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
		/*
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
		*/
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
				B: "#forge:plates/steel",
				C: "frostedheart:incubator",
				D: "#forge:plates/copper"
			}
		],
		[
			"frostedheart:gas_vent", [
				"ABA",
				"BCB"
			], {
				A: "frostedheart:invar_sheet",
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
			"frostedheart:rubbing_pad", [
				"AAA",
				"BBB",
				"AAA"
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
				B: "stone_age:leather_strip",
				C: "immersiveengineering:wire_copper"
			}
		],
		[
			"frostedheart:kelp_lining", [
				"CBC",
				"AAA"
			], {
				A: "minecraft:dried_kelp",
				B: "stone_age:leather_strip",
				C: "immersiveengineering:wire_copper"
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
			"frostedheart:heat_pipe", 3, [
				" B ",
				"ACA",
				" B "
			], {
				A: "#forge:plates/steel",
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
				B: "#forge:plates/steel",
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
				B: "frostedheart:invar_sheet",
				C: "minecraft:bucket",
				D: "frostedheart:invar_ingot"
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
				A: "minecraft:iron_ingot",
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
				C: "minecraft:iron_ingot"
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
		/*
		[
			"immersiveindustry:burning_chamber", 2, [
				"ABA",
				"BAB",
				"ABA"
			], {
				A: "#forge:plates/cast_iron",
				B: "#forge:plates/iron"
			}
		],
		*/
		/*
		[
			"frostedheart:burning_chamber_core", [
				"AAA",
				"ABA",
				"AAA"
			], {
				A: "#forge:plates/cast_iron",
				B: "#forge:plates/iron"
			}
		],
		*/
		[
			"create:shaft", 3, [
				"A",
				"A",
				"A"
			], {
				A: "#forge:ingots/iron"
			}
		],
		[
			"create:whisk", [
				"BAB",
				"BAB",
				"BBB"
			], {
				A: "#forge:ingots/iron",
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
			"minecraft:bucket", [
				"A A",
				" A "
			], {
				A: "#forge:plates/iron"
			}
		],
		[
			"minecraft:bucket", 2, [
				"A A",
				" A "
			], {
				A: "#forge:plates/steel"
			}
		],
		[
			"minecraft:bucket", [
				"A A",
				" A "
			], {
				A: "#forge:plates/brass"
			}
		],
		[
			"create:precision_mechanism", [
				"CAC",
				"BCB",
				"CAC"
			], {
				A: "#forge:plates/brass",
				B: "create:electron_tube",
				C: "create:shaft"
			}
		],
		/*
		[
			"immersiveindustry:rotary_kiln_cylinder", 2, [
				"AAA",
				"CCC",
				"BBB"
			], {
				A: "immersiveindustry:refractory_kiln_brick",
				B: "#forge:plates/steel",
				C: "frostedheart:refractory_brick"
			}
		],
		
		[
			"immersiveindustry:car_kiln_brick", 2, [
				"AAA",
				"ACA",
				"BBB"
			], {
				A: "immersiveindustry:refractory_kiln_brick",
				B: "#forge:plates/steel",
				C: "kubejs:constantan_coil"
			}
		],
		*/
		[
			"frostedheart:charcoal", [
				" A",
				"A "
			], {
				A: "minecraft:charcoal"
			}
		],
		[
			"frostedheart:invar_block", [
				"AAA",
				"AAA",
				"AAA"
			], {
				A: "frostedheart:invar_sheet"
			}
		],
		/*
		[
			"frostedheart:tap_line", 2, [
				"ABA"
			], {
				A: "frostedheart:cast_iron_rod",
				B: "#forge:ingots/cast_iron"
			}
		],
		*/
		[
			"frostedheart:hay_hat", [
				"AAA",
				"A A",
			], {
				A: "charcoal_pit:straw"
			}
		],
		[
			"frostedheart:hay_jacket", [
				"A A",
				"AAA",
				"AAA"
			], {
				A: "charcoal_pit:straw"
			}
		],
		[
			"frostedheart:hay_pants", [
				"AAA",
				"A A",
				"A A"
			], {
				A: "charcoal_pit:straw"
			}
		],
		[
			"stone_age:stone_chest", [
				"AAA",
				"BCB",
				"BBB"
			], {
				A: "minecraft:smooth_stone_slab",
				B: "minecraft:stone",
				C: "minecraft:clay_ball"
			}
		]
	]
	newShapedRecipes.forEach((recipe, index) => {
		let [output, quantity, pattern, keys] = recipe.length === 4 ? recipe : [recipe[0], 1, recipe[1], recipe[2]]

		// 确保输出是有效物品 ID 和 NBT 处理
		if (Array.isArray(output)) {
			// 如果是带 NBT 的物品
			let [itemId, nbt] = output
			// 确保 NBT 是对象, 即使为空
			output = Item.of(itemId, quantity)
				.withNBT(nbt || {})
		} else {
			// 普通物品, 默认不带 NBT
			output = Item.of(output, quantity)
		}

		// 添加新配方
		kubejs.shaped(output, pattern, keys)
			.id(`the_winter_rescue:minecraft/crafting_shaped/new/${index}`)
	})
})