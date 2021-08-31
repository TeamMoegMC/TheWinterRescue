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
        shapedRecipe('elevatorid:elevator_white', ['AAA', 'BBB', 'AAA'], {
            A: '#forge:plates/steel',
            B: '#minecraft:wool',
        }),
        shapedRecipe('rankine:synthetic_leather', ['AAA', 'BBB', 'AAA'], {
            A: 'rankine:pulp',
            B: '#forge:string',
        }),
        shapedRecipe('create:belt_connector', ['AAA', ' B ', 'AAA'], {
            A: '#forge:leather',
            B: '#forge:wires/copper',
        }),
        shapedRecipe('6x create:fluid_pipe', ['AAA', 'AAA'], {
            A: '#forge:plates/bronze',
        }),
    ]

    var newRecipes = [
        shapedRecipe('create:belt_connector', ['AAA', 'BBB', 'AAA'], {
            A: '#forge:leather',
            B: '#forge:string',
        }),
        shapedRecipe('create:precision_mechanism', ['CAC', 'BCB', 'CAC'], {
            A: '#forge:plates/brass',
            B: 'create:electron_tube',
            C: 'create:shaft',
        })
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
