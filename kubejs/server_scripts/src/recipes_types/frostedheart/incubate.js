
ServerEvents.recipes((event) => {
    //event.custom(inspireRecipe("frostedheart:raw_silver", 1000));
    Ingredient.of("#forge:mushrooms")
        .getItemIds()
        .forEach((name) => {
            event.custom(incubateItemRecipe("#kubejs:straw_briquettes", name, false, "8x " + name, 2400, 1))
                .id("the_winter_rescue:incubate/" + name.split(":")[0] + "/" + name.split(":")[1])
            event.custom(incubateItemRecipe("4x #forge:dusts/wood", name, false, "4x " + name, 1200, 2))
                .id("the_winter_rescue:incubate/sawdust/" + name.split(":")[0] + "/" + name.split(":")[1])
        })
})
