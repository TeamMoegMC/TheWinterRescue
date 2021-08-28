craftingTable.removeRecipe(<item:rankine:high_refractory_brick>);
craftingTable.removeRecipe(<item:rankine:ultra_high_refractory_brick>);

furnace.addRecipe("magnesium_oxide",<item:kubejs:magnesium_oxide>,<item:kubejs:magnesium_dust>,0,200);
furnace.addRecipe("quicklime",<item:rankine:quicklime>,<item:kubejs:flux>,0,200);
furnace.addRecipe("dust_sulfur",<item:immersiveengineering:dust_sulfur>,<item:rankine:pyrite_ore>,0,200);

craftingTable.addShaped("burning_chamber",<item:frostedheart:burning_chamber>,[
  [<item:kubejs:cast_iron_plate>,<tag:items:forge:plates/iron>,<item:kubejs:cast_iron_plate>],
  [<tag:items:forge:plates/iron>,<tag:items:forge:plates/copper>,<tag:items:forge:plates/iron>],
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