ServerEvents.recipes((event) => {
    let {minecraft} = event.recipes
    minecraft.smoking(Item.of('frostedheart:wooden_cup_drink', '{Fluid:{FluidName:"frostedheart:purified_water",Amount:250}}'), Item.of('frostedheart:wooden_cup_drink', '{Fluid:{FluidName:"minecraft:water",Amount:250}}'))
    minecraft.smoking('frostedheart:rye_bread', Item.of('frostedheart:raw_rye_bread'))
})