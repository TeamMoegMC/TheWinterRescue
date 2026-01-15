# AI Contributing Guide for KubeJS Project

This document serves as a reference for future AI assistants working on "The Winter Rescue" modpack's KubeJS scripts and data.

## Project Structure

- **Main Directory**: `/Users/wyc/Library/Application Support/PrismLauncher/instances/TWR-1.20-Dev/.minecraft/kubejs/`
- **Logic & Recipes**: `server_scripts/src/`
- **Registries (New Items/Blocks)**: `startup_scripts/src/`
- **UI & Client Logic**: `client_scripts/src/`
- **Assets (Translations/Textures)**: `assets/`
- **Custom Data (JSON)**: `data/`

## Key Patterns & Conventions

### 1. Unified Recipe Helpers
Always check `server_scripts/src/functions.js` before adding new recipes. It contains complex wrappers for mod-specific machines (priority `1005`).
- **Example Usage**: `event.custom(chemical(inputs, input_fluids, outputs, output_fluids, time))`

### 2. Registry Logic
Registering new items is done in `startup_scripts/src/registries/item.js`. 
- **Pattern**: Add item IDs to the `generalItems` array for standard items, or `createTransitionalItems` for sequenced assembly steps.

### 3. Progression Gating (Recipe Removal)
Before adding a new way to craft an item, check if it was intentionally removed in `server_scripts/src/recipes/remove.js`. 
- **Note**: Mod-wide removals are common (e.g., `event.remove({ mod: "steampowered" })`).

### 4. Tagging
Heavily utilized for unification and grouping. Modify `server_scripts/src/tags/item_tags.js` to add items to existing groups (like `#forge:plates`).

### 5. Translations
Custom items registered through KubeJS **must** have language entries in `assets/kubejs/lang/en_us.json` (and other languages) to avoid "item.kubejs.foo" display names.

## Common Operations

### Adding a New Item
1. Register in `startup_scripts/src/registries/item.js`.
2. Add translation in `assets/kubejs/lang/en_us.json`.
3. Give it a tag in `server_scripts/src/tags/item_tags.js` if it's a metal/material.
4. Define a recipe in `server_scripts/src/recipes/`.

### Modifying a Recipe
1. Use `event.remove({ id: '...' })` in `remove.js` to disable the old one.
2. Define the new recipe in an appropriate file in `server_scripts/src/recipes/` (e.g., `shaped.js` or `metal.js`).

## Dev Tools
- Use the `probe/` directory for type definitions to improve code accuracy.
- Reload scripts in-game (if possible) via `/kubejs reload server_scripts`.
