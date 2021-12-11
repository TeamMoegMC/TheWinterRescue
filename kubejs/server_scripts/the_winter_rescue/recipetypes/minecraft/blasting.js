onEvent('recipes', (event) => {
    const recipes = [
        {
             input: 'kubejs:shaped_bounded_graphite',
             output: 'kubejs:rough_graphite_electrode'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.blasting(recipe.output, recipe.input);

        if (recipe.xp) {
            re.xp(recipe.xp);
        }

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
