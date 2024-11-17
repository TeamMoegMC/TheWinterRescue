ServerEvents.recipes((event) => {
    let recipes = [
    {output:['2x minecraft:quartz',Item.of('4x minecraft:quartz').withChance(0.5)],input: 'minecraft:sandstone'},
    {output:[Item.of('2x kubejs:flux'), Item.of('4x kubejs:flux').withChance(0.5)],input: '#the_winter_rescue:flux_block'},
    {output:[Item.of('frostedheart:crushed_raw_halite').withChance(0.25)],input: 'frostedheart:raw_halite'},
	{output:[Item.of('2x frostedheart:sodium_chloride_dust'),Item.of('2x frostedheart:sodium_chloride_dust').withChance(0.5)], input: 'frostedheart:crushed_raw_halite'}
    ]
	recipes.forEach((recipe) => {
        event.recipes.createCrushing(recipe.output, recipe.input);
    });
});
