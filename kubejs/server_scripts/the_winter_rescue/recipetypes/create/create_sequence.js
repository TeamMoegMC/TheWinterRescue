onEvent('recipes', (event) => {
    event.recipes.createSequencedAssembly([
        Item.of('immersiveengineering:capacitor_lv')
    ], '#forge:sheetmetals/iron', [
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:plates/battery_alloy']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:dusts/redstone']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', 'immersiveengineering:wirecoil_copper']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:plates/lead']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:treated_wood']),
    ]).transitionalItem('kubejs:battery_alloy_plate').loops(4)

    event.recipes.createSequencedAssembly([
        Item.of('immersiveengineering:capacitor_mv')
    ], '#immersiveengineering:scaffoldings/steel', [
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', '#forge:plates/battery_alloy']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', '#forge:dusts/redstone']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', 'immersiveengineering:wirecoil_electrum']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', '#forge:plates/aluminum']),
        event.recipes.createDeploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', '#forge:treated_wood']),
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
    ], 'immersiveengineering:treated_wood_horizontal', [
		event.recipes.createDeploying('kubejs:pcb_base', ['kubejs:pcb_base', 'immersiveengineering:wirecoil_copper']),
		event.recipes.createDeploying('kubejs:pcb_base', ['kubejs:pcb_base', 'minecraft:green_dye']),
		event.recipes.createFilling('kubejs:pcb_base', ['kubejs:pcb_base', Fluid.of('rankine:resin', 500)]),
		event.recipes.createDeploying('kubejs:pcb_base', ['kubejs:pcb_base', 'minecraft:gold_nugget']),
        event.recipes.createPressing('kubejs:pcb_base', ['kubejs:pcb_base']),
		event.recipes.createDeploying('kubejs:pcb_base', ['kubejs:pcb_base', 'create:electron_tube']),
    ]).transitionalItem('kubejs:pcb_base').loops(1)
	event.recipes.createSequencedAssembly([
        Item.of('kubejs:servo_core')
    ], 'immersiveengineering:circuit_board', [
        event.recipes.createDeploying('immersiveengineering:circuit_board', ['immersiveengineering:circuit_board', 'kubejs:motor']),
        event.recipes.createDeploying('immersiveengineering:circuit_board', ['immersiveengineering:circuit_board', 'immersiveengineering:wirecoil_copper']),
		event.recipes.createFilling('immersiveengineering:circuit_board', ['immersiveengineering:circuit_board', Fluid.of('rankine:resin', 100)]),
    ]).transitionalItem('immersiveengineering:circuit_board').loops(4)
});
