ServerEvents.recipes(event => {
    let recipes = [
            {
                input: 'minecraft:sandstone',
                output: Item.of('minecraft:quartz', 4),
                secondary: [Item.of('minecraft:quartz').withChance(0.5)],
            }
        ]

    recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineeringCrusher(recipe.output, recipe.input);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
