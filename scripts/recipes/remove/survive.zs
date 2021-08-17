import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import mods.jei.JEI;

var removingItems as IItemStack[] = [
<item:survive:wool_hat>,
<item:survive:wool_jacket>,
<item:survive:wool_pants>,
<item:survive:wool_boots>
];

for i in 0 .. removingItems.length {
    craftingTable.removeRecipe(removingItems[i]);
    mods.jei.JEI.hideItem(removingItems[i]);
}