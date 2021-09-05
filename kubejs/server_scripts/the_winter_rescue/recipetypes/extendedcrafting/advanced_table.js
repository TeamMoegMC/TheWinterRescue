onEvent('recipes', (event) => {
    var newRecipes = [
        shapedRecipe('steampowered:alternator', ['BBEBB', 'FFACD', 'BBEBB'], {
            A: 'rankine:cast_iron_support',
            B: '#forge:plates/cast_iron',
            C: 'steampowered:cast_iron_cogwheel',
            D: 'steampowered:cast_iron_large_cogwheel',
            E: 'immersiveengineering:coil_lv',
            F: 'immersiveengineering:wirecoil_copper'
        }),
        shapedRecipe('steampowered:bronze_flywheel', [' DDD ', 'DACAD', 'DCBCD', 'DACAD', ' DDD '], {
            A: 'steampowered:bronze_cogwheel',
            B: 'steampowered:bronze_large_cogwheel',
            C: 'create:shaft',
            D: 'steampowered:bronze_sheet',
        }),
        shapedRecipe('steampowered:bronze_steam_engine', ['DCEDD', 'CCABF', 'DCEDD'], {
            A: 'steampowered:bronze_cogwheel',
            B: 'steampowered:bronze_large_cogwheel',
            C: 'create:fluid_pipe',
            D: 'steampowered:bronze_sheet',
            E: 'create:propeller',
            F: 'create:shaft',
        }),
    ]

    let j = 0;
    newRecipes.forEach(function (recipe) {
        event.recipes.extendedcrafting.shaped_table(recipe.result, recipe.pattern, recipe.key).id('the_winter_rescue:extendedcrafting/advanced_table/new/'+j);
        j++;
    });
});