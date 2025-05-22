ItemEvents.modification((event) => {
    let carpets = [
        "minecraft:white_carpet",
        "minecraft:orange_carpet",
        "minecraft:magenta_carpet",
        "minecraft:light_blue_carpet",
        "minecraft:yellow_carpet",
        "minecraft:lime_carpet",
        "minecraft:pink_carpet",
        "minecraft:gray_carpet",
        "minecraft:light_gray_carpet",
        "minecraft:cyan_carpet",
        "minecraft:purple_carpet",
        "minecraft:blue_carpet",
        "minecraft:brown_carpet",
        "minecraft:black_carpet",
        "minecraft:green_carpet",
        "minecraft:red_carpet"
    ]
    carpets.forEach((name) => {
        event.modify(name, (item) => {
            item.burnTime = 0
        })
    })
    event.modify("minecraft:dried_kelp_block", (modify) => {
        modify.burnTime = 0
    })
    event.modify("immersiveengineering:dust_coke", (modify) => {
        modify.burnTime = 3600
    })
    // modify burn time of snowy vine, 20 ticks, which is half of straw
    event.modify("minecraft:vine", (modify) => {
        modify.burnTime = 20
    })
    event.modify("minecraft:charcoal", (modify) => {
        modify.burnTime = 800
    })

    event.modify("minecraft:snowball", (modify) => {
        modify.maxStackSize = 32
    })

    event.modify("frostedheart:peat", (modify) => {
        modify.burnTime = 200
    })

    event.modify("frostedheart:peat_block", (modify) => {
        modify.burnTime = 800
    })

    event.modify("frostedheart:rotten_wood", (modify) => {
        modify.burnTime = 100
    })

    event.modify("minecraft:moss_carpet", (modify) => {
        modify.burnTime = 20
    })

    event.modify("minecraft:moss_block", (modify) => {
        modify.burnTime = 40
    })


})