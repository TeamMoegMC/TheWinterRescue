ServerEvents.recipes((event) => {
    event.smoking(Item.of('frostedheart:wooden_cup_drink', '{Fluid:{FluidName:"frostedheart:purified_water",Amount:250}}'), Item.of('frostedheart:wooden_cup_drink', '{Fluid:{FluidName:"minecraft:water",Amount:250}}'))
    event.smoking('frostedheart:rye_bread', Item.of('frostedheart:raw_rye_bread'))
})