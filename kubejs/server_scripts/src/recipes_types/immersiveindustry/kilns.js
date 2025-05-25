ServerEvents.recipes((event) => {
    function simpleCarkilnRecipe(input, output) {
        return carkilnRecipe([input], [output], 600, 64)
    }

    function carkilnReplace(input, output) {
        event.remove({type: "minecraft:blasting", output: output});
        event.remove({type: "minecraft:smelting", output: output});
        return simpleCarkilnRecipe(input, output);
    }

    let kilnRecipes = [
		carkilnRecipe(["4x frostedheart:kaolin_dust", "4x frostedheart:bauxite_dust", "minecraft:clay_ball"], ["3x frostedheart:refractory_brick"], 600, 32),
        carkilnRecipe(["4x frostedheart:fire_clay_ball", "2x frostedheart:magnesia_dust", "2x frostedheart:quicklime"], ["4x frostedheart:high_refractory_brick"], 600, 32),
        carkilnRecipe(["3x frostedheart:fire_clay_ball", "5x frostedheart:alumina_dust", "immersiveengineering:dust_hop_graphite"], ["6x immersiveindustry:refractory_kiln_brick"], 600, 32),
        rotarykilnRecipe("frostedheart:aluminium_hydroxide_dust", "frostedheart:alumina_dust", 600, 32),
        rotarykilnRecipe("frostedheart:crushed_raw_magnesite", "frostedheart:magnesia_dust", 600, 32),
        rotarykilnRecipe("frostedheart:flux", "frostedheart:quicklime", 600, 32),
		carkilnReplace("kubejs:clay_bucket", "frostedheart:ceramic_bucket"),
        carkilnReplace("charcoal_pit:unfired_brick", "minecraft:brick"),
		carkilnReplace("charcoal_pit:clay_pot", "charcoal_pit:ceramic_pot"),
        carkilnReplace("charcoal_pit:unfired_sandy_brick", "charcoal_pit:sandy_brick_item"),
        carkilnReplace("minecraft:netherrack", "minecraft:nether_brick"),
        carkilnReplace("#forge:cobblestone", "minecraft:stone"),
        carkilnReplace("caupona:clay_cistern", "caupona:stew_pot"),
        carkilnReplace("minecraft:clay", "minecraft:terracotta"),
        carkilnReplace("#minecraft:sand", "minecraft:glass")
    ]
	
    let simpleCarkiln = [
        {input: "#kubejs:coal_dust", output: "minecraft:black_dye"},
        {input: "kubejs:charcoal_dust", output: "minecraft:black_dye"},
        {output: "kubejs:coal_briquette", input: "kubejs:wet_coal_briquette"},
        {output: "kubejs:coal_briquette", input: "kubejs:creosoted_coal_briquette"},
        {output: "kubejs:charcoal_briquette", input: "kubejs:creosoted_charcoal_briquette"},
        {output: "kubejs:coal_briquette", input: "kubejs:bound_coal_briquette"},
        {output: "kubejs:charcoal_briquette", input: "kubejs:bound_charcoal_briquette"},
        {output: "kubejs:sawdust_briquette", input: "kubejs:creosoted_sawdust_briquette"},
        {output: "kubejs:straw_briquette", input: "kubejs:wet_straw_briquette"},
        {output: "#forge:ingots/tin", input: "frostedheart:gray_tin_ingot"},
    ]
    kilnRecipes.forEach((ex) => {
        event.custom(ex)
    })
	event.remove({"id":"immersiveindustry:kiln/brick"})
	event.custom({
        "type": "immersiveindustry:car_kiln",
        "input_fluid": FluidTag("forge:pulp",100),
        "results": [IEIngredient("minecraft:paper")],
        "time": 200,
        "tickEnergy": 32
    })
    simpleCarkiln.forEach((ex) => {
        event.custom(simpleCarkilnRecipe(ex.input, ex.output))
    })
})