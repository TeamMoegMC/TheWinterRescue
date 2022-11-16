onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'kubejs:aluminium_hydroxide_dust',
            output: 'kubejs:aluminium_oxide_dust'
        },
        {
            input: '#kubejs:coal_dust',
            output: 'minecraft:black_dye'
        },
        {
            input: 'kubejs:charcoal_dust',
            output: 'minecraft:black_dye'
        },
		{output:'kubejs:coal_briquette', input:'kubejs:wet_coal_briquette'},
	 {output:'kubejs:coal_briquette', input:'kubejs:creosoted_coal_briquette'},
	 {output:'kubejs:charcoal_briquette', input:'kubejs:creosoted_charcoal_briquette'},
     {output:'kubejs:coal_briquette', input:'kubejs:bound_coal_briquette'},
	 {output:'kubejs:charcoal_briquette', input:'kubejs:bound_charcoal_briquette'},
	 {output:'kubejs:sawdust_briquette', input:'kubejs:creosoted_sawdust_briquette'},
	 {output:'kubejs:straw_briquette', input:'kubejs:wet_straw_briquette'},
	{output:'#forge:ingots/tin',input: 'kubejs:gray_tin_ingot'},
	{output: 'rankine:mercury', input: 'rankine:cinnabar'},
	{output: 'rankine:mercury', input: 'kubejs:washed_ore_cinnabar'},
		{output: '4x minecraft:red_dye',input:'kubejs:lead_oxide'}
    ];

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input);
    });
});
