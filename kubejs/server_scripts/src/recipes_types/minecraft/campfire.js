ServerEvents.recipes((event) => {
    let {minecraft} = event.recipes

    let recipes = [
        campfireRecipe("kubejs:coal_briquette", "kubejs:wet_coal_briquette", 200),
        campfireRecipe("kubejs:coal_briquette", "kubejs:creosoted_coal_briquette", 100),
        campfireRecipe("kubejs:charcoal_briquette", "kubejs:creosoted_charcoal_briquette", 200),
        campfireRecipe("kubejs:coal_briquette", "kubejs:bound_coal_briquette", 200),
        campfireRecipe("kubejs:charcoal_briquette", "kubejs:bound_charcoal_briquette", 200),
        campfireRecipe("kubejs:sawdust_briquette", "kubejs:creosoted_sawdust_briquette", 200),
        campfireRecipe("kubejs:straw_briquette", "kubejs:wet_straw_briquette", 200),
        campfireRecipe("frostedheart:rye_bread", Item.of("frostedheart:raw_rye_bread"), 200),
        campfireRecipe("#forge:ingots/tin", "frostedheart:gray_tin_ingot", 600),
        campfireRecipe("frostedheart:buried_mycelium", "frostedheart:mycelium_permafrost", 200),
        campfireRecipe("minecraft:coarse_dirt", "frostedheart:coarse_dirt_permafrost", 200),
        campfireRecipe("minecraft:coarse_dirt", "frostedheart:dirt_permafrost", 200),
        campfireRecipe("minecraft:coarse_dirt", "frostedheart:rooted_dirt_permafrost", 200),
        campfireRecipe("frostedheart:buried_podzol", "frostedheart:podzol_permafrost", 200),
        campfireRecipe("minecraft:gravel", "frostedheart:gravel_permafrost", 200),
        campfireRecipe("minecraft:sand", "frostedheart:sand_permafrost", 200),
        campfireRecipe("minecraft:red_sand", "frostedheart:red_sand_permafrost", 200),
    ]
    recipes.forEach((recipe) => {
        minecraft.campfire_cooking(recipe.result, recipe.ingredients)
            .cookingTime(recipe.time)
            .xp(0)
    })
})