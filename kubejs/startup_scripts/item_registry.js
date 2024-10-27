console.info('[KUBEJS_THE_WINTER_RESCUE] TWR Items Registered!')

StartupEvents.registry('item', event => {
	const rankineItems = [
		// 'mortar',
		// 'vulcanized_rubber',
		// 'pulp',
		// 'fire_clay_ball',
		// 'high_refractory_brick',
		// 'kaolinite', // become frostedheart:kaolin, and block is frostedheart:kaolin_block
		// 'sawdust',
		// 'biomass',
		// 'synthetic_leather',
		// 'sodium_sulfide', // become with dust
		// 'sodium_ingot',
		// 'sodium_hydroxide', // become with dust
		// 'alumina', // become with dust
		// 'sodium_chloride', // become with dust
		// 'sulfur', // become with dust
		// 'refractory_brick', 
		// 'quicklime',
		// 'magnesia', // become with dust
		'snow_berries',
		'asparagus',
		'black_walnut',
		'artist_conk_mushroom',
		'tinder_conk_mushroom',
		'turkey_tail_mushroom',
		'cinnabar_polypore_mushroom'
	]

	const rankineTools = [
		'flint_knife',
		'flint_axe',
		'flint_pickaxe',
		'flint_shovel',
		'flint_hoe',
		'flint_spear',
		'bronze_knife',
		'bronze_axe',
		'bronze_pickaxe',
		'bronze_shovel',
		'bronze_hoe',
		'bronze_spear',
		'stone_hammer',
		'bronze_hammer',
		'invar_shovel',
		'snow_shoes',
		'ice_shoes',
		'diving_helmet'
	]

	const generalItems = [
		'flux',
		'clay_bucket',
		'activated_carbon',
		'impure_alumina_dust',
		'aluminium_oxide_dust',
		'aluminium_hydroxide_dust',
		'kaolin_dust',
		'tungsten_steel',
		'constantan_coil',
		'battery_alloy',
		'magnesium_dust',
		"duralumin_dust",
		'frozen_auroch_meat',
		'frozen_beef',
		'frozen_boar_meat',
		'frozen_chicken',
		'frozen_fat',
		'frozen_fowl_meat',
		'frozen_mammoth_meat',
		'frozen_mouflon_meat',
		'frozen_mutton',
		'frozen_porkchop',
		'frozen_rhino_meat',
		'frozen_tiger_meat',
		'frozen_venison',
		'frozen_rabbit',
		'frozen_white_turnip',
		'bounded_graphite',
		'shaped_bounded_graphite',
		'rough_graphite_electrode',
		'fruits_and_vegs',
		'grains',
		'plant_oil',
		'protein',
		'diabetes_risks',
		'vitamin_toxicity',
		'creosoted_sawdust',
		'cast_iron_rod',
		'fluorite_dust',
		'damaged_gpu',
		'damaged_circuit_board',
		'damaged_electric_motor',
		'damaged_camera',
		'burnt_circuit_board',
		'broken_robot_1',
		'broken_robot_2',
		'servo_core',
		'motor',
		'pcb_base',
		'copper_oxide',
		'nickel_matte',
		'lead_oxide',
		'antimony_oxide',
		'iron_slag',
		'zinc_dust',
		'zinc_oxide'
	];

	let ingots = [
		"rusted_iron",
		"rusted_copper",
		"gray_tin",
		"duralumin"
	]

	let nuggets = [
		"duralumin"
	]
	
	let plates = [
		"cast_iron",
		"battery_alloy",
		"tungsten_steel",
		"invar_steel",
		"duralumin"
	]
	

	ingots.forEach((ingot) => {
		generalItems.push(`${ingot}_ingot`)
	})

	nuggets.forEach((nugget) => {
		generalItems.push(`${nugget}_nugget`)
	})
	
	plates.forEach((plate) => {
		generalItems.push(`${plate}_plate`);
	});
	
	generalItems.forEach((item) => {
		event.create(item).texture(`kubejs:item/${item}`);
	});

	// rankineItems.forEach((item) => {
	// 	event.create(item).texture(`kubejs:item/${item}`);
	// });

	// rankineTools.forEach((item) => {
	// 	event.create(item).texture(`kubejs:item/${item}`);
	// });
	

	let createTransitionalItems = [
		'incomplete_capacitor_lv',
		'incomplete_capacitor_mv',
		'incomplete_capacitor_hv'
	]

	createTransitionalItems.forEach((item) => {
		event.create(item).texture(`kubejs:item/transitional/${item}`);
	});

})