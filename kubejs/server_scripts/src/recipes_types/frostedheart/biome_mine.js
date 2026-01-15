ServerEvents.recipes(event => {
    // --- UNDERGROUND / DEPOSIT BIOMES (Ores & Stones) ---

    // Salt & Brine Deposits
    event.custom(biomeMineResourceRecipe('the_winter_rescue:brine_deposits', {
        'frostedheart:raw_halite': 5,
        'frostedheart:raw_sylvite': 2,
        'frostedheart:raw_magnesite': 2,
        'minecraft:stone': 10
    }))

    // Fossil & Biomass
    event.custom(biomeMineResourceRecipe('the_winter_rescue:fossil_deposits', {
        'minecraft:coal': 8,
        'minecraft:bone_block': 4,
        'frostedheart:biomass': 2,
        'minecraft:stone': 10
    }))

    // Hydrothermal Ores (Sulfur equivalents + Metals)
    event.custom(biomeMineResourceRecipe('the_winter_rescue:hydrothermal_deposits', {
        'frostedheart:raw_pyrite': 5,
        'frostedheart:raw_lead': 3,
        'frostedheart:raw_silver': 2,
        'minecraft:raw_copper': 4,
        'minecraft:stone': 10
    }))

    // Volcanic / Magmatic
    const volcanicBiomes = [
        'the_winter_rescue:active_volcano',
        'the_winter_rescue:underwater_volcano',
        'the_winter_rescue:volcanic_hills',
        'the_winter_rescue:magmatic_deposits'
    ]
    volcanicBiomes.forEach(biome => {
        event.custom(biomeMineResourceRecipe(biome, {
            'minecraft:raw_gold': 3,
            'minecraft:raw_copper': 5,
            'frostedheart:raw_pyrite': 4,
            'minecraft:stone': 10
        }))
    })

    // Cave Specific Stones
    event.custom(biomeMineResourceRecipe('the_winter_rescue:andesite_caves', {
        'minecraft:andesite': 8,
        'minecraft:stone': 4
    }))
    event.custom(biomeMineResourceRecipe('the_winter_rescue:diorite_caves', {
        'minecraft:diorite': 8,
        'minecraft:stone': 4
    }))
    event.custom(biomeMineResourceRecipe('the_winter_rescue:ice_caves', {
        'minecraft:packed_ice': 6,
        'minecraft:blue_ice': 2,
        'minecraft:stone': 4
    }))

    // --- SURFACE / VEGETATION BIOMES (Logs & Organics - No Stone) ---

    // Forest Biomes (Spruce/Birch focused)
    const forestBiomes = [
        'the_winter_rescue:frozen_forest',
        'the_winter_rescue:destroyed_forest',
        'the_winter_rescue:nature/destroyed_forest',
        'the_winter_rescue:nature/destroyed_birch_forest',
        'the_winter_rescue:nature/frostbough_forest',
        'the_winter_rescue:nature/ironwinter_hollow'
    ]
    forestBiomes.forEach(biome => {
        event.custom(biomeMineResourceRecipe(biome, {
            'minecraft:spruce_log': 10,
            'minecraft:birch_log': 5,
            'minecraft:stick': 8,
            'frostedheart:biomass': 4
        }))
    })

    // Pine Groves
    const pineBiomes = [
        'the_winter_rescue:nature/frostpine_grove',
        'the_winter_rescue:nature/scree_pine_grove'
    ]
    pineBiomes.forEach(biome => {
        event.custom(biomeMineResourceRecipe(biome, {
            'minecraft:spruce_log': 12,
            'minecraft:stick': 10,
            'frostedheart:biomass': 4
        }))
    })

    // Swamps / Marshes
    event.custom(biomeMineResourceRecipe('the_winter_rescue:nature/destroyed_marsh', {
        'frostedheart:peat': 12,
        'minecraft:oak_log': 4,
        'minecraft:stick': 10,
        'frostedheart:biomass': 6
    }))

    // Tundra / Shrubland (Sparse logs)
    event.custom(biomeMineResourceRecipe('the_winter_rescue:tundra', {
        'minecraft:stick': 15,
        'frostedheart:biomass': 8,
        'minecraft:spruce_log': 2
    }))
    event.custom(biomeMineResourceRecipe('the_winter_rescue:nature/snowy_shrubland', {
        'minecraft:stick': 12,
        'frostedheart:biomass': 6,
        'minecraft:spruce_log': 4
    }))

    // --- GLACIAL BIOMES (Ice - No Stone) ---

    const strictlyIceBiomes = [
        'the_winter_rescue:glacial_ices',
        'the_winter_rescue:ice_cap',
        'the_winter_rescue:nature/glacier',
        'the_winter_rescue:alpine_glacier',
        'the_winter_rescue:tidewater_glacier',
        'the_winter_rescue:valley_glacier'
    ]
    strictlyIceBiomes.forEach(biome => {
        event.custom(biomeMineResourceRecipe(biome, {
            'minecraft:blue_ice': 3,
            'minecraft:packed_ice': 6,
            'minecraft:ice': 12
        }))
    })
})
