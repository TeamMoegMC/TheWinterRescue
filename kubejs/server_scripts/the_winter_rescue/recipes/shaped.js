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
		],
		[
			"create:fluid_tank", 2, [
				"AAA",
				"ABA",
				"AAA"
			], {
				A: "#forge:plates/bronze",
				B: "#forge:glass"
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
			output = Item.of(itemId, quantity).withNBT(nbt || {})
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
		],
		[
			"stone_age:millstone", [
				"ABA",
				"ACA",
				"DDD"
			], {
				A: "#forge:rods/wooden",
				B: "minecraft:andesite",
				C: "minecraft:granite",
				D: "minecraft:smooth_stone_slab"
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
			"frostedheart:hand_stove", [
				" B ",
				"BAB",
				" B "
			], {
				A: "#forge:clay_balls",
				B: "#forge:plates/copper"
			}
		],
		[
			"immersiveengineering:hammer", [
				" AC",
				" BA",
				"B  "
			], {
				A: "#forge:ingots/bronze",
				B: "#forge:rods/wooden",
				C: "stone_age:leather_strip"
			}
		],
		[
			"frostedheart:straw_lining", [
				"AAA",
				"CBC",
				"AAA"
			], {
				A: "charcoal_pit:straw",
				B: "stone_age:leather_strip",
				C: "stone_age:grass_lead"
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
			"minecraft:campfire", [
				" B ",
				"ABA",
				"ACA"
			], {
				A: "#minecraft:logs",
				B: "charcoal_pit:straw",
				C: "minecraft:gravel"
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
			"frostedheart:generator_brick", [
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
			"frostedheart:rye_bread", [
				"AAA"
			], {
				A: "frostedheart:rye"
			}
		],
		[
			"frostedheart:wooden_cup", [
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
			"stone_age:fish_bone", [
				"ABA"
			], {
				A: "minecraft:bone",
				B: "minecraft:flint"
			}
		],
		[
			"frostedheart:hide_hat", [
				"AAA",
				"A A",
				"B C"
			], {
				A: "stone_age:raw_hide",
				B: "stone_age:leather_strip",
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
				B: "stone_age:leather_strip",
				C: "stone_age:fish_bone"
			}
		],
		[
			"frostedheart:hide_boots", [
				"ABA",
				"ACA"
			], {
				A: "stone_age:raw_hide",
				B: "stone_age:leather_strip",
				C: "stone_age:fish_bone"
			}
		],
		[
			"frostedheart:wool_hat", [
				"AAA",
				"A A",
				"B C"
			], {
				A: "#minecraft:wool",
				B: "stone_age:leather_strip",
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
				B: "stone_age:leather_strip",
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
				B: "stone_age:leather_strip",
				C: "stone_age:fish_bone"
			}
		],
		[
			"frostedheart:wool_boots", [
				"ABA",
				"ACA"
			], {
				A: "#minecraft:wool",
				B: "stone_age:leather_strip",
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
			"kubejs:clay_bucket", [
				"A A",
				"A A",
				" A "
			], {
				A: "minecraft:clay_ball"
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
			"frostedheart:drawing_desk", [
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
			"comforts:sleeping_bag_brown", [
				"BBB",
				"ACA",
				"BBB"
			], {
				A: "stone_age:leather_strip",
				B: "#forge:leather",
				C: "frostedheart:straw_lining"
			}
		],
		[
			"minecraft:stone_bricks", [
				"ABA",
				"BAB",
				"ABA"
			], {
				A: "minecraft:stone",
				B: "frostedheart:mortar"
			}
		],
		[
			"charcoal_pit:clay_pot", [
				"AAA",
				"A A",
				"AAA"
			], {
				A: "minecraft:clay_ball"
			}
		],
		[
			"frostedheart:charcoal_stick", [
				"A"
			], {
				A: "kubejs:charcoal_briquette"
			}
		],
		[
			"minecraft:bowl", 2, [
				"A A",
				" A "
			], {
				A: "#minecraft:planks"
			}
		],
		[
			"frostedheart:bronze_hammer", [
				"AAC",
				" BA",
				"B A"
			], {
				A: "#forge:ingots/bronze",
				B: "minecraft:stick",
				C: "stone_age:leather_strip"
			}
		],
		[
			"frostedheart:bronze_pickaxe", [
				"AAA",
				" B ",
				" B "
			], {
				A: "frostedheart:bronze_ingot",
				B: "#forge:rods/wooden"
			}
		],
		[
			"frostedheart:bronze_axe", [
				"AA",
				"AB",
				" B"
			], {
				A: "frostedheart:bronze_ingot",
				B: "#forge:rods/wooden"
			}
		],
		[
			"frostedheart:bronze_hoe", [
				"AA",
				" B",
				" B"
			], {
				A: "frostedheart:bronze_ingot",
				B: "#forge:rods/wooden"
			}
		],
		[
			"frostedheart:bronze_sword", [
				"A",
				"A",
				"B"
			], {
				A: "frostedheart:bronze_ingot",
				B: "#forge:rods/wooden"
			}
		],
		[
			"frostedheart:bronze_shovel", [
				"A",
				"B",
				"B"
			], {
				A: "frostedheart:bronze_ingot",
				B: "#forge:rods/wooden"
			}
		],
		[
			"frostedheart:bronze_knife", [
				" A",
				"B "
			], {
				A: "frostedheart:bronze_ingot",
				B: "#forge:rods/wooden"
			}
		],
		[
			"immersiveengineering:alloybrick", [
				"ABA",
				"B B",
				"ABA"
			], {
				A: "minecraft:brick",
				B: "#forge:plates/bronze"
			}
		],
		[
			"caupona:clay_cistern", [
				"CCC",
				"CSC",
				"CCC"
			], {
				C: "#forge:clay_balls",
				S: "#forge:rods/wooden"
			}
		],
		/*
		[
			"caupona:kitchen_stove_t1", [
				"DDD", 
				"SSS", 
				"S S"
			], {
				D: "#forge:dirt",
				S: "#forge:stone"
			}
		],
		*/
		[
			"charcoal_pit:main_bloomery", [
				"ABA",
				"BCB",
				"ABA"
			], {
				A: "frostedheart:mortar",
				B: "frostedheart:bronze_sheet",
				C: "charcoal_pit:sandy_brick"
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
				C: "#forge:plates/copper"
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
			"charcoal_pit:unfired_sandy_brick", [
				"ABA",
				"BAB",
				"ABA"
			], {
				A: "minecraft:sand",
				B: "minecraft:clay_ball"
			}
		],
		[
			"charcoal_pit:barrel", [
				"AAA",
				"A A",
				"AAA"
			], {
				A: "#minecraft:wooden_slabs"
			}
		],
		[
			"minecraft:barrel", [
				"ABA",
				"A A",
				"AAA"
			], {
				A: "#minecraft:planks",
				B: "#forge:plates/bronze"
			}
		],
		[
			"charcoal_pit:coal_pile", [
				"AAA",
				"ABA",
				"AAA"
			], {
				A: "minecraft:coal",
				B: "charcoal_pit:ash"
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
			output = Item.of(itemId, quantity).withNBT(nbt || {})
		} else {
			// 普通物品, 默认不带 NBT
			output = Item.of(output, quantity)
		}

		// 添加新配方
		kubejs.shaped(output, pattern, keys)
			.id(`the_winter_rescue:minecraft/crafting_shaped/new/${index}`)
	})
})