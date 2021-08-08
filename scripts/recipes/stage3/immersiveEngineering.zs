
craftingTable.removeRecipe(<item:immersiveengineering:drillhead_iron>);
craftingTable.removeRecipe(<item:immersiveengineering:drillhead_steel>);

recipeShaped("small_tree_cutter",<item:engineersdecor:small_tree_cutter>,[
  [<tag:items:forge:plates/steel>,<item:electrodynamics:circuitadvanced>,<tag:items:forge:plates/steel>],
  [<tag:items:forge:plates/steel>,<item:immersiveengineering:light_engineering>,<item:immersiveengineering:sawblade>],
  [<tag:items:forge:plates/steel>,<item:immersiveengineering:treated_wood_horizontal>,<tag:items:forge:plates/steel>]
]);

recipeShaped("heavy_engineering",<item:immersiveengineering:heavy_engineering>*2,[
  [<item:kubejs:tungsten_steel_plate>,<item:immersiveengineering:component_steel>,<item:kubejs:tungsten_steel_plate>],
  [<item:immersiveengineering:component_steel>,<item:rankine:tungsten_heavy_alloy>,<item:immersiveengineering:component_steel>],
  [<item:kubejs:tungsten_steel_plate>,<item:immersiveengineering:component_steel>,<item:kubejs:tungsten_steel_plate>]
]);

recipeShaped("light_engineering",<item:immersiveengineering:light_engineering>*2,[
  [<item:immersiveengineering:plate_aluminum>,<item:immersiveengineering:component_steel>,<item:immersiveengineering:plate_aluminum>],
  [<item:immersiveengineering:component_steel>,<item:rankine:tungsten_heavy_alloy>,<item:immersiveengineering:component_steel>],
  [<item:immersiveengineering:plate_aluminum>,<item:immersiveengineering:component_steel>,<item:immersiveengineering:plate_aluminum>]
]);