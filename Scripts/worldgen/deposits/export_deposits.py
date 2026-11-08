"""Export production deposit data and wire the normal preset without changing its climate rows."""
import argparse
from copy import deepcopy
import json
from pathlib import Path

PACK = Path(__file__).resolve().parents[3]
DATA = PACK / "kubejs/data"
AUTHORED = Path(__file__).resolve().parent
REGIONS = "the_winter_rescue:deposits/regions"
SETTINGS = "the_winter_rescue:regional_overworld"


def read(path):
    return json.loads(path.read_text(encoding="utf-8"))


def configure_preset(preset):
    """Also called by biome_source_tree.ipynb, keeping regeneration on the same path."""
    generator = preset["dimensions"]["minecraft:overworld"]["generator"]
    source = generator["biome_source"]
    # Keep the native parameter-list schema flat: no second copy or reindent of all climate rows.
    source["type"] = "frostedheart:deposit_biomes"
    source["biome"] = read(AUTHORED / "profiles/hydrothermal_deposits.json")["biome"]
    generator["settings"] = SETTINGS
    return preset


def resources():
    profile = read(AUTHORED / "profiles/hydrothermal_deposits.json")
    placement = read(AUTHORED / "placement.json")
    preset = configure_preset(read(DATA / "minecraft/worldgen/world_preset/normal.json"))
    settings = read(DATA / "minecraft/worldgen/noise_settings/overworld.json")
    router = settings["noise_router"]
    depth, density, floodedness = router["depth"], router["final_density"], router["fluid_level_floodedness"]
    regions = {"type": "frostedheart:deposit_regions", "input": depth,
               "seed_noise": REGIONS, "settings": placement}
    def terrain(original, field):
        return {"type": "frostedheart:deposit_terrain", "input": original, "regions": REGIONS, "field": field}
    cavity = terrain(0, "cavity")
    final = terrain(density, "density")
    final["shape"] = {"type": "minecraft:interpolated", "argument": "the_winter_rescue:deposits/cavity"}
    router.update(depth=REGIONS, final_density=final, fluid_level_floodedness=terrain(floodedness, "floodedness"))
    values = {
        "minecraft/worldgen/world_preset/normal.json": preset,
        "the_winter_rescue/worldgen/noise_settings/regional_overworld.json": settings,
        "the_winter_rescue/worldgen/noise/deposits/regions.json": {"firstOctave": -5, "amplitudes": [1]},
        "the_winter_rescue/worldgen/density_function/deposits/regions.json": regions,
        "the_winter_rescue/worldgen/density_function/deposits/cavity.json": cavity,
    }
    biome_rows = preset["dimensions"]["minecraft:overworld"]["generator"]["biome_source"]["biomes"]
    biomes = sorted({row["biome"] for row in biome_rows})
    values["the_winter_rescue/tags/worldgen/biome/deposit_generation.json"] = {
        "replace": False, "values": ["#minecraft:is_overworld", "#the_winter_rescue:all_twr", *biomes]}
    for name, surface, step in [("main", False, "local_modifications"), ("surface", True, "vegetal_decoration")]:
        feature_id = "the_winter_rescue:deposits/" + name
        config = {key: deepcopy(profile[key]) for key in ("mineral", "secondary", "rock")}
        config["surface_only"] = surface
        values[f"the_winter_rescue/worldgen/configured_feature/deposits/{name}.json"] = {
            "type": "frostedheart:deposit", "config": config}
        values[f"the_winter_rescue/worldgen/placed_feature/deposits/{name}.json"] = {"feature": feature_id, "placement": []}
        modifier = "deposits" if name == "main" else "deposit_surface"
        values[f"the_winter_rescue/forge/biome_modifier/{modifier}.json"] = {
            "type": "forge:add_features", "biomes": "#the_winter_rescue:deposit_generation", "features": feature_id, "step": step}
    return values


def export_deposits(write=False):
    changed = []
    for relative, value in resources().items():
        path = DATA / relative
        if path.exists() and read(path) == value:
            continue
        changed.append(relative)
        if write:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return changed


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--write", action="store_true")
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    changed = export_deposits(args.write)
    if changed:
        print(("Wrote: " if args.write else "Out of date: ") + ", ".join(changed))
    else:
        print("Deposit data is current")
    return int(args.check and bool(changed))


if __name__ == "__main__":
    raise SystemExit(main())
