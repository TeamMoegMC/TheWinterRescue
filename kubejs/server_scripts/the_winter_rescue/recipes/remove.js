//priority = 800

onEvent('recipes', (event) => {
    let flint_workbench = [
        'minecraft:furnace'
    ]
    flint_workbench.forEach((Item) => {
        event.remove({type: 'stone_age:flint_workbench', output: Item});
    });
    let workbench = [
        'immersiveengineering:cloche',
        'immersiveengineering:dynamo',
        'immersiveengineering:drillhead_iron',
        'immersiveengineering:drillhead_steel',
        'immersiveengineering:circuit_table',
        'immersivepetroleum:speedboat',
        'immersiveengineering:sample_drill',
        'minecraft:blast_furnace',
        'minecraft:smoker',
        'immersiveengineering:thermoelectric_generator',
        'engineersdecor:small_block_breaker',
        'immersiveengineering:blueprint',
        'immersiveengineering:toolbox',
        'engineersdecor:small_solar_panel',
        'engineersdecor:small_mineral_smelter',
        'engineersdecor:small_freezer',
        'engineersdecor:small_electrical_furnace',
        'engineersdecor:small_fluid_funnel',
        'engineersdecor:factory_placer',
        'engineersdecor:labeled_crate',
        'engineersdecor:factory_dropper',
        'engineersdecor:small_waste_incinerator',
		'rankine:prospecting_stick',
		'minecraft:cobweb',
		'rankine:flint_knife',
		'rankine:evaporation_tower',
        'charcoal_pit:copper_block'
    ]
    workbench.forEach((Item) => {
        event.remove({type: 'minecraft:crafting_shaped', output: Item});
    });
	let shapeless = [
        'minecraft:ender_eye',
        'rankine:fire_clay_ball',
		'rankine:vulcanized_rubber',
		'rankine:kaolinite_ball'
    ]
    shapeless.forEach((Item) => {
        event.remove({type: 'minecraft:crafting_shapeless', output: Item});
    });
    let modularrouters = [
        'modularrouters:activator_module',
        'modularrouters:breaker_module',
        'modularrouters:dropper_module',
        'modularrouters:extruder_module_1',
        'modularrouters:extruder_module_2',
        'modularrouters:flinger_module',
        'modularrouters:placer_module',
        'modularrouters:player_module',
        'modularrouters:sender_module_3',
        'modularrouters:vacuum_module',
        'modularrouters:stack_upgrade',
        'modularrouters:speed_upgrade'
    ]
    modularrouters.forEach((Item) => {
        event.remove({output: Item});
    });
    let smelting = [
        'minecraft:iron_ingot',
        'rankine:aluminum_ingot',
        'rankine:nickel_ingot',
        'rankine:antimony_ingot',
        'rankine:magnesium_ingot',
        'rankine:tungsten_ingot',
        'rankine:titanium_ingot',
        'rankine:chromium_ingot',
        'minecraft:iron_nugget',
        'rankine:tungsten_block',
        'rankine:titanium_block',
        'rankine:nickel_block',
        'rankine:aluminum_block',
        'rankine:chromium_block'
    ]
    smelting.forEach((Item) => {
        event.remove({type: 'minecraft:blasting', output: Item});
    });
    let blueprint = [
        'immersiveengineering:circuit_board',
        'immersiveengineering:component_iron',
        'immersiveengineering:component_steel',
        'immersiveengineering:electron_tube',
        'immersiveengineering:graphite_electrode'
    ]
	blueprint.forEach((Item) => {
        event.remove({type: 'immersiveengineering:blueprint',output: Item})
    });
	
	event.remove({type: 'rankine:crushing'})
	event.remove({type: 'charcoal_pit:orekiln', output: 'rankine:bronze_alloy'})
    event.remove({type: 'immersiveengineering:turn_and_copy', output: 'immersiveengineering:radiator'})
    event.remove({type: 'immersiveengineering:turn_and_copy', output: 'immersiveengineering:rs_engineering'})
    event.remove({type: 'immersiveengineering:hammer_crushing'})
    event.remove({type: 'minecraft:crafting_shapeless', input: 'immersiveengineering:hammer'})
    event.remove({type: 'create:splashing', input: 'minecraft:gravel'})
    event.remove({type: 'rankine:crucible', output: '#forge:ingots/steel'})
    event.remove({type: 'rankine:alloying', output: '#forge:ingots/steel'})
    event.remove({input: 'notreepunching:plant_string'})
    event.remove({type: 'rankine:beehive_oven'})
    event.remove({input: 'rankine:element_transmuter'})
    event.remove({mod: 'theoneprobe'});
    event.remove({mod: 'extendedcrafting'});
    event.remove({mod: 'immersivepetroleum'});
    event.remove({input: 'minecraft:sugar_cane', output: 'minecraft:paper'});
    event.remove({input: 'immersiveengineering:dust_wood', output: 'minecraft:paper'});
    event.remove({input: 'rankine:alloy_template', output: 'minecraft:paper'});
    event.remove({input: 'minecraft:redstone_ore'});

    event.remove({type: 'minecraft:smelting', input: 'rankine:magnetite_block'});
    event.remove({type: 'minecraft:blasting', input: 'rankine:magnetite_block'});

    disabledItems.forEach((disabledItem) => {
        event.remove({output: disabledItem});
    });

    let removeOnly = [
        'storagedrawers:emerald_storage_upgrade',
        'storagedrawers:diamond_storage_upgrade',
        'storagedrawers:gold_storage_upgrade',
        'create:brass_ingot',
        'create:zinc_ingot',
        'create:copper_ingot',
        'create:andesite_alloy',
        '#create:crushed_ores',
        'rankine:high_refractory_brick',
        'rankine:ultra_high_refractory_brick',
        'rankine:sodium_carbonate',
        'immersiveengineering:capacitor_lv',
        'immersiveengineering:capacitor_mv',
        'immersiveengineering:capacitor_hv'
    ]

    removeOnly.forEach((removeItem) => {
        event.remove({output: removeItem})
    });
});
