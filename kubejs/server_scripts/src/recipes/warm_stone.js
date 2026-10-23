ServerEvents.recipes((event) => {
    let {kubejs} = event.recipes
    const hotWaterBag = "frostedheart:hot_water_bag"
    const hotWaterCup = Item.of(
        "frostedheart:wooden_cup_drink",
        '{Fluid:{FluidName:"caupona:nail_soup",Amount:250}}'
    )
    const filledHotWaterBag = Item.of(hotWaterBag, {
        "frostedheart:thermal_reservoir": {
            version: 1,
            initialized: true,
            core_temperature_c: 60.0,
            surface_temperature_c: 60.0
        }
    })

    kubejs.shaped("frostedheart:warm_stone", [
        "A",
        "B"
    ], {
        A: "minecraft:smooth_stone",
        B: "frostedheart:straw_lining"
    }).id("the_winter_rescue:minecraft/crafting_shaped/warm_stone")

    kubejs.shaped(hotWaterBag, [
        "A",
        "B"
    ], {
        A: "frostedheart:leather_water_bag",
        B: "frostedheart:straw_lining"
    }).id("the_winter_rescue:minecraft/crafting_shaped/hot_water_bag")

    // Only an existing hot-water container may initialize the reservoir's heat state.
    kubejs.shapeless(filledHotWaterBag, [
        Item.of(hotWaterBag).weakNBT(),
        hotWaterCup
    ])
        .replaceIngredient("frostedheart:wooden_cup_drink", "frostedheart:wooden_cup")
        .id("the_winter_rescue:minecraft/crafting_shapeless/fill_hot_water_bag")
})
