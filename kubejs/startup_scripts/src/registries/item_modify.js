let carpets = ["minecraft:white_carpet",
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
ItemEvents.modification((event) => {
    carpets.forEach(name => {
        event.modify(name, (item) => {
            item.burnTime = 0
        })
    })
    event.modify("minecraft:dried_kelp_block", (item) => {
        item.burnTime = 0
    })
    event.modify("immersiveengineering:dust_coke", (item) => {
        item.burnTime = 3600
    })
    // modify burn time of snowy vine, 20 ticks, which is half of straw
    event.modify("minecraft:vine", (item) => {
        item.burnTime = 20
    })
})