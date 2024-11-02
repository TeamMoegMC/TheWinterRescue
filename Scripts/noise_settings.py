import json
import os


# get current dir
current_dir = os.getcwd()
file_dir = "kubejs/data/minecraft/worldgen/noise_settings/overworld.json"

with open(os.path.join(current_dir, file_dir)) as f:
    noise_settings = json.load(f)

# transform to indent 2 and save back
with open(os.path.join(current_dir, file_dir), "w") as f:
    json.dump(noise_settings, f, indent=2)