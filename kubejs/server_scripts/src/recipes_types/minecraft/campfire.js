ServerEvents.recipes((event) => {
    let {minecraft} = event.recipes

    let recipes = [
        campfireRecipe(
            Item.of('frostedheart:wooden_cup_drink', "{Fluid:{FluidName:'caupona:nail_soup',Amount:250}}"),
            Item.of('frostedheart:wooden_cup_drink', "{Fluid:{FluidName:'minecraft:water',Amount:250}}"), 200),

        // fuel
        campfireRecipe('kubejs:straw_briquette', 'kubejs:wet_straw_briquette', 200),
        campfireRecipe('kubejs:sawdust_briquette', 'kubejs:creosoted_sawdust_briquette', 200),
        campfireRecipe('kubejs:coal_briquette', 'kubejs:wet_coal_briquette', 200),
        campfireRecipe('kubejs:coal_briquette', 'kubejs:creosoted_coal_briquette', 100),
        campfireRecipe('kubejs:charcoal_briquette', 'kubejs:creosoted_charcoal_briquette', 200),
        campfireRecipe('kubejs:coal_briquette', 'kubejs:bound_coal_briquette', 200),
        campfireRecipe('kubejs:charcoal_briquette', 'kubejs:bound_charcoal_briquette', 200),

        // food
        campfireRecipe('frostedheart:cooked_whale_meat', 'frostedheart:raw_whale_meat', 400),
        campfireRecipe('frostedheart:cooked_polar_bear_meat', 'frostedheart:polar_bear_meat', 400),
        campfireRecipe('frostedheart:cooked_wolf_meat', 'frostedheart:wolf_meat', 300),
        campfireRecipe('frostedheart:cooked_fox_meat', 'frostedheart:fox_meat', 200),
        campfireRecipe('frostedheart:cooked_squid_tentacles', 'frostedheart:squid_tentacles', 100),

        campfireRecipe('frostedheart:rye_bread', 'frostedheart:raw_rye_bread', 200),
        campfireRecipe('frostedheart:black_bread', 'kubejs:sawdust_rye_dough', 200),

        // metal
        campfireRecipe('#forge:ingots/tin', 'frostedheart:gray_tin_ingot', 600),

        // permafrost
        campfireRecipe('frostedheart:buried_mycelium', 'frostedheart:mycelium_permafrost', 200),
        campfireRecipe('minecraft:coarse_dirt', 'frostedheart:coarse_dirt_permafrost', 200),
        campfireRecipe('minecraft:coarse_dirt', 'frostedheart:dirt_permafrost', 200),
        campfireRecipe('minecraft:coarse_dirt', 'frostedheart:rooted_dirt_permafrost', 200),
        campfireRecipe('frostedheart:buried_podzol', 'frostedheart:podzol_permafrost', 200),
        campfireRecipe('minecraft:gravel', 'frostedheart:gravel_permafrost', 200),
        campfireRecipe('minecraft:sand', 'frostedheart:sand_permafrost', 200),
        campfireRecipe('minecraft:red_sand', 'frostedheart:red_sand_permafrost', 200),
    ]
    recipes.forEach((recipe) => {
        minecraft.campfire_cooking(recipe.result, recipe.ingredients)
            .cookingTime(recipe.time)
            .xp(0)
    })
})