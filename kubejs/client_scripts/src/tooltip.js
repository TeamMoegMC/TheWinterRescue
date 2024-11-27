ItemEvents.tooltip((event) => {
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
        .color("#808080") //any hex color
    */
    let addTooltip = [
        {
            items: ["minecraft:blast_furnace", "minecraft:furnace"],
            txt: [Text.of(Text.translate("tooltip.the_winter_rescue.replaced_recipe")).gray()]
        },
        {
            items: ["minecraft:vine"],
            txt: [Text.of(Text.translate("tooltip.the_winter_rescue.snowy_vine")).gray()]
        },
        {
            items: ["frostedheart:makeshift_knife"],
            txt: [Text.of(Text.translate("tooltip.the_winter_rescue.flint_knife")).gray()]
        },
        {
            items: ["stone_age:flint_knife"],
            txt: [Text.of(Text.translate("tooltip.the_winter_rescue.flint_knife_2")).gray()]
        },
        {
            items: ["stone_age:tanning_rack"],
            txt: [Text.of(Text.translate("tooltip.the_winter_rescue.tanning_rack")).gray()]
        },
        {
            items: ["kubejs:activated_carbon"],
            txt: [Text.of(Text.translate("tooltip.the_winter_rescue.activated_carbon")).gray()]
        },
        {
            items: ["minecraft:campfire"],
            txt: [Text.of(Text.translate("tooltip.the_winter_rescue.campfire")).gray()]
        },
        {
            items: ["frostedheart:straw_lining", "frostedheart:kelp_lining", "frostedheart:gambeson", "frostedheart:buff_coat"],
            txt: [Text.of(Text.translate("tooltip.the_winter_rescue.lining")).gray()]
        },
    ]
    addTooltip.forEach((recipe) => {
        event.add(recipe.items, recipe.txt)
    })
})