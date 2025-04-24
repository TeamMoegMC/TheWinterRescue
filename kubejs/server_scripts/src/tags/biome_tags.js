ServerEvents.tags("worldgen/biome", (event) => {
    event.add("frostedheart:is_ore_vein", [
    "the_winter_rescue:brine_deposits",
    "the_winter_rescue:fossil_deposits",
    "the_winter_rescue:hydrothermal_deposits",
    "the_winter_rescue:magmatic_deposits"
    ])
    event.add("frostedheart:is_cave", [
        "terralith:cave/andesite_caves",
        "terralith:cave/diorite_caves",
        "terralith:cave/granite_caves",
        "terralith:cave/mantle_caves",
        "terralith:cave/tuff_caves",
        "terralith:cave/frostfire_caves",
        "terralith:cave/thermal_caves"
        ])
})