onEvent('recipes', (event) => {
    event.recipes.createSequencedAssembly([
        Item.of('immersiveengineering:capacitor_lv')
    ], 'rankine:cast_iron_support', [
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:plates/battery_alloy']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:dusts/redstone']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', 'immersiveengineering:wirecoil_copper']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:plates/lead']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:treated_wood']),
    ]).transitionalItem('kubejs:battery_alloy_plate').loops(4)

    event.recipes.createSequencedAssembly([
        Item.of('immersiveengineering:capacitor_mv')
    ], '#forge:sheetmetals/steel', [
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', '#forge:plates/battery_alloy']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', '#forge:dusts/redstone']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', 'immersiveengineering:wirecoil_electrum']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', '#forge:plates/aluminum']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['create:incomplete_large_cogwheel', '#forge:treated_wood']),
    ]).transitionalItem('kubejs:battery_alloy_plate').loops(6)

    event.recipes.createSequencedAssembly([
        Item.of('immersiveengineering:capacitor_hv')
    ], '#forge:sheetmetals/steel', [
        event.recipes.createDeploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', '#forge:plates/battery_alloy']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', '#forge:dusts/redstone']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', 'immersiveengineering:wirecoil_steel']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', '#forge:plates/tungsten_steel']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', '#forge:treated_wood']),
    ]).transitionalItem('kubejs:battery_alloy_plate').loops(8)

    event.recipes.createSequencedAssembly([
        Item.of('immersiveengineering:circuit_board')
    ], '#forge:plates/copper', [
        event.recipes.createFilling('create:copper_sheet', ['create:copper_sheet', Fluid.of('rankine:resin', 500)]),
        event.recipes.createDeploying('create:copper_sheet', ['create:copper_sheet', 'create:electron_tube']),
        event.recipes.createDeploying('create:copper_sheet', ['create:copper_sheet', 'immersiveengineering:wire_copper']),
        event.recipes.createPressing('create:copper_sheet', ['create:copper_sheet']),
    ]).transitionalItem('create:copper_sheet').loops(1)
});
