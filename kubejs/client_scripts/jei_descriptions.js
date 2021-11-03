onEvent('jei.information', (event) => {
    const recipes = [
        {
            items: ['frostedheart:energy_core'],
            description: [text.translate("info.jei.the_winter_rescue.energy_core")]
        },
        {
            items: [
                'create:mechanical_piston',
                'create:sticky_mechanical_piston',
                'create:piston_extension_pole',
                'create:cart_assembler'
            ],
            description: [text.translate("info.jei.the_winter_rescue.power_glitch")]
        },
        {
            items: [
                'create:mechanical_drill',
                'create:mechanical_bearing'
            ],
            description: [text.translate("info.jei.the_winter_rescue.later_tech")]
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
