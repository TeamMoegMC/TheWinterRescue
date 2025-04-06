ServerEvents.recipes((event) => {
    let {create} = event.recipes
    let recipes = [
        // quartz
        {
            output: [
                Item.of("minecraft:sand", 2),
                Item.of("minecraft:quartz", 1).withChance(0.5),
                Item.of("immersiveengineering:dust_saltpeter", 1).withChance(0.5)
            ],
            input: "#forge:sandstone/colorless"
        },
        {
            output: [
                Item.of("minecraft:red_sand", 2),
                Item.of("minecraft:quartz", 1).withChance(0.5),
                Item.of("immersiveengineering:dust_saltpeter", 1).withChance(0.5)
            ],
            input: "#forge:sandstone/red"
        },
        // halite
        {
            output: [
                Item.of("frostedheart:sodium_chloride_dust", 2),
                Item.of("frostedheart:sodium_chloride_dust", 2).withChance(0.5)
            ],
            input: "frostedheart:crushed_raw_halite"
        },
        // tin
        {
            output: [
                Item.of("frostedheart:crushed_raw_tin"),
                Item.of("frostedheart:crushed_raw_tin").withChance(0.5),
                Item.of("create:experience_nugget").withChance(0.75)
            ],
            input: "frostedheart:raw_tin"
        },
        // pyrite
        {
            output: [
                Item.of("frostedheart:crushed_raw_pyrite"),
                Item.of("frostedheart:crushed_raw_pyrite").withChance(0.5),
                Item.of("immersiveengineering:dust_sulfur").withChance(0.25),
                Item.of("create:experience_nugget").withChance(0.75)
            ],
            input: "frostedheart:raw_pyrite"
        },
        // nickel
        {
            output: [
                Item.of("create:crushed_raw_nickel"),
                Item.of("create:crushed_raw_nickel").withChance(0.5),
                Item.of("create:experience_nugget").withChance(0.75)
            ],
            input: "immersiveengineering:raw_nickel"
        },
        // lead
        {
            output: [
                Item.of("create:crushed_raw_lead"),
                Item.of("create:crushed_raw_lead").withChance(0.5),
                Item.of("create:experience_nugget").withChance(0.75)
            ],
            input: "immersiveengineering:raw_lead"
        },
        // bauxite
        {
            output: [
                Item.of("frostedheart:crushed_raw_bauxite"),
                Item.of("frostedheart:crushed_raw_bauxite").withChance(0.5),
                Item.of("frostedheart:cryolite_dust").withChance(0.2)
            ],
            input: "frostedheart:bauxite"
        },
        {
            output: [
                Item.of("4x frostedheart:crushed_raw_bauxite"),
                Item.of("4x frostedheart:crushed_raw_bauxite").withChance(0.5),
                Item.of("4x frostedheart:cryolite_dust").withChance(0.2)
            ],
            input: "frostedheart:bauxite_block"
        },
        // kaolin
        {
            output: [
                Item.of("frostedheart:crushed_raw_kaolin"),
                Item.of("frostedheart:crushed_raw_kaolin").withChance(0.5)
            ],
            input: "frostedheart:kaolin"
        },
        // magnesite
        {
            output: [
                Item.of("frostedheart:crushed_raw_magnesite"),
                Item.of("frostedheart:crushed_raw_magnesite").withChance(0.5),
                Item.of("create:experience_nugget").withChance(0.75)
            ],
            input: "frostedheart:raw_magnesite"
        },
        // sylvite
        {
            output: [
                Item.of("frostedheart:crushed_raw_sylvite"),
                Item.of("frostedheart:crushed_raw_sylvite").withChance(0.5),
                Item.of("create:experience_nugget").withChance(0.75)
            ],
            input: "frostedheart:raw_sylvite"
        },
        // halite
        {
            output: [
                Item.of("frostedheart:crushed_raw_halite"),
                Item.of("frostedheart:crushed_raw_halite").withChance(0.5)
            ],
            input: "frostedheart:raw_halite"
        },
        // silver
        {
            output: [
                Item.of("create:crushed_raw_silver"),
                Item.of("create:crushed_raw_silver").withChance(0.5),
                Item.of("create:experience_nugget").withChance(0.75)
            ],
            input: "immersiveengineering:raw_silver"
        },
        // gold
        {
            output: [
                Item.of("create:crushed_raw_gold"),
                Item.of("create:crushed_raw_gold").withChance(0.5),
                Item.of("create:experience_nugget").withChance(0.75)
            ],
            input: "minecraft:raw_gold"
        },
        // iron
        {
            output: [
                Item.of("create:crushed_raw_iron"),
                Item.of("create:crushed_raw_iron").withChance(0.5),
                Item.of("create:experience_nugget").withChance(0.75)
            ],
            input: "minecraft:raw_iron"
        },
        // zinc
        {
            output: [
                Item.of("create:crushed_raw_zinc"),
                Item.of("create:crushed_raw_zinc").withChance(0.5),
                Item.of("create:experience_nugget").withChance(0.75)
            ],
            input: "create:raw_zinc"
        },
        // copper
        {
            output: [
                Item.of("create:crushed_raw_copper"),
                Item.of("create:crushed_raw_copper").withChance(0.5),
                Item.of("create:experience_nugget").withChance(0.75)
            ],
            input: "minecraft:raw_copper"
        }

    ]
    recipes.forEach((recipe, index) => {
        create.crushing(recipe.output, recipe.input)
            .id(`the_winter_rescue:create/crushing/${index}`)
    })
	event.remove({type: "create:crushing"})
	event.remove({id: "create:crushing/raw_nickel"})
	event.remove({id: "create:crushing/raw_lead"})
    event.remove({id: "create:crushing/raw_copper"})
    event.remove({id: "create:crushing/raw_gold"})
    event.remove({id: "create:crushing/raw_iron"})
    event.remove({id: "create:crushing/raw_zinc"})
})