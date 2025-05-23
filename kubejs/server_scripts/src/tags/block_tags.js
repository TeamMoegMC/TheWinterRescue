ServerEvents.tags('block', (event) => {
    event.add("minecraft:needs_stone_tool", "frostedresearch:mechanical_calculator")
    event.add("minecraft:mineable/pickaxe", "frostedresearch:mechanical_calculator")
    event.add("minecraft:mineable/axe", "frostedresearch:drawing_desk")

    event.add("create:non_movable", [
        "charcoal_pit:log_pile",
        "charcoal_pit:coal_pile",
        "charcoal_pit:wood_ash",
        "charcoal_pit:coal_ash",
        "charcoal_pit:coke",
        "charcoal_pit:ash",
        "charcoal_pit:sandy_collector",
        "charcoal_pit:pottery_kiln",
        "charcoal_pit:bellows",
        "charcoal_pit:sandy_tuyere",
        "charcoal_pit:bloomery",
        "charcoal_pit:main_bloomery",
        "charcoal_pit:barrel",
        "charcoal_pit:mechanical_bellows",
        "charcoal_pit:ceramic_pot"
    ])

    event.add("minecraft:moss_replaceable", [
        "minecraft:snow_block",
        "minecraft:basalt",
        "minecraft:mud",
        "frostedheart:thin_ice"
    ])


})