ServerEvents.recipes((event) => {
		let recipes = [
        {
            output: ["3x frostedheart:fire_clay_ball"],
            input: ["4x frostedheart:kaolin_dust", "4x frostedheart:bauxite_dust", "minecraft:clay_ball"]
        },
		{
            output_fluid: [Fluid.of("immersiveengineering:acetaldehyde", 1000)],
            input: [IEIngredientWithSize("frostedheart:silver_dust",0)],
			input_fluid: [FluidTag("forge:ethanol", 1000)]
        },
		{
            output: ["4x kubejs:limed_coal"],
            input: ["4x kubejs:coal_dust"],
			input_fluid: [FluidTag("forge:lime_water", 200)]
        },
		{
            output_fluid: [Fluid.of("frostedheart:lime_water", 2000)],
            input: ["2x frostedheart:quicklime"],
			input_fluid: [FluidTag("minecraft:water", 2000)]
        },
		{
            output: ["frostedheart:sodium_sulfide_dust"],
            input: ["frostedheart:sodium_ingot", "#forge:dusts/sulfur"]
        },
		{
            output_fluid: [Fluid.of("frostedheart:pulp", 1000)],
            input: ["15x #forge:dusts/wood", "frostedheart:sodium_hydroxide_dust","frostedheart:sodium_sulfide_dust"],
			input_fluid: [FluidTag("minecraft:water", 1000)]
        },
		{
            output: ["4x kubejs:wet_coal_dust"],
            input: ["4x kubejs:limed_coal"],
			input_fluid: [FluidTag("minecraft:water", 200)]
        },
        {
            output_fluid: [Fluid.of("frostedheart:cryolite", 500)],
            input: ["#forge:dusts/aluminium_hydroxide","2x #forge:dusts/cryolite"],
			input_fluid: [FluidTag("forge:sulfuric_acid", 500)]
        },
		{
            output_fluid: [Fluid.of("caupona:nail_soup", 2000)],
            input: ["kubejs:activated_carbon"],
			input_fluid: [FluidTag("minecraft:water", 2000)],
			time:400
        },
		{
            output_fluid: [Fluid.of("frostedheart:cryolite", 500)],
            input: ["#forge:dusts/aluminium_hydroxide"],
			input_fluid: [FluidTag("forge:fluorine", 1250)]
        },
		{
            output_fluid: [Fluid.of("immersiveengineering:phenolic_resin", 1000)],
			input_fluid: [FluidTag("forge:creosote", 1000),FluidTag("forge:acetaldehyde", 1000)]
        },
		{
            output_fluid: [Fluid.of("frostedheart:hydrochloric_acid", 1000)],
            input: ["2x #forge:dusts/sodium_chloride"],
			input_fluid: [FluidTag("the_winter_rescue:fluidsulfuricacid", 1000)]
        },
		{
            output: ["18x frostedheart:vulcanized_rubber"],
			input_fluid: [FluidTag("forge:latex", 2000)],
			time:20
        },
        {
            output_fluid: [Fluid.of("frostedheart:latex",1000)],
            input: ["immersiveengineering:dust_sulfur"],
			input_fluid: [FluidTag("forge:resin", 1000)]
        },
        {
            output_fluid: [Fluid.of("minecraft:water",200),Fluid.of("frostedheart:latex",1300)],
            input_fluid: [FluidTag("forge:ethanol", 1000), FluidTag("forge:gas/chlorine", 500)],
			input: [IEIngredientWithSize("frostedheart:copper_oxide_dust",0)]
        },
		{
            output_fluid: [Fluid.of("frostedheart:latex",1000)],
            input_fluid: [FluidTag("forge:sulfur_dioxide", 300), FluidTag("forge:resin", 1000)]
        },
        {
            output_fluid: [Fluid.of("frostedheart:ferrous_chloride", 1500)],
			input: ["4x create:crushed_raw_iron"],
            input_fluid: [FluidTag("forge:hydrochloric_acid", 2850)]
        },
        {
            output: [ "4x immersiveengineering:slag"],
            input: [ "4x frostedheart:iron_slag"],
			output_fluid:[Fluid.of("frostedheart:ferrous_chloride", 1000)],//=>450Cl2
			input_fluid:[FluidTag("forge:hydrochloric_acid", 1900)],//<=475Cl2
        },
        {
			input: ["4x #forge:dusts/iron"],
            output_fluid: [Fluid.of("frostedheart:ferric_chloride", 2000)],
            input_fluid: [FluidTag("forge:ferrous_chloride", 1900)]//<=500Cl2
        },
        {
			input: ["4x #twr:rusted_iron"],
            output_fluid: [Fluid.of("frostedheart:ferrous_chloride", 1000)],
            input_fluid: [FluidTag("forge:hydrochloric_acid", 1900)]
        },
            {
                input: ["4x #twr:rusted_copper"],
                output_fluid: [Fluid.of("frostedheart:copper_chloride", 1500)],
                input_fluid: [FluidTag("forge:hydrochloric_acid", 2850)]
            },
        {
			input: ["4x frostedheart:copper_oxide_dust"],
            output_fluid: [Fluid.of("frostedheart:copper_chloride", 1500)],
            input_fluid: [FluidTag("forge:hydrochloric_acid", 2850)]
        },
        {
			input: ["4x frostedheart:zinc_oxide_dust"],
            output_fluid: [Fluid.of("frostedheart:zinc_sulfate", 1500)],
            input_fluid: [FluidTag("forge:sulfuric_acid", 2850)]
        },
        {
			input: [ "4x create:crushed_raw_copper"],
            output_fluid: [Fluid.of("frostedheart:copper_chloride", 1200)],
            input_fluid: [FluidTag("forge:hydrochloric_acid", 2280)]
        },
        {
            output_fluid: [Fluid.of("frostedheart:sulfuric_acid", 1000)],
			input_fluid: [FluidTag("minecraft:water", 1000)],
            input: ["#forge:dusts/sulfur"]
        },
        {
            output_fluid: [Fluid.of("frostedheart:sulfuric_acid", 1000)],
            input_fluid: [FluidTag("forge:sulfur_dioxide", 500), FluidTag("minecraft:water", 1000)]
        },
        {
            output: ["frostedheart:aluminium_hydroxide_dust"],
            input: ["frostedheart:sodium_hydroxide_dust", "2x frostedheart:crushed_raw_bauxite"]
        },
        {
            output_fluid: [Fluid.of("frostedheart:magnesium_chloride", 500)],
			input_fluid:[FluidTag("forge:hydrochloric_acid", 1000)],
            input: ["frostedheart:magnesia_dust"]
        },
        {
            output_fluid: [Fluid.of("frostedheart:hydrochloric_acid", 2000)],
            input_fluid: [FluidTag("minecraft:water", 2000), FluidTag("forge:chlorine", 1000)]
        },
        {
            output: ["2x create:rose_quartz"],
            input_fluid: [FluidTag("minecraft:water", 1000)],
            input: ["minecraft:quartz", "8x minecraft:redstone"]
        }
    ]
	recipes.forEach((recipe) => {
		if(!recipe.time)
			recipe.time=100
        event.custom(chemical(recipe.input,recipe.input_fluid,recipe.output,recipe.output_fluid,recipe.time));
    })
	
	
})
