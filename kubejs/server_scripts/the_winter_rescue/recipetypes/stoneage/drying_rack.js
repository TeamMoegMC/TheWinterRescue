onEvent('recipes', (event) => {
    event.remove({type: 'stone_age:drying_rack'})
    event.custom({
        "type": "stone_age:drying_rack",
        "ingredient": Item.of('minecraft:vine').toJson(),
        "result": Item.of('charcoal_pit:straw').toJson(),
        "dryingTime": 600
    })
	event.custom({
		"type": "stone_age:drying_rack",
		"ingredient": Item.of('frostedheart:wolfberries').toJson(),
		"result": Item.of('frostedheart:dried_wolfberries').toJson(),
		"dryingTime": 1600
	})
});