onEvent('recipes', (event) => {
    let recipes = [
        shapedRecipe('steampowered:bronze_flywheel', [' DDD ', 'DACAD', 'DCBCD', 'DACAD', ' DDD '], {
            A: 'steampowered:bronze_cogwheel',
            B: 'steampowered:bronze_large_cogwheel',
            C: 'create:shaft',
            D: '#forge:plates/bronze',
        }),
        shapedRecipe('steampowered:bronze_steam_engine', ['DCEDD', 'CCABF', 'DCEDD'], {
            A: 'steampowered:bronze_cogwheel',
            B: 'steampowered:bronze_large_cogwheel',
            C: 'create:fluid_pipe',
            D: '#forge:plates/bronze',
            E: 'create:propeller',
            F: 'create:shaft',
        })
    ]

    let j = 0;
    recipes.forEach(function (recipe) {
        event.recipes.extendedcrafting.shaped_table(recipe.result, recipe.pattern, recipe.key).id('the_winter_rescue:extendedcrafting/advanced_table/new/'+j);
        j++;
    });
});