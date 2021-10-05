onEvent('recipes', (event) => {
    var data = {
        recipes: [
        {output:'4x rankine:cinnamon_planks', input: 'rankine:cinnamon_log'},
        {output:'4x rankine:cedar_planks', input: 'rankine:cedar_log'},
        {output:'4x rankine:sharinga_planks', input: 'rankine:sharinga_log'},
        {output:'4x rankine:black_walnut_planks', input: 'rankine:black_walnut_log'},
        {output:'4x rankine:cork_oak_planks', input: 'rankine:cork_oak_log'},
        {output:'4x rankine:coconut_palm_planks', input: 'rankine:coconut_palm_log'},
        {output:'4x rankine:pinyon_pine_planks', input: 'rankine:pinyon_pine_log'},
        {output:'4x rankine:juniper_planks', input: 'rankine:juniper_log'},
        {output:'4x rankine:balsam_fir_planks', input: 'rankine:balsam_fir_log'},
        {output:'4x rankine:magnolia_planks', input: 'rankine:magnolia_log'},
        {output:'4x rankine:eastern_hemlock_planks', input: 'rankine:eastern_hemlock_log'},
        {output:'4x rankine:maple_planks', input: 'rankine:maple_log'}
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.createCutting(recipe.output, recipe.input);
    });
});
