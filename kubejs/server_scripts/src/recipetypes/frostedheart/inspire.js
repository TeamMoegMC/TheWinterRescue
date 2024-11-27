ServerEvents.recipes((event) => {
    let inspireRecipes = [
        inspireRecipe("kubejs:damaged_gpu", 1000),
        inspireRecipe("kubejs:damaged_circuit_board", 600),
        inspireRecipe("kubejs:damaged_electric_motor", 500),
        inspireRecipe("kubejs:damaged_camera", 500),
        inspireRecipe("kubejs:burnt_circuit_board", 600),
        inspireRecipe("kubejs:broken_robot_1", 2000),
        inspireRecipe("kubejs:broken_robot_2", 2000)
    ]
    inspireRecipes.forEach((recipe) => {
        event.custom(recipe)
    })
})