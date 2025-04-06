ServerEvents.recipes((event) => {
    let {immersiveengineering, create, minecraft} = event.recipes

    let recipes = [
        {output: "minecraft:terracotta", input: "minecraft:clay"},
        {output: 'minecraft:black_dye', input: '#kubejs:coal_dust'},
        {output: 'minecraft:black_dye', input: 'kubejs:charcoal_dust'},
        {output: '4x minecraft:red_dye', input: 'frostedheart:lead_oxide_dust'},
        // Note: Dirt needs special biomass processing, otherwise becomes coarse_dirt
        {output: 'minecraft:coarse_dirt', input: 'frostedheart:dirt_permafrost'},
        {output: 'minecraft:coarse_dirt', input: 'frostedheart:rooted_dirt_permafrost'},
        {output: 'minecraft:coarse_dirt', input: 'frostedheart:coarse_dirt_permafrost'},
        {output: 'minecraft:mycelium', input: 'frostedheart:mycelium_permafrost'},
        {output: 'minecraft:podzol', input: 'frostedheart:podzol_permafrost'},
        {output: 'minecraft:sand', input: 'frostedheart:sand_permafrost'},
        {output: 'minecraft:clay', input: 'frostedheart:clay_permafrost'},
        {output: 'minecraft:red_sand', input: 'frostedheart:red_sand_permafrost'},
        {output: 'frostedheart:peat_block', input: 'frostedheart:peat_permafrost'},
        {output: 'frostedheart:bauxite_block', input: 'frostedheart:bauxite_permafrost'},
        {output: 'frostedheart:kaolin_block', input: 'frostedheart:kaolin_permafrost'},
        {output: 'minecraft:paper', input: 'frostedheart:pulp'}
    ]
    recipes.forEach((recipe) => {
        minecraft.smelting(recipe.output, recipe.input)
        immersiveengineering.blast_furnace(recipe.output, recipe.input, "immersiveengineering:slag")
            .time(200)
    })

})