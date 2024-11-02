# Read ../src/main/resources/data/forestedheart/worldgen/terralith_overworld.json
# save as dict

import json
import os

# print current dir

print()

# get current dir
current_dir = os.getcwd()
# get parent dir
parent_dir = os.path.dirname(current_dir)
file_dir = "kubejs/data/minecraft/dimension/overworld.json"

with open(os.path.join(parent_dir, file_dir)) as f:
    data = json.load(f)

biomes = data["dimensions"]["minecraft:overworld"]["generator"]["biome_source"]["biomes"]
print(f"Total original biome specs: {len(biomes)}")

non_snowy_biome_ids = [
    "minecraft:stony_shore",
    "minecraft:river",
    "minecraft:ocean",
    "minecraft:deep_ocean",
    "minecraft:cold_ocean",
    "minecraft:deep_cold_ocean",
    "minecraft:old_growth_pine_taiga",
    "minecraft:old_growth_spruce_taiga",
    "terralith:alpine_highlands",
    "terralith:basalt_cliffs",
    "terralith:birch_taiga",
    "terralith:forested_highlands",
    "terralith:granite_cliffs",
    "terralith:gravel_desert",
    "terralith:white_cliffs",
    "terralith:valley_clearing",
    "terralith:siberian_taiga",
]

# These are winter biomes

ocean_biome_ids = [
    "minecraft:frozen_ocean",
    "minecraft:deep_frozen_ocean",
]

cave_biome_ids = [
    "minecraft:dripstone_caves",
    "minecraft:lush_caves",
    "terralith:cave/andesite_caves",
    "terralith:cave/desert_caves",
    "terralith:cave/diorite_caves",
    "terralith:cave/fungal_caves",
    "terralith:cave/granite_caves",
    "terralith:cave/ice_caves",
    "terralith:cave/infested_caves",
    "terralith:cave/thermal_caves",
    "terralith:cave/underground_jungle",
    "terralith:cave/crystal_caves",
    "terralith:cave/deep_caves",
    "terralith:cave/frostfire_caves",
    "terralith:cave/mantle_caves",
    "terralith:cave/tuff_caves"
]

mountain_biome_ids = [
    "minecraft:jagged_peaks",
    "minecraft:frozen_peaks",
    "minecraft:grove",
    "minecraft:snowy_slopes",
    "terralith:alpine_grove",
    "terralith:frozen_cliffs",
    "terralith:glacial_chasm",
    "terralith:rocky_mountains",
    "terralith:scarlet_mountains",
    "terralith:siberian_grove",
]

volcanic_biome_ids = [
    "terralith:volcanic_crater",
    "terralith:volcanic_peaks",
    "terralith:yellowstone",
    "terralith:caldera",
]

wetland_biome_ids = [
    "minecraft:frozen_river",
    "minecraft:snowy_beach",
    "terralith:ice_marsh",
]

forest_biome_ids = [
    "terralith:cold_shrubland", # not enough snow
    "terralith:rocky_shrubland",
    "terralith:snowy_badlands",
    "terralith:snowy_maple_forest",
    "terralith:snowy_shield",
    "terralith:wintry_forest",
    "terralith:wintry_lowlands",
]

plain_biomes_ids = [
    "minecraft:snowy_taiga",
    "minecraft:snowy_plains",
    "minecraft:ice_spikes",
]

winter_biome_ids = []
winter_biome_ids.extend(ocean_biome_ids)
winter_biome_ids.extend(cave_biome_ids)
winter_biome_ids.extend(mountain_biome_ids)
winter_biome_ids.extend(volcanic_biome_ids)
winter_biome_ids.extend(wetland_biome_ids)
winter_biome_ids.extend(forest_biome_ids)
winter_biome_ids.extend(plain_biomes_ids)

winter_biomes = []
repetitions = {}

for biome in biomes:
    id = biome["biome"]
    if id in winter_biome_ids:
        winter_biomes.append(biome)
        if id not in repetitions:
            repetitions[id] = 1
        else:
            repetitions[id] += 1

print(f"Total original biome specs: {len(winter_biomes)}")
repetitions = dict(sorted(repetitions.items(), key=lambda item: item[1], reverse=True))
print(f"Repeated: {repetitions}")

# list the biome ids with temperature from high to low

biome_temperatures_high = {}
biome_temperatures_low = {}
for biome in winter_biomes:
    biome_temperatures_high[biome["biome"]] = biome["parameters"]["temperature"][1]
    biome_temperatures_low[biome["biome"]] = biome["parameters"]["temperature"][0]

biome_temperatures_high = dict(sorted(biome_temperatures_high.items(), key=lambda item: item[1], reverse=True))
biome_temperatures_low = dict(sorted(biome_temperatures_low.items(), key=lambda item: item[1], reverse=True))
print(biome_temperatures_high)
print(biome_temperatures_low)

# raise the upper limit of temperature for all winter biomes by 1.0
for biome in winter_biomes:
    biome["parameters"]["temperature"][1] += 1.0

# save winter biomes as json, with indent=2
data["dimensions"]["minecraft:overworld"]["generator"]["biome_source"]["biomes"] = winter_biomes
with open("winter_biomes.json", "w") as f:
    json.dump(data, f, indent=2)