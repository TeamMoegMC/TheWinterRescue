ServerEvents.recipes((event) => {
    let {minecraft} = event.recipes

    minecraft.stonecutting("2x kubejs:cut_stone", "minecraft:stone");
    // minecraft.stonecutting("byg:end_sand", "betterendforge:endstone_dust");
})