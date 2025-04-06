ServerEvents.tags('block', (event) => {
    event.add("minecraft:needs_stone_tool", "frostedresearch:mechanical_calculator")
    event.add("minecraft:mineable/pickaxe", "frostedresearch:mechanical_calculator")
    event.add("minecraft:mineable/axe", "frostedresearch:drawing_desk")
})