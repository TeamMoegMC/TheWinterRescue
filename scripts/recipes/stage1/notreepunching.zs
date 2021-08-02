craftingTable.removeRecipe(<item:notreepunching:plant_string>);
craftingTable.removeRecipe(<item:notreepunching:clay_brick>);
craftingTable.removeRecipe(<item:notreepunching:flint_pickaxe>);

craftingTable.removeByName("notreepunching:birch_planks_with_flint_axe");
craftingTable.removeByName("notreepunching:acacia_planks_with_flint_axe");
craftingTable.removeByName("notreepunching:oak_planks_with_flint_axe");
craftingTable.removeByName("notreepunching:jungle_planks_with_flint_axe");
craftingTable.removeByName("notreepunching:dark_oak_planks_with_flint_axe");
craftingTable.removeByName("notreepunching:spruce_planks_with_flint_axe");


recipes.removeRecipe(<item:notreepunching:ceramic_small_vessel>);
recipes.removeRecipe(<item:notreepunching:ceramic_large_vessel>);

recipeShaped("clay_tool", <item:notreepunching:clay_tool>,[
  [<item:minecraft:stick>,<item:minecraft:stick>],
  [<item:minecraft:stick>,<item:minecraft:air>]
]);
recipeShaped("flint_knife", <item:notreepunching:flint_knife>,[
  [<item:minecraft:air>,<item:minecraft:flint>],
  [<item:minecraft:stick>,<item:minecraft:air>]
]);