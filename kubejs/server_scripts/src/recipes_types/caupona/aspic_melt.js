ServerEvents.recipes((event) => {
    // event.custom({
    //     "type": "caupona:aspic_melt",
    //     "amount": 125,
    //     "aspic": {
    //         "item": "minecraft:snowball"
    //     },
    //     "fluid": "minecraft:water",
    //     "time": 200
    // })

    event.custom({
        "type": "caupona:aspic_melt",
        "amount": 1000,
        "aspic": {
            "item": "minecraft:snow_block"
        },
        "fluid": "minecraft:water",
        "time": 100
    })
})