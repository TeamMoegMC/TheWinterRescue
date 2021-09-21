onEvent('recipes', (event) => {
    event.remove({type: 'stone_age:drying_rack'})
    event.custom({
        "type": "stone_age:drying_rack",
        "ingredient": Item.of('primalwinter:snowy_vine').toJson(),
        "result": Item.of('charcoal_pit:straw').toJson(),
        "dryingTime": 600
    })
});