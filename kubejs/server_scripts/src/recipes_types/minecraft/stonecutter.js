ServerEvents.recipes((event) => {
    let {minecraft} = event.recipes

    minecraft.stonecutting("2x kubejs:cut_stone", "minecraft:stone");
    minecraft.stonecutting("32x frostedheart:metal_scaffolding", "#twr:ingots/structural")
    minecraft.stonecutting("32x frostedheart:metal_scaffolding_stairs", "#twr:ingots/structural")
    minecraft.stonecutting("2x frostedheart:wooden_scaffolding", "#forge:treated_wood")
    minecraft.stonecutting("2x frostedheart:wooden_scaffolding_stairs", "#forge:treated_wood")
    minecraft.stonecutting("32x create:copycat_step", "#forge:ingots/zinc")
    minecraft.stonecutting("32x create:copycat_panel", "#forge:ingots/zinc")
})