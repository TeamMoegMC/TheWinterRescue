onEvent('recipes', (event) => {
    let recipes = [
            {input: 'immersiveengineering:dust_aluminum', output: 'immersiveengineering:ingot_aluminum', time: 800},
            {input: 'minecraft:iron_ingot', output: 'rankine:cast_iron_alloy', time: 1000},
            {input: 'rankine:malachite', output: 'immersiveengineering:ingot_copper', time: 800},
            {input: 'kubejs:native_copper', output: 'immersiveengineering:ingot_copper', time: 800},
            {input: 'kubejs:native_tin', output: 'rankine:tin_ingot', time: 800},
            {input: 'rankine:cassiterite', output: 'rankine:tin_ingot', time: 800},
            {input: 'rankine:magnetite', output: 'minecraft:iron_ingot', time: 800},
            {input: 'kubejs:pyrite', output: 'minecraft:iron_ingot', time: 800},
            {input: 'rankine:pentlandite', output: 'immersiveengineering:ingot_nickel', time: 800},
            {input: 'rankine:galena', output: 'immersiveengineering:ingot_lead', time: 800},
            {input: 'rankine:stibnite', output: 'rankine:antimony_ingot', time: 800},
            {input: 'kubejs:gold', output: 'minecraft:gold_ingot', time: 800},
            {input: 'kubejs:silver', output: 'rankine:silver_ingot', time: 800},
            {input: 'kubejs:halite', output: 'rankine:salt', time: 800},
            {input: 'rankine:vanadinite', output: 'rankine:vanadium_ingot', time: 800},
            {input: 'rankine:sphalerite', output: 'rankine:zinc_ingot', time: 800}
        ]
    event.remove({type: 'immersiveengineering:blast_furnace', output: 'immersiveengineering:ingot_steel'});
    event.remove({type: 'immersiveengineering:blast_furnace', output: 'immersiveengineering:storage_steel'});
    recipes.forEach((recipe) => {
        event.recipes.immersiveengineeringBlastFurnace(recipe.output, recipe.input, 'immersiveengineering:slag').time(recipe.time);
    });
});
