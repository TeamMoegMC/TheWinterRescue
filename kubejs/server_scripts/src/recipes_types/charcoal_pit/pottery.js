ServerEvents.recipes((event) => {
    let {charcoal_pit} = event.recipes

    charcoal_pit.pottery("minecraft:stone", "#forge:cobblestone")
    charcoal_pit.pottery("minecraft:stone", "#forge:stone")
    charcoal_pit.pottery("frostedheart:ceramic_bucket", "kubejs:clay_bucket")
    charcoal_pit.pottery("caupona:portable_brazier", "caupona:clay_portable_brazier")

    let copperLike = ["#forge:ingots/copper", "#forge:ingots/rusted_copper", "#forge:raw_materials/copper", "#forge:crushed_raw_materials/copper"]
    let tinLike = ["#forge:ingots/tin", "#forge:ingots/gray_tin", "#forge:raw_materials/tin", "#forge:crushed_raw_materials/tin"]
    charcoal_pit.orekiln("4x frostedheart:bronze_ingot", [copperLike, copperLike, copperLike, tinLike])
    charcoal_pit.orekiln("frostedheart:bronze_ingot", ["frostedheart:condensed_ball_copper_ore", "frostedheart:condensed_ball_copper_ore", "frostedheart:condensed_ball_copper_ore", "frostedheart:condensed_ball_tin_ore"])

    charcoal_pit.orekiln("minecraft:copper_ingot", [copperLike])
    charcoal_pit.orekiln("frostedheart:tin_ingot", [tinLike])
    charcoal_pit.orekiln("minecraft:copper_ingot", ["frostedheart:condensed_ball_copper_ore", "frostedheart:condensed_ball_copper_ore", "frostedheart:condensed_ball_copper_ore", "frostedheart:condensed_ball_copper_ore"])
    charcoal_pit.orekiln("frostedheart:tin_ingot", ["frostedheart:condensed_ball_tin_ore", "frostedheart:condensed_ball_tin_ore", "frostedheart:condensed_ball_tin_ore", "frostedheart:condensed_ball_tin_ore"])
    charcoal_pit.orekiln("frostedheart:lead_ingot", ["#forge:raw_materials/lead"])
    charcoal_pit.orekiln("minecraft:gold_ingot", ["#forge:raw_materials/gold"])
})