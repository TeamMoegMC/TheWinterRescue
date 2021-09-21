onEvent('recipes', (event) => {
    var data = {
        recipes: [
			{input: 'immersiveengineering:dust_aluminum',output: 'immersiveengineering:ingot_aluminum',time:400},
			{input: 'minecraft:iron_ingot',output: 'rankine:cast_iron_alloy',time:600},
			{input: 'rankine:malachite',output: 'immersiveengineering:ingot_copper',time:400},
			{input: 'kubejs:native_copper',output: 'immersiveengineering:ingot_copper',time:400},
			{input: 'kubejs:native_tin',output: 'rankine:tin_ingot',time:400},
			{input: 'rankine:cassiterite',output: 'rankine:tin_ingot',time:400},
			{input: 'rankine:magnetite',output: 'minecraft:iron_ingot',time:400},
			{input: 'kubejs:pyrite',output: 'minecraft:iron_ingot',time:400},
			{input: 'rankine:pentlandite',output: 'immersiveengineering:ingot_nickel',time:400},
			{input: 'rankine:galena',output: 'immersiveengineering:ingot_lead',time:400},
			{input: 'rankine:stibnite',output: 'rankine:antimony_ingot',time:400},
			{input: 'kubejs:gold',output: 'minecraft:gold_ingot',time:400},
			{input: 'kubejs:silver',output: 'rankine:silver_ingot',time:400},
			{input: 'kubejs:halite',output: 'rankine:salt',time:400},
			{input: 'rankine:vanadinite',output: 'rankine:vanadium_ingot',time:400},
			{input: 'rankine:sphalerite',output: 'rankine:zinc_ingot',time:400}
        ]
    };
	event.remove({ type: 'immersiveengineering:blast_furnace', output:'immersiveengineering:ingot_steel'});
	event.remove({ type: 'immersiveengineering:blast_furnace', output:'immersiveengineering:storage_steel'});
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineeringBlastFurnace(recipe.output, recipe.input,'immersiveengineering:slag', recipe.time);
        // if (recipe.id) {
        //     re.id(recipe.id},
        // }
    });
});
