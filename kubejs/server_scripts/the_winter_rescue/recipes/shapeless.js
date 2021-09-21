/**
 * For creating all standard minecraft:crafting_shapeless recipes
 */

onEvent('recipes', (event) => {

    var changeShapelessRecipes = [
        shapelessRecipe('frozenup:truffle_muffin', ['frostedheart:rye_flour', 'minecraft:sugar', 'frozenup:truffle']),
        shapelessRecipe('masterfulmachinery:chcr_item_port_items_output', ['masterfulmachinery:chcr_item_port_items_input']),
        shapelessRecipe('masterfulmachinery:ele_item_port_items_output', ['masterfulmachinery:ele_item_port_items_input']),
        shapelessRecipe('masterfulmachinery:ele_fluid_port_fluids_output', ['masterfulmachinery:ele_fluid_port_fluids_input'])
    ]

    var newShapelessRecipes = [
        // shapelessRecipe('minecraft:paper', ['minecraft:paper', 'minecraft:paper'])
    ]

    /**
     * Remove a recipe from minecraft crafting table and add new one
     */
    let i = 0;
    changeShapelessRecipes.forEach(function (recipe) {
        event.remove({output: recipe.result, type: 'minecraft:crafting_shapeless'});
        event.shapeless(recipe.result, recipe.ingredients).id('the_winter_rescue:minecraft/crafting_shapeless/' + i);
        i++;
    });

    let j = 0;
    newShapelessRecipes.forEach(function (recipe) {
        event.shapeless(recipe.result, recipe.ingredients).id('the_winter_rescue:minecraft/crafting_shapeless/new/' + j);
        j++;
    });
});
