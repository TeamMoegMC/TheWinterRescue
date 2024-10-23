onEvent('recipes', (event) => {
    const recipes = [
        millstoneRecipe(Item.of('kubejs:impure_alumina_dust', 2), Item.of('rankine:alumina'),
            Item.of('kubejs:impure_alumina_dust'), 0.4, 2),
        millstoneRecipe(Item.of('kubejs:kaolin_dust'), Item.of('rankine:kaolinite'),
            Item.of('kubejs:kaolin_dust'), 0.3, 1),
        millstoneRecipe(Item.of('frostedheart:rye_flour'), Item.of('frostedheart:rye'),
            Item.of('frostedheart:rye_flour'), 0.2, 1),
		millstoneRecipe(Item.of("3x rankine:sawdust"), Ingredient.of("#minecraft:logs"),
			Item.of("rankine:sawdust"),0.2,1),
		millstoneRecipe(Item.of('kubejs:coal_dust'), Item.of('minecraft:coal'),
            Item.of('kubejs:coal_dust'), 0.2, 1),
		millstoneRecipe(Item.of('kubejs:charcoal_dust'), Item.of('minecraft:charcoal'),
            Item.of('minecraft:air'),0, 1)
    ]
    recipes.forEach((recipe) => {
        event.custom({
            "type": "stone_age:millstone",
            "ingredient": recipe.ingredients.toJson(),
            "activateCount": recipe.activateCount,
            "result": recipe.result.toResultJson(),
            "secondResult": recipe.secondResult.toResultJson(),
            "secondChance": recipe.secondChance
        })
    });/*
	recipesnf.forEach((recipe) => {
        event.custom({
            "type": "stone_age:millstone",
            "ingredient": recipe.ingredients.toJson(),
            "activateCount": recipe.activateCount,
            "result": recipe.result.toResultJson()
        })
    })*/
});