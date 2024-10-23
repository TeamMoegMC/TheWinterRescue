console.info('[KUBEJS_THE_WINTER_RESCUE] TWR Items Registered!')

onEvent('item.registry', event => {
	const rankineItems = [
		'mortar',
		'vulcanized_rubber',
		'pulp',
		'fire_clay_ball',
		'high_refractory_brick',
		'kaolinite',
		'sawdust',
		'biomass',
		'synthetic_leather',
		'sodium_sulfide',
		'sodium_ingot',
		'sodium_hydroxide',
		'alumina',
		'sodium_choloride',
		'sulfur',
		'refractory_brick',
		'quicklime',
		'magnesia',
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
		'snow_shoes',
		'ice_shoes'
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

	let rawOres = [
		"native_tin",
		"silver",
		"gold",
		"pyrite",
		"bauxite",
		"halite"
	]

	let ores = [
		"ore_native_tin",
		"ore_silver",
		"ore_gold",
		"ore_magnetite",
		"ore_pyrite",
		"ore_malachite",
		"ore_pentlandite",
		"ore_cassiterite",
		"ore_bauxite",
		"ore_stibnite",
		"ore_cinnabar",
		"ore_magnesite",
		"ore_galena",
		"ore_halite",
		"ore_fluorite",
		"ore_vanadinite",
		"ore_hematite",
		"ore_chalcocite",
		"ore_sphalerite"
	]

	let oreStates = [
		"crushed",
		"washed"
	]

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
	let fuel_procs=[
		"anthracite_dust",
		"bituminous_coal_dust",
		"subbituminous_coal_dust",
		"lignite_dust",
		"coal_dust",
		"charcoal_dust",
		"limed_coal",
		"wet_coal_dust",
		"bound_charcoal_briquette",
		"bound_coal_briquette",
		"creosoted_charcoal_briquette",
		"creosoted_coal_briquette",
		"creosoted_sawdust_briquette",
		"wet_coal_briquette",
		"wet_straw_briquette",
		"charcoal_briquette",
		"coal_briquette",
		"sawdust_briquette",
		"straw_briquette"
	]
	let fuel_vals= {
		"anthracite_dust":2600,
		"bituminous_coal_dust":2000,
		"subbituminous_coal_dust":1300,
		"lignite_dust":1100,
		"coal_dust":1300,
		"charcoal_dust":1100,
		"limed_coal":0,
		"wet_coal_dust":0,
		"bound_charcoal_briquette":1400,
		"bound_coal_briquette":1400,
		"creosoted_charcoal_briquette":1300,
		"creosoted_coal_briquette":1300,
		"creosoted_sawdust_briquette":1300,
		"wet_coal_briquette":1200,
		"wet_straw_briquette":400,
		"charcoal_briquette":1800,
		"coal_briquette":1800,
		"sawdust_briquette":1600,
		"straw_briquette":800
	}

	rawOres.forEach((ore) => {
		generalItems.push(ore);
	});
	
	ores.forEach((ore) => {
		oreStates.forEach((state) => {
			generalItems.push(`${state}_${ore}`);
		});
	});

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
		event.create(item).group('frostedheart').texture(`kubejs:item/${item}`);
	});
	fuel_procs.forEach((item) => {
		const fv=fuel_vals[item];
		if(fv==0)
			event.create(item).group('frostedheart').texture(`kubejs:item/${item}`);
		else
			event.create(item).group('frostedheart').texture(`kubejs:item/${item}`).burnTime(fv);
	});

	let createTransitionalItems = [
		'incomplete_capacitor_lv',
		'incomplete_capacitor_mv',
		'incomplete_capacitor_hv'
	]

	createTransitionalItems.forEach((item) => {
		event.create(item).group('frostedheart').texture(`kubejs:item/transitional/${item}`).type('create:sequenced_assembly');
	});

})