ServerEvents.recipes((event) => {
    let {charcoal_pit} = event.recipes

    charcoal_pit.pottery("minecraft:stone", "#forge:cobblestone")
    charcoal_pit.pottery("minecraft:stone", "#forge:stone")
    charcoal_pit.pottery("frostedheart:ceramic_bucket", "kubejs:clay_bucket")
    charcoal_pit.pottery("caupona:portable_brazier", "caupona:clay_portable_brazier")

    charcoal_pit.orekiln("4x frostedheart:bronze_ingot", ["#forge:ingots/copper", "#forge:ingots/copper", "#forge:ingots/copper", "#forge:ingots/tin"])
    charcoal_pit.orekiln("4x frostedheart:bronze_ingot", ["#forge:raw_materials/copper", "#forge:raw_materials/copper", "#forge:raw_materials/copper", "#forge:raw_materials/tin"])
    charcoal_pit.orekiln("minecraft:copper_ingot", ["frostedheart:condensed_ball_copper_ore", "frostedheart:condensed_ball_copper_ore", "frostedheart:condensed_ball_copper_ore", "frostedheart:condensed_ball_copper_ore"])
    charcoal_pit.orekiln("frostedheart:tin_ingot", ["frostedheart:condensed_ball_tin_ore", "frostedheart:condensed_ball_tin_ore", "frostedheart:condensed_ball_tin_ore", "frostedheart:condensed_ball_tin_ore"])

    charcoal_pit.orekiln("minecraft:copper_ingot", ["#forge:raw_materials/copper"])
    charcoal_pit.orekiln("minecraft:copper_ingot", ["#forge:ingots/rusted_copper"])
    charcoal_pit.orekiln("frostedheart:tin_ingot", ["#forge:raw_materials/tin"])
    charcoal_pit.orekiln("frostedheart:tin_ingot", ["#forge:ingots/gray_tin"])
    charcoal_pit.orekiln("frostedheart:lead_ingot", ["#forge:raw_materials/lead"])
    charcoal_pit.orekiln("minecraft:gold_ingot", ["#forge:raw_materials/gold"])
})