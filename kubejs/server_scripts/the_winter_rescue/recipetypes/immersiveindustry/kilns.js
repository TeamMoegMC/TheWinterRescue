onEvent('recipes', (event) => {
    function simpleCarkilnRecipe(input,output){
        return carkilnRecipe([input],[output],600)
	}

	function carkilnReplace(input,output){
		
		event.remove({type: 'minecraft:blasting', output: output});
		event.remove({type: 'minecraft:smelting', output: output});
		return simpleCarkilnRecipe(input,output);
	}
	let kilnRecipes=[
	carkilnRecipe(["4x frostedheart:fire_clay_ball","2x frostedheart:magnesia_dust","2x frostedheart:quicklime"],["2x frostedheart:high_refractory_brick"],600),
	carkilnRecipe(["3x frostedheart:fire_clay_ball","5x kubejs:aluminium_oxide_dust","immersiveengineering:dust_hop_graphite"],["3x immersiveindustry:refractory_kiln_brick"],600),
	rotarykilnRecipe("kubejs:aluminium_hydroxide_dust",'kubejs:aluminium_oxide_dust'),
	rotarykilnRecipe('kubejs:washed_ore_magnesite','frostedheart:magnesia_dust'),
	rotarykilnRecipe2('kubejs:flux','2x frostedheart:quicklime',200,32,'frostedheart:quicklime',0.25),
	carkilnReplace("kubejs:clay_bucket","frostedheart:ceramic_bucket"),
	carkilnReplace("charcoal_pit:clay_pot","charcoal_pit:ceramic_pot"),
	carkilnReplace("charcoal_pit:unfired_sandy_brick","charcoal_pit:sandy_brick_item"),
	carkilnReplace("minecraft:netherrack","minecraft:nether_brick"),
	carkilnReplace("#forge:stone","minecraft:stone"),
	carkilnReplace("caupona:clay_cistern","caupona:stew_pot"),
	carkilnReplace("minecraft:clay","minecraft:terracotta"),
	carkilnReplace("#minecraft:sand","minecraft:glass"),
	carkilnReplace("frostedheart:fire_clay_ball","frostedheart:refractory_brick")
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
	]

	
	
	
	
	kilnRecipes.forEach((ex)=>{event.custom(ex);});
	simpleCarkiln.forEach((ex)=>{event.custom(simpleCarkilnRecipe(ex.input,ex.output));});
});