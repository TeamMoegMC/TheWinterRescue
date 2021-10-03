onEvent('recipes', (event) => {
    const recipes = [
    campfireRecipe(Item.of('watersource:wooden_cup_drink', '{Fluid:{FluidName:"watersource:purified_water",Amount:250}}'), Item.of('watersource:wooden_cup_drink', '{Fluid:{FluidName:"minecraft:water",Amount:250}}'),120),
    campfireRecipe(Item.of('watersource:wooden_cup_drink', '{Fluid:{FluidName:"frostedheart:hot_water",Amount:250}}'), Item.of('watersource:wooden_cup_drink', '{Fluid:{FluidName:"watersource:purified_water",Amount:250}}'),120),
	campfireRecipe(Item.of('frostedheart:thermos', '{Fluid:{FluidName:"watersource:purified_water",Amount:1500}}'), Item.of('frostedheart:thermos', '{Fluid:{FluidName:"minecraft:water",Amount:1500}}'),160),
    campfireRecipe(Item.of('frostedheart:thermos', '{Fluid:{FluidName:"frostedheart:hot_water",Amount:1500}}'), Item.of('frostedheart:thermos', '{Fluid:{FluidName:"watersource:purified_water",Amount:1500}}'),160),
	campfireRecipe(Item.of('frostedheart:advanced_thermos', '{Fluid:{FluidName:"watersource:purified_water",Amount:3000}}'), Item.of('frostedheart:advanced_thermos', '{Fluid:{FluidName:"minecraft:water",Amount:3000}}'),200),
    campfireRecipe(Item.of('frostedheart:advanced_thermos', '{Fluid:{FluidName:"frostedheart:hot_water",Amount:3000}}'), Item.of('frostedheart:advanced_thermos', '{Fluid:{FluidName:"watersource:purified_water",Amount:3000}}'),200),
	campfireRecipe('watersource:purified_water_bottle', Item.of('minecraft:potion', '{Potion:"minecraft:water"}'),200),
    campfireRecipe('frozenup:truffle', 'frozenup:frozen_truffle',200),
    campfireRecipe('minecraft:torch', 'stone_age:unlit_torch',200)
    ]
	recipes.forEach((recipe) => {
        event.campfireCooking(recipe.result, recipe.ingredients,0,recipe.time)
    });
});
