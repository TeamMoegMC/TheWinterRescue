onEvent('recipes', (event) => {
    var data = {
        recipes: [
            // {
            //     input: 'thermal:blizz_rod',
            //     output: Item.of('thermal:blizz_powder', 4),
            //     secondary: [Item.of('minecraft:snowball').chance(0.5)],
            //     id: 'immersiveengineering:crusher/blizz_rod'
            // }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
