//解冻
ServerEvents.recipes((event) => {
    let {minecraft} = event.recipes

    let thaw = [
        // ["kubejs:frozen_auroch_meat", "stone_age:auroch_meat",],
        ["kubejs:frozen_beef", "minecraft:beef"],
        // ["kubejs:frozen_boar_meat", "stone_age:boar_meat"],
        ["kubejs:frozen_chicken", "minecraft:chicken"],
        // ["kubejs:frozen_fat", "stone_age:fat"],
        // ["kubejs:frozen_fowl_meat", "stone_age:fowl_meat"],
        // ["kubejs:frozen_mammoth_meat", "stone_age:mammoth_meat"],
        // ["kubejs:frozen_mouflon_meat", "stone_age:mouflon_meat"],
        // ["kubejs:frozen_tiger_meat", "stone_age:tiger_meat"],
        ["kubejs:frozen_mutton", "minecraft:mutton"],
        ["kubejs:frozen_porkchop", "minecraft:porkchop"],
        // ["kubejs:frozen_rhino_meat", "stone_age:rhino_meat"],
        // ["kubejs:frozen_venison", "stone_age:venison"],
        ["kubejs:frozen_rabbit", "minecraft:rabbit"],
        ["kubejs:frozen_white_turnip", "frostedheart:white_turnip_block"]
    ]
    thaw.forEach(([output, input]) => {
        minecraft.smoking(output, input)
        minecraft.campfire_cooking(output, input)
    })
})