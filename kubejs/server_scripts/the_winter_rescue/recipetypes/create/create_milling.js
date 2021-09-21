/*
Supported recipe types:



- createConversion
- createCrushing
- createCutting
- createMilling
- createBasin
- createMixing (supports .heated() and .superheated())
- createCompacting (supports .heated() and .superheated())
- createPressing
- createSandpaperPolishing
- createSplashing (Bulk Washing)
- createDeploying
- createFilling
- createEmptying

Note: Bulk Smoking = vanilla campfire cooking and Bulk Blasting = vanilla blasting recipe types.

event.recipes.createCrushing(output[], input[])
Output doesn't have to be array. It can be either items or fluids
Input doesn't have to be array. It can be either ingredients or Fluid.of('minecraft:water', 1000) or {fluidTag: 'some:fluid_tag', amount: 1000}

- createMechanicalCrafting

event.recipes.createMechanicalCrafting(output, pattern[], {patternKey: input})
This recipe type is the same as regular crafting table shaped recipe


Examples:

event.recipes.createCrushing([
  '2x minecraft:cobblestone',
  'minecraft:redstone',
  Item.of('minecraft:redstone').withChance(0.5)
], 'minecraft:redstone_ore')

event.recipes.createMixing('create:chromatic_compound', [
  '#forge:dusts/glowstone',
  '#forge:dusts/glowstone',
  '#forge:dusts/glowstone',
  'create:powdered_obsidian',
  'create:powdered_obsidian',
  'create:powdered_obsidian',
  'create:polished_rose_quartz'
]).superheated()

event.recipes.createFilling('create:blaze_cake', [
  'create:blaze_cake_base',
  Fluid.of('minecraft:lava', 250)
])

event.recipes.createEmptying([
  'minecraft:glass_bottle',
  Fluid.of('create:honey', 250)
], 'minecraft:honey_bottle')

 */

onEvent('recipes', (event) => {
    event.recipes.createMilling([Item.of('minecraft:quartz'), Item.of('minecraft:quartz').withChance(0.5)], '#forge:stones/quartzite')
    event.recipes.createMilling([Item.of('minecraft:quartz').withChance(0.2), Item.of('minecraft:quartz').withChance(0.2)], '#forge:stones/sandstone')
    event.recipes.createMilling([Item.of('2x minecraft:stick'), Item.of('8x rankine:sawdust').withChance(0.5), Item.of('rankine:biomass').withChance(0.2)], '#minecraft:logs')
    event.recipes.createMilling([Item.of('2x minecraft:redstone'), Item.of('2x minecraft:redstone').withChance(0.5)], 'rankine:cinnabar')
    event.recipes.createMilling([Item.of('2x kubejs:impure_alumina_dust'), Item.of('2x kubejs:impure_alumina_dust').withChance(0.5)], 'rankine:alumina')
    event.recipes.createMilling([Item.of('kubejs:kaolin_dust'), Item.of('kubejs:kaolin_dust').withChance(0.5)], 'rankine:kaolinite_ball')
    event.recipes.createMilling([Item.of('minecraft:glowstone_dust'), Item.of('minecraft:glowstone_dust').withChance(0.5)], 'kubejs:washed_ore_fluorite')
    event.recipes.createMilling([Item.of('immersiveengineering:dust_sulfur'), Item.of('immersiveengineering:dust_sulfur').withChance(0.5)], 'rankine:sulfur')
    event.recipes.createMilling([Item.of('minecraft:quartz').withChance(0.5), Item.of('minecraft:quartz').withChance(0.3)], 'minecraft:smooth_sandstone')
});
