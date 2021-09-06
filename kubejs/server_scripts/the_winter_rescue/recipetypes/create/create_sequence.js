onEvent('recipes', (event) => {
    event.recipes.createSequencedAssembly([
        Item.of('immersiveengineering:capacitor_lv')
    ], 'rankine:cast_iron_support', [
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:plates/battery_alloy']),
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:dusts/redstone']),
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'immersiveengineering:wirecoil_copper']),
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:plates/lead']),
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:treated_wood']),
    ]).loops(4)

    event.recipes.createSequencedAssembly([
        Item.of('immersiveengineering:capacitor_mv')
    ], '#forge:sheetmetals/steel', [
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:plates/battery_alloy']),
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:dusts/redstone']),
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'immersiveengineering:wirecoil_electrum']),
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:plates/aluminum']),
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:treated_wood']),
    ]).loops(6)

    event.recipes.createSequencedAssembly([
        Item.of('immersiveengineering:capacitor_hv')
    ], '#forge:sheetmetals/steel', [
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:plates/battery_alloy']),
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:dusts/redstone']),
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'immersiveengineering:wirecoil_steel']),
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:plates/tungsten_steel']),
        event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:treated_wood']),
    ]).loops(8)
});
