onEvent('recipes', event => {

    event.recipes.custommachinery.custom_machine("the_winter_rescue:bronze_boiler", 200)
    .requireBlock("custommachinery:custom_machine_block{machineID:\"the_winter_rescue:bronze_burner\",craftingManager:{status:\"running\"}}", 0, -1, 0, 0, 0, 0, 1, "==")
    .requireFluidPerTick(Fluid.of("minecraft:water", 1), "watertank")
    .produceFluidPerTick(Fluid.of("steampowered:steam", 40), "steamtank")
    .jei();

    event.recipes.custommachinery.custom_machine("the_winter_rescue:cast_iron_boiler", 200)
        .requireBlock("custommachinery:custom_machine_block{machineID:\"the_winter_rescue:cast_iron_burner\",craftingManager:{status:\"running\"}}", 0, -1, 0, 0, 0, 0, 1, "==")
        .requireFluidPerTick(Fluid.of("minecraft:water", 2), "watertank")
        .produceFluidPerTick(Fluid.of("steampowered:steam", 60), "steamtank")
        .jei();

    event.recipes.custommachinery.custom_machine("the_winter_rescue:steel_boiler", 200)
        .requireBlock("custommachinery:custom_machine_block{machineID:\"the_winter_rescue:steel_burner\",craftingManager:{status:\"running\"}}", 0, -1, 0, 0, 0, 0, 1, "==")
        .requireFluidPerTick(Fluid.of("minecraft:water", 4), "watertank")
        .produceFluidPerTick(Fluid.of("steampowered:steam", 60), "steamtank")
        .jei();

    event.recipes.custommachinery.custom_machine("the_winter_rescue:bronze_burner", 200)
        .produceItem(Item.of("rankine:ash", 1), "ash")
        .requireFuel()

    event.recipes.custommachinery.custom_machine("the_winter_rescue:cast_iron_burner", 200)
        .produceItem(Item.of("rankine:ash", 1), "ash")
        .requireFuel()

    event.recipes.custommachinery.custom_machine("the_winter_rescue:steel_burner", 200)
        .produceItem(Item.of("rankine:ash", 1), "ash")
        .requireFuel()

    Item.of('custommachinery:custom_machine_block', {machine:"the_winter_rescue:burner"})
})