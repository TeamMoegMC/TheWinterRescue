
craftingTable.removeRecipe(<item:immersiveengineering:dust_iron>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_copper>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_aluminum>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_lead>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_silver>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_nickel>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_uranium>);


recipeShaped("coke_brick",<item:immersiveengineering:cokebrick>*3,[
  [<item:minecraft:brick>,<item:rankine:mortar>,<item:minecraft:brick>],
  [<item:electrodynamics:platebronze>,<item:minecraft:brick>,<item:electrodynamics:platebronze>],
  [<item:minecraft:brick>,<item:rankine:mortar>,<item:minecraft:brick>]
]);

recipeShaped("blast_brick",<item:immersiveengineering:blastbrick>*3,[
  [<item:immersiveengineering:plate_iron>,<item:rankine:mortar>,<item:immersiveengineering:plate_iron>],
  [<item:rankine:mortar>,<item:rankine:refractory_bricks>,<item:rankine:mortar>],
  [<item:immersiveengineering:plate_iron>,<item:rankine:mortar>,<item:immersiveengineering:plate_iron>]
]);

recipeShaped("wirecutter",<item:immersiveengineering:wirecutter>,[
  [<item:immersiveengineering:plate_iron>,<item:minecraft:air>,<item:immersiveengineering:plate_iron>],
  [<item:minecraft:air>,<item:immersiveengineering:stick_treated>,<item:minecraft:air>],
  [<item:immersiveengineering:stick_treated>,<item:minecraft:air>,<item:immersiveengineering:stick_treated>]
]);

recipeShapeless("wirecopper", <item:electrodynamics:wirecopper>,[<tag:items:forge:plates/copper>,<item:immersiveengineering:wirecutter>]);
//blastfurnace
<recipetype:immersiveengineering:blast_furnace>.removeRecipe(<item:immersiveengineering:ingot_steel>);
<recipetype:immersiveengineering:blast_furnace>.removeRecipe(<item:immersiveengineering:storage_steel>);

<recipetype:immersiveengineering:blast_furnace>.addRecipe("cast_iron",<item:minecraft:iron_ingot>, 600,<item:rankine:cast_iron_alloy>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_copper",<tag:items:forge:ores/copper>, 400,<item:electrodynamics:ingotcopper>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_tin",<tag:items:forge:ores/tin>, 400,<item:electrodynamics:ingottin>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_iron",<tag:items:forge:ores/iron>, 400,<item:minecraft:iron_ingot>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_nickel",<tag:items:forge:ores/nickel>, 400,<item:immersiveengineering:ingot_nickel>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_lead",<tag:items:forge:ores/lead>, 400,<item:electrodynamics:ingotlead>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("stibnite_ore",<item:rankine:stibnite_ore>, 400,<item:rankine:antimony_ingot>,<item:immersiveengineering:slag>);




<recipetype:immersiveengineering:alloy>.addRecipe("battery_alloy",<item:rankine:antimony_ingot>,<item:electrodynamics:ingotlead>*3, 400,<item:kubejs:battery_alloy>*4);

