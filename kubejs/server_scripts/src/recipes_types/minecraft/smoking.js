ServerEvents.recipes((event) => {
    let {minecraft} = event.recipes
    minecraft.smoking(Item.of('frostedheart:wooden_cup_drink', '{Fluid:{FluidName:"caupona:nail_soup",Amount:250}}'), Item.of('frostedheart:wooden_cup_drink', '{Fluid:{FluidName:"minecraft:water",Amount:250}}'))
    minecraft.smoking('frostedheart:rye_bread', 'frostedheart:raw_rye_bread')
    minecraft.smoking('frostedheart:black_bread', 'kubejs:sawdust_rye_dough')
    minecraft.smoking('frostedheart:cooked_whale_meat', 'frostedheart:raw_whale_meat')
    minecraft.smoking('frostedheart:cooked_polar_bear_meat', 'frostedheart:polar_bear_meat')
    minecraft.smoking('frostedheart:cooked_fox_meat', 'frostedheart:fox_meat')
    minecraft.smoking('frostedheart:cooked_wolf_meat', 'frostedheart:wolf_meat')
    minecraft.smoking('frostedheart:cooked_squid_tentacles', 'frostedheart:squid_tentacles')

    let recipes = [
        {output: 'frostedheart:alumina_dust', input: 'frostedheart:aluminium_hydroxide_dust'},
        {output: 'kubejs:coal_briquette', input: 'kubejs:wet_coal_briquette'},
        {output: 'kubejs:coal_briquette', input: 'kubejs:creosoted_coal_briquette'},
        {output: 'kubejs:charcoal_briquette', input: 'kubejs:creosoted_charcoal_briquette'},
        {output: 'kubejs:coal_briquette', input: 'kubejs:bound_coal_briquette'},
        {output: 'kubejs:charcoal_briquette', input: 'kubejs:bound_charcoal_briquette'},
        {output: 'kubejs:sawdust_briquette', input: 'kubejs:creosoted_sawdust_briquette'},
        {output: 'kubejs:straw_briquette', input: 'kubejs:wet_straw_briquette'}
    ]
    recipes.forEach((recipe) => {
        minecraft.smoking(recipe.output, recipe.input)
    })
})