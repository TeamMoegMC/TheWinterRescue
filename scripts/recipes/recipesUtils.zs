import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;

public function recipeShaped(name as string,output as IItemStack,input as IIngredient[][]) as void{
   craftingTable.removeRecipe(output);
   craftingTable.addShaped(name, output, input);
}
public function recipeShapeless(name as string,output as IItemStack,input as IIngredient[]) as void{
   craftingTable.removeRecipe(output);
   craftingTable.addShapeless(name, output, input);
}
public function flintRecipe(name as string,output as IItemStack,input as IIngredient[][],tool as IIngredient) as void{
   <recipetype:stone_age:flint_workbench>.removeRecipe(output);
   <recipetype:stone_age:flint_workbench>.addRecipe(name, output, input,tool);
}

