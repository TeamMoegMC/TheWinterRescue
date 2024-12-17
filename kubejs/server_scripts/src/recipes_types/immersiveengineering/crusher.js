ServerEvents.recipes((event) => {
    let {immersiveengineering} = event.recipes

    let recipes = [
        [
            "4x minecraft:quartz",
            "minecraft:sandstone",
            [
                Item.of("minecraft:quartz").withChance(0.5)
            ]
        ]
    ]
    recipes.forEach(([output, input, [secondaries]], index) => {
        immersiveengineering.crusher(output, input, [
            secondaries
        ]).id(`the_winter_rescue:immersiveengineering/crusher/${index}`)
    })
})