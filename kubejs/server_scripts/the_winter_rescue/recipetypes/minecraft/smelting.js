onEvent('recipes', (event) => {
    const recipes = [
	    {
            input: 'kubejs:aluminium_hydroxide_dust',
            output: 'kubejs:aluminium_oxide_dust',
			xp: 0
        }
        // {
        //     input: '#forge:ores/ender',
        //     output: Item.of('#forge:shards/ender'),
        //     xp: 0.5
        // }
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
