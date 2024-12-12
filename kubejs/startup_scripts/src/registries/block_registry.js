console.info("[KUBEJS_THE_WINTER_RESCUE] TWR Blocks Registered!")

StartupEvents.registry("block", (event) => {
    // Tool Type
    let toolType = {
        "sword": "minecraft:mineable/sword",
        "pickaxe": "minecraft:mineable/pickaxe",
        "axe": "minecraft:mineable/axe",
        "shovel": "minecraft:mineable/shovel",
        "hoe": "minecraft:mineable/hoe"
    }

    // Mining Level
    let miningLevel = {
        "wooden": "minecraft:needs_wooden_tool",
        "stone": "minecraft:needs_stone_tool",
        "iron": "minecraft:needs_iron_tool",
        "gold": "minecraft:needs_gold_tool",
        "diamond": "minecraft:needs_diamond_tool",
        "nether": "forge:needs_netherite_tool"
    }

    /*
    event.create("copper_gravel")
        .soundType(SoundType.SAND)
        .hardness(1.5)
        .tagBlock(toolType["shovel"])
        .tagBlock(miningLevel["wooden"])
        .requiresTool(true)
    */

})