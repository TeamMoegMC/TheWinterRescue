craftingTable.removeRecipe(<item:rankine:crucible>);
craftingTable.removeRecipe(<item:rankine:power_cell>);
craftingTable.removeRecipe(<item:rankine:power_cell_2>);
craftingTable.removeRecipe(<item:rankine:power_cell_3>);
craftingTable.removeRecipe(<item:rankine:power_cell_4>);

craftingTable.removeRecipe(<item:rankine:high_refractory_brick>);
craftingTable.removeRecipe(<item:rankine:ultra_high_refractory_brick>);
craftingTable.removeRecipe(<item:rankine:induction_furnace>);
craftingTable.removeRecipe(<item:rankine:steel_gold_pan>);

furnace.addRecipe("magnesium_oxide",<item:kubejs:magnesium_oxide>,<item:kubejs:magnesium_dust>,0,200);
furnace.addRecipe("quicklime",<item:rankine:quicklime>,<item:kubejs:flux>,0,200);
furnace.addRecipe("dust_sulfur",<item:immersiveengineering:dust_sulfur>,<item:rankine:pyrite_ore>,0,200);

craftingTable.addShaped("burning_chamber",<item:frostedheart:burning_chamber>,[
  [<item:kubejs:cast_iron_plate>,<tag:items:forge:plates/iron>,<item:kubejs:cast_iron_plate>],
  [<tag:items:forge:plates/iron>,<item:immersiveengineering:plate_copper>,<tag:items:forge:plates/iron>],
  [<item:kubejs:cast_iron_plate>,<tag:items:forge:plates/iron>,<item:kubejs:cast_iron_plate>]
]);
craftingTable.addShaped("burning_chamber_core",<item:frostedheart:burning_chamber_core>,[
  [<item:kubejs:cast_iron_plate>,<item:kubejs:cast_iron_plate>,<item:kubejs:cast_iron_plate>],
  [<item:kubejs:cast_iron_plate>,<tag:items:forge:plates/iron>,<item:kubejs:cast_iron_plate>],
  [<item:kubejs:cast_iron_plate>,<item:kubejs:cast_iron_plate>,<item:kubejs:cast_iron_plate>]
]);
craftingTable.removeRecipe(<item:rankine:high_refractory_bricks>);
craftingTable.addShaped("high_refractory_bricks",<item:rankine:high_refractory_bricks>*2,[
  [<item:rankine:high_refractory_brick>,<item:rankine:mortar>,<item:rankine:high_refractory_brick>],
  [<item:rankine:mortar>,<item:rankine:high_refractory_brick>,<item:rankine:mortar>],
  [<item:rankine:high_refractory_brick>,<item:rankine:mortar>,<item:rankine:high_refractory_brick>]
]);