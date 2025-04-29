JEIEvents.hideItems((event) => {

    let itemsToHide = [
        // stone age
        "stone_age:dried_grass",
        "stone_age:thatch_block",
        "stone_age:flint_workbench",
        "stone_age:unlit_torch",

        // charcoal pit
        "charcoal_pit:ash_block",
        "charcoal_pit:ash",
        "charcoal_pit:coke_block",
        "charcoal_pit:fertilizer",

        // ie
        "immersiveengineering:toolbox",
        "immersiveengineering:sorter",
        "immersiveengineering:fluid_sorter",
        "immersiveengineering:watermill",
        "immersiveengineering:windmill",

        // create power devices: we have steam power
        "create:water_wheel",
        "create:large_water_wheel",
        "create:cogwheel",
        "create:large_cogwheel",
        "create:windmill_bearing",
        "create:steam_engine",

        // create: causes infinite power
        "create:mechanical_piston",
        "create:sticky_mechanical_piston",
        "create:piston_extension_pole",
        "create:cart_assembler",

        "create:crushed_raw_tin",
        "create:crushed_raw_aluminum",
        "immersiveengineering:raw_aluminum",
        "immersiveengineering:raw_block_aluminum",
        "immersiveengineering:ore_aluminum",
        "immersiveengineering:deepslate_ore_aluminum",
    ]

    let regexHide = []
    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem)
        }
    })

    regexHide.forEach((regexExpression) => {
        event.hide(regexExpression)
    })
})
