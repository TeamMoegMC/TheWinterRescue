onEvent('jei.information', (event) => {
    const recipes = [
        {
            items: ['frostedheart:energy_core'],
            description: ['所有空间站人类的科技结晶。用于制作能量塔。保证它的安全！']
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
            "此物品已被禁用，如果你身上有，请提交BUG：https://github.com/TeamMoegMC/The-Winter-Rescue/issues"
        );
    });
});
