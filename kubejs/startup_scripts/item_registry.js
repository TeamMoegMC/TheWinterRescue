console.info('[KUBEJS_THE_WINTER_RESCUE] TWR Items Registered!')

onEvent('item.registry', event => {
	const generalItems = [
		'flux',
		'impure_alumina_dust',
		'aluminium_oxide_dust',
		'aluminium_hydroxide_dust',
		'kaolin_dust',
		'tungsten_steel',
		'constantan_coil',
		'constantan_wire',
		'battery_alloy',
		'magnesium_dust',
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
		'frozen_seeds_blackwheat',
		'frozen_seeds_wheat',
		'frozen_seeds_melon',
		'frozen_seeds_pumpkin',
		'frozen_seeds_beetroots',
		'frozen_seeds_unknown'
	];

	let rawOres = [
		"native_copper",
		"native_tin",
		"silver",
		"gold",
		"pyrite",
		"bauxite",
		"halite"
	]

	let ores = [
		"ore_native_copper",
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
		"ore_vanadinite"
	]

	let oreStates = [
		"crushed",
		"washed"
	]
	
	let plates = [
		"cast_iron",
		"battery_alloy",
		"tungsten_steel"
	]

	rawOres.forEach((ore) => {
		generalItems.push(ore);
	});
	
	ores.forEach((ore) => {
		oreStates.forEach((state) => {
			generalItems.push(`${state}_${ore}`);
		});
	});
	
	plates.forEach((plate) => {
		generalItems.push(`${plate}_plate`);
	});
	
	generalItems.forEach((item) => {
		event.create(item).group('frostedheart').texture(`kubejs:item/${item}`);
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