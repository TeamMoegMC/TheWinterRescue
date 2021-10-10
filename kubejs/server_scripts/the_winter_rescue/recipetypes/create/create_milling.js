onEvent('recipes', (event) => {
	let recipes = [
    {output:['minecraft:quartz', Item.of('minecraft:quartz').withChance(0.5)],input: '#forge:stones/quartzite'},
    {output:[Item.of('minecraft:quartz').withChance(0.2), Item.of('minecraft:quartz').withChance(0.2)],input: '#forge:stones/sandstone'},
    {output:['2x minecraft:stick', Item.of('8x rankine:sawdust').withChance(0.5), Item.of('rankine:biomass').withChance(0.2)],input: '#minecraft:logs'},
    {output:['2x minecraft:redstone', Item.of('2x minecraft:redstone').withChance(0.5)],input: 'rankine:cinnabar'},
    {output:['2x kubejs:impure_alumina_dust', Item.of('2x kubejs:impure_alumina_dust').withChance(0.5)],input: 'rankine:alumina'},
    {output:['kubejs:kaolin_dust', Item.of('kubejs:kaolin_dust').withChance(0.5)],input: 'rankine:kaolinite_ball'},
    {output:['minecraft:glowstone_dust', Item.of('minecraft:glowstone_dust').withChance(0.5)],input: 'kubejs:washed_ore_fluorite'},
    {output:['immersiveengineering:dust_sulfur', Item.of('immersiveengineering:dust_sulfur').withChance(0.5)],input: 'rankine:sulfur'},
    {output:[Item.of('minecraft:quartz').withChance(0.5), Item.of('minecraft:quartz').withChance(0.3)],input: 'minecraft:smooth_sandstone'},
	{output:['3x rankine:kaolinite_ball', Item.of('rankine:kaolinite_ball').withChance(0.5)],input: 'rankine:kaolinite_block'}
	]
	recipes.forEach((recipe) => {
        event.recipes.createMilling(recipe.output, recipe.input);
    });
});
