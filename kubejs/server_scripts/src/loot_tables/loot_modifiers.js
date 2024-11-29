LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("#minecraft:leaves")
        .matchMainHand("#minecraft:swords")
        .randomChance(0.7)
        .addLoot("minecraft:vine")
        .randomChance(0.3)
        .addLoot("minecraft:stick");
});