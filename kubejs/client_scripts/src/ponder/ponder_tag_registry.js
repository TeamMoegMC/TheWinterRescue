// priority: 1

Ponder.tags((event) => {
    // genny
    event.createTag("the_winter_rescue:generator", "frostedheart:generator", "", "")
    // ore processing
    event.createTag("the_winter_rescue:bloomery", "charcoal_pit:main_bloomery", "", "")
    event.createTag("the_winter_rescue:crucible", "immersiveindustry:crucible", "", "")
    // power
    event.createTag("the_winter_rescue:steam_turbine", "immersiveindustry:steam_turbine", "", "")
    // misc
    event.createTag("the_winter_rescue:beehive_oven_pit", "frostedheart:beehive_oven_pit", "", "")
    event.createTag("the_winter_rescue:charcoal_pit", "minecraft:charcoal", "", "")
    // creosote funnel
    event.createTag("the_winter_rescue:creosote_funnel", "charcoal_pit:sandy_collector", "", "")
    // steam power
    event.createTag("steampowered:ponder", "steampowered:cast_iron_steam_engine", "", "", [
        "steampowered:bronze_boiler",
        "steampowered:bronze_burner",
        "steampowered:bronze_steam_engine",
        "steampowered:bronze_flywheel",
        "steampowered:bronze_cogwheel",
        "steampowered:bronze_large_cogwheel",

        "steampowered:cast_iron_boiler",
        "steampowered:cast_iron_burner",
        "steampowered:cast_iron_steam_engine",
        "steampowered:cast_iron_flywheel",
        "steampowered:cast_iron_cogwheel",
        "steampowered:cast_iron_large_cogwheel",

        "steampowered:steel_boiler",
        "steampowered:steel_burner",
        "steampowered:steel_steam_engine",
        "steampowered:steel_flywheel",
        "steampowered:steel_cogwheel",
        "steampowered:steel_large_cogwheel",

        "steampowered:alternator"
    ])
})