onEvent('recipes', (event) => {
    const recipes = [
	// TODO: Change to frostedheart version for watersource entries
    campfireRecipe(Item.of('watersource:wooden_cup_drink', '{Fluid:{FluidName:"watersource:purified_water",Amount:250}}'), Item.of('watersource:wooden_cup_drink', '{Fluid:{FluidName:"minecraft:water",Amount:250}}'),800),
    campfireRecipe(Item.of('watersource:wooden_cup_drink', '{Fluid:{FluidName:"thermopolium:nail_soup",Amount:250}}'), Item.of('watersource:wooden_cup_drink', '{Fluid:{FluidName:"watersource:purified_water",Amount:250}}'),600),
	campfireRecipe('minecraft:torch', 'stone_age:unlit_torch',200),
	campfireRecipe('kubejs:coal_briquette', 'kubejs:wet_coal_briquette',0,200),
	campfireRecipe('kubejs:coal_briquette', 'kubejs:creosoted_coal_briquette',0,100),
	campfireRecipe('kubejs:charcoal_briquette', 'kubejs:creosoted_charcoal_briquette',0,200),
	campfireRecipe('kubejs:coal_briquette', 'kubejs:bound_coal_briquette',0,200),
	campfireRecipe('kubejs:charcoal_briquette', 'kubejs:bound_charcoal_briquette',0,200),
	campfireRecipe('kubejs:sawdust_briquette', 'kubejs:creosoted_sawdust_briquette',0,200),
	campfireRecipe('kubejs:straw_briquette', 'kubejs:wet_straw_briquette',0,200),
	campfireRecipe('frostedheart:rye_bread', Item.of('frostedheart:raw_rye_bread'),0,200),
	campfireRecipe('#forge:ingots/tin', 'kubejs:gray_tin_ingot',0,600)
    ]
	recipes.forEach((recipe) => {
        event.campfireCooking(recipe.result, recipe.ingredients,0,recipe.time)
    });
	
});
