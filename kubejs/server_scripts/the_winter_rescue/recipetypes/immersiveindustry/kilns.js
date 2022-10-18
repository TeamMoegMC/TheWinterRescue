onEvent('recipes', (event) => {
    function simpleCarkilnRecipe(input,output){
        return carkilnRecipe([input],output,600)
	}

	function carkilnReplace(input,output){
		
		event.remove({type: 'minecraft:blasting', output: output});
		event.remove({type: 'minecraft:smelting', output: output});
		return simpleCarkilnRecipe(input,output);
	}
	let kilnRecipes=[
	carkilnRecipe(["4x rankine:fire_clay_ball","2x rankine:magnesia","2x rankine:quicklime"],"2x rankine:high_refractory_brick",600),
	carkilnRecipe(["3x rankine:fire_clay_ball","5x kubejs:aluminium_oxide_dust","immersiveengineering:dust_hop_graphite"],"3x immersiveindustry:refractory_kiln_brick",600),
	rotarykilnRecipe("kubejs:aluminium_hydroxide_dust",'kubejs:aluminium_oxide_dust'),
	rotarykilnRecipe('kubejs:washed_ore_magnesite','rankine:magnesia'),
	rotarykilnRecipe('kubejs:flux','2x rankine:quicklime'),
	carkilnReplace("kubejs:clay_bucket","frostedheart:ceramic_bucket"),
	carkilnReplace("charcoal_pit:clay_pot","charcoal_pit:ceramic_pot"),
	carkilnReplace("charcoal_pit:unfired_sandy_brick","charcoal_pit:sandy_brick_item"),
	carkilnReplace("minecraft:netherrack","minecraft:nether_brick"),
	carkilnReplace("#forge:stone","minecraft:stone"),
	carkilnReplace("thermopolium:clay_cistern","thermopolium:stew_pot"),
	carkilnReplace("minecraft:clay","minecraft:terracotta"),
	carkilnReplace("#minecraft:sand","minecraft:glass"),
	carkilnReplace("rankine:fire_clay_ball","rankine:refractory_brick")
	]
	let simpleCarkiln=[{input: '#kubejs:coal_dust',output: 'minecraft:black_dye'},
     {input: 'kubejs:charcoal_dust',output: 'minecraft:black_dye'},
	 {output:'kubejs:coal_briquette', input:'kubejs:wet_coal_briquette'},
	 {output:'kubejs:coal_briquette', input:'kubejs:creosoted_coal_briquette'},
	 {output:'kubejs:charcoal_briquette', input:'kubejs:creosoted_charcoal_briquette'},
     {output:'kubejs:coal_briquette', input:'kubejs:bound_coal_briquette'},
	 {output:'kubejs:charcoal_briquette', input:'kubejs:bound_charcoal_briquette'},
	 {output:'kubejs:sawdust_briquette', input:'kubejs:creosoted_sawdust_briquette'},
	 {output:'kubejs:straw_briquette', input:'kubejs:wet_straw_briquette'},
	{output:'#forge:ingots/tin',input: 'kubejs:gray_tin_ingot'},
	{output: 'rankine:mercury', input: 'rankine:cinnabar'},
	{output: 'rankine:mercury', input: 'kubejs:washed_ore_cinnabar'}
	]
	
	
	
	
	kilnRecipes.forEach((ex)=>{event.custom(ex);});
	simpleCarkiln.forEach((ex)=>{event.custom(simpleCarkilnRecipe(ex.input,ex.output));});
});