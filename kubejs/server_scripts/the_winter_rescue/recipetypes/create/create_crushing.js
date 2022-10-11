onEvent('recipes', (event) => {
    let recipes = [
    {output:['2x minecraft:quartz',Item.of('4x minecraft:quartz').withChance(0.5)],input: 'rankine:quartzite'},
    {output:[Item.of('2x kubejs:flux'), Item.of('4x kubejs:flux').withChance(0.5)],input: '#the_winter_rescue:flux_block'},
    {output:[Item.of('kubejs:crushed_ore_halite').withChance(0.5)],input: 'rankine:evaporite'}
    ]
	recipes.forEach((recipe) => {
        event.recipes.createCrushing(recipe.output, recipe.input);
    });
});
