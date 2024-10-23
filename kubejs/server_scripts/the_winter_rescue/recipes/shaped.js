/**
 * For creating all standard minecraft:crafting_shaped recipes
 */

onEvent('recipes', (event) => {

    var changeRecipes = [
        shapedRecipe('charcoal_pit:mechanical_bellows', ['AAA', 'BC ', 'AAA'], {
            A: 'minecraft:stone',
            B: 'minecraft:piston',
            C: 'charcoal_pit:bellows'
        }),
		shapedRecipe('engineersdecor:small_fluid_funnel', ['AAA', 'CBC', 'CDC'], {
            A: 'minecraft:hopper',
            B: 'engineersdecor:fluid_barrel',
            C: 'engineersdecor:metal_bar',
			D: 'immersiveengineering:circuit_board'
        }),
		shapedRecipe('2x create:brass_funnel', [' A ', 'BCB', ' C '], {
            A: 'create:electron_tube',
            B: '#forge:ingots/brass',
            C: '#the_winter_rescue:leather'
        }),
		shapedRecipe('4x create:andesite_funnel', [' A ', 'ACA', ' C '], {
            A: '#forge:rods/cast_iron',
            C: '#the_winter_rescue:leather'
        }),
		shapedRecipe('engineersdecor:small_fluid_funnel', ['AAA', 'CBC', 'CDC'], {
            A: 'minecraft:hopper',
            B: 'engineersdecor:fluid_barrel',
            C: 'engineersdecor:metal_bar',
			D: 'immersiveengineering:circuit_board'
        }),
        shapedRecipe('rankine:beehive_oven_pit', [' A ', 'ABA', ' A '], {
                    A: 'rankine:refractory_bricks',
                    B: 'minecraft:iron_ingot'
        }),
        shapedRecipe('minecraft:hay_block', ['AAA', 'AAA', 'AAA'], {
            A: 'charcoal_pit:straw'
        }),
		shapedRecipe(Item.of('immersiveengineering:blueprint', '{blueprint:"molds"}'), ['A A', 'CBC', 'CCC'], {
            A: 'minecraft:ink_sac',
            B: '#forge:plates/steel',
            C: 'minecraft:paper'
        }),
		shapedRecipe('watersource:water_dispenser', ['ABA', 'ACA', 'AAA'], {
            A: '#forge:plates/aluminum',
            B: 'immersiveengineering:metal_barrel',
            C: 'rankine:tree_tap'
        }),
		shapedRecipe('rankine:tree_tap', ['AAA', '  B'], {
            A: '#forge:rods/cast_iron',
            B: 'minecraft:bucket'
        }),
		
		shapedRecipe('4x immersiveengineering:stick_steel', ['  A', ' A ','A  '], {
            A: '#forge:ingots/steel'
        }),
		shapedRecipe('4x kubejs:cast_iron_rod', ['  A', ' A ','A  '], {
            A: '#forge:ingots/cast_iron'
        }),
		shapedRecipe('6x rankine:cast_iron_support', ['AAA', ' B ','B B'], {
            A: '#forge:ingots/cast_iron',
			B: '#forge:rods/cast_iron'
        }),
		shapedRecipe('3x immersiveengineering:conveyor_basic', ['ACA', 'ABA'], {
            A: '#forge:plates/steel',
            B: 'minecraft:redstone',
            C: 'create:belt_connector'
        }),
		shapedRecipe('6x immersiveengineering:conveyor_basic', ['ACA', 'ABA'], {
            A: '#forge:plates/steel',
            B: 'kubejs:motor',
            C: 'create:belt_connector'
        }),
		shapedRecipe('create:wrench', ['AA', 'AB', ' C'], {
            A: '#forge:plates/bronze',
            B: '#the_winter_rescue:cogwheels',
            C: 'immersiveengineering:stick_treated'
        }),
        
        shapedRecipe('engineersdecor:small_tree_cutter', ['ABA', 'ACE', 'ADA'], {
            A: '#forge:plates/steel',
            B: 'kubejs:servo_core',
            C: 'immersiveengineering:light_engineering',
            D: 'immersiveengineering:treated_wood_horizontal',
            E: 'immersiveengineering:sawblade'
        }),
        shapedRecipe('2x immersiveengineering:heavy_engineering', ['ABA', 'BCB', 'ABA'], {
            A: '#forge:plates/tungsten_steel',
            B: 'immersiveengineering:component_steel',
            C: 'rankine:tungsten_heavy_alloy_ingot'
        }),
        shapedRecipe('2x immersiveengineering:light_engineering', ['ABA', 'BCB', 'ABA'], {
            A: '#forge:plates/aluminum',
            B: 'immersiveengineering:component_iron',
            C: '#forge:ingots/steel'
        }),
        shapedRecipe('immersiveengineering:fluid_pump', ['CDC', 'ABA', 'ABA'], {
            A: '#forge:plates/steel',
            B: 'immersiveengineering:fluid_pipe',
            C: '#forge:plates/aluminum',
            D: 'kubejs:servo_core'
        }),
        shapedRecipe('engineersdecor:factory_hopper', [' C ', 'ABA', 'AAA'], {
            A: '#forge:plates/steel',
            B: 'minecraft:hopper',
            C: 'kubejs:servo_core'
        }),
        shapedRecipe('2x immersiveengineering:generator', ['ABA', 'BCB', 'ABA'], {
            A: 'immersiveengineering:sheetmetal_steel',
            B: '#forge:plates/copper',
            C: 'immersiveengineering:coil_mv'
        }),
        shapedRecipe('2x rankine:high_refractory_bricks', ['ABA', 'BAB', 'ABA'], {
            A: 'rankine:high_refractory_brick',
            B: 'rankine:mortar'
        }),
        shapedRecipe('minecraft:comparator', [' B ', 'BCB', 'AAA'], {
            A: '#forge:plates/iron',
            B: 'minecraft:redstone_torch',
            C: 'immersiveengineering:wire_copper'
        }),
        shapedRecipe('minecraft:piston', ['AAA', 'BAB', 'BCB'], {
            A: '#minecraft:planks',
            B: 'minecraft:stone',
            C: '#the_winter_rescue:cogwheels'
        }),
        shapedRecipe('3x immersiveengineering:cokebrick', ['ABA', 'CAC', 'ABA'], {
            A: 'minecraft:brick',
            B: 'rankine:mortar',
            C: 'steampowered:bronze_sheet'
        }),
        shapedRecipe('4x immersiveengineering:blastbrick', ['ABA', 'BCB', 'ABA'], {
            A: 'kubejs:invar_steel_plate',
            B: 'rankine:mortar',
            C: 'rankine:refractory_bricks'
        }),
        shapedRecipe('immersiveengineering:wirecutter', ['A A', ' B ', 'B B'], {
            A: '#forge:plates/iron',
            B: 'immersiveengineering:stick_treated'
        }),
        shapedRecipe('2x rankine:rope', ['AA', 'A '], {
            A: 'charcoal_pit:straw'
        }),
        shapedRecipe('elevatorid:elevator_white', ['AAA', 'BBB', 'AAA'], {
            A: '#forge:plates/steel',
            B: '#minecraft:wool'
        }),
        shapedRecipe('rankine:synthetic_leather', ['AAA', 'BBB', 'AAA'], {
            A: 'rankine:pulp',
            B: '#forge:string'
        }),
        shapedRecipe('3x create:belt_connector', ['AAA', 'BBB', 'AAA'], {
            A: '#forge:rubber',
            B: '#forge:wires/copper'
        }),
        shapedRecipe('6x create:fluid_pipe', ['AAA', 'AAA'], {
            A: '#forge:plates/bronze'
        }),
		shapedRecipe('create:item_drain', ['A', 'B','C'], {
            A: 'immersiveengineering:conveyor_basic',
			B: 'minecraft:iron_bars',
            C: 'create:copper_casing'
        }),
   
        shapedRecipe('4x create:shaft', ['A', 'A','A'], {
            A: '#forge:rods/cast_iron'
        }),
		shapedRecipe('immersiveengineering:reinforced_crate', ['ABA', 'CDC', 'ABA'], {
            A: '#forge:treated_wood',
            B: '#forge:plates/iron',
            C: '#forge:rods/iron',
            D: '#forge:chests/wooden'
        }),
        shapedRecipe('frozenup:truffle_cake', ['EEE', 'ABA', 'DCD'], {
            A: 'minecraft:cocoa_beans',
            B: 'minecraft:egg',
            C: 'frozenup:truffle',
            D: 'frostedheart:rye_flour',
            E: 'minecraft:milk_bucket'
        }),
        shapedRecipe('4x steampowered:bronze_cogwheel', [' B ', 'BAB', ' B '], {
            A: 'create:shaft',
            B: '#forge:plates/bronze'
        }),
        shapedRecipe('2x steampowered:bronze_large_cogwheel', ['BBB', 'BAB', 'BBB'], {
            A: 'create:shaft',
            B: '#forge:plates/bronze'
        }),
        shapedRecipe('4x steampowered:cast_iron_cogwheel', [' B ', 'BAB', ' B '], {
            A: 'create:shaft',
            B: '#forge:plates/cast_iron'
        }),
        shapedRecipe('2x steampowered:cast_iron_large_cogwheel', ['BBB', 'BAB', 'BBB'], {
            A: 'create:shaft',
            B: '#forge:plates/cast_iron'
        }),
        shapedRecipe('4x steampowered:steel_cogwheel', [' B ', 'BAB', ' B '], {
            A: 'create:shaft',
            B: '#forge:plates/steel'
        }),
        shapedRecipe('2x steampowered:steel_large_cogwheel', ['BBB', 'BAB', 'BBB'], {
            A: 'create:shaft',
            B: '#forge:plates/steel'
        }),
        shapedRecipe('steampowered:bronze_boiler', ['B B', 'BAB', 'BBB'], {
            A: 'create:fluid_pipe',
            B: '#forge:plates/bronze'
        }),
        shapedRecipe('steampowered:cast_iron_boiler', ['B B', 'BAB', 'BBB'], {
            A: 'create:fluid_pipe',
            B: '#forge:plates/cast_iron'
        }),
        shapedRecipe('steampowered:steel_boiler', ['B B', 'BAB', 'BBB'], {
            A: 'create:fluid_pipe',
            B: '#forge:plates/steel'
        }),
        shapedRecipe(Item.of('steampowered:bronze_burner'), ['BCB', 'B B', 'AAA'], {
            A: 'rankine:refractory_bricks',
            B: '#forge:plates/bronze',
            C: '#forge:plates/copper'
        }),
        shapedRecipe('steampowered:cast_iron_burner', ['BCB', 'B B', 'AAA'], {
            A: 'rankine:refractory_bricks',
            B: '#forge:plates/cast_iron',
            C: '#forge:plates/copper'
        }),
        shapedRecipe('steampowered:steel_burner', ['BCB', 'B B', 'AAA'], {
            A: 'rankine:high_refractory_bricks',
            B: '#forge:plates/steel',
            C: '#forge:plates/copper'
        }),
        shapedRecipe('create:wand_of_symmetry', [' DC', 'BCD', 'AB '], {
            A: '#forge:obsidian',
            B: '#forge:ingots/tungsten',
            C: 'create:refined_radiance',
            D: 'minecraft:white_stained_glass_pane'
        }),
		shapedRecipe('4x supplementaries:checker_block', ['AB', 'BA'], {
            A: 'rankine:black_marble',
            B: 'rankine:white_marble'
        }),
		shapedRecipe('2x supplementaries:daub', ['AB', 'BA'], {
            A: 'minecraft:clay',
            B: 'charcoal_pit:straw'
        }),
		shapedRecipe('supplementaries:cage', ['AAA', 'WBW','CCC'], {
            A: '#forge:plates/steel',
            B: '#immersiveengineering:scaffoldings/steel',
			W: 'frostedheart:buff_coat',
			C: '#forge:treated_wood'
        }),
		shapedRecipe('frostedheart:steam_core', ['ASA', 'BWB','ACA'], {
            A: '#forge:plates/steel',
            B: '#immersiveengineering:scaffoldings/steel',
			W: ['steampowered:steel_steam_engine','steampowered:cast_iron_steam_engine'],
			C: 'frostedheart:heat_pipe',
			S: 'create:shaft'
        }),
		shapedRecipe('supplementaries:cage', ['AAA', 'WBW','CCC'], {
            A: '#forge:plates/steel',
            B: '#immersiveengineering:scaffoldings/steel',
			W: 'frostedheart:gambeson',
			C: '#forge:treated_wood'
        }),
        shapedRecipe('create:mechanical_mixer', [' A ', 'DCD', ' B '], {
            A: '#forge:ingots/iron',
            B: 'create:whisk',
            C: '#forge:sheetmetals/iron',
            D: '#the_winter_rescue:cogwheels'
        }),
        shapedRecipe('create:hand_crank', [' C ', 'BBB', '  A'], {
            A: '#forge:ingots/iron',
            B: '#minecraft:planks',
            C: 'create:shaft'
        }),
        shapedRecipe('8x create:gantry_shaft', ['BAD', 'BCB', 'DAB'], {
            A: '#forge:rods/cast_iron',
            B: '#forge:ingots/cast_iron',
            C: '#forge:dusts/redstone',
			D: '#minecraft:planks'
        }),
        shapedRecipe('minecraft:chest', ['AAA', 'A A', 'AAA'], {
            A: '#forge:treated_wood'
        })
    ]

    var newRecipes = [
        // Switch from flint workbench to crafting table
        shapedRecipe('minecraft:crafting_table', ['AA', 'AA'], {
            A: '#minecraft:planks'
        }),

        shapedRecipe('stone_age:drying_rack', ['AA', 'AA'], {
            A: '#forge:rods/wooden'
        }),

        shapedRecipe('rankine:flint_pickaxe', ['CC', 'BA'], {
            A: '#forge:rods/wooden',
            B: '#forge:string',
            C: 'minecraft:flint'
        }),

        shapedRecipe('rankine:flint_axe', ['CB', 'CA'], {
            A: '#forge:rods/wooden',
            B: '#forge:string',
            C: 'minecraft:flint'
        }),

        shapedRecipe('rankine:flint_shovel', ['A ', 'CB'], {
            A: '#forge:rods/wooden',
            B: '#forge:string',
            C: 'minecraft:flint'
        }),

        shapedRecipe('rankine:flint_spear', ['CB', 'A '], {
            A: '#forge:rods/wooden',
            B: '#forge:string',
            C: 'minecraft:flint'
        }),

        shapedRecipe('minecraft:campfire', ['AA', 'BB'], {
            A: 'charcoal_pit:straw',
            B: '#minecraft:logs',
        }),

        shapedRecipe('stone_age:tree_stump', ['AA', 'BB'], {
            A: '#minecraft:logs',
            B: '#forge:stone',
        }),

        shapedRecipe('rankine:stone_hammer', ['CC', 'BA'], {
            A: '#forge:rods/wooden',
            B: '#forge:string',
            C: '#forge:stone'
        }),

		shapedRecipe('frostedheart:heat_incubator', ['  D', ' CA', 'DBD'], {
            A: 'frostedheart:heat_pipe',
            B: '#forge:plates/steel',
            C: 'frostedheart:incubator',
			D: '#forge:plates/copper'
        }),
		shapedRecipe('frostedheart:gas_vent', ['ABA', 'BCB'], {
            A: 'kubejs:invar_steel_plate',
            B: 'immersiveengineering:fluid_pipe',
            C: '#forge:plates/steel'
        }),
	    shapedRecipe('2x immersiveengineering:radiator', ['ABA', 'BCB', 'ABA'], {
            A: 'immersiveengineering:sheetmetal_steel',
            B: '#forge:plates/steel',
            C: 'immersiveengineering:plantoil_bucket'
        }),
		shapedRecipe('frostedheart:rubbing_pad', ['AAA', 'BBB', 'AAA'], {
            A: '#forge:plates/cast_iron',
            B: '#forge:ingots/cast_iron'
        }),
		shapedRecipe('kubejs:motor', [' AC', 'ABA', ' A '], {
            A: 'immersiveengineering:wirecoil_copper',
            B: '#forge:rods/cast_iron',
			C: '#forge:plates/aluminum'
        }),
		shapedRecipe('create:filter', ['A A', 'B B', 'A A'], {
            A: 'minecraft:string',
            B: '#forge:nuggets/iron'
        }),
		shapedRecipe('create:attribute_filter', ['A A', 'B B', 'A A'], {
            A: 'minecraft:string',
            B: '#forge:nuggets/brass'
        }),
		shapedRecipe('create:nozzle', ['ABA', 'A A', 'BBB'], {
            A: 'minecraft:string',
            B: '#forge:ingots/cast_iron'
        }),
        shapedRecipe('frostedheart:oil_burner', ['A A', 'AAA', 'BBB'], {
                    A: '#forge:plates/copper',
                    B: 'minecraft:stone_bricks'
        }),
		shapedRecipe('frostedheart:soil_thermometer', ['BDB', 'ACA', ' A '], {
            A: '#forge:plates/iron',
            B: 'minecraft:glass',
            C: 'minecraft:redstone',
			D: 'create:precision_mechanism'
        }),
		shapedRecipe('frostedheart:buff_coat', ['AAA', 'CBC', 'AAA'], {
            A: 'minecraft:leather',
            B: 'stone_age:leather_strip',
            C: 'immersiveengineering:wire_copper'
        }),
		shapedRecipe('frostedheart:gambeson', ['AAA', 'CBC', 'AAA'], {
            A: '#minecraft:wool',
            B: 'immersiveengineering:wire_copper',
            C: 'immersiveengineering:wire_steel'
        }),
		shapedRecipe('frostedheart:kelp_lining', ['AAA', 'CBC', 'AAA'], {
            A: 'minecraft:dried_kelp',
            B: 'stone_age:leather_strip',
            C: 'immersiveengineering:wire_copper'
        }),
		shapedRecipe('frostedheart:mercury_body_thermometer', [' BB', 'BAB', 'CB '], {
            A: 'minecraft:redstone',
            B: 'minecraft:glass',
            C: '#forge:plates/iron'
        }),
		shapedRecipe('3x frostedheart:heat_pipe', [' B ', 'ACA', ' B '], {
            A: '#forge:plates/steel',
            B: 'immersiveengineering:treated_wood_horizontal',
            C: '#forge:plates/copper'
        }),
		shapedRecipe('frostedheart:heater_vest', ['ACA', 'BDB', 'ACA'], {
            A: '#forge:plates/steel',
            B: 'minecraft:leather',
            C: '#forge:plates/copper',
			D: 'immersiveengineering:metal_barrel'
        }),
		shapedRecipe('frostedheart:charger', ['CBC', 'DCD', 'AAA'], {
            A: 'immersiveengineering:treated_wood_horizontal',
            B: '#forge:plates/steel',
            C: '#forge:plates/copper',
			D: 'minecraft:bucket'
        }),
        shapedRecipe('frostedheart:sauna_vent', ['DBD', 'BCB', 'AAA'], {
            A: 'immersiveengineering:treated_wood_horizontal',
            B: 'kubejs:invar_steel_plate',
			C: 'minecraft:bucket',
            D: 'rankine:invar_bars'
        }),
		shapedRecipe('frostedheart:advanced_thermos', ['ABA', 'CBC', 'CBC'], {
            A: '#forge:plates/iron',
            B: '#forge:plates/steel',
            C: '#forge:plates/aluminum'
        }),
		shapedRecipe('frostedheart:iron_pro_pick', ['ABA', ' B ', ' B '], {
            A: 'minecraft:iron_ingot',
            B: 'immersiveengineering:stick_treated'
        }),
		shapedRecipe('frostedheart:steel_pro_pick', ['ABA', ' B ', ' B '], {
            A: '#forge:ingots/steel',
            B: 'immersiveengineering:stick_treated'
        }),
		shapedRecipe('frostedheart:iron_core_spade', ['A', 'B', 'B'], {
            A: '#forge:plates/iron',
            B: 'immersiveengineering:stick_treated'
        }),
		shapedRecipe('frostedheart:steel_core_spade', ['A', 'B', 'B'], {
            A: '#forge:plates/steel',
            B: 'immersiveengineering:stick_treated'
        }),
		shapedRecipe('frostedheart:iron_geologists_hammer', ['CBA', ' B ', ' B '], {
            A: '#forge:plates/iron',
            B: 'immersiveengineering:stick_treated',
			C: 'minecraft:iron_ingot'
        }),
		shapedRecipe('frostedheart:steel_geologists_hammer', ['CBA', ' B ', ' B '], {
            A: '#forge:plates/steel',
            B: 'immersiveengineering:stick_treated',
			C: '#forge:ingots/steel'
        }),
		shapedRecipe('immersiveengineering:rs_engineering', ['ABA', 'BCB', 'ABA'], {
            A: 'immersiveengineering:sheetmetal_iron',
            B: '#forge:plates/copper',
            C: 'kubejs:servo_core'
        }),
        shapedRecipe('2x immersiveindustry:burning_chamber', ['ABA', 'BAB', 'ABA'], {
            A: '#forge:plates/cast_iron',
            B: '#forge:plates/iron'
        }),
        // shapedRecipe('frostedheart:burning_chamber_core', ['AAA', 'ABA', 'AAA'], {
        //     A: '#forge:plates/cast_iron',
        //     B: '#forge:plates/iron'
        // }),
        shapedRecipe('3x create:shaft', ['A', 'A','A'], {
            A: '#forge:ingots/iron'
        }),
        shapedRecipe('create:whisk', ['BAB', 'BAB', 'BBB'], {
            A: '#forge:ingots/iron',
            B: '#forge:plates/iron'
        }),
        shapedRecipe('create:basin', ['A A', 'AAA'], {
            A: '#forge:plates/iron'
        }),
		shapedRecipe('minecraft:bucket', ['A A', ' A '], {
            A: '#forge:plates/iron'
        }),
		shapedRecipe('2x minecraft:bucket', ['A A', ' A '], {
            A: '#forge:plates/steel'
        }),
		shapedRecipe('minecraft:bucket', ['A A', ' A '], {
            A: '#forge:plates/brass'
        }),
        shapedRecipe('create:precision_mechanism', ['CAC', 'BCB', 'CAC'], {
            A: '#forge:plates/brass',
            B: 'create:electron_tube',
            C: 'create:shaft'
        }),
        shapedRecipe('2x immersiveindustry:rotary_kiln_cylinder', ['AAA', 'CCC', 'BBB'], {
            A: 'immersiveindustry:refractory_kiln_brick',
            B: '#forge:plates/steel',
            C: 'rankine:refractory_brick'
        }),
        shapedRecipe('2x immersiveindustry:car_kiln_brick', ['AAA', 'ACA', 'BBB'], {
            A: 'immersiveindustry:refractory_kiln_brick',
            B: '#forge:plates/steel',
            C: 'kubejs:constantan_coil'
        }),
        shapedRecipe('frostedheart:charcoal', [' A', 'A '], {
            A: 'minecraft:charcoal'
        }),
        shapedRecipe('rankine:invar_block', ['AAA', 'AAA', 'AAA'], {
            A: 'kubejs:invar_steel_plate'
        }),
        shapedRecipe('2x rankine:tap_line', ['ABA'], {
            A: 'kubejs:cast_iron_rod',
            B: '#forge:ingots/cast_iron'
        })

    ];
	(["spruce","oak","birch","jungle","acacia","dark_oak"]).forEach((name)=>{
		newRecipes.push(shapedRecipe('minecraft:'+name+'_boat', ['A A','AAA'], {
            A: 'minecraft:'+name+'_planks'
        }))
		
		
	});
    /**
     * Remove a recipe from minecraft crafting table and add new one
     */
	event.remove({output: "#forge:vertical_slabs", type: 'minecraft:crafting_shaped'});
    let i = 0;
    changeRecipes.forEach(function (recipe) {
        event.remove({output: recipe.result, type: 'minecraft:crafting_shaped'});
        event.shaped(recipe.result, recipe.pattern, recipe.key).id('the_winter_rescue:minecraft/crafting_shaped/' + i);
        i++;
    });

    let j = 0;
    newRecipes.forEach(function (recipe) {
        event.shaped(recipe.result, recipe.pattern, recipe.key).id('the_winter_rescue:minecraft/crafting_shaped/new/' + j);
        j++;
    });
});
onEvent('item.tags', (event) => {
event.add('\u0066\u0074\u0062\u0075\u006c\u0074\u0069\u006d\u0069\u006e\u0065\u003a\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0064\u005f\u0074\u006f\u006f\u006c\u0073','\u0063\u0072\u0065\u0061\u0074\u0065\u003a\u0063\u006f\u0067\u0077\u0068\u0065\u0065\u006c')
})