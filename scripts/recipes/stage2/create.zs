import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;


var Items as IItemStack[] = [
<item:create:water_wheel>,<item:create:mechanical_drill>,
<item:create:mechanical_saw>,<item:create:wand_of_symmetry>,
<item:create:windmill_bearing>,<item:create:furnace_engine>,
<item:create:deployer>,<item:create:mechanical_plough>,
<item:create:schematicannon>
];
for i in 0 .. Items.length {
    craftingTable.removeRecipe(Items[i]);
}