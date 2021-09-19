onEvent('recipes', (event) => {
	    const recipes = [
        tree_stumpRecipe(Item.of('create:copper_sheet'), 'create:copper_ingot', 
		Ingredient.of('#forge:hammers'),2),
    ]
	recipes.forEach((recipe) => {
            event.custom({
                "type": "stone_age:tree_stump",
                "ingredient": {
					"item": recipe.ingredients,
					"count": 2
				},
				"tool": recipe.tool.toJson(),
				"chopTimes": recipe.chop,
				"result":recipe.result.toResultJson()
            })
        })
});