LootJS.modifiers((event) => {
    // vines and sticks
    event.addBlockLootModifier("#minecraft:leaves")
        .matchMainHand("#minecraft:swords")
        .randomChance(0.75)
        .addLoot("minecraft:vine")
        .randomChance(0.75)
        .addLoot("minecraft:stick")
    // ice chips
    event.addBlockLootModifier("frostedheart:thin_ice")
        .removeLoot("frostedheart:ice_chip")
        .randomChance(1.0)
        .addLoot("frostedheart:ice_chip x1")
        .randomChance(0.3)
        .addLoot("frostedheart:ice_chip x2")
    event.addBlockLootModifier("minecraft:ice")
        .randomChance(1.0)
        .addLoot("frostedheart:ice_chip x1")
        .randomChance(0.5)
        .addLoot("frostedheart:ice_chip x2")
    event.addBlockLootModifier("minecraft:packed_ice")
        .randomChance(1.0)
        .addLoot("frostedheart:ice_chip x1")
        .randomChance(0.7)
        .addLoot("frostedheart:ice_chip x2")
    event.addBlockLootModifier("minecraft:blue_ice")
        .randomChance(1.0)
        .addLoot("frostedheart:ice_chip x2")
        .randomChance(0.9)
        .addLoot("frostedheart:ice_chip x2")

    // Change IE ore drops: They do appear sometimes...just to avoid issues
    event.addBlockLootModifier('immersiveengineering:ore_aluminum')
        .replaceLoot('immersiveengineering:raw_aluminum', 'frostedheart:bauxite')

    event.addBlockLootModifier('immersiveengineering:deepslate_ore_aluminum')
        .replaceLoot('immersiveengineering:raw_aluminum', 'frostedheart:bauxite')

    // prevent easy dirt
    event.addBlockLootModifier('minecraft:dirt_path')
        .replaceLoot('minecraft:dirt', 'minecraft:coarse_dirt')

    event.addBlockLootModifier("minecraft:campfire")
        .replaceLoot('charcoal_pit:ash', "supplementaries:ash")

});