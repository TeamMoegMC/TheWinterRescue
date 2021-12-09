onEvent('recipes', (event) => {
    event.smoking(Item.of('watersource:wooden_cup_drink', '{Fluid:{FluidName:"watersource:purified_water",Amount:250}}'), Item.of('watersource:wooden_cup_drink', '{Fluid:{FluidName:"minecraft:water",Amount:250}}'))
    event.smoking('watersource:purified_water_bottle', Item.of('minecraft:potion', '{Potion:"minecraft:water"}'))
	event.smoking('frostedheart:rye_bread', Item.of('frostedheart:raw_rye_bread'))
});
