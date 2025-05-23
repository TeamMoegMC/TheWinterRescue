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
        "the_winter_rescue:glacial_lakes",
        "the_winter_rescue:glacial_ices",
        "the_winter_rescue:nature/snowy_shrubland",
        "the_winter_rescue:tundra",
        "minecraft:snowy_plains",
        "minecraft:snowy_taiga",
        "minecraft:desert",
    ])

    // TODO: make certain biomes only partially covered with snow
    event.add("frostedheart:transform_winter_features", [
        "minecraft:frozen_ocean",
        "minecraft:deep_frozen_ocean",
        "minecraft:jagged_peaks",
        "minecraft:frozen_peaks",
        "minecraft:grove",
        "minecraft:snowy_slopes",
        "minecraft:frozen_river",
        "minecraft:snowy_beach",
        // "minecraft:snowy_taiga",
        // "minecraft:snowy_plains",
        "minecraft:ice_spikes",
        "minecraft:badlands",
        "minecraft:eroded_badlands",
        "minecraft:desert",

        "the_winter_rescue:ice_caves",
        "the_winter_rescue:mycelium_caves",
        "the_winter_rescue:nature/destroyed_marsh",
        "the_winter_rescue:nature/glacier",
        "the_winter_rescue:nature/slabback_massif",
        "the_winter_rescue:nature/frostbough_forest",
        "the_winter_rescue:nature/ironwinter_hollow",
        // "the_winter_rescue:nature/snowy_shrubland",
        "the_winter_rescue:nature/frostpine_grove",
        "the_winter_rescue:nature/scree_pine_grove",
        "the_winter_rescue:active_volcano",
        "the_winter_rescue:alpine_glacier",
        // "the_winter_rescue:glacial_ices",
        // "the_winter_rescue:glacial_lakes",
        "the_winter_rescue:ice_cap",
        "the_winter_rescue:tidewater_glacier",
        // "the_winter_rescue:tundra",
        // "the_winter_rescue:underwater_volcano",
        "the_winter_rescue:valley_glacier",
        // "the_winter_rescue:volcanic_hills"

    ])

    event.add("frostedheart:water_do_not_freeze", [
        "the_winter_rescue:hydrothermal_deposits",
        "the_winter_rescue:magmatic_deposits",
        "the_winter_rescue:active_volcano",
        "the_winter_rescue:volcanic_hills",
        "the_winter_rescue:underwater_volcano",
        "the_winter_rescue:glacial_lakes"
    ])

    event.add("stone_age:fishing_net_works", [
        "the_winter_rescue:glacial_lakes",
        "the_winter_rescue:tidewater_glacier",
        "the_winter_rescue:valley_glacier"
    ])
})