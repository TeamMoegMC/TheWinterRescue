ServerEvents.recipes((event) => {
    let {create} = event.recipes
    create.sequenced_assembly([
        Item.of('immersiveengineering:capacitor_lv')
    ], '#forge:sheetmetals/iron', [
        create.deploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:plates/battery_alloy']),
        create.deploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:dusts/redstone']),
        create.deploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', 'immersiveengineering:wirecoil_copper']),
        create.deploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:plates/lead']),
        create.deploying('kubejs:incomplete_capacitor_lv', ['kubejs:incomplete_capacitor_lv', '#forge:treated_wood']),
    ]).transitionalItem('frostedheart:lead_sheet').loops(4)

    create.sequenced_assembly([
        Item.of('immersiveengineering:capacitor_mv')
    ], '#immersiveengineering:scaffoldings/steel', [
        create.deploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', '#forge:plates/battery_alloy']),
        create.deploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', '#forge:dusts/redstone']),
        create.deploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', 'immersiveengineering:wirecoil_electrum']),
        create.deploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', '#forge:plates/aluminum']),
        create.deploying('kubejs:incomplete_capacitor_mv', ['kubejs:incomplete_capacitor_mv', '#forge:treated_wood']),
    ]).transitionalItem('frostedheart:lead_sheet').loops(6)

    create.sequenced_assembly([
        Item.of('immersiveengineering:capacitor_hv')
    ], '#forge:sheetmetals/steel', [
        create.deploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', '#forge:plates/battery_alloy']),
        create.deploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', '#forge:dusts/redstone']),
        create.deploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', 'immersiveengineering:wirecoil_steel']),
        create.deploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', '#forge:plates/tungsten_steel']),
        create.deploying('kubejs:incomplete_capacitor_hv', ['kubejs:incomplete_capacitor_hv', '#forge:treated_wood']),
    ]).transitionalItem('frostedheart:lead_sheet').loops(8)

    create.sequenced_assembly([
        Item.of('immersiveengineering:circuit_board')
    ], 'immersiveengineering:treated_wood_horizontal', [
        create.deploying('kubejs:pcb_base', ['kubejs:pcb_base', 'immersiveengineering:wirecoil_copper']),
        create.deploying('kubejs:pcb_base', ['kubejs:pcb_base', 'minecraft:green_dye']),
        create.filling('kubejs:pcb_base', ['kubejs:pcb_base', Fluid.of('frostedheart:resin', 500)]),
        create.deploying('kubejs:pcb_base', ['kubejs:pcb_base', 'minecraft:gold_nugget']),
        create.pressing('kubejs:pcb_base', ['kubejs:pcb_base']),
        create.deploying('kubejs:pcb_base', ['kubejs:pcb_base', 'create:electron_tube']),
    ]).transitionalItem('kubejs:pcb_base').loops(1)

    create.sequenced_assembly([
        Item.of('kubejs:servo_core')
    ], 'immersiveengineering:circuit_board', [
        create.deploying('immersiveengineering:circuit_board', ['immersiveengineering:circuit_board', 'kubejs:motor']),
        create.deploying('immersiveengineering:circuit_board', ['immersiveengineering:circuit_board', 'immersiveengineering:wirecoil_copper']),
        event.recipes.createFilling('immersiveengineering:circuit_board', ['immersiveengineering:circuit_board', Fluid.of('frostedheart:resin', 100)]),
    ]).transitionalItem('immersiveengineering:circuit_board').loops(4)
})