let animalSpawnsOnBlocks = [
    "minecraft:grass",
    "minecraft:sand",
    "minecraft:snow_block",
    "minecraft:snow",
    "primalwinter:snowy_dirt",
    "primalwinter:snowy_sand",
    "minecraft:grass_block",
    "minecraft:ice"
]

let alwaysBreakableBlocks = [
    "primalwinter:snowy_dirt",
    "primalwinter:snowy_sand",
    "minecraft:snow",
    "minecraft:snow_block",
    "minecraft:ice",
    "minecraft:gravel",
    "#minecraft:leaves",
    "#forge:dirt",
    "minecraft:grass",
    "minecraft:podzol",
    "minecraft:coarse_dirt",
    "#minecraft:sand"
]
let snowyLeaveBlocks = [
    "primalwinter:snowy_oak_leaves",
    "primalwinter:snowy_birch_leaves",
    "primalwinter:snowy_spruce_leaves",
    "primalwinter:snowy_jungle_leaves",
    "primalwinter:snowy_dark_oak_leaves",
    "primalwinter:snowy_acacia_leaves"
]
let rankineLeaveBlocks=[
	"rankine:cinnamon_leaves",
    "rankine:sharinga_leaves",
    "rankine:cork_oak_leaves",
    "rankine:black_walnut_leaves",
    "rankine:cedar_leaves",
    "rankine:coconut_palm_leaves",
    "rankine:pinyon_pine_leaves",
    "rankine:juniper_leaves",
    "rankine:balsam_fir_leaves",
    "rankine:magnolia_leaves",
    "rankine:eastern_hemlock_leaves",
    "rankine:yellow_birch_leaves",
    "rankine:black_birch_leaves",
    "rankine:maple_leaves"
]
onEvent('block.tags', (event) => {
    event.add('primalwinter:animal_spawns_on', animalSpawnsOnBlocks)
	event.add('kubejs:snowy_leaves', snowyLeaveBlocks)
	event.add('kubejs:rankine_leaves',rankineLeaveBlocks)
	event.add('forge:ores', 'rankine:pyrite_ore')
});