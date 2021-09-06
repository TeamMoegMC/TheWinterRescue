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

- createSequencedAssembly
event.recipes.createSequencedAssembly(output[], input, sequence[]).transitionalItem(item).loops(number)
This is too complicated to explain honestly, so just look at the example below. transitionalItem() and loops() are optional, sequence contains other recipes (only use ones supported by create tho)

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


event.recipes.createMechanicalCrafting('minecraft:piston', [
  'CCCCC',
  'CPIPC',
  'CPRPC'
], {
  C: '#forge:cobblestone',
  P: '#minecraft:planks',
  R: '#forge:dusts/redstone',
  I: '#forge:ingots/iron'
})



event.recipes.createSequencedAssembly([
  Item.of('6x create:large_cogwheel').withChance(32.0),
  Item.of('create:brass_ingot').withChance(2.0),
  'minecraft:andesite',
  'create:cogwheel',
  'minecraft:stick',
  'minecraft:iron_nugget'
], 'create:brass_ingot', [
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#minecraft:planks']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#minecraft:wooden_buttons']),
  event.recipes.createCutting('create:incomplete_large_cogwheel', 'create:incomplete_large_cogwheel').processingTime(50)
]).transitionalItem('create:incomplete_large_cogwheel').loops(6)


If you want to use your own transitional item in sequenced_assembly recipes, you must register it in startup event:



onEvent('item.registry', event => {

  // Texture for this item goes in kubejs/assets/kubejs/textures/item/my_part.png

  event.create('my_part').type('create:sequenced_assembly').displayName('My Part')

})



Then you would use ...transitionalItem('kubejs:my_part')...
 */

onEvent('recipes', (event) => {
    event.recipes.createMilling([Item.of('minecraft:quartz'), Item.of('minecraft:quartz').withChance(0.5)], '#forge:stones/quartzite')
    event.recipes.createMilling([Item.of('minecraft:quartz').withChance(0.2), Item.of('minecraft:quartz').withChance(0.2)], '#forge:stones/sandstone')
    event.recipes.createMilling([Item.of('2x minecraft:stick'), Item.of('8x rankine:sawdust').withChance(0.5), Item.of('rankine:biomass').withChance(0.2)], '#minecraft:logs')
});
