import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
furnace.removeRecipe(<item:immersiveengineering:ingot_aluminum>,<item:immersiveengineering:ore_aluminum>);

furnace.removeRecipe(<item:immersiveengineering:ingot_nickel>);
furnace.removeRecipe(<item:minecraft:iron_ingot>);
furnace.removeRecipe(<item:immersiveengineering:ingot_aluminum>);


var Items as IItemStack[] = [
<item:minecraft:iron_ingot>,<item:rankine:magnesium_ingot>,
<item:rankine:tungsten_ingot>,<item:rankine:titanium_ingot>,
<item:rankine:nickel_ingot>,<item:rankine:copper_ingot>,
<item:rankine:aluminum_ingot>,<item:rankine:chromium_ingot>,
<item:minecraft:iron_nugget>,<item:immersiveengineering:ingot_aluminum>,

<item:rankine:tungsten_block>,<item:rankine:titanium_block>,
<item:rankine:nickel_block>,<item:rankine:copper_block>,
<item:rankine:aluminum_block>,<item:rankine:chromium_block>
];
for i in 0 .. Items.length {
    blastFurnace.removeRecipe(Items[i]);
}

// furnace.removeByModid("better_diving");
