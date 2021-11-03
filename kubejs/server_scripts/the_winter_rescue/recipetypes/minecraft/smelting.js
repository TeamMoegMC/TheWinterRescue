onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'kubejs:aluminium_hydroxide_dust',
            output: 'kubejs:aluminium_oxide_dust',
            xp: 0
        },
        {
            input: '#kubejs:coal_dust',
            output: 'minecraft:black_dye',
            xp: 0
        },
        {
            input: 'kubejs:charcoal_dust',
            output: 'minecraft:black_dye',
            xp: 0
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.smelting(recipe.output, recipe.input);

        if (recipe.xp) {
            re.xp(recipe.xp);
        }

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
