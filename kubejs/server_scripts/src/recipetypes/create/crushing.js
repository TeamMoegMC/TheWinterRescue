ServerEvents.recipes((event) => {
	let { create } = event.recipes
	let recipes = [
		{
			output: ["2x minecraft:quartz", Item.of("4x minecraft:quartz").withChance(0.5)],
			input: "minecraft:sandstone"
		},
		{
			output: [Item.of("2x kubejs:flux"), Item.of("4x kubejs:flux").withChance(0.5)],
			input: "#the_winter_rescue:flux_block"
		},
		{
			output: [Item.of("frostedheart:crushed_raw_halite").withChance(0.25)],
			input: "frostedheart:raw_halite"
		},
		{
			output: [Item.of("2x frostedheart:sodium_chloride_dust"), Item.of("2x frostedheart:sodium_chloride_dust").withChance(0.5)],
			input: "frostedheart:crushed_raw_halite"
		},
		/*
		let ores = [
        "frostedheart:raw_pyrite",
        "frostedheart:raw_nickel",
        "frostedheart:raw_lead",
        "frostedheart:bauxite",
        "frostedheart:kaolin",
        "frostedheart:raw_magnesite",
		"frostedheart:raw_sylvite",
        "frostedheart:raw_halite",
        "frostedheart:raw_silver",
        "minecraft:raw_gold",
        "minecraft:raw_iron",
        "create:raw_zinc",
        "minecraft:raw_copper"
    ]
    let ore_name = [
        "pyrite",
        "nickel",
        "lead",
        "bauxite",
        "kaolin",
        "magnesite",
        "sylvite",
        "halite",
        "silver",
        "gold",
        "iron",
        "zinc",
        "copper"
    ]
		*/
		// pyrite
		{
			output: [Item.of("frostedheart:crushed_raw_pyrite"), Item.of("frostedheart:crushed_raw_pyrite").withChance(0.25), Item.of("immersiveengineering:sulfur_dust").withChance(0.2), Item.of("create:experience_nugget").withChance(0.75)],
			input: "frostedheart:raw_pyrite"
		},
		// nickel
		{
			output: [Item.of("frostedheart:crushed_raw_nickel"), Item.of("frostedheart:crushed_raw_nickel").withChance(0.25), Item.of("create:experience_nugget").withChance(0.75)],
			input: "frostedheart:raw_nickel"
		},
		// lead
		{
			output: [Item.of("frostedheart:crushed_raw_lead"), Item.of("frostedheart:crushed_raw_lead").withChance(0.25), Item.of("create:experience_nugget").withChance(0.75)],
			input: "frostedheart:raw_lead"
		},
		// bauxite
		{
			output: [Item.of("frostedheart:crushed_raw_bauxite"), Item.of("frostedheart:crushed_raw_bauxite").withChance(0.25), Item.of("frostedheart:cryolite_dust").withChance(0.2)],
			input: "frostedheart:bauxite"
		},
		// kaolin
		{
			output: [Item.of("frostedheart:crushed_raw_kaolin"), Item.of("frostedheart:crushed_raw_kaolin").withChance(0.25)],
			input: "frostedheart:kaolin"
		},
		// magnesite
		{
			output: [Item.of("frostedheart:crushed_raw_magnesite"), Item.of("frostedheart:crushed_raw_magnesite").withChance(0.25), Item.of("create:experience_nugget").withChance(0.75)],
			input: "frostedheart:raw_magnesite"
		},
		// sylvite
		{
			output: [Item.of("frostedheart:crushed_raw_sylvite"), Item.of("frostedheart:crushed_raw_sylvite").withChance(0.25), Item.of("create:experience_nugget").withChance(0.75)],
			input: "frostedheart:raw_sylvite"
		},
		// halite
		{
			output: [Item.of("frostedheart:crushed_raw_halite"), Item.of("frostedheart:crushed_raw_halite").withChance(0.25)],
			input: "frostedheart:raw_halite"
		},
		// silver
		{
			output: [Item.of("frostedheart:crushed_raw_silver"), Item.of("frostedheart:crushed_raw_silver").withChance(0.25), Item.of("create:experience_nugget").withChance(0.75)],
			input: "frostedheart:raw_silver"
		},
		// gold
		{
			output: [Item.of("create:crushed_raw_gold"), Item.of("create:crushed_raw_gold").withChance(0.25), Item.of("create:experience_nugget").withChance(0.75)],
			input: "minecraft:raw_gold"
		},
		// iron
		{
			output: [Item.of("create:crushed_raw_iron"), Item.of("create:crushed_raw_iron").withChance(0.25), Item.of("create:experience_nugget").withChance(0.75)],
			input: "minecraft:raw_iron"
		},
		// zinc
		{
			output: [Item.of("create:crushed_raw_zinc"), Item.of("create:crushed_raw_zinc").withChance(0.25), Item.of("create:experience_nugget").withChance(0.75)],
			input: "create:raw_zinc"
		},
		// copper
		{
			output: [Item.of("create:crushed_raw_copper"), Item.of("create:crushed_raw_copper").withChance(0.25), Item.of("create:experience_nugget").withChance(0.75)],
			input: "minecraft:raw_copper"
		}
		

	]
	recipes.forEach((recipe) => {
		create.crushing(recipe.output, recipe.input)
	})

	event.remove({ id: 'create:crushing/raw_copper' })
	event.remove({ id: 'create:crushing/raw_gold' })
	event.remove({ id: 'create:crushing/raw_iron' })
	event.remove({ id: 'create:crushing/raw_zinc' })
})