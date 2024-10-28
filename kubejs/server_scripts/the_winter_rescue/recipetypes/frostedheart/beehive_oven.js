onEvent('recipes', (event) => {
    var beehiveRecipes = [
        beehiveRecipe("frostedheart:magnesite_block", "frostedheart:magnesia_block"),
        beehiveRecipe("#the_winter_rescue:flux_block", "frostedheart:quicklime_block")
    ]

    beehiveRecipes.forEach((recipe) => {
        if (recipe.input.startsWith("#")) {
            event.custom({
                "type": recipe.type,
                "input": {
                    "tag": recipe.input.substring(1)
                },
                "result": {
                    "block": recipe.result
                }
            })
        } else {
            event.custom({
                "type": recipe.type,
                "input": {
                    "item": recipe.input
                },
                "result": {
                    "block": recipe.result
                }
            })
        }
    })
});