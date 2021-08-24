onEvent('recipes', event => {

    event.recipes.custommachinery.custom_machine("the_winter_rescue:boiler", 200)
    .requireBlock("minecraft:furnace[lit=true]", 0, -1, 0, 0, 0, 0, 1, "==")
    .produceItem(Item.of("frostedheart:generator_ash", 1), "ash")
    .requireFluidPerTick(Fluid.of("minecraft:water", 1), "watertank")
    .produceFluidPerTick(Fluid.of("kubejs:steam", 100), "steamtank")
    .requireFuel()
    .jei();

  
})