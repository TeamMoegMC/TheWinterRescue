onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'rankine:quartzite',
                output: Item.of('minecraft:quartz', 4),
                secondary: [Item.of('minecraft:quartz').chance(0.5)],
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineeringCrusher(recipe.output, recipe.input);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
