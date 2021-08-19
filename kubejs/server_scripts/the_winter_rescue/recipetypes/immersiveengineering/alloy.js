onEvent('recipes', (event) => {
    var data = {
        recipes: [
            // {
            //     input1: '#forge:ingots/copper',
            //     input2: '#forge:ingots/zinc',
            //     output: Item.of('emendatusenigmatica:brass_ingot', 2),
            //     id: 'immersiveengineering:alloysmelter/brass'
            // },
            // {
            //     input1: '#forge:glass',
            //     input2: Ingredient.of('#forge:ingots/copper', 3),
            //     output: Item.of('tconstruct:tinkers_bronze_ingot', 3)
            // }
        ]
    };
    data.recipes.forEach((recipe) => {
        // const re = event.recipes.immersiveengineering.alloy(recipe.output, recipe.input1, recipe.input2);
        // if (recipe.id) {
        //     re.id(recipe.id);
        // }
    });
});
