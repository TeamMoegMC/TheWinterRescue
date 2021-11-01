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

onEvent('block.tags', (event) => {
    event.add('primalwinter:animal_spawns_on', animalSpawnsOnBlocks)
	event.add('forge:ores', 'rankine:pyrite_ore')
});