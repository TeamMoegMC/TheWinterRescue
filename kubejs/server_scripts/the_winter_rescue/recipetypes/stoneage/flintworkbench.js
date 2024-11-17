/*
ServerEvents.recipes((event) => {
	let additional_crafting_table_recipes = [
		shapedRecipe('stone_age:fishing_net', ['BAB', 'ACA', 'BAB'], {
			A: 'stone_age:leather_strip',
			B: '#forge:rods/wooden',
			C: '#minecraft:wooden_slabs'
		}),
		shapedRecipe('stone_age:feeder', ['BCB', 'ACA', 'BCB'], {
			A: '#minecraft:logs',
			B: '#forge:crops/wheat',
			C: '#minecraft:wooden_slabs'
		}),
		shapedRecipe('stone_age:tree_stump', ['   ', ' B ', 'AAA'], {
			A: 'minecraft:stone',
			B: '#minecraft:logs'
		}),
		shapedRecipe('stone_age:drying_rack', ['A A', ' A ', 'A A'], {
			A: '#forge:rods/wooden'
		}),
		shapedRecipe('stone_age:tanning_rack', ['A A', ' A ', 'AAA'], {
			A: '#forge:rods/wooden'
		})
	]

	let flint_change_recipes = [
		shapedRecipe('stone_age:dried_grass_bed', ['  B', 'BBB', 'AAA'], {
			A: '#minecraft:wooden_slabs',
			B: 'charcoal_pit:straw'
		}),
		shapedRecipe('charcoal_pit:log_pile', ['AAA', 'AAA', 'AAA'], {
			A: '#minecraft:logs_that_burn'
		}),
		shapedRecipe('stone_age:millstone', [' B ', ' C ', 'AAA'], {
			A: '#forge:stone',
			B: 'minecraft:stick',
			C: 'minecraft:stone'
		}),
		shapedRecipe('stone_age:stone_chest', ['BBB', 'ACA', 'AAA'], {
			A: 'minecraft:stone',
			B: 'minecraft:stone_slab',
			C: 'minecraft:clay_ball'
		}),
		shapedRecipe('stone_age:grass_mesh', ['A A', ' A ', 'A A'], {
			A: 'stone_age:grass_lead'
		}),
		shapedRecipe('stone_age:cobweb_mesh', ['A A', ' A ', 'A A'], {
			A: 'minecraft:string'
		})
	]


	let change_recipes = [
		shapedRecipe('frostedheart:bronze_hammer', ['AAC', ' BA', 'B A'], {
			A: '#forge:ingots/bronze',
			B: 'minecraft:stick',
			C: 'stone_age:leather_strip'
		}),
		shapedRecipe('frostedheart:bronze_pickaxe', ['AAA', ' B ', ' B '], {
			A: 'frostedheart:bronze_ingot',
			B: '#forge:rods/wooden'
		}),
		shapedRecipe('frostedheart:bronze_axe', ['AA', 'AB', ' B'], {
			A: 'frostedheart:bronze_ingot',
			B: '#forge:rods/wooden'
		}),
		shapedRecipe('frostedheart:bronze_hoe', ['AA', ' B', ' B'], {
			A: 'frostedheart:bronze_ingot',
			B: '#forge:rods/wooden'
		}),
		shapedRecipe('frostedheart:bronze_sword', ['A', 'A', 'B'], {
			A: 'frostedheart:bronze_ingot',
			B: '#forge:rods/wooden'
		}),
		shapedRecipe('frostedheart:bronze_shovel', ['A', 'B', 'B'], {
			A: 'frostedheart:bronze_ingot',
			B: '#forge:rods/wooden'
		}),
		shapedRecipe('frostedheart:bronze_knife', [' A', 'B '], {
			A: 'frostedheart:bronze_ingot',
			B: '#forge:rods/wooden'
		}),
		shapedRecipe('immersiveengineering:alloybrick', ['ABA', 'B B', 'ABA'], {
			A: 'minecraft:brick',
			B: '#forge:plates/bronze'
		}),
		shapedRecipe('caupona:clay_cistern', ['CCC', 'CSC', 'CCC'], {
			C: '#forge:clay_balls',
			S: '#forge:rods/wooden'
		}),
		shapedRecipe('caupona:kitchen_stove_t1', ['DDD', 'SSS', 'S S'], {
			D: '#forge:dirt',
			S: '#forge:stone'
		}),
		shapedRecipe('charcoal_pit:main_bloomery', ['ABA', 'BCB', 'ABA'], {
			A: 'frostedheart:mortar',
			B: 'frostedheart:bronze_sheet',
			C: 'charcoal_pit:sandy_brick'
		}),
		shapedRecipe('charcoal_pit:sandy_tuyere', ['BAB', 'ACA', 'BAB'], {
			A: 'frostedheart:mortar',
			B: 'charcoal_pit:sandy_brick_item',
			C: '#forge:plates/copper'
		}),
		shapedRecipe('charcoal_pit:bellows', ['ABA', 'CCC', 'ABA'], {
			A: 'immersiveengineering:treated_wood_horizontal',
			B: 'immersiveengineering:slab_treated_wood_horizontal',
			C: 'minecraft:leather'
		}),
		shapedRecipe('charcoal_pit:sandy_brick', ['BAB', 'ABA', 'BAB'], {
			A: 'frostedheart:mortar',
			B: 'charcoal_pit:sandy_brick_item'
		}),
		shapedRecipe('charcoal_pit:unfired_sandy_brick', ['ABA', 'BAB', 'ABA'], {
			A: 'minecraft:sand',
			B: 'minecraft:clay_ball'
		}),
		shapedRecipe('frostedheart:makeshift_pickaxe', ['ABA', ' C ', ' C '], {
			A: 'minecraft:flint',
			B: 'stone_age:grass_lead',
			C: 'minecraft:stick'
		}),
		shapedRecipe('frostedheart:makeshift_axe', ['AB', 'AC', ' C'], {
			A: 'minecraft:flint',
			B: 'stone_age:grass_lead',
			C: 'minecraft:stick'
		}),
		shapedRecipe('frostedheart:makeshift_spear', [' AA', ' BA', 'C  '], {
			A: 'minecraft:flint',
			B: 'stone_age:grass_lead',
			C: 'minecraft:stick'
		}),
		shapedRecipe('frostedheart:makeshift_shovel', ['A', 'B', 'C'], {
			A: 'minecraft:flint',
			B: 'stone_age:grass_lead',
			C: 'minecraft:stick'
		}),
		shapedRecipe('charcoal_pit:barrel', ['AAA', 'A A', 'AAA'], {
			A: '#minecraft:wooden_slabs'
		}),
		shapedRecipe('minecraft:barrel', ['ABA', 'A A', 'AAA'], {
			A: '#minecraft:planks',
			B: '#forge:plates/bronze'
		}),
		shapedRecipe('charcoal_pit:coal_pile', ['AAA', 'ABA', 'AAA'], {
			A: 'minecraft:coal',
			B: 'charcoal_pit:ash'
		})
	]

	let recipes = [
		shapedRecipe('frostedheart:incubator', ['AAA', 'A B', 'BBB'], {
			A: '#minecraft:planks',
			B: 'minecraft:stone'
		}),
		shapedRecipe('4x minecraft:arrow', ['A', 'B', 'C'], {
			A: 'stone_age:bone_arrow_head',
			B: '#forge:rods/wooden',
			C: '#forge:feathers'
		}),
		shapedRecipe('frostedheart:hand_stove', [' B ', 'BAB', ' B '], {
			A: '#forge:clay_balls',
			B: '#forge:plates/copper'
		}),
		shapedRecipe('immersiveengineering:hammer', [' AC', ' BA', 'B  '], {
			A: '#forge:ingots/bronze',
			B: '#forge:rods/wooden',
			C: 'stone_age:leather_strip'
		}),
		shapedRecipe('frostedheart:straw_lining', ['AAA', 'CBC', 'AAA'], {
			A: 'charcoal_pit:straw',
			B: 'stone_age:leather_strip',
			C: 'stone_age:grass_lead'
		}),
		shapedRecipe('frostedheart:thermos', ['ACA', 'BCB', 'BAB'], {
			A: '#forge:plates/copper',
			B: '#minecraft:logs',
			C: '#minecraft:planks'
		}),
		shapedRecipe('frostedheart:copper_pro_pick', ['ABA', ' B ', ' B '], {
			A: '#forge:ingots/copper',
			B: '#forge:rods/wooden'
		}),
		shapedRecipe('frostedheart:copper_core_spade', ['A', 'B', 'B'], {
			A: '#forge:plates/copper',
			B: '#forge:rods/wooden'
		}),
		shapedRecipe('frostedheart:copper_geologists_hammer', ['CBA', ' B ', ' B '], {
			A: '#forge:plates/copper',
			B: '#forge:rods/wooden',
			C: '#forge:ingots/copper'
		}),
		shapedRecipe('minecraft:campfire', [' B ', 'ABA', 'ACA'], {
			A: '#minecraft:logs',
			B: 'charcoal_pit:straw',
			C: 'minecraft:gravel'
		}),
		shapedRecipe('charcoal_pit:sandy_collector', ['A A', 'ABA', 'AAA'], {
			A: 'charcoal_pit:sandy_brick_item',
			B: 'frostedheart:ceramic_bucket'
		}),
		shapedRecipe('frostedheart:generator_brick', ['ABA', 'BAB', 'ABA'], {
			A: 'minecraft:stone_bricks',
			B: 'minecraft:brick'
		}),
		shapedRecipe('frostedheart:generator_amplifier_r1', ['ABA', 'DCD', 'ABA'], {
			A: 'minecraft:stone_bricks',
			B: 'minecraft:brick',
			C: '#forge:plates/copper',
			D: 'minecraft:clay_ball'
		}),
		shapedRecipe('frostedheart:generator_core_t1', ['ACA', 'CBC', 'ACA'], {
			A: 'minecraft:brick',
			B: 'frostedheart:energy_core',
			C: '#forge:ingots/copper'
		}),
		shapedRecipe('frostedheart:stone_hammer', ['AAC', ' BA', 'B A'], {
			A: 'minecraft:stone',
			B: 'minecraft:stick',
			C: '#forge:string'
		}),
		shapedRecipe('frostedheart:rye_bread', ['AAA'], {
			A: 'frostedheart:rye'
		}),
		shapedRecipe('frostedheart:wooden_cup', ['A A', 'A A', ' A '], {
			A: '#minecraft:planks'
		}),
		shapedRecipe('kubejs:wet_straw_briquette', ['AAA', 'A A', 'AAA'], {
			A: 'charcoal_pit:straw'
		}),
		shapedRecipe('stone_age:fish_bone', ['ABA'], {
			A: 'minecraft:bone',
			B: 'minecraft:flint'
		}),
		shapedRecipe('frostedheart:hide_hat', ['AAA', 'A A', 'B C'], {
			A: 'stone_age:raw_hide',
			B: 'stone_age:leather_strip',
			C: 'stone_age:fish_bone'
		}),
		shapedRecipe('frostedheart:hide_jacket', ['ACA', 'ABA', 'AAA'], {
			A: 'stone_age:raw_hide',
			B: 'stone_age:leather_strip',
			C: 'stone_age:fish_bone'
		}),
		shapedRecipe('frostedheart:hide_pants', ['AAA', 'ABA', 'ACA'], {
			A: 'stone_age:raw_hide',
			B: 'stone_age:leather_strip',
			C: 'stone_age:fish_bone'
		}),
		shapedRecipe('frostedheart:hide_boots', ['ABA', 'ACA'], {
			A: 'stone_age:raw_hide',
			B: 'stone_age:leather_strip',
			C: 'stone_age:fish_bone'
		}),
		shapedRecipe('frostedheart:wool_hat', ['AAA', 'A A', 'B C'], {
			A: '#minecraft:wool',
			B: 'stone_age:leather_strip',
			C: 'stone_age:fish_bone'
		}),
		shapedRecipe('frostedheart:wool_jacket', ['ACA', 'ABA', 'AAA'], {
			A: '#minecraft:wool',
			B: 'stone_age:leather_strip',
			C: 'stone_age:fish_bone'
		}),
		shapedRecipe('frostedheart:wool_pants', ['AAA', 'ABA', 'ACA'], {
			A: '#minecraft:wool',
			B: 'stone_age:leather_strip',
			C: 'stone_age:fish_bone'
		}),
		shapedRecipe('frostedheart:wool_boots', ['ABA', 'ACA'], {
			A: '#minecraft:wool',
			B: 'stone_age:leather_strip',
			C: 'stone_age:fish_bone'
		}),
		shapedRecipe('frostedheart:hay_hat', ['AAA', 'A A', 'B B'], {
			A: 'charcoal_pit:straw',
			B: 'stone_age:grass_lead'
		}),
		shapedRecipe('frostedheart:hay_jacket', ['ABA', 'ABA', 'AAA'], {
			A: 'charcoal_pit:straw',
			B: 'stone_age:grass_lead'
		}),
		shapedRecipe('frostedheart:hay_pants', ['AAA', 'ABA', 'ABA'], {
			A: 'charcoal_pit:straw',
			B: 'stone_age:grass_lead'
		}),
		shapedRecipe('kubejs:clay_bucket', ['A A', 'A A', ' A '], {
			A: 'minecraft:clay_ball'
		}),
		shapedRecipe('frostedheart:hay_boots', ['ABA', 'ABA'], {
			A: 'charcoal_pit:straw',
			B: 'stone_age:grass_lead'
		}),
		shapedRecipe('frostedheart:drawing_desk', ['BB ', 'CAB', 'AAB'], {
			A: '#minecraft:planks',
			B: '#minecraft:wooden_slabs',
			C: '#forge:plates/copper'
		}),
		shapedRecipe('comforts:sleeping_bag_brown', ['BBB', 'ACA', 'BBB'], {
			A: 'stone_age:leather_strip',
			B: '#forge:leather',
			C: 'frostedheart:straw_lining'
		})
	]

	let only_flint_recipes = [
		shapedRecipe('minecraft:stone_bricks', ['ABA', 'BAB', 'ABA'], {
			A: 'minecraft:stone',
			B: 'frostedheart:mortar'
		}),
		shapedRecipe('charcoal_pit:clay_pot', ['AAA', 'A A', 'AAA'], {
			A: 'minecraft:clay_ball'
		}),
		shapedRecipe('frostedheart:charcoal_stick', ['A'], {
			A: 'kubejs:charcoal_briquette'
		}),
		shapedRecipe('frostedheart:coal_stick', ['A'], {
			A: 'kubejs:coal_briquette'
		}),
		shapedRecipe('frostedheart:makeshift_hoe', ['AB', ' C', ' C'], {
			A: 'minecraft:flint',
			B: 'stone_age:grass_lead',
			C: 'minecraft:stick'
		}),
		shapedRecipe('2x minecraft:bowl', ['A A', ' A '], {
			A: '#minecraft:planks'
		})
	]

	event.remove({ output: 'charcoal_pit:unfired_sandy_brick', type: 'minecraft:crafting_shapeless' });

	// Add back standard shaped recipes
	additional_crafting_table_recipes.forEach((recipe) => {
		event.shaped(recipe.result, recipe.pattern, recipe.key)
	})

	recipes.forEach((recipe) => {
		event.shaped(recipe.result, recipe.pattern, recipe.key)
	})

	change_recipes.forEach((recipe) => {
		event.remove({ output: recipe.result, type: 'minecraft:crafting_shaped' });
		event.shaped(recipe.result, recipe.pattern, recipe.key)
	})

	flint_change_recipes.forEach((recipe) => {
		event.shaped(recipe.result, recipe.pattern, recipe.key)
	})

	only_flint_recipes.forEach((recipe) => {
		event.shaped(recipe.result, recipe.pattern, recipe.key)
	})
});
*/