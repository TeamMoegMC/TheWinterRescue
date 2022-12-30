onEvent('recipes', (event) => {
	let recipes = [
    {output:['minecraft:quartz', Item.of('minecraft:quartz').withChance(0.5)],input: '#forge:stones/quartzite'},
    {output:['2x minecraft:stick', Item.of('8x rankine:sawdust').withChance(0.5), Item.of('rankine:biomass').withChance(0.2)],input: '#minecraft:logs'},
    {output:['2x minecraft:redstone', Item.of('2x minecraft:redstone').withChance(0.5)],input: 'rankine:cinnabar'},
    {output:['2x kubejs:impure_alumina_dust', Item.of('2x kubejs:impure_alumina_dust').withChance(0.5)],input: 'rankine:alumina'},
    {output:['kubejs:kaolin_dust', Item.of('kubejs:kaolin_dust').withChance(0.5)],input: 'rankine:kaolinite'},
    {output:['kubejs:fluorite_dust', Item.of('kubejs:fluorite_dust').withChance(0.5)],input: 'kubejs:washed_ore_fluorite'},
    {output:['immersiveengineering:dust_sulfur', Item.of('immersiveengineering:dust_sulfur').withChance(0.5)],input: 'rankine:sulfur'},
    {output:[Item.of('minecraft:quartz').withChance(0.4), Item.of('minecraft:quartz').withChance(0.3)],input: 'minecraft:smooth_sandstone'},
	{output:['kubejs:anthracite_dust', Item.of('kubejs:anthracite_dust').withChance(0.5)],input: 'rankine:anthracite_coal'},
	{output:['kubejs:bituminous_coal_dust', Item.of('kubejs:bituminous_coal_dust').withChance(0.5)],input: 'rankine:bituminous_coal'},
	{output:['kubejs:lignite_dust', Item.of('kubejs:lignite_dust').withChance(0.5)],input: 'rankine:lignite'},
	{output:['kubejs:subbituminous_coal_dust', Item.of('kubejs:subbituminous_coal_dust').withChance(0.5)],input: 'rankine:subbituminous_coal'},
	{output:['kubejs:coal_dust', Item.of('kubejs:coal_dust').withChance(0.5)],input: 'minecraft:coal'},
	{output:['kubejs:charcoal_dust',Item.of('kubejs:charcoal_dust').withChance(0.25)],input: 'minecraft:charcoal'},
	{output:['#forge:dusts/coal_coke'],input: '#forge:coal_coke'},
	{output:['#forge:dusts/hop_graphite'],input: '#forge:ingots/hop_graphite'},
	{output:[Item.of('rankine:sawdust').withChance(0.8)],input: '#minecraft:planks'},
	{output:[Item.of('kubejs:bituminous_coal_dust')],input: '#forge:graphite'},
	{output:[Item.of('rankine:sawdust').withChance(0.4)],input: 'minecraft:stick'},
	{output: '3x minecraft:redstone', input: 'kubejs:washed_ore_cinnabar'},
	{output:["frostedheart:rye_flour",Item.of("charcoal_pit:straw"),Item.of("2x frostedheart:rye_flour").withChance(0.25),Item.of("frostedheart:rye_block").withChance(0.1)],input: 'frostedheart:rye'},
	{output:["create:wheat_flour",Item.of("2x create:wheat_flour").withChance(0.25),Item.of("minecraft:wheat_seeds").withChance(0.25)],input: 'minecraft:wheat'},
	{output:[Item.of('3x minecraft:green_dye')],input: 'kubejs:washed_ore_malachite'},
	{output:[Item.of('immersiveengineering:dust_iron')],input: 'minecraft:iron_ingot'},
	{output:[Item.of('4x minecraft:red_dye')],input: 'kubejs:washed_ore_hematite'}
	]
	recipes.forEach((recipe) => {
        event.recipes.createMilling(recipe.output, recipe.input);
    });
});
