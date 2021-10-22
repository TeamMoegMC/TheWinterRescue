onEvent('item.tooltip', (event) => {
    /*
    Valid Color Codes:
    .black()
    .darkBlue()
    .darkGreen()
    .darkAqua()
    .darkRed()
    .darkPurple()
    .gold()
    .gray()
    .darkGray()
    .blue()
    .green()
    .aqua()
    .red()
    .lightPurple()
    .yellow()
    .white()
    .color('#808080') //any hex color
    */
    const recipes = [
        {
            items: ['minecraft:blast_furnace', 'minecraft:furnace'],
            text: [Text.of(text.translate("tooltip.the_winter_rescue.replaced_recipe")).gray()]
        },
        {
            items: ['primalwinter:snowy_vine'],
            text: [Text.of(text.translate("tooltip.the_winter_rescue.snowy_vine")).gray()]
        },
        {
            items: ['notreepunching:flint_knife'],
            text: [Text.of(text.translate("tooltip.the_winter_rescue.flint_knife")).gray()]
        },
        {
            items: ['stone_age:flint_knife'],
            text: [Text.of(text.translate("tooltip.the_winter_rescue.flint_knife_2")).gray()]
        },
        {
            items: ['stone_age:tanning_rack'],
            text: [Text.of(text.translate("tooltip.the_winter_rescue.tanning_rack")).gray()]
        },
        {
            items: ['notreepunching:clay_tool', 'notreepunching:clay_bucket'],
            text: [Text.of(text.translate("tooltip.the_winter_rescue.clay_tool")).gray()]
        },
		{
            items: ['kubejs:activated_carbon'],
            text: [Text.of(text.translate("tooltip.the_winter_rescue.activated_carbon")).gray()]
        },
        {
            items: ['minecraft:campfire'],
            text: [Text.of(text.translate("tooltip.the_winter_rescue.campfire")).gray()]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
