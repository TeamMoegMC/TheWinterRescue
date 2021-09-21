onEvent('recipes', event => {

    event.recipes.custommachinery.custom_machine("the_winter_rescue:electrolyzer", 200)
        .requireEnergy(2000)
        .requireItemTag("#forge:salt", 1)
        .requireFluid(Fluid.of("minecraft:water", 500), "inputtank")
        .produceItem(Item.of("rankine:sodium_hydroxide", 1))
        .jei();
    event.recipes.custommachinery.custom_machine("the_winter_rescue:electrolyzer", 200)
        .requireEnergy(3000)
        .requireItem(Item.of("kubejs:aluminium_oxide_dust", 1))
        .requireFluid(Fluid.of("kubejs:cryolite", 100), "inputtank")
        .produceItem(Item.of("immersiveengineering:dust_aluminum", 1))
        .jei();
})