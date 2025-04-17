ServerEvents.recipes((event) => {
		let recipes = [
        {
            output: ["3x frostedheart:fire_clay_ball"],
            input: ["4x frostedheart:kaolin_dust", "4x frostedheart:bauxite_dust", "minecraft:clay_ball"]
        },
        {
            output_fluid: [Fluid.of("frostedheart:cryolite", 500)],
            input: ["2x frostedheart:cryolite_dust", "frostedheart:aluminium_hydroxide_dust"],
			input_fluid: [FluidTag("forge:sulfuric_acid", 500)]
        },
        {
            output: ["9x frostedheart:vulcanized_rubber"],
            input: ["immersiveengineering:dust_sulfur"],
			input_fluid: [FluidTag("forge:latex", 1000)]
        },
		{
            output: ["9x frostedheart:vulcanized_rubber"],
            input: ["immersiveengineering:dust_sulfur"],
			input_fluid: [FluidTag("forge:latex", 1000)]
        },
        {
            output_fluid: [Fluid.of("frostedheart:latex",500),Fluid.of("minecraft:water",100)],
            input_fluid: [FluidTag("forge:ethanol", 500), FluidTag("forge:gas/chlorine", 250)],
			input: [IEIngredientWithSize("frostedheart:copper_oxide_dust",0)]
        },
		{
            output: ["9x frostedheart:vulcanized_rubber"],
            input_fluid: [FluidTag("forge:sulfur_dioxide", 300), FluidTag("forge:latex", 1000)]
        },
        {
            output_fluid: [Fluid.of("frostedheart:ferrous_chloride", 375)],
			input: ["create:crushed_raw_iron"],
            input_fluid: [FluidTag("forge:hydrochloric_acid", 750)]
        },
        {
            output: [ "immersiveengineering:slag"],
            input: [ "frostedheart:iron_slag"],
			output_fluid:[Fluid.of("frostedheart:ferrous_chloride", 250)],
			input_fluid:[FluidTag("forge:hydrochloric_acid", 500)],
        },
        {
			input: ["create:crushed_raw_iron", "#forge:dusts/iron"],
            output_fluid: [Fluid.of("frostedheart:ferric_chloride", 500)],
            input_fluid: [FluidTag("forge:ferrous_chloride", 500)]
        },
        {
			input: ["frostedheart:rusted_iron_ingot"],
            output_fluid: [Fluid.of("frostedheart:ferrous_chloride", 250)],
            input_fluid: [FluidTag("forge:hydrochloric_acid", 500)]
        },
        {
			input: ["frostedheart:copper_oxide_dust"],
            output_fluid: [Fluid.of("frostedheart:copper_chloride", 375)],
            input_fluid: [FluidTag("forge:hydrochloric_acid", 750)]
        },
        {
			input: ["frostedheart:zinc_oxide_dust"],
            output_fluid: [Fluid.of("frostedheart:zinc_sulfate", 375)],
            input_fluid: [FluidTag("forge:sulfuric_acid", 750)]
        },
        {
			input: [ "create:crushed_raw_copper"],
            output_fluid: [Fluid.of("frostedheart:copper_chloride", 300)],
            input_fluid: [FluidTag("forge:hydrochloric_acid", 600)]
        }
    ]
    let heated = [
        {
            output_fluid: [Fluid.of("frostedheart:sulfuric_acid", 1000)],
			input_fluid: [FluidTag("minecraft:water", 1000)],
            input: ["#forge:dusts/sulfur"]
        },
        {
            output_fluid: [Fluid.of("frostedheart:sulfuric_acid", 500)],
            input_fluid: [FluidTag("forge:sulfur_dioxide", 250), FluidTag("minecraft:water", 500)]
        },
        {
            output: ["frostedheart:aluminium_hydroxide_dust"],
            input: ["frostedheart:sodium_hydroxide_dust", "2x frostedheart:crushed_raw_bauxite"]
        },
        {
            output_fluid: [Fluid.of("frostedheart:magnesium_chloride", 250)],
			input_fluid:[FluidTag("forge:hydrochloric_acid", 500)],
            input: ["frostedheart:magnesia_dust"]
        },
        {
            output_fluid: [Fluid.of("frostedheart:hydrochloric_acid", 1000)],
            input_fluid: [FluidTag("minecraft:water", 1000), FluidTag("forge:chlorine", 500)]
        }
    ]
	recipes.forEach((recipe) => {
		if(!recipe.time)
			recipe.time=100
        event.custom(chemical(recipe.input,recipe.input_fluid,recipe.output,recipe.output_fluid,recipe.time));
    })
	heated.forEach((recipe) => {
        if(!recipe.time)
			recipe.time=100
        event.custom(chemical(recipe.input,recipe.input_fluid,recipe.output,recipe.output_fluid,recipe.time));
    })
	
	
})
