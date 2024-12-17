ServerEvents.recipes((event) => {
    let { immersiveengineering } = event.recipes
    let recipes = [
        {
            input1: 'minecraft:cobblestone',
            input2: 'minecraft:cobblestone',
            output: Item.of('minecraft:stone', 2),
            time: 200
        },
        { input1: '#forge:stone', input2: '#forge:stone', output: Item.of('minecraft:stone', 2), time: 200 },
        { input1: '8x minecraft:sand', input2: 'kubejs:charcoal_dust', output: '8x minecraft:glass', time: 800 },
        { input1: '#forge:ingots/zinc', input2: '2x #forge:ingots/copper', output: '3x create:brass_ingot', time: 300 },
        // {
        //     input1: '#forge:glass',
        //     input2: Ingredient.of('#forge:ingots/copper', 3),
        //     output: Item.of('tconstruct:tinkers_bronze_ingot', 3)
        // }
        { input1: '4x #forge:ores/copper', input2: '#kubejs:kiln_dust', output: '4x minecraft:copper_ingot', time: 400 },
        { input1: '4x #forge:ores/tin', input2: '#kubejs:kiln_dust', output: '4x frostedheart:tin_ingot', time: 400 }
    ]
    recipes.forEach((recipe) => {
        immersiveengineering.alloy(recipe.output, recipe.input1, recipe.input2, recipe.time);
        // if (recipe.id) {
        //     re.id(recipe.id);
        // }
    })
})