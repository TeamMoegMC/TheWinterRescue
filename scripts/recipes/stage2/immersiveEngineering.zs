
<recipetype:immersiveengineering:blast_furnace>.removeRecipe(<item:immersiveengineering:ingot_steel>);
<recipetype:immersiveengineering:blast_furnace>.removeRecipe(<item:immersiveengineering:storage_steel>);

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

<recipetype:immersiveengineering:blast_furnace>.addRecipe("cast_iron",<item:minecraft:iron_ingot>, 600,<item:rankine:cast_iron_alloy>,<item:immersiveengineering:slag>);

<recipetype:immersiveengineering:alloy>.addRecipe("battery_alloy",<item:rankine:antimony_ingot>,<item:electrodynamics:ingotlead>*3, 400,<item:kubejs:battery_alloy>*4);
