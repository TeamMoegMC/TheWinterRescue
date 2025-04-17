ServerEvents.recipes((event) => {
    // replace all andesite alloys
    event.replaceInput({}, "create:andesite_alloy", "#forge:ingots/cast_iron")
    // but there is some outliers
    event.replaceInput({output: "create:andesite_scaffolding"}, "#forge:ingots/cast_iron", "create:andesite_alloy")
    event.replaceInput({output: "create:andesite_bars"}, "#forge:ingots/cast_iron", "create:andesite_alloy")
    event.replaceInput({output: "create:andesite_ladder"}, "#forge:ingots/cast_iron", "create:andesite_alloy")
    event.replaceInput({output: "create:andesite_alloy_block"}, "#forge:ingots/cast_iron", "create:andesite_alloy")


    event.replaceInput({}, "create:cogwheel", "#the_winter_rescue:cogwheels")
    event.replaceInput({}, "create:large_cogwheel", "#the_winter_rescue:large_cogwheels")
    event.replaceInput({}, "frostedheart:sawdust", "#forge:dusts/wood")
    // event.replaceInput({}, "minecraft:dried_kelp", "#forge:leather")
    event.replaceInput({output: "immersiveengineering:turret_gun"}, "immersiveengineering:circuit_board", "kubejs:servo_core")
    event.replaceInput({output: "immersiveengineering:turret_chem"}, "immersiveengineering:circuit_board", "kubejs:servo_core")
    event.replaceInput({mod: "create"}, "minecraft:dried_kelp", "#the_winter_rescue:leather")

    event.replaceOutput({}, "immersiveengineering:plate_steel", "frostedheart:steel_sheet")

    event.replaceOutput({type: "immersiveengineering:blast_furnace"}, "frostedheart:steel_block", "frostedheart:cast_iron_block")
    // event.replaceInput({},"#forge:mushrooms","#forge:edible_mushrooms")

    event.replaceInput({mod: "caupona"}, "minecraft:dirt", "#minecraft:dirt")
})