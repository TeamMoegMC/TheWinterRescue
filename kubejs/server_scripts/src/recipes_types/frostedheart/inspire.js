ServerEvents.recipes((event) => {
    let { frostedheart } = event.recipes

    frostedheart.inspire("kubejs:damaged_gpu", 1000)
    frostedheart.inspire("kubejs:damaged_circuit_board", 600)
    frostedheart.inspire("kubejs:damaged_electric_motor", 500)
    frostedheart.inspire("kubejs:damaged_camera", 500)
    frostedheart.inspire("kubejs:burnt_circuit_board", 600)
    frostedheart.inspire("kubejs:broken_robot_1", 2000)
    frostedheart.inspire("kubejs:broken_robot_2", 2000)
})