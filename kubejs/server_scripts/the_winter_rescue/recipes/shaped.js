/**
 * For creating all standard minecraft:crafting_shaped recipes
 */

onEvent('recipes', (event) => {

    var changeRecipes = [
        shapedRecipe('rankine:fluid_drain', ['L L', 'LFL', 'PLP'], {
            L: '#forge:ingots/stainless_steel',
            P: 'immersiveengineering:fluid_pipe',
            F: 'create:cogwheel',
        }),
        shapedRecipe('rankine:fluid_drain', ['L L', 'LFL', 'PLP'], {
            L: '#forge:ingots/cast_iron',
            P: 'immersiveengineering:fluid_pipe',
            F: 'create:cogwheel',
        }),
        shapedRecipe('notreepunching:fire_starter', ['AC', 'BA'], {
            A: '#forge:rods/wooden',
            B: 'minecraft:flint',
            C: '#forge:string',
        }),
    ]

    var newRecipes = [
        // shapedRecipe(Item.of('custommachinery:custom_machine_item', {machine:"the_winter_rescue:boiler"}), [' D ', 'D D', 'D D'], {
        //     D: '#forge:plates/bronze'
        // })
    ]

    /**
     * Remove a recipe from minecraft crafting table and add new one
     */
    let i = 0;
    changeRecipes.forEach(function (recipe) {
        event.remove({output: recipe.result, type: 'minecraft:crafting_shaped'});
        event.shaped(recipe.result, recipe.pattern, recipe.key).id('the_winter_rescue:minecraft/crafting_shaped/'+i);
        i++;
    });

    let j = 0;
    newRecipes.forEach(function (recipe) {
        event.shaped(recipe.result, recipe.pattern, recipe.key).id('the_winter_rescue:minecraft/crafting_shaped/new/'+j);
        j++;
    });
});
