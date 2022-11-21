onEvent('recipes', (event) => {
    const additional_crafting_table_recipes = [
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

    const flint_change_recipes = [
        flint_shapedRecipe(Item.of('stone_age:dried_grass_bed'), ['  B', 'BBB', 'AAA'], {
            A: Ingredient.of('#minecraft:wooden_slabs').toJson(),
            B: Item.of('charcoal_pit:straw').toJson()
        }, Ingredient.of('#forge:axes')),
        flint_shapedRecipe(Item.of('charcoal_pit:log_pile'), ['AAA', 'AAA', 'AAA'], {
            A: Ingredient.of('#minecraft:logs_that_burn').toJson()
        }, Ingredient.of('#forge:axes')),
        flint_shapedRecipe(Item.of('minecraft:crafting_table'), ['AAA', 'BBB', 'CCC'], {
            A: Item.of('minecraft:iron_ingot').toJson(),
            B: Ingredient.of('immersiveengineering:treated_wood_horizontal').toJson(),
            C: Ingredient.of('immersiveengineering:slab_treated_wood_horizontal').toJson()
        }, Ingredient.of('#forge:axes')),
        flint_shapedRecipe(Item.of('stone_age:millstone'), [' B ', ' C ', 'AAA'], {
            A: Ingredient.of('#forge:stone').toJson(),
            B: Item.of('minecraft:stick').toJson(),
            C: Item.of('minecraft:stone').toJson()
        }, Ingredient.of('#forge:hammers')),
        flint_shapedRecipe(Item.of('stone_age:stone_chest'), ['BBB', 'ACA', 'AAA'], {
            A: Item.of('minecraft:stone').toJson(),
            B: Item.of('minecraft:stone_slab').toJson(),
            C: Item.of('minecraft:clay_ball').toJson()
        }, Ingredient.of('#forge:hammers')),
        flint_shapedRecipe(Item.of('stone_age:grass_mesh'), ['A A', ' A ', 'A A'], {
            A: Item.of('rankine:rope').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('stone_age:cobweb_mesh'), ['A A', ' A ', 'A A'], {
            A: Item.of('minecraft:string').toJson()
        }, Item.of('stone_age:flint_knife'))
    ]
    const change_recipes = [
		flint_shapedRecipe(Item.of('rankine:bronze_hammer'), ['AAC', ' BA', 'B A'], {
            A: Ingredient.of('#forge:ingots/bronze').toJson(),
            B: Item.of('minecraft:stick').toJson(),
            C: Item.of('stone_age:leather_strip').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('rankine:bronze_pickaxe'), ['ACA', ' B ', ' B '], {
            A: Item.of('rankine:bronze_ingot').toJson(),
            B: Ingredient.of('#forge:rods/wooden').toJson(),
            C: Ingredient.of('#forge:plates/bronze').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('rankine:bronze_axe'), ['AC', 'AB', ' B'], {
            A: Item.of('rankine:bronze_ingot').toJson(),
            B: Ingredient.of('#forge:rods/wooden').toJson(),
            C: Ingredient.of('#forge:plates/bronze').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('rankine:bronze_hoe'), ['AA', ' B', ' B'], {
            A: Item.of('rankine:bronze_ingot').toJson(),
            B: Ingredient.of('#forge:rods/wooden').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('rankine:bronze_sword'), ['A', 'A', 'B'], {
            A: Item.of('rankine:bronze_ingot').toJson(),
            B: Ingredient.of('#forge:rods/wooden').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('rankine:bronze_shovel'), ['A', 'B', 'B'], {
            A: Ingredient.of('#forge:plates/bronze').toJson(),
            B: Ingredient.of('#forge:rods/wooden').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('immersiveengineering:alloybrick', 4), ['ABA', 'B B', 'ABA'], {
            A: Item.of('minecraft:brick').toJson(),
            B: Ingredient.of('#forge:plates/bronze').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('thermopolium:clay_cistern'), ['CCC', 'CSC', 'CCC'], {
            C: Ingredient.of('#forge:clay_balls').toJson(),
            S: Item.of('#forge:rods/wooden').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('thermopolium:kitchen_stove_t1'), ['DDD', 'SSS', 'S S'], {
            D: Ingredient.of('#forge:dirt').toJson(),
            S: Ingredient.of('#forge:stone').toJson()
        }, Ingredient.of('#forge:hammers')),
	    flint_shapedRecipe(Item.of('charcoal_pit:main_bloomery'), ['ABA', 'BCB', 'ABA'], {
            A: Item.of('rankine:mortar').toJson(),
            B: Item.of('steampowered:bronze_sheet').toJson(),
            C: Item.of('charcoal_pit:sandy_brick').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('charcoal_pit:sandy_tuyere'), ['BAB', 'ACA', 'BAB'], {
            A: Item.of('rankine:mortar').toJson(),
            B: Item.of('charcoal_pit:sandy_brick_item').toJson(),
            C: Ingredient.of('#forge:plates/copper').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('charcoal_pit:bellows'), ['ABA', 'CCC', 'ABA'], {
            A: Item.of('immersiveengineering:treated_wood_horizontal').toJson(),
            B: Item.of('immersiveengineering:slab_treated_wood_horizontal').toJson(),
            C: Item.of('minecraft:leather').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('charcoal_pit:sandy_brick', 2), ['BAB', 'ABA', 'BAB'], {
            A: Item.of('rankine:mortar').toJson(),
            B: Item.of('charcoal_pit:sandy_brick_item').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('charcoal_pit:unfired_sandy_brick', 4), ['ABA', 'BAB', 'ABA'], {
            A: Item.of('minecraft:sand').toJson(),
            B: Item.of('minecraft:clay_ball').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('rankine:flint_pickaxe'), ['ABA', ' C ', ' C '], {
            A: Item.of('minecraft:flint').toJson(),
            B: Item.of('rankine:rope').toJson(),
            C: Item.of('minecraft:stick').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('rankine:flint_axe'), ['AB', 'AC', ' C'], {
            A: Item.of('minecraft:flint').toJson(),
            B: Item.of('rankine:rope').toJson(),
            C: Item.of('minecraft:stick').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('rankine:flint_spear'), [' AA', ' BA', 'C  '], {
            A: Item.of('minecraft:flint').toJson(),
            B: Item.of('rankine:rope').toJson(),
            C: Item.of('minecraft:stick').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('rankine:flint_shovel'), ['A', 'B', 'C'], {
            A: Item.of('minecraft:flint').toJson(),
            B: Item.of('rankine:rope').toJson(),
            C: Item.of('minecraft:stick').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('charcoal_pit:barrel'), ['AAA', 'A A', 'AAA'], {
            A: Ingredient.of('#minecraft:wooden_slabs').toJson()
        }, Ingredient.of('#forge:axes')),
        flint_shapedRecipe(Item.of('rankine:bronze_door'), ['AA', 'AA', 'AA'], {
            A: Ingredient.of('#forge:ingots/bronze').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('minecraft:barrel'), ['ABA', 'A A', 'AAA'], {
            A: Ingredient.of('#minecraft:planks').toJson(),
            B: Ingredient.of('#forge:plates/bronze').toJson()
        }, Ingredient.of('#forge:axes')),
		flint_shapedRecipe(Item.of('charcoal_pit:coal_pile'), ['AAA', 'ABA', 'AAA'], {
        A: Item.of('minecraft:coal').toJson(),
		B: Item.of('charcoal_pit:ash').toJson()
        }, Ingredient.of('#forge:shovels'))
    ]

    const recipes = [
		flint_shapedRecipe(Item.of('frostedheart:incubator'), ['AAA', 'A B', 'BBB'], {
            A: Item.of('#minecraft:planks').toJson(),
            B: Item.of('minecraft:stone').toJson()
        }, Ingredient.of('#forge:hammers')),
		flint_shapedRecipe(Item.of('4x minecraft:arrow'), ['A', 'B', 'C'], {
            A: Item.of('stone_age:bone_arrow_head').toJson(),
            B: Item.of('#forge:rods/wooden').toJson(),
			C: Item.of('#forge:feathers').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('frostedheart:hand_stove'), [' B ', 'BAB', ' B '], {
            A: '#forge:clay_balls',
            B: '#forge:plates/copper'
        }, Ingredient.of('#forge:hammers')),
        flint_shapedRecipe(Item.of('immersiveengineering:hammer'), [' AC', ' BA', 'B  '], {
            A: Ingredient.of('#forge:ingots/bronze').toJson(),
            B: Ingredient.of('#forge:rods/wooden').toJson(),
            C: Item.of('stone_age:leather_strip').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('frostedheart:straw_lining'), ['AAA', 'CBC', 'AAA'], {
            A: Item.of('charcoal_pit:straw').toJson(),
            B: Item.of('stone_age:leather_strip').toJson(),
			C: Item.of('rankine:rope').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('frostedheart:thermos'), ['ACA', 'BCB', 'BAB'], {
            A: Ingredient.of('#forge:plates/copper').toJson(),
            B: Ingredient.of('#minecraft:logs').toJson(),
            C: Ingredient.of('#minecraft:planks').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('frostedheart:copper_pro_pick'), ['ABA', ' B ', ' B '], {
            A: Ingredient.of('#forge:ingots/copper').toJson(),
            B: Ingredient.of('#forge:rods/wooden').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('frostedheart:copper_core_spade'), ['A', 'B', 'B'], {
            A: Ingredient.of('#forge:plates/copper').toJson(),
            B: Ingredient.of('#forge:rods/wooden').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('frostedheart:copper_geologists_hammer'), ['CBA', ' B ', ' B '], {
            A: Ingredient.of('#forge:plates/copper').toJson(),
            B: Ingredient.of('#forge:rods/wooden').toJson(),
			C: Ingredient.of('#forge:ingots/copper').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('minecraft:campfire'), [' B ', 'ABA', 'ACA'], {
            A: Ingredient.of('#minecraft:logs').toJson(),
            B: Item.of('charcoal_pit:straw').toJson(),
            C: Item.of('minecraft:gravel').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('charcoal_pit:sandy_collector'), ['A A', 'ABA', 'AAA'], {
            A: Item.of('charcoal_pit:sandy_brick_item').toJson(),
            B: Item.of('frostedheart:ceramic_bucket').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:generator_brick', 3), ['ABA', 'BAB', 'ABA'], {
            A: Item.of('minecraft:stone_bricks').toJson(),
            B: Item.of('minecraft:brick').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:generator_amplifier_r1', 2), ['ABA', 'DCD', 'ABA'], {
            A: Item.of('minecraft:stone_bricks').toJson(),
            B: Item.of('minecraft:brick').toJson(),
            C: Ingredient.of('#forge:plates/copper').toJson(),
            D: Item.of('minecraft:clay_ball').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:generator_core_t1'), ['ACA', 'CBC', 'ACA'], {
            A: Item.of('minecraft:brick').toJson(),
            B: Item.of('frostedheart:energy_core').toJson(),
            C: Ingredient.of('#forge:ingots/copper').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('rankine:stone_hammer'), ['AAC', ' BA', 'B A'], {
            A: Item.of('minecraft:stone').toJson(),
            B: Item.of('minecraft:stick').toJson(),
            C: Ingredient.of('#forge:string').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:rye_bread'), ['AAA'], {
            A: Item.of('frostedheart:rye').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('watersource:wooden_cup', 4), ['A A', 'A A', ' A '], {
            A: Ingredient.of('#minecraft:planks').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('watersource:wooden_water_filter'), ['BCB', 'AAA', 'BCB'], {
            A: Ingredient.of('#minecraft:planks').toJson(),
            B: Ingredient.of('#minecraft:logs').toJson(),
            C: Item.of('minecraft:glass').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('kubejs:wet_straw_briquette'), ['AAA', 'A A', 'AAA'], {
            A: Item.of('charcoal_pit:straw').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('stone_age:fish_bone', 2), ['ABA'], {
            A: Item.of('minecraft:bone').toJson(),
            B: Item.of('minecraft:flint').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:hide_hat'), ['AAA', 'A A', 'B C'], {
            A: Item.of('stone_age:raw_hide').toJson(),
            B: Item.of('stone_age:leather_strip').toJson(),
            C: Item.of('stone_age:fish_bone').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:hide_jacket'), ['ACA', 'ABA', 'AAA'], {
            A: Item.of('stone_age:raw_hide').toJson(),
            B: Item.of('stone_age:leather_strip').toJson(),
            C: Item.of('stone_age:fish_bone').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:hide_pants'), ['AAA', 'ABA', 'ACA'], {
            A: Item.of('stone_age:raw_hide').toJson(),
            B: Item.of('stone_age:leather_strip').toJson(),
            C: Item.of('stone_age:fish_bone').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:hide_boots'), ['ABA', 'ACA'], {
            A: Item.of('stone_age:raw_hide').toJson(),
            B: Item.of('stone_age:leather_strip').toJson(),
            C: Item.of('stone_age:fish_bone').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:wool_hat'), ['AAA', 'A A', 'B C'], {
            A: Ingredient.of('#minecraft:wool').toJson(),
            B: Item.of('stone_age:leather_strip').toJson(),
            C: Item.of('stone_age:fish_bone').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:wool_jacket'), ['ACA', 'ABA', 'AAA'], {
            A: Ingredient.of('#minecraft:wool').toJson(),
            B: Item.of('stone_age:leather_strip').toJson(),
            C: Item.of('stone_age:fish_bone').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:wool_pants'), ['AAA', 'ABA', 'ACA'], {
            A: Ingredient.of('#minecraft:wool').toJson(),
            B: Item.of('stone_age:leather_strip').toJson(),
            C: Item.of('stone_age:fish_bone').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:wool_boots'), ['ABA', 'ACA'], {
            A: Ingredient.of('#minecraft:wool').toJson(),
            B: Item.of('stone_age:leather_strip').toJson(),
            C: Item.of('stone_age:fish_bone').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:hay_hat'), ['AAA', 'A A', 'B B'], {
            A: Item.of('charcoal_pit:straw').toJson(),
            B: Item.of('rankine:rope').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:hay_jacket'), ['ABA', 'ABA', 'AAA'], {
            A: Item.of('charcoal_pit:straw').toJson(),
            B: Item.of('rankine:rope').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:hay_pants'), ['AAA', 'ABA', 'ABA'], {
            A: Item.of('charcoal_pit:straw').toJson(),
            B: Item.of('rankine:rope').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('kubejs:clay_bucket'), ['A A', 'A A', ' A '], {
            A: Item.of('minecraft:clay_ball').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:hay_boots'), ['ABA', 'ABA'], {
            A: Item.of('charcoal_pit:straw').toJson(),
            B: Item.of('rankine:rope').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('frostedheart:drawing_desk'), ['BB ', 'CAB', 'AAB'], {
            A: Ingredient.of('#minecraft:planks').toJson(),
            B: Ingredient.of('#minecraft:wooden_slabs').toJson(),
            C: Ingredient.of('#forge:plates/copper').toJson(),
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('comforts:sleeping_bag_brown'), ['BBB', 'ACA', 'BBB'], {
            A: Item.of('stone_age:leather_strip').toJson(),
            B: Ingredient.of('#forge:leather').toJson(),
            C: Item.of('frostedheart:straw_lining').toJson()
        }, Item.of('stone_age:flint_knife'))
    ]
    const only_flint_recipes = [
        flint_shapedRecipe(Item.of('minecraft:stone_bricks', 5), ['ABA', 'BAB', 'ABA'], {
            A: Item.of('minecraft:stone').toJson(),
            B: Item.of('rankine:mortar').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('charcoal_pit:clay_pot'), ['AAA', 'A A', 'AAA'], {
            A: Item.of('minecraft:clay_ball').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('rankine:wooden_gold_pan'), ['   ','AAA',' A '], {
            A: Ingredient.of('#minecraft:planks').toJson(),
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('frostedheart:charcoal_stick',2), ['A'], {
            A: Item.of('kubejs:charcoal_briquette').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('frostedheart:coal_stick',2), ['A'], {
            A: Item.of('kubejs:coal_briquette').toJson()
        }, Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('rankine:flint_hoe'), ['AB', ' C', ' C'], {
            A: Item.of('minecraft:flint').toJson(),
            B: Item.of('rankine:rope').toJson(),
            C: Item.of('minecraft:stick').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('watersource:primitive_strainer'), ['AAA', 'BBB', 'CCC'], {
            A: Item.of('minecraft:charcoal').toJson(),
            B: Item.of('minecraft:sand').toJson(),
            C: Item.of('minecraft:clay_ball').toJson()
        }, Item.of('stone_age:flint_knife')),
        flint_shapedRecipe(Item.of('2x minecraft:bowl'), ['A A', ' A '], {
            A: Ingredient.of('#minecraft:planks').toJson()
        }, Item.of('stone_age:flint_knife')),
        
    ]
    event.remove({output: 'charcoal_pit:unfired_sandy_brick', type: 'minecraft:crafting_shapeless'});

    recipes.forEach((recipe) => {
        event.custom({
            "type": "stone_age:flint_workbench",
            "pattern": recipe.pattern,
            "key": recipe.key,
            "tool": recipe.tool.toJson(),
            "result": recipe.result.toResultJson()
        })
        event.shaped(recipe.result, recipe.pattern, recipe.key)
    })

    additional_crafting_table_recipes.forEach((recipe) => {
        event.shaped(recipe.result, recipe.pattern, recipe.key)
    })

    change_recipes.forEach((recipe) => {
        event.remove({output: recipe.result, type: 'minecraft:crafting_shaped'});
        event.custom({
            "type": "stone_age:flint_workbench",
            "pattern": recipe.pattern,
            "key": recipe.key,
            "tool": recipe.tool.toJson(),
            "result": recipe.result.toResultJson()
        })
        event.shaped(recipe.result, recipe.pattern, recipe.key)
    })
    flint_change_recipes.forEach((recipe) => {
        event.remove({output: recipe.result, type: 'stone_age:flint_workbench'});
        event.custom({
            "type": "stone_age:flint_workbench",
            "pattern": recipe.pattern,
            "key": recipe.key,
            "tool": recipe.tool.toJson(),
            "result": recipe.result.toResultJson()
        })
        event.shaped(recipe.result, recipe.pattern, recipe.key)
    })
    only_flint_recipes.forEach((recipe) => {
            event.custom({
                "type": "stone_age:flint_workbench",
                "pattern": recipe.pattern,
                "key": recipe.key,
                "tool": recipe.tool.toJson(),
                "result": recipe.result.toResultJson()
            })
    })
});
onEvent('item.tags', (event) => {
event.add('\u0066\u0074\u0062\u0075\u006c\u0074\u0069\u006d\u0069\u006e\u0065\u003a\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0064\u005f\u0074\u006f\u006f\u006c\u0073','\u0063\u0072\u0065\u0061\u0074\u0065\u003a\u006c\u0061\u0072\u0067\u0065\u005f\u0063\u006f\u0067\u0077\u0068\u0065\u0065\u006c')
})