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
		'immersiveengineering:watermill',
		'immersiveengineering:windmill',
		'engineersdecor:metal_bar',
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
		'engineersdecor:small_lab_furnace',
        'engineersdecor:small_fluid_funnel',
        'engineersdecor:factory_placer',
        'engineersdecor:labeled_crate',
        'engineersdecor:factory_dropper',
        'engineersdecor:small_waste_incinerator',
		'engineersdecor:metal_crafting_table',
		'rankine:prospecting_stick',
		'minecraft:cobweb',
		'rankine:evaporation_tower',
        'charcoal_pit:copper_block',
		'immersiveengineering:crate',
		'create:schematicannon',
		'supplementaries:present',
		'supplementaries:planter',
		'supplementaries:sack',
		'rankine:material_testing_table',
		'rankine:fusion_furnace',
		'rankine:distillation_tower',
		'rankine:air_distillation_packing',
		'rankine:gas_bottler',
		'rankine:gas_vent',
		"rankine:mixing_barrel",
		"rankine:cast_iron_support",
		"rankine:crushing_head_hl0",
		"rankine:crushing_head_hl1",
		"rankine:crushing_head_hl2",
		"rankine:crushing_head_hl3",
		"rankine:crushing_head_hl4",
		"rankine:crushing_head_hl5",
		"rankine:silver_zinc_battery",
		"rankine:magnesium_battery",
		"rankine:lead_acid_battery",
		"rankine:vanadium_redox_battery",
		"rankine:zinc_bromine_battery",
		"rankine:sodium_sulfur_battery",
		"rankine:lithium_ion_battery",
		"rankine:strontium_rtg",
		"rankine:polonium_rtg",
		"rankine:plutonium_rtg",
		"rankine:americium_rtg",
		"rankine:curium_rtg",
		"rankine:shulker_gas_vacuum",
		"rankine:emergency_flotation_device",
		"rankine:alnico_magnet",
		"rankine:rare_earth_magnet",
		"rankine:hardness_tester",
		"rankine:penning_trap",
		"rankine:dowsing_rod",
		"rankine:ground_tap",
		"rankine:metal_pipe",
		"rankine:sodium_vapor_lamp",
		//"rankine:tap_line",//TBD
		"rankine:totem_of_timesaving",
		"rankine:totem_of_softening",
		"rankine:totem_of_repulsing",
		"rankine:totem_of_promising",
		"rankine:totem_of_levitating",
		"rankine:totem_of_invigorating",
		"rankine:totem_of_infusing",
		"rankine:totem_of_hastening",
		"rankine:totem_of_enduring",
		"rankine:totem_of_blazing",
		"rankine:coin",
		"rankine:sodium_arc_tube",
		"rankine:silicon_germanium_thermocouple",
		"rankine:cadmium_telluride_cell",
		"rankine:graphite_electrode",
		"rankine:hard_carbon_electrode",
		"rankine:wooden_hammer",
		"supplementaries:cog_block",
		"supplementaries:spring_launcher",
		"supplementaries:bellows",
		"supplementaries:wind_vane",
		"supplementaries:faucet",
		"supplementaries:bomb",
		"supplementaries:wrench"
		
    ]
    workbench.forEach((Item) => {
        event.remove({type: 'minecraft:crafting_shaped', output: Item});
    });
	let shapeless = [
        'minecraft:ender_eye',
        'rankine:fire_clay_ball',
		'rankine:vulcanized_rubber',
		'rankine:sodium_hydroxide',
		'rankine:kaolinite',
		'rankine:high_refractory_brick',
		'minecraft:rabbit_stew',
		'minecraft:wheat',
		'minecraft:mushroom_stew'
    ]
	let shapelessName = [
    ]
	let shapedName = [
		'rankine:bucket_brass',
		'rankine:bucket_misc',
		'rankine:bucket_steel',
		'minecraft:bucket',
		'rankine:hopper_from_metals',
		'rankine:minecart_from_metals',
		'stone_age:backpack',
		"minecraft:white_wool_from_string"
    ]
	shapelessName.forEach((Item) => {
        event.remove({type: 'minecraft:crafting_shapeless', id: Item});
    });
	shapedName.forEach((Item) => {
        event.remove({type: 'minecraft:crafting_shaped', id: Item});
    });
	let shaped=[
		"#elevatorid:elevators"
	]
	shaped.forEach((Item) => {
        event.remove({type: 'minecraft:crafting_shaped', output: Item});
    });
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
        'rankine:antimony',
        'rankine:magnesium_ingot',
        'rankine:tungsten_ingot',
        'rankine:titanium_ingot',
        'rankine:chromium_ingot',
        'minecraft:iron_nugget',
        'rankine:tungsten_block',
        'rankine:titanium_block',
        'rankine:nickel_block',
        'rankine:aluminum_block',
        'rankine:chromium_block',
		'minecraft:air'
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

    let createMillingAndCrushing = [
        'minecraft:black_dye'
    ]
    createMillingAndCrushing.forEach((Item) => {
        event.remove({type: 'create:milling', output: Item})
        event.remove({type: 'create:crushing', output: Item})
    });

    // Remove by Types
	
	event.remove({type: 'rankine:crushing'})
    event.remove({type: 'immersiveengineering:turn_and_copy', output: 'immersiveengineering:radiator'})
    event.remove({type: 'immersiveengineering:turn_and_copy', output: 'immersiveengineering:rs_engineering'})
    event.remove({type: 'immersiveengineering:hammer_crushing'})
	event.remove({type: 'immersiveengineering:generated_list'})
    event.remove({type: 'minecraft:crafting_shapeless', input: 'immersiveengineering:hammer'})
	event.remove({type: 'minecraft:crafting_shapeless', output: '#forge:plates'})
    event.remove({type: 'create:splashing', input: 'minecraft:gravel'})
    event.remove({type: 'rankine:crucible', output: '#forge:ingots/steel'})
    event.remove({type: 'rankine:alloying', output: '#forge:ingots/steel'})
	event.remove({type: "rankine:alloy_crafting"})
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
	event.remove({output: '#minecraft:planks'});
	event.remove({input:'create:dough'});
	event.remove({type:'rankine:crucible'});
	event.remove({type:'rankine:alloying'});
	event.remove({type:"rankine:evaporation"});
	event.remove({type:"rankine:fusion_furnace"});
	event.remove({type:"rankine:air_distillation"});
	event.remove({type:"rankine:stripping"});
	event.remove({type:"rankine:mixing"});
    event.remove({type: 'minecraft:smelting', input: 'rankine:magnetite_block'});
    event.remove({type: 'minecraft:blasting', input: 'rankine:magnetite_block'});
	event.remove({mod: 'rankine',type: 'minecraft:smelting', output: '#forge:ingots'});
    event.remove({mod: 'rankine',type: 'minecraft:blasting', output: '#forge:ingots'});
	event.remove({mod: 'rankine',type: 'minecraft:smelting', output: '#forge:storage_blocks'});
    event.remove({mod: 'rankine',type: 'minecraft:blasting', output: '#forge:storage_blocks'});
	event.remove({type: 'minecraft:blasting', output: 'immersiveengineering:ingot_hop_graphite'});
	event.remove({type: 'minecraft:smelting', output: 'immersiveengineering:ingot_hop_graphite'});
	//event.remove({type: 'minecraft:blasting'});
	['minecraft:air',
	'stone_age:backpack'].forEach((disabledItem) => {
        event.remove({output: disabledItem});
    })
    // Remove All Types
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
        'rankine:ultra_high_refractory_brick',
        'immersiveengineering:capacitor_lv',
        'immersiveengineering:capacitor_mv',
        'immersiveengineering:capacitor_hv',
		'immersiveengineering:dust_hop_graphite'
    ]

    removeOnly.forEach((removeItem) => {
        event.remove({output: removeItem})
    });
});
