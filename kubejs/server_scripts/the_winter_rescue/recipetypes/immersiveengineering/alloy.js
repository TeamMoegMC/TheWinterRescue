onEvent('recipes', (event) => {
    let recipes = [
            {
                input1: 'minecraft:cobblestone',
                input2: 'minecraft:cobblestone',
                output: Item.of('minecraft:stone', 2),
                time: 200
            },
            {input1: '#forge:stone', input2: '#forge:stone', output: Item.of('minecraft:stone', 2), time: 200},
            {input1: 'minecraft:sand', input2: 'kubejs:charcoal_dust', output: 'minecraft:glass', time: 200},
            {
                input1: '3x #forge:ingots/lead',
                input2: '#forge:ingots/antimony',
                output: '4x kubejs:battery_alloy',
                time: 400
            },
			{input1: '#forge:ingots/zinc', input2: '2x #forge:ingots/copper', output: '3x rankine:brass_ingot', time: 400},
            // {
            //     input1: '#forge:glass',
            //     input2: Ingredient.of('#forge:ingots/copper', 3),
            //     output: Item.of('tconstruct:tinkers_bronze_ingot', 3)
            // }
        ]
    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.alloy(recipe.output, recipe.input1, recipe.input2, recipe.time);
        // if (recipe.id) {
        //     re.id(recipe.id);
        // }
    });
});
