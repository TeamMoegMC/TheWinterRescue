onEvent('recipes', event => {

    event.recipes.custommachinery.custom_machine("the_winter_rescue:boiler", 200)
    .requireBlock("custommachinery:custom_machine_block{machineID:\"the_winter_rescue:burner\",craftingManager:{phase:\"CRAFTING_TICKABLE\"}}", 0, -1, 0, 0, 0, 0, 1, "==")
    .produceItem(Item.of("frostedheart:generator_ash", 1), "ash")
    .requireFluidPerTick(Fluid.of("minecraft:water", 1), "watertank")
    .produceFluidPerTick(Fluid.of("kubejs:steam", 100), "steamtank")
    .requireFuel()
    .jei();

    event.recipes.custommachinery.custom_machine("the_winter_rescue:burner", 200)
        .produceItem(Item.of("frostedheart:generator_ash", 1), "ash")
        .requireFuel()
        .jei();

    Item.of('custommachinery:custom_machine_block', {machine:"the_winter_rescue:burner"})
})