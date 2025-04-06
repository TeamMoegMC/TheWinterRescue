JEIEvents.hideItems((event) => {
    // materialsToUnify.forEach((material) => {
    //     if (material == "iesnium" || material == "graphite" || material == "hop_graphite") {
    //         return
    //     }
    //     itemsToHide.push(
    //         // "immersiveengineering:ingot_" + material,
    //         // "immersiveengineering:dust_" + material,
    //         // "immersiveengineering:nugget_" + material,
    //         // "immersiveengineering:stick_" + material,
    //     )
    // })

    let itemsToHide = [
        // "minecraft:blast_furnace",
        // "minecraft:furnace",

        // ie
        "immersiveengineering:toolbox",
        "immersiveengineering:sorter",
        "immersiveengineering:fluid_sorter",
        "immersiveengineering:watermill",
        "immersiveengineering:windmill",
        "engineersdecor:metal_crafting_table",

        // create power devices: we have steam power
        "create:water_wheel",
        "create:cogwheel",
        "create:large_cogwheel",
        "create:windmill_bearing",
        "create:flywheel",
        "create:furnace_engine",

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
