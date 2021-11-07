onEvent('recipes', (event) => {
    const recipes = [
        tree_stumpRecipe(Item.of('create:copper_sheet'), Item.of('create:copper_ingot'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('create:copper_sheet'), Item.of('rankine:copper_ingot'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('create:copper_sheet'), Item.of('immersiveengineering:ingot_copper'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('steampowered:bronze_sheet'), Item.of('rankine:bronze_alloy'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('create:iron_sheet'), Item.of('minecraft:iron_ingot'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('kubejs:cast_iron_plate'), Item.of('rankine:cast_iron_alloy'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('immersiveengineering:plate_gold'), Item.of('minecraft:gold_ingot'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('kubejs:invar_steel_plate'), Item.of('rankine:invar_alloy'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('create:brass_sheet'), Item.of('rankine:brass_alloy'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('kubejs:flux'), Ingredient.of('#the_winter_rescue:flux_block'),
            Ingredient.of('#forge:hammers'), 3),
        tree_stumpRecipe(Item.of('rankine:alumina'), Item.of('kubejs:bauxite'),
            Ingredient.of('#forge:hammers'), 3),
        tree_stumpRecipe(Item.of('3x rankine:kaolinite_ball'), Item.of('rankine:kaolinite_block'),
            Ingredient.of('#forge:hammers'), 3),
		tree_stumpRecipe(Item.of("2x kubejs:wet_coal_briquette"), Item.of("kubejs:wet_coal_dust"),
            Ingredient.of('#forge:hammers'), 2),
		tree_stumpRecipe(Item.of("3x rankine:sawdust"), Ingredient.of("#minecraft:logs"),
            Ingredient.of('#forge:hammers'), 2),
        tree_stumpRecipe(Item.of('immersiveengineering:slab_treated_wood_horizontal', 2), Item.of('immersiveengineering:treated_wood_horizontal'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('minecraft:dark_oak_planks', 3), Item.of('minecraft:stripped_dark_oak_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('minecraft:oak_planks', 3), Item.of('minecraft:stripped_oak_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('minecraft:acacia_planks', 3), Item.of('minecraft:stripped_dark_oak_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('minecraft:dark_oak_planks', 3), Item.of('minecraft:stripped_acacia_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('minecraft:birch_planks', 3), Item.of('minecraft:stripped_birch_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('minecraft:jungle_planks', 3), Item.of('minecraft:stripped_jungle_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('minecraft:spruce_planks', 3), Item.of('minecraft:stripped_spruce_log'),
            Ingredient.of('#forge:axes'), 2)
    ]
    const wood_recipes = [
        tree_stumpRecipe(Item.of('rankine:cinnamon_planks', 3), Item.of('rankine:stripped_cinnamon_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('rankine:cedar_planks', 3), Item.of('rankine:stripped_cedar_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('rankine:sharinga_planks', 3), Item.of('rankine:stripped_sharinga_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('rankine:black_walnut_planks', 3), Item.of('rankine:stripped_black_walnut_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('rankine:cork_oak_planks', 3), Item.of('rankine:stripped_cork_oak_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('rankine:coconut_palm_planks', 3), Item.of('rankine:stripped_coconut_palm_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('rankine:pinyon_pine_planks', 3), Item.of('rankine:stripped_pinyon_pine_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('rankine:juniper_planks', 3), Item.of('rankine:stripped_juniper_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('rankine:balsam_fir_planks', 3), Item.of('rankine:stripped_balsam_fir_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('rankine:magnolia_planks', 3), Item.of('rankine:stripped_magnolia_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('rankine:eastern_hemlock_planks', 3), Item.of('rankine:stripped_eastern_hemlock_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('rankine:maple_planks', 3), Item.of('rankine:stripped_maple_log'),
            Ingredient.of('#forge:axes'), 2),
        tree_stumpRecipe(Item.of('watersource:coconut_tree_planks', 3), Item.of('watersource:stripped_coconut_tree_log'),
            Ingredient.of('#forge:axes'), 2)
    ]
    wood_recipes.forEach((recipe) => {
        event.remove({output: recipe.result, type: 'minecraft:crafting_shapeless'});
        event.custom({
            "type": "stone_age:tree_stump",
            "ingredient": recipe.ingredients.toJson(),
            "tool": recipe.tool.toJson(),
            "chopTimes": recipe.chop,
            "amount": recipe.amount,
            "result": recipe.result.toResultJson()
        })
    })
    recipes.forEach((recipe) => {
        event.custom({
            "type": "stone_age:tree_stump",
            "ingredient": recipe.ingredients.toJson(),
            "tool": recipe.tool.toJson(),
            "chopTimes": recipe.chop,
            "amount": recipe.amount,
            "result": recipe.result.toResultJson()
        })
    })
});