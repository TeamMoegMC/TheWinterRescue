onEvent('jei.information', (event) => {
    const recipes = [
        {
            items: ['frostedheart:energy_core'],
            description: ['The tech core of all space station mankind. Used to build the Generator. Keep it safe! ']
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.description);
        });
    });

    disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled, if you managed to obtain it please report it on TWR's issue tracker: https://github.com/TeamMoegMC/The-Winter-Rescue/issues"
        );
    });
});
