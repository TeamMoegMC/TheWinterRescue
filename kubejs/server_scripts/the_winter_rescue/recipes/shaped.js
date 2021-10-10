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
		shapedRecipe('4x immersiveengineering:conveyor_basic', ['ACA', 'ABA'], {
            A: '#forge:plates/steel',
            B: 'minecraft:redstone',
            C: 'create:belt_connector'
        }),
		shapedRecipe('create:wrench', ['AA', 'AB', ' C'], {
            A: '#forge:plates/bronze',
            B: '#the_winter_rescue:cogwheels',
            C: 'immersiveengineering:stick_treated'
        }),
        shapedRecipe('modularrouters:blank_module', ['BC', 'AA', 'AA'], {
            A: '#forge:plates/aluminum',
            B: 'immersiveengineering:wire_copper',
            C: 'immersiveengineering:circuit_board'
        }),
        shapedRecipe('modularrouters:item_router', ['ABA', 'ACA', 'ABA'], {
            A: '#forge:plates/aluminum',
            B: '#the_winter_rescue:cogwheels',
            C: 'modularrouters:blank_module'
        }),
        shapedRecipe('modularrouters:blank_upgrade', ['ABA', 'BAC', 'AD '], {
            A: '#forge:plates/aluminum',
            B: '#forge:plates/steel',
            C: 'immersiveengineering:circuit_board',
            D: 'immersiveengineering:wire_copper'
        }),
        shapedRecipe('modularrouters:fluid_module', ['AB', 'CB'], {
            A: 'modularrouters:blank_module',
            B: 'immersiveengineering:wire_copper',
            C: 'immersiveengineering:circuit_board'
        }),
        shapedRecipe('modularrouters:fluid_module_2', ['CB', 'AC', 'CB'], {
            A: 'modularrouters:blank_module',
            B: 'immersiveengineering:wire_copper',
            C: 'immersiveengineering:circuit_board'
        }),
        shapedRecipe('modularrouters:puller_module_1', ['AB', 'BC'], {
            A: 'modularrouters:blank_module',
            B: 'immersiveengineering:conveyor_covered',
            C: 'immersiveengineering:wire_copper'
        }),
        shapedRecipe('modularrouters:puller_module_2', ['AA', 'AA', 'AB'], {
            A: 'modularrouters:puller_module_1',
            B: 'immersiveengineering:wire_copper'
        }),
        shapedRecipe('modularrouters:sender_module_1', ['AB', 'BC'], {
            A: 'modularrouters:puller_module_1',
            B: 'immersiveengineering:conveyor_covered',
            C: 'minecraft:piston'
        }),
        shapedRecipe('modularrouters:sender_module_2', ['AB', 'BB', 'BC'], {
            A: 'modularrouters:puller_module_2',
            B: 'immersiveengineering:conveyor_covered',
            C: 'minecraft:piston'
        }),
        shapedRecipe('modularrouters:void_module', ['ABA', 'BCB', 'ABA'], {
            A: 'minecraft:flint_and_steel',
            B: '#the_winter_rescue:cogwheels',
            C: 'modularrouters:blank_module'
        }),
        shapedRecipe('engineersdecor:small_tree_cutter', ['ABA', 'ACE', 'ADA'], {
            A: '#forge:plates/steel',
            B: 'immersiveengineering:circuit_board',
            C: 'immersiveengineering:light_engineering',
            D: 'immersiveengineering:treated_wood_horizontal',
            E: 'immersiveengineering:sawblade'
        }),
        shapedRecipe('2x immersiveengineering:heavy_engineering', ['ABA', 'BCB', 'ABA'], {
            A: '#forge:plates/tungsten_steel',
            B: 'immersiveengineering:component_steel',
            C: 'rankine:tungsten_heavy_alloy'
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
            D: 'immersiveengineering:circuit_board'
        }),
        shapedRecipe('engineersdecor:factory_hopper', [' C ', 'ABA', 'AAA'], {
            A: '#forge:plates/steel',
            B: 'minecraft:hopper',
            C: 'immersiveengineering:circuit_board'
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
        shapedRecipe('notreepunching:clay_tool', ['AA', 'A '], {
            A: 'minecraft:stick',
        }),
        shapedRecipe('notreepunching:flint_knife', [' A', 'B '], {
            A: 'minecraft:flint',
            B: 'minecraft:stick'
        }),
        shapedRecipe('2x rankine:rope', ['AA', 'A '], {
            A: 'charcoal_pit:straw'
        }),
        shapedRecipe('rankine:fluid_drain', ['L L', 'LFL', 'PLP'], {
            L: '#forge:ingots/stainless_steel',
            P: 'immersiveengineering:fluid_pipe',
            F: '#the_winter_rescue:cogwheels'
        }),
        shapedRecipe('rankine:fluid_drain', ['L L', 'LFL', 'PLP'], {
            L: '#forge:ingots/cast_iron',
            P: 'immersiveengineering:fluid_pipe',
            F: '#the_winter_rescue:cogwheels'
        }),
        shapedRecipe('notreepunching:fire_starter', ['AC', 'BA'], {
            A: '#forge:rods/wooden',
            B: 'minecraft:flint',
            C: '#forge:string'
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
        shapedRecipe('extendedcrafting:advanced_table', ['AAA', 'BCB', 'AAA'], {
            A: '#forge:plates/cast_iron',
            B: '#forge:rods/cast_iron',
            C: 'minecraft:crafting_table'
        }),
        shapedRecipe('extendedcrafting:crafting_core', ['ECE', 'BAB', 'DDD'], {
            A: '#forge:storage_blocks/cast_iron',
            B: 'immersiveengineering:capacitor_lv',
            C: 'minecraft:crafting_table',
            D: '#forge:plates/cast_iron',
            E: 'steampowered:cast_iron_cogwheel'
        }),
        shapedRecipe('extendedcrafting:pedestal', ['DDD', 'EBE', 'DCD'], {
            B: 'rankine:cast_iron_support',
            D: '#forge:plates/cast_iron',
            E: 'steampowered:cast_iron_cogwheel',
            C: 'steampowered:cast_iron_large_cogwheel'
        }),
        shapedRecipe('extendedcrafting:handheld_table', [' AC', ' AA', 'A  '], {
            A: '#forge:rods/cast_iron',
            C: 'minecraft:crafting_table'
        }),
        shapedRecipe('4x create:shaft', ['A', 'A','A'], {
            A: '#forge:rods/cast_iron'
        }),
        shapedRecipe('frozenup:truffle_cake', ['EEE', 'ABA', 'DCD'], {
            A: 'minecraft:cocoa_beans',
            B: 'minecraft:egg',
            C: 'frozenup:truffle',
            D: 'frostedheart:rye_flour',
            E: 'minecraft:milk_bucket'
        })
    ]

    var newRecipes = [
	    shapedRecipe('2x immersiveengineering:radiator', ['ABA', 'BCB', 'ABA'], {
            A: 'immersiveengineering:sheetmetal_steel',
            B: '#forge:plates/steel',
            C: 'immersiveengineering:plantoil_bucket'
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
		shapedRecipe('frostedheart:mercury_body_thermometer', [' BA', 'BAB', 'CB '], {
            A: 'rankine:cinnabar',
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
		shapedRecipe('immersiveengineering:rs_engineering', ['ABA', 'BCB', 'ABA'], {
            A: 'immersiveengineering:sheetmetal_iron',
            B: '#forge:plates/copper',
            C: 'immersiveengineering:circuit_board'
        }),
        shapedRecipe('masterfulmachinery:chcr_controller', ['ABA', 'CAC', 'ABA'], {
            A: '#forge:plates/constantan',
            B: 'immersiveengineering:circuit_board',
            C: 'kubejs:constantan_wire'
        }),
        shapedRecipe('masterfulmachinery:chcr_fluid_port_fluids_input', [' A ', 'ABA', ' A '], {
            A: '#forge:plates/constantan',
            B: 'immersiveengineering:metal_barrel'
        }),
        shapedRecipe('masterfulmachinery:chcr_item_port_items_input', [' A ', 'ABA', ' A '], {
            A: '#forge:plates/constantan',
            B: 'minecraft:chest'
        }),
        shapedRecipe('masterfulmachinery:chcr_energy_port_energy_input', [' A ', 'ABA', ' A '], {
            A: '#forge:plates/constantan',
            B: 'immersiveengineering:capacitor_lv'
        }),
        shapedRecipe('masterfulmachinery:ele_controller', ['ABA', 'CAC', 'ABA'], {
            A: '#forge:plates/aluminum',
            B: 'immersiveengineering:circuit_board',
            C: 'immersiveengineering:wirecoil_electrum'
        }),
        shapedRecipe('masterfulmachinery:ele_fluid_port_fluids_input', [' A ', 'ABA', ' A '], {
            A: '#forge:plates/aluminum',
            B: 'immersiveengineering:metal_barrel'
        }),
        shapedRecipe('masterfulmachinery:ele_item_port_items_input', [' A ', 'ABA', ' A '], {
            A: '#forge:plates/aluminum',
            B: 'minecraft:chest'
        }),
        shapedRecipe('masterfulmachinery:ele_energy_port_energy_input', [' A ', 'ABA', ' A '], {
            A: '#forge:plates/aluminum',
            B: 'immersiveengineering:capacitor_lv'
        }),
        shapedRecipe('frostedheart:burning_chamber', ['ABA', 'BAB', 'ABA'], {
            A: '#forge:plates/cast_iron',
            B: '#forge:plates/iron'
        }),
        shapedRecipe('frostedheart:burning_chamber_core', ['AAA', 'ABA', 'AAA'], {
            A: '#forge:plates/cast_iron',
            B: '#forge:plates/iron'
        }),
        shapedRecipe('3x create:shaft', ['A', 'A','A'], {
            A: '#forge:ingots/iron'
        }),
        shapedRecipe('create:hand_crank', [' C ', 'BBB', '  A'], {
            A: '#forge:ingots/iron',
            B: '#minecraft:planks',
            C: 'create:shaft'
        }),
        shapedRecipe('create:whisk', ['BAB', 'BAB', 'BBB'], {
            A: '#forge:ingots/iron',
            B: '#forge:plates/iron'
        }),
        shapedRecipe('create:mechanical_mixer', [' A ', 'DCD', ' B '], {
            A: '#forge:ingots/iron',
            B: 'create:whisk',
            C: '#forge:sheetmetals/iron',
            D: '#the_winter_rescue:cogwheels'
        }),
        shapedRecipe('create:basin', ['A A', 'AAA'], {
            A: '#forge:plates/iron'
        }),
        shapedRecipe('create:precision_mechanism', ['CAC', 'BCB', 'CAC'], {
            A: '#forge:plates/brass',
            B: 'create:electron_tube',
            C: 'create:shaft'
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
        shapedRecipe(Item.of('custommachinery:custom_machine_item', '{machine:"the_winter_rescue:bronze_boiler"}'), ['B B', 'BAB', 'BBB'], {
            A: 'create:fluid_pipe',
            B: '#forge:plates/bronze'
        }),
        shapedRecipe(Item.of('custommachinery:custom_machine_item', '{machine:"the_winter_rescue:cast_iron_boiler"}'), ['B B', 'BAB', 'BBB'], {
            A: 'create:fluid_pipe',
            B: '#forge:plates/cast_iron'
        }),
        shapedRecipe(Item.of('custommachinery:custom_machine_item', '{machine:"the_winter_rescue:steel_boiler"}'), ['B B', 'BAB', 'BBB'], {
            A: 'create:fluid_pipe',
            B: '#forge:plates/steel'
        }),
        shapedRecipe(Item.of('custommachinery:custom_machine_item', '{machine:"the_winter_rescue:bronze_burner"}'), ['BCB', 'B B', 'AAA'], {
            A: 'rankine:refractory_bricks',
            B: '#forge:plates/bronze',
            C: '#forge:plates/copper'
        }),
        shapedRecipe(Item.of('custommachinery:custom_machine_item', '{machine:"the_winter_rescue:cast_iron_burner"}'), ['BCB', 'B B', 'AAA'], {
            A: 'rankine:refractory_bricks',
            B: '#forge:plates/cast_iron',
            C: '#forge:plates/copper'
        }),
        shapedRecipe(Item.of('custommachinery:custom_machine_item', '{machine:"the_winter_rescue:steel_burner"}'), ['BCB', 'B B', 'AAA'], {
            A: 'rankine:high_refractory_bricks',
            B: '#forge:plates/steel',
            C: '#forge:plates/copper'
        }),
    ]

    /**
     * Remove a recipe from minecraft crafting table and add new one
     */
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
