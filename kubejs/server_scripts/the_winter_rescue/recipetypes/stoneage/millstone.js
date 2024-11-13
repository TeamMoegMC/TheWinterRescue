ServerEvents.recipes(event => {
    const recipes = [
        millstoneRecipe(Item.of('frostedheart:bauxite_dust', 2), Item.of('frostedheart:crushed_bauxite_ore'),
            Item.of('frostedheart:bauxite_dust'), 0.4, 2),
        millstoneRecipe(Item.of('frostedheart:kaolin_dust'), Item.of('frostedheart:kaolin'),
            Item.of('frostedheart:kaolin_dust'), 0.3, 1),
        millstoneRecipe(Item.of('frostedheart:rye_flour'), Item.of('frostedheart:rye'),
            Item.of('frostedheart:rye_flour'), 0.2, 1),
		millstoneRecipe(Item.of("3x frostedheart:sawdust"), Ingredient.of("#minecraft:logs"),
			Item.of("frostedheart:sawdust"),0.2,1),
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
            "result": recipe.result.toJson(),
            "secondResult": recipe.secondResult.toJson(),
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