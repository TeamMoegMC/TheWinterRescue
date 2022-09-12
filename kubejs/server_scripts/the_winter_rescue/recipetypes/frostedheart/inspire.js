onEvent('recipes', (event) => {
//event.custom(inspireRecipe("kubejs:silver",1000));
    var inspireRecipes = [
        inspireRecipe("kubejs:damaged_gpu", 2000),
        inspireRecipe("kubejs:damaged_circuit_board", 1500),
        inspireRecipe("kubejs:damaged_electric_motor", 1250),
        inspireRecipe("kubejs:damaged_camera", 1250),
        inspireRecipe("kubejs:burnt_circuit_board", 1500),
        inspireRecipe("kubejs:broken_robot_1", 2000),
        inspireRecipe("kubejs:broken_robot_2", 2000)
    ]

    inspireRecipes.forEach((recipe) => {
            event.custom(recipe)
        })
});