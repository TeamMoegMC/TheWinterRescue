console.info('[KUBEJS_THE_WINTER_RESCUE] TWR Items Registered!')

onEvent('item.registry', event => {
	const generalItems = [
		// ore drops for native rankine ores
	];

	let nativeOres = [
		"ore_native_copper",
		"ore_native_tin",
		"ore_silver",
		"ore_gold"
	]

	let ores = [
		"ore_magnetite",
		"ore_pyrite",
		"ore_malachite",
		"ore_pentlandite",
		"ore_cassiterite",
		"ore_bituminous",
		"ore_lignite",
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
		"bronze",
		"battery_alloy",
		"tungsten_steel"
	]
	
	ores.forEach((ore) => {
		oreStates.forEach((state) => {
			generalItems.push(`${state}_${ore}`);
		});
	});

	nativeOres.forEach((ore) => {
		oreStates.forEach((state) => {
			generalItems.push(`${state}_${ore}`);
		});
		generalItems.push(`raw_${ore}`)
	});
	
	plates.forEach((plate) => {
			generalItems.push(`${plate}_plate`);
		});
	
	generalItems.forEach((item) => {
		event.create(item).group('frostedheart').texture(`kubejs:item/${item}`);
	});

	event.create('flux')
	event.create('impure_alumina_dust')
	event.create('aluminium_oxide_dust')
	event.create('kaolin_dust')
	event.create('tungsten_steel').tooltip('750W-50Fe')
	event.create('constantan_coil')
	event.create('constantan_wire')
	event.create('battery_alloy')
	event.create('magnesium_dust')
	event.create('magnesium_oxide')
	event.create('frozen_auroch_meat')
	event.create('frozen_beef')
	event.create('frozen_boar_meat')
	event.create('frozen_chicken')
	event.create('frozen_fat')
	event.create('frozen_fowl_meat')
	event.create('frozen_mammoth_meat')
	event.create('frozen_mouflon_meat')
	event.create('frozen_mutton')
	event.create('frozen_porkchop')
	event.create('frozen_rhino_meat')
	event.create('frozen_tiger_meat')
	event.create('frozen_venison')
	event.create('frozen_rabbit')
	event.create('frozen_seeds_blackwheat')
	event.create('frozen_seeds_wheat')
	event.create('frozen_seeds_melon')
	event.create('frozen_seeds_pumpkin')
	event.create('frozen_seeds_beetroots')
	event.create('frozen_seeds_unknown')
})