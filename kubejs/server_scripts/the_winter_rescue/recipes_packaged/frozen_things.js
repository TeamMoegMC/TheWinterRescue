//解冻
onEvent('recipes', (event) => {
    var frozen_things = ["kubejs:frozen_seeds_wheat", "kubejs:frozen_seeds_melon", "kubejs:frozen_seeds_pumpkin", "kubejs:frozen_seeds_beetroots", "kubejs:frozen_seeds_unknown", "kubejs:frozen_seeds_blackwheat", "kubejs:frozen_auroch_meat", "kubejs:frozen_beef", "kubejs:frozen_boar_meat", "kubejs:frozen_chicken", "kubejs:frozen_fat", "kubejs:frozen_fowl_meat", "kubejs:frozen_mammoth_meat", "kubejs:frozen_mouflon_meat", "kubejs:frozen_tiger_meat", "kubejs:frozen_mutton", "kubejs:frozen_porkchop", "kubejs:frozen_rhino_meat", "kubejs:frozen_venison", "kubejs:frozen_rabbit", "kubejs:frozen_white_turnip"];
    var unfrozen_things = ["minecraft:wheat_seeds", "minecraft:melon_seeds", "minecraft:pumpkin_seeds", "minecraft:beetroot_seeds", "crockpot:unknown_seeds", "frostedheart:rye_block", "stone_age:auroch_meat", "minecraft:beef", "stone_age:boar_meat", "minecraft:chicken", "stone_age:fat", "stone_age:fowl_meat", "stone_age:mammoth_meat", "stone_age:mouflon_meat", "stone_age:tiger_meat", "minecraft:mutton", "minecraft:porkchop", "stone_age:rhino_meat", "stone_age:venison", "minecraft:rabbit", "frostedheart:white_turnip_block"];
    var i_unfreeze;
    for (var i_unfreeze in frozen_things) {

        event.smoking(unfrozen_things[i_unfreeze], frozen_things[i_unfreeze])
        event.campfireCooking(unfrozen_things[i_unfreeze], frozen_things[i_unfreeze])
    }

});

