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
    event.create("duralumin_block")
        .soundType(SoundType.METAL)
        .hardness(5)
        .tagBlock(toolType["pickaxe"])
        .tagBlock(miningLevel["iron"])
        .requiresTool(true)
    event.create("sheetmetal_duralumin")
        .soundType(SoundType.METAL)
        .hardness(5)
        .tagBlock(toolType["pickaxe"])
        .tagBlock(miningLevel["iron"])
        .requiresTool(true)

    // rankine blocks
    event.create("quicklime_block")
        .soundType(SoundType.STONE)
        .hardness(2)
        .tagBlock(toolType["pickaxe"])
        .tagBlock(miningLevel["stone"])
        .requiresTool(true)
    event.create("refractory_bricks")
        .soundType(SoundType.STONE)
        .hardness(2)
        .tagBlock(toolType["pickaxe"])
        .tagBlock(miningLevel["stone"])
        .requiresTool(true)
    event.create("high_refractory_bricks")
        .soundType(SoundType.STONE)
        .hardness(2)
        .tagBlock(toolType["pickaxe"])
        .tagBlock(miningLevel["stone"])
        .requiresTool(true)
    event.create("magnesite_block")
        .soundType(SoundType.STONE)
        .hardness(2)
        .tagBlock(toolType["pickaxe"])
        .tagBlock(miningLevel["stone"])
        .requiresTool(true)
    event.create("magnesia_block")
        .soundType(SoundType.STONE)
        .hardness(2)
        .tagBlock(toolType["pickaxe"])
        .tagBlock(miningLevel["stone"])
        .requiresTool(true)
    event.create("packed_snow")
        .soundType(SoundType.STONE)
        .hardness(2)
        .tagBlock(toolType["pickaxe"])
        .tagBlock(miningLevel["stone"])
        .requiresTool(true)
    event.create("invar_block")
        .soundType(SoundType.STONE)
        .hardness(2)
        .tagBlock(toolType["pickaxe"])
        .tagBlock(miningLevel["stone"])
        .requiresTool(true)
     */
})