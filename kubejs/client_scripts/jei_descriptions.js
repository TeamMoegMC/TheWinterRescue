onEvent('jei.information', (event) => {
    const recipes = [
        {
            items: ['frostedheart:energy_core'],
            description: [text.translate("info.jei.the_winter_rescue.energy_core")]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.description);
        });
    });

    serverItemsToHide.forEach((item) => {
        event.add(
            item,
            text.translate("info.jei.the_winter_rescue.disabled")
        );
    });
});
