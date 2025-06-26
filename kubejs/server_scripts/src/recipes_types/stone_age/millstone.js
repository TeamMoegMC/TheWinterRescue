ServerEvents.recipes((event) => {
    let {stone_age} = event.recipes

    let recipes = [
        ["2x frostedheart:bauxite_dust", "frostedheart:crushed_raw_bauxite", "frostedheart:bauxite_dust", 0.4, 2],
        ["frostedheart:kaolin_dust", "frostedheart:kaolin", "frostedheart:kaolin_dust", 0.3, 1],
        ["frostedheart:rye_flour", "frostedheart:rye", "frostedheart:rye_flour", 0.2, 1],
        ["create:wheat_flour", "minecraft:wheat", "create:wheat_flour", 0.2, 1],
        ["3x frostedheart:sawdust", "#minecraft:logs", "frostedheart:sawdust", 0.2, 1],
        ["kubejs:coal_dust", "minecraft:coal", "kubejs:coal_dust", 0.2, 1],
        ["kubejs:charcoal_dust", "minecraft:charcoal", "kubejs:charcoal_dust", 0.1, 1],
        ["frostedheart:crushed_raw_pyrite", "frostedheart:raw_pyrite", "immersiveengineering:dust_sulfur", 0.25, 1],
    ]
    recipes.forEach(([output, input, secondR, secondC, activate]) => {
        stone_age.millstone(output, input, secondR)
            .secondChance(secondC)
            .activateCount(activate)
    })
    /*
    recipesnf.forEach((recipe) => {
        event.custom({
            "type": "stone_age:millstone",
            "ingredient": recipe.ingredients.toJson(),
            "activateCount": recipe.activateCount,
            "result": recipe.result.toResultJson()
        })
    })
    */
})