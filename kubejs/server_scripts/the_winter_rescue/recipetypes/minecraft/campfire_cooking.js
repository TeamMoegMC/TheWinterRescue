onEvent('recipes', (event) => {
    event.campfireCooking(Item.of('watersource:wooden_cup_drink', '{Fluid:{FluidName:"watersource:purified_water",Amount:250}}'), Item.of('watersource:wooden_cup_drink', '{Fluid:{FluidName:"minecraft:water",Amount:250}}'))
    event.campfireCooking('watersource:purified_water_bottle', Item.of('minecraft:potion', '{Potion:"minecraft:water"}'))
    event.campfireCooking('frozenup:truffle', 'frozenup:frozen_truffle')
    event.campfireCooking('minecraft:torch', 'stone_age:unlit_torch')
});
