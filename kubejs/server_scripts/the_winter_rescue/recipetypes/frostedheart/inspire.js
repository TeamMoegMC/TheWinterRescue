onEvent('recipes', (event) => {
//event.custom(inspireRecipe("kubejs:silver",1000));
    var inspireRecipes = [
        inspireRecipe("kubejs:damaged_gpu", 2250),
        inspireRecipe("kubejs:damaged_circuit_board", 2000),
        inspireRecipe("kubejs:damaged_electric_motor", 1500),
        inspireRecipe("kubejs:damaged_camera", 1500),
        inspireRecipe("kubejs:burnt_circuit_board", 2000),
        inspireRecipe("kubejs:broken_robot_1", 2250),
        inspireRecipe("kubejs:broken_robot_2", 2250)
    ]

    inspireRecipes.forEach((recipe) => {
            event.custom(recipe)
        })
});