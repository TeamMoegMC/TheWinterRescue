onEvent('recipes', (event) => {
    let recipes = [
            {input: 'immersiveengineering:dust_aluminum', output: 'immersiveengineering:ingot_aluminum', time: 800},
            {input: 'minecraft:iron_ingot', output: 'rankine:cast_iron_ingot', time: 900},
            {input: '#forge:ores/copper', output: 'minecraft:copper_ingot', time: 200},
            {input: '#forge:ores/tin', output: 'rankine:tin_ingot', time: 150},
            {input: 'kubejs:pyrite', output: 'minecraft:iron_ingot', time: 400},
            {input: 'minecraft:raw_iron', output: 'minecraft:iron_ingot', time: 400},
            {input: 'rankine:pentlandite', output: 'immersiveengineering:ingot_nickel', time: 400},
			{input: 'kubejs:rusted_iron_ingot', output: 'minecraft:iron_ingot', time: 200},
            {input: 'rankine:galena', output: 'immersiveengineering:ingot_lead', time: 200},
            {input: 'kubejs:gold', output: 'minecraft:gold_ingot', time: 200},
            {input: 'kubejs:silver', output: 'immersiveengineering:ingot_silver', time: 200},
            {input: 'kubejs:halite', output: 'rankine:sodium_chloride', time: 200},
            {input: 'rankine:sphalerite', output: 'create:zinc_ingot', time: 200}
        ]
    event.remove({type: 'immersiveengineering:blast_furnace', output: 'immersiveengineering:ingot_steel'});
    event.remove({type: 'immersiveengineering:blast_furnace', output: 'immersiveengineering:storage_steel'});
    recipes.forEach((recipe) => {
        event.recipes.immersiveengineeringBlastFurnace(recipe.output, recipe.input, 'immersiveengineering:slag').time(recipe.time);
    });
});
