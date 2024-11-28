ServerEvents.recipes((event) => {
    let { create } = event.recipes
    let recipes = [
        {
            output: ["minecraft:quartz", Item.of("minecraft:quartz").withChance(0.5)],
            input: "#forge:stones/quartzite"
        },
        {
            output: ["2x minecraft:stick", Item.of("8x frostedheart:sawdust").withChance(0.5), Item.of("frostedheart:biomass").withChance(0.2)],
            input: "#minecraft:logs"
        },
        {
            output: ["2x frostedheart:bauxite_dust", Item.of("2x frostedheart:bauxite_dust").withChance(0.5)],
            input: "frostedheart:crushed_bauxite_ore"
        },
        {
            output: ["frostedheart:kaolin_dust", Item.of("frostedheart:kaolin_dust").withChance(0.5)],
            input: "frostedheart:kaolin"
        },
        {
            output: ["frostedheart:cryolite_dust", Item.of("frostedheart:cryolite_dust").withChance(0.5)],
            input: "frostedheart:crushed_raw_fluorite"
        },
        {
            output: ["immersiveengineering:dust_sulfur", Item.of("immersiveengineering:dust_sulfur").withChance(0.5)],
            input: "frostedheart:sulfur_dust"
        },
        {
            output: [Item.of("minecraft:quartz").withChance(0.4), Item.of("minecraft:quartz").withChance(0.3)],
            input: "minecraft:smooth_sandstone"
        },
        {
            output: ["kubejs:coal_dust", Item.of("kubejs:coal_dust").withChance(0.5)],
            input: "minecraft:coal"
        },
        {
            output: ["kubejs:charcoal_dust", Item.of("kubejs:charcoal_dust").withChance(0.25)],
            input: "minecraft:charcoal"
        },
        {
            output: ["#forge:dusts/coal_coke"],
            input: "#forge:coal_coke"
        },
        {
            output: ["#forge:dusts/hop_graphite"],
            input: "#forge:ingots/hop_graphite"
        },
        {
            output: [Item.of("frostedheart:sawdust").withChance(0.8)],
            input: "#minecraft:planks"
        },
        {
            output: [Item.of("frostedheart:sawdust").withChance(0.4)],
            input: "minecraft:stick"
        },
        {
            output: ["frostedheart:rye_flour", Item.of("charcoal_pit:straw"), Item.of("2x frostedheart:rye_flour").withChance(0.25), Item.of("frostedheart:rye_block").withChance(0.1)],
            input: "frostedheart:rye"
        },
        {
            output: ["create:wheat_flour", Item.of("2x create:wheat_flour").withChance(0.25), Item.of("minecraft:wheat_seeds").withChance(0.25)],
            input: "minecraft:wheat"
        },
        {
            output: [Item.of("immersiveengineering:dust_iron")],
            input: "minecraft:iron_ingot"
        },
        {
            output: [Item.of("4x minecraft:red_dye")],
            input: "create:crushed_raw_iron"
        }
    ]
    recipes.forEach((recipe) => {
        create.milling(recipe.output, recipe.input);
    })
})