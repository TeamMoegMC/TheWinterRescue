import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
public function recipeShaped(name as string,output as IItemStack,input as IIngredient[][]) as void{
   craftingTable.removeRecipe(output);
   craftingTable.addShaped(name, output, input);
}
