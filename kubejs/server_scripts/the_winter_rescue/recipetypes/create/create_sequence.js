/**
- createSequencedAssembly
event.recipes.createSequencedAssembly(output[], input, sequence[]).transitionalItem(item).loops(number)
This is too complicated to explain honestly, so just look at the example below. transitionalItem() and loops() are optional, sequence contains other recipes (only use ones supported by create tho)

- Example:
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
    event.recipes.createSequencedAssembly([
        Item.of('immersiveengineering:capacitor_lv')
    ], 'rankine:cast_iron_support', [
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:plates/battery_alloy']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:dusts/redstone']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', 'immersiveengineering:wirecoil_copper']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:plates/lead']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:treated_wood']),
    ]).loops(4)

    event.recipes.createSequencedAssembly([
        Item.of('immersiveengineering:capacitor_mv')
    ], '#forge:sheetmetals/steel', [
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', '#forge:plates/battery_alloy']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', '#forge:dusts/redstone']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', 'immersiveengineering:wirecoil_electrum']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', '#forge:plates/aluminum']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['create:incomplete_large_cogwheel', '#forge:treated_wood']),
    ]).loops(6)

    event.recipes.createSequencedAssembly([
        Item.of('immersiveengineering:capacitor_hv')
    ], '#forge:sheetmetals/steel', [
        event.recipes.createDeploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', '#forge:plates/battery_alloy']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', '#forge:dusts/redstone']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', 'immersiveengineering:wirecoil_steel']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', '#forge:plates/tungsten_steel']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', '#forge:treated_wood']),
    ]).loops(8)
});
