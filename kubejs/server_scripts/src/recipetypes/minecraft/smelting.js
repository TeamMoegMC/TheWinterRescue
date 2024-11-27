ServerEvents.recipes((event) => {
    let recipes = [
        {output: 'frostedheart:alumina_dust', input: 'frostedheart:aluminium_hydroxide_dust'},
        {output: 'minecraft:black_dye', input: '#kubejs:coal_dust'},
        {output: 'minecraft:black_dye', input: 'kubejs:charcoal_dust'},
        {output: 'kubejs:coal_briquette', input: 'kubejs:wet_coal_briquette'},
        {output: 'kubejs:coal_briquette', input: 'kubejs:creosoted_coal_briquette'},
        {output: 'kubejs:charcoal_briquette', input: 'kubejs:creosoted_charcoal_briquette'},
        {output: 'kubejs:coal_briquette', input: 'kubejs:bound_coal_briquette'},
        {output: 'kubejs:charcoal_briquette', input: 'kubejs:bound_charcoal_briquette'},
        {output: 'kubejs:sawdust_briquette', input: 'kubejs:creosoted_sawdust_briquette'},
        {output: 'kubejs:straw_briquette', input: 'kubejs:wet_straw_briquette'},
        {output: '#forge:ingots/tin', input: 'frostedheart:gray_tin_ingot'},
        {output: '4x minecraft:red_dye', input: 'frostedheart:lead_oxide_dust'},
        {output: 'create:zinc_ingot', input: '#forge:dusts/zinc'}
    ]
    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input)
    })
})