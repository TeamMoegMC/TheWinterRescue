onEvent('recipes', (event) => {
    function carkiln(input,output){
        event.custom({
            "type": "immersiveindustry:car_kiln",
            "input": Item.of(input).toJson(),
            "result": Item.of(output).toJson(),
            "time": 200
        })
	}
	function rotkiln(input,output){
        event.custom({
            "type": "immersiveindustry:rotary_kiln",
            "input": Item.of(input).toJson(),
            "result": Item.of(output).toJson(),
            "time": 200
        })
	}
	function rotkilnte(input,output,time,enery){
        event.custom({
            "type": "immersiveindustry:rotary_kiln",
            "input": Item.of(input).toJson(),
            "result": Item.of(output).toJson(),
            "time": time,
			"tickEnergy":energy
        })
	}
	function carkilnr(input,output){
		carkiln(input,output);
		event.remove({type: 'minecraft:blasting', output: output});
		event.remove({type: 'minecraft:smelting', output: output});
	}
	carkilnr("kubejs:clay_bucket","frostedheart:ceramic_bucket");
	carkilnr("charcoal_pit:clay_pot","charcoal_pit:ceramic_pot");
	carkilnr("charcoal_pit:unfired_sandy_brick","charcoal_pit:sandy_brick_item");
	carkilnr("minecraft:netherrack","minecraft:nether_brick");
	carkilnr("#forge:stone","minecraft:stone");
	carkilnr("thermopolium:clay_cistern","thermopolium:stew_pot");
	carkilnr("minecraft:clay","minecraft:terracotta");
	carkilnr("#minecraft:sand","minecraft:glass");
	rotkiln("kubejs:aluminium_hydroxide_dust",'kubejs:aluminium_oxide_dust');
	rotkiln('kubejs:washed_ore_magnesite','rankine:magnesia');
	rotkiln('kubejs:flux','rankine:quicklime');
	[{input: '#kubejs:coal_dust',output: 'minecraft:black_dye'},
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
	].forEach((ex)=>{carkiln(ex.input,ex.output);});
});