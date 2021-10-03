onEvent('recipes', event => {

    // event.recipes.custommachinery.custom_machine("the_winter_rescue:bronze_boiler", 320)
    //     .requireBlock(["custommachinery:custom_machine_block{machineID:\"the_winter_rescue:bronze_burner\",craftingManager:{status:\"running\"}}"], true, 0, -1, 0, 0, 0, 0, 1, "==")
    //     .requireFluidPerTick(Fluid.of("minecraft:water", 1), "watertank")
    //     .produceFluidPerTick(Fluid.of("steampowered:steam", 24), "steamtank")
    //     .jei();

    // event.recipes.custommachinery.custom_machine("the_winter_rescue:cast_iron_boiler", 240)
    //     .requireBlock(["custommachinery:custom_machine_block{machineID:\"the_winter_rescue:cast_iron_burner\",craftingManager:{status:\"running\"}}"], true, 0, -1, 0, 0, 0, 0, 1, "==")
    //     .requireFluidPerTick(Fluid.of("minecraft:water", 2), "watertank")
    //     .produceFluidPerTick(Fluid.of("steampowered:steam", 48), "steamtank")
    //     .jei();
    //
    // event.recipes.custommachinery.custom_machine("the_winter_rescue:steel_boiler", 160)
    //     .requireBlock(["custommachinery:custom_machine_block{machineID:\"the_winter_rescue:steel_burner\",craftingManager:{status:\"running\"}}"], true, 0, -1, 0, 0, 0, 0, 1, "==")
    //     .requireFluidPerTick(Fluid.of("minecraft:water", 4), "watertank")
    //     .produceFluidPerTick(Fluid.of("steampowered:steam", 72), "steamtank")
    //     .jei();

    // normal coal burn time: 160 x 8 = 1280, coke coal burn time: 160 x 16 = 2560
    // coke    
    event.recipes.custommachinery.custom_machine("the_winter_rescue:bronze_burner", 640)
        .requireItemTag("#forge:coal_coke", 1, "fuel")
        .produceItem(Item.of("rankine:ash", 1), "ash")

    event.recipes.custommachinery.custom_machine("the_winter_rescue:cast_iron_burner", 480)
        .requireItemTag("#forge:coal_coke", 1, "fuel")
        .produceItem(Item.of("rankine:ash", 1), "ash")

    event.recipes.custommachinery.custom_machine("the_winter_rescue:steel_burner", 320)
        .requireItemTag("#forge:coal_coke", 1, "fuel")
        .produceItem(Item.of("rankine:ash", 1), "ash")

    // normal coal
    event.recipes.custommachinery.custom_machine("the_winter_rescue:bronze_burner", 320)
        .requireItemTag("#minecraft:coals", 1, "fuel")
        .produceItem(Item.of("rankine:ash", 1), "ash")

    event.recipes.custommachinery.custom_machine("the_winter_rescue:cast_iron_burner", 240)
        .requireItemTag("#minecraft:coals", 1, "fuel")
        .produceItem(Item.of("rankine:ash", 1), "ash")

    event.recipes.custommachinery.custom_machine("the_winter_rescue:steel_burner", 160)
        .requireItemTag("#minecraft:coals", 1, "fuel")
        .produceItem(Item.of("rankine:ash", 1), "ash")

})