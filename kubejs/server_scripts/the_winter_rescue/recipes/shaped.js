/**
 * For creating all standard minecraft:crafting_shaped recipes
 */

onEvent('recipes', (event) => {

    var changeRecipes = [
        shapedRecipe('rankine:fluid_drain', ['L L', 'LFL', 'PLP'], {
            L: '#forge:ingots/stainless_steel',
            P: 'immersiveengineering:fluid_pipe',
            F: '#the_winter_rescue:cogwheels',
        }),
        shapedRecipe('rankine:fluid_drain', ['L L', 'LFL', 'PLP'], {
            L: '#forge:ingots/cast_iron',
            P: 'immersiveengineering:fluid_pipe',
            F: '#the_winter_rescue:cogwheels',
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
        shapedRecipe('extendedcrafting:advanced_table', ['AAA', 'BCB', 'AAA'], {
            A: '#forge:plates/cast_iron',
            B: '#forge:rods/cast_iron',
            C: 'minecraft:crafting_table',
        }),
        shapedRecipe('extendedcrafting:crafting_core', ['ECE', 'BAB', 'DDD'], {
            A: '#forge:storage_blocks/cast_iron',
            B: 'immersiveengineering:capacitor_lv',
            C: 'minecraft:crafting_table',
            D: '#forge:plates/cast_iron',
            E: 'steampowered:cast_iron_cogwheel'
        }),
        shapedRecipe('extendedcrafting:pedestal', ['DDD', 'EBE', 'DCD'], {
            B: 'rankine:cast_iron_support',
            D: '#forge:plates/cast_iron',
            E: 'steampowered:cast_iron_cogwheel',
            C: 'steampowered:cast_iron_large_cogwheel'
        }),
        shapedRecipe('extendedcrafting:handheld_table', [' AC', ' AA', 'A  '], {
            A: '#forge:rods/cast_iron',
            C: 'minecraft:crafting_table',
        }),
        shapedRecipe('4x steampowered:bronze_cogwheel', [' B ', 'BAB', ' B '], {
            A: '#forge:rods/cast_iron',
            B: '#forge:plates/bronze',
        }),
        shapedRecipe('2x steampowered:bronze_large_cogwheel', ['BBB', 'BAB', 'BBB'], {
            A: '#forge:rods/cast_iron',
            B: '#forge:plates/bronze',
        }),
        shapedRecipe('4x steampowered:cast_iron_cogwheel', [' B ', 'BAB', ' B '], {
            A: '#forge:rods/cast_iron',
            B: '#forge:plates/cast_iron',
        }),
        shapedRecipe('2x steampowered:cast_iron_large_cogwheel', ['BBB', 'BAB', 'BBB'], {
            A: '#forge:rods/cast_iron',
            B: '#forge:plates/cast_iron',
        }),
        shapedRecipe('4x steampowered:steel_cogwheel', [' B ', 'BAB', ' B '], {
            A: '#forge:rods/cast_iron',
            B: '#forge:plates/steel',
        }),
        shapedRecipe('2x steampowered:steel_large_cogwheel', ['BBB', 'BAB', 'BBB'], {
            A: '#forge:rods/cast_iron',
            B: '#forge:plates/steel',
        })
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
