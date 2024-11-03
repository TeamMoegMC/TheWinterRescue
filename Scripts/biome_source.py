# Read ../src/main/resources/data/forestedheart/worldgen/terralith_overworld.json
# save as dict

import json
import os

# print current dir

print()

# get current dir
current_dir = os.getcwd()
file_dir = "kubejs/data/minecraft/dimension/overworld.json"

with open(os.path.join(current_dir, file_dir)) as f:
    data = json.load(f)

biomes = data["generator"]["biome_source"]["biomes"]
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
    "terralith:frozen_cliffs",
    "terralith:glacial_chasm",
    "terralith:rocky_mountains",
    "terralith:scarlet_mountains",
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
]

# ranked by amount of trees
forest_biome_ids = [
    "minecraft:ice_spikes",
    "terralith:snowy_badlands",
    "minecraft:snowy_plains",
    "minecraft:snowy_slopes",
    "terralith:cold_shrubland", # not enough snow
    "terralith:rocky_shrubland",
    "terralith:ice_marsh",
    "minecraft:snowy_taiga",
    "minecraft:grove",
    "terralith:alpine_grove",
    "terralith:siberian_grove",
    "terralith:snowy_maple_forest",
    "terralith:snowy_shield",
    "terralith:wintry_lowlands",
    "terralith:wintry_forest",
]

winter_biome_ids = []
winter_biome_ids.extend(ocean_biome_ids)
winter_biome_ids.extend(cave_biome_ids)
winter_biome_ids.extend(mountain_biome_ids)
winter_biome_ids.extend(volcanic_biome_ids)
winter_biome_ids.extend(wetland_biome_ids)
winter_biome_ids.extend(forest_biome_ids)

# count repetitions of winter biomes

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
# repetitions = dict(sorted(repetitions.items(), key=lambda item: item[1], reverse=True))
# print(f"Repeated: {repetitions}")

# list the biome ids with temperature from high to low

# biome_temperatures_high = {}
# biome_temperatures_low = {}
# for biome in winter_biomes:
#     biome_temperatures_high[biome["biome"]] = biome["parameters"]["temperature"][1]
#     biome_temperatures_low[biome["biome"]] = biome["parameters"]["temperature"][0]

# biome_temperatures_high = dict(sorted(biome_temperatures_high.items(), key=lambda item: item[1], reverse=True))
# biome_temperatures_low = dict(sorted(biome_temperatures_low.items(), key=lambda item: item[1], reverse=True))
# print(biome_temperatures_high)
# print(biome_temperatures_low)

# count only forest biomes
forest_biomes = []
repetitions = {}

for biome in biomes:
    id = biome["biome"]
    if id in forest_biome_ids:
        forest_biomes.append(biome)
        if id not in repetitions:
            repetitions[id] = 1
        else:
            repetitions[id] += 1

print(f"Total forest specs: {len(forest_biomes)}")
repetitions = dict(sorted(repetitions.items(), key=lambda item: item[1], reverse=True))
# print(f"Repeated: {repetitions}")

# Print out the temperature ranges for every object
print("Temperature ranges for winter biomes:")
for biome in biomes:
    id = biome["biome"]
    if id in winter_biome_ids:
        print(f"{id}: {biome['parameters']['temperature']}")

possible_temp_ranges = {

}
# Store the possible ranges  of temperature ranges for each unique biome.
# keys being the biome id, values being lists of tuples of the temperature ranges
print("Possible temperature ranges for winter biomes:")
for biome in biomes:
    id = biome["biome"]
    if id in winter_biome_ids:
        temp_range = biome["parameters"]["temperature"]
        if id not in possible_temp_ranges:
            possible_temp_ranges[id] = [temp_range]
        else:
            if temp_range not in possible_temp_ranges[id]:
                possible_temp_ranges[id].append(temp_range)

# print(possible_temp_ranges)

# store in json, with indent=2
# create file if it doesn't exist

with open(os.path.join(current_dir, "Scripts/old_temp_ranges.json"), "w") as f:
    json.dump(possible_temp_ranges, f, indent=2)

# copy the json file to another file
import shutil
shutil.copy(os.path.join(current_dir, "Scripts/old_temp_ranges.json"), os.path.join(current_dir, "Scripts/new_temp_ranges.json"))

# Go over biomes again, now load the updated json file and change the temperature values
with open(os.path.join(current_dir, "Scripts/new_temp_ranges.json")) as f:
    new_temp_ranges = json.load(f)

print("New temperature ranges for winter biomes:")
for biome in winter_biomes:
    id = biome["biome"]
    temp_range = biome["parameters"]["temperature"]
    for key, value in possible_temp_ranges.items():
        if key == id:
            for i, val in enumerate(value):
                if val == temp_range:
                    new_temp_range = new_temp_ranges[key][i]
                    biome["parameters"]["temperature"] = new_temp_range
                    # log
                    if temp_range != new_temp_range:
                        print(f"Changed {id} from {temp_range} to {new_temp_range}")



# Temperature values are divided into 5 levels. The corresponding ranges from level 0 to level 4 are: -1.0~-0.45, -0.45~-0.15, -0.15~0.2, 0.2~0.55, 0.55~1.0.
temp_ranges = {
    "level_0": (-1.0, -0.45),
    "level_1": (-0.45, -0.15),
    "level_2": (-0.15, 0.2),
    "level_3": (0.2, 0.55),
    "level_4": (0.55, 1.0),
}


# raise the upper limit of temperature for all winter biomes by 1.0
# for biome in winter_biomes:
#     biome["parameters"]["temperature"][1] += 1.0

# save winter biomes as json, with indent=2
data["generator"]["biome_source"]["biomes"] = winter_biomes
with open(os.path.join(current_dir, file_dir), "w") as f:
    json.dump(data, f, indent=2)