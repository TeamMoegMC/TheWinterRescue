onEvent('recipes', (event) => {
    // Some examples
    // event.remove({ type: 'create:cutting', input: '#minecraft:logs' });
    // event.remove({ type: 'immersiveengineering:sawmill', input: '#minecraft:logs' });
    //
    // event.remove({ type: 'minecraft:smelting', output: 'minecraft:obsidian' });
    // event.remove({ type: 'minecraft:blasting', output: 'minecraft:obsidian' });
    //
    // event.remove({ type: 'minecraft:smelting', input: '#forge:ores' });
    // event.remove({ type: 'minecraft:blasting', input: '#forge:ores' });
    //
    // event.remove({ type: 'minecraft:smelting', input: '#forge:dusts' });
    // event.remove({ type: 'minecraft:blasting', input: '#forge:dusts' });
    //
    // event.remove({ type: 'industrialforegoing:fluid_extractor' });
    //
    // event.remove({ mod: 'theoneprobe' });
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
	event.remove({ mod: 'survive'});
	event.remove({ input: 'minecraft:sugar_cane', output: 'minecraft:paper'});

	disabledItems.forEach((disabledItem) => {
		event.remove({ output: disabledItem });
	});
});
