//priority = 800

onEvent('recipes', (event) => {
	let ores = [
		"rankine:dolostone",
		"rankine:magnesite_ore",
		"rankine:bauxite_ore",
		"rankine:pyrite_ore",
		"rankine:magnetite_ore",
		"rankine:malachite_ore",
		"rankine:pentlandite_ore",
		"rankine:cassiterite_ore",
		"rankine:stibnite_ore",
		"rankine:cinnabar_ore",
		"rankine:galena_ore",
		"rankine:fluorite_ore",
		"rankine:vanadinite_ore",
		"rankine:carbonaceous_shale",
		"rankine:white_marble",
		"rankine:petalite_ore",
		"rankine:tufa_limestone"
	]

	ores.forEach((ore) => {
        event.remove({ type: 'rankine:crushing', input: ore})
    });

    event.remove({ type: 'rankine:crucible', output: '#forge:ingots/steel'})
    event.remove({ type: 'rankine:alloying', output: '#forge:ingots/steel'})
    event.remove({ input: 'notreepunching:plant_string'})
    event.remove({ type: 'rankine:beehive_oven'})
	event.remove({ input: 'rankine:element_transmuter'})
	event.remove({ mod: 'advgenerators'});
	event.remove({ mod: 'advancedrocketry'});
	event.remove({ mod: 'libvulpes'});
	event.remove({ mod: 'survive'});
	event.remove({ mod: 'theoneprobe'});
	event.remove({ mod: 'extendedcrafting'});
	event.remove({ mod: 'immersivepetroleum'});
	event.remove({ input: 'minecraft:sugar_cane', output: 'minecraft:paper'});
	event.remove({ input: 'immersiveengineering:dust_wood', output: 'minecraft:paper'});
	event.remove({ input: 'rankine:alloy_template', output: 'minecraft:paper'});
	event.remove({ input: 'minecraft:redstone_ore'});

	event.remove({ type: 'advancedrocketry:smallplate'});
	event.remove({ type: 'advancedrocketry:rollingmachine'});

	disabledItems.forEach((disabledItem) => {
		event.remove({output: disabledItem });
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
		'immersiveengineering:capacitor_lv',
		'immersiveengineering:capacitor_mv',
		'immersiveengineering:capacitor_hv'
	]

	removeOnly.forEach((removeItem) => {
		event.remove({output: removeItem})
	});
});
