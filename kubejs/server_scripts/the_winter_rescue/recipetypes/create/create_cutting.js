onEvent('recipes', (event) => {
    var data = {
        recipes: [
        {output:'4x rankine:cinnamon_planks', input: 'rankine:cinnamon_log'},
        {output:'4x rankine:cedar_planks', input: 'rankine:cedar_log'},
        {output:'4x rankine:sharinga_planks', input: 'rankine:sharinga_log'},
        {output:'4x rankine:black_walnut_planks', input: 'rankine:black_walnut_log'},
        {output:'4x rankine:cork_oak_planks', input: 'rankine:cork_oak_log'},
        {output:'4x rankine:coconut_palm_planks', input: 'rankine:coconut_palm_log'},
        {output:'4x rankine:pinyon_pine_planks', input: 'rankine:pinyon_pine_log'},
        {output:'4x rankine:juniper_planks', input: 'rankine:juniper_log'},
        {output:'4x rankine:balsam_fir_planks', input: 'rankine:balsam_fir_log'},
        {output:'4x rankine:magnolia_planks', input: 'rankine:magnolia_log'},
        {output:'4x rankine:eastern_hemlock_planks', input: 'rankine:eastern_hemlock_log'},
        {output:'4x rankine:maple_planks', input: 'rankine:maple_log'},
		{output:'9x minecraft:iron_ingot',input:'minecraft:iron_block'},
		{output:'9x minecraft:gold_ingot',input:'minecraft:gold_block'},
		{output:'9x minecraft:diamond',input:'minecraft:diamond_block'},
		{output:'9x minecraft:emerald',input:'minecraft:emerald_block'},
		{output:'9x minecraft:lapis_lazuli',input:'minecraft:lapis_block'},
		{output:'9x minecraft:netherite_ingot',input:'minecraft:netherite_ingot'}
        ]
    };
	let woods=[
		"minecraft:jungle",
		"minecraft:oak",
		"minecraft:spruce",
		"minecraft:birch",
		"minecraft:jungle",
		"minecraft:acacia",
		"minecraft:dark_oak"
	]
	woods.forEach((wood)=>{
		data.recipes.push({output:'2x '+wood+"_slab",input:wood+"_planks"})
	});
    data.recipes.forEach((recipe) => {
        event.recipes.createCutting(recipe.output, recipe.input);
    });
});
