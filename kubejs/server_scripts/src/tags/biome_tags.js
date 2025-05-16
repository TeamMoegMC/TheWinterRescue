ServerEvents.tags("worldgen/biome", (event) => {
    event.add("frostedheart:is_ore_vein", [
    "the_winter_rescue:brine_deposits",
    "the_winter_rescue:fossil_deposits",
    "the_winter_rescue:hydrothermal_deposits",
    "the_winter_rescue:magmatic_deposits"
    ])
    event.add("frostedheart:is_cave", [
      "the_winter_rescue:andesite_caves",
      "the_winter_rescue:darkfang_caves",
      "the_winter_rescue:diorite_caves",
      "the_winter_rescue:mycelium_caves",
      "the_winter_rescue:ice_caves",
      "the_winter_rescue:crust_chasms",
      "minecraft:dripstone_caves",
      "minecraft:lush_caves"
    ])

    event.add("frostedheart:not_winter", [
        "the_winter_rescue:hydrothermal_deposits",
        "the_winter_rescue:magmatic_deposits",
        "the_winter_rescue:active_volcano",
        "the_winter_rescue:volcanic_hills",
        "the_winter_rescue:underwater_volcano",
        "the_winter_rescue:glacial_lakes"
    ])
})