// priority: 1

Ponder.tags(event => {
    // genny
    event.create("the_winter_rescue:generator", "frostedheart:generator", "", "")
    // ore processing
    event.create("the_winter_rescue:bloomery", "charcoal_pit:main_bloomery", "", "")
    event.create("the_winter_rescue:crucible", "immersiveindustry:crucible", "", "")
    // power
	event.create("the_winter_rescue:steam_turbine", "immersiveindustry:steam_turbine", "", "")
    // misc
	event.create("the_winter_rescue:beehive_oven_pit", "frostedheart:beehive_oven_pit", "", "")
	event.create("the_winter_rescue:charcoal_pit", "minecraft:charcoal", "", "")
})