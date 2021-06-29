
<recipetype:immersiveengineering:blast_furnace>.removeRecipe(<item:immersiveengineering:ingot_steel>);

recipeShaped("coke_brick",<item:immersiveengineering:cokebrick>*3,[
  [<item:minecraft:brick>,<item:rankine:mortar>,<item:minecraft:brick>],
  [<item:rankine:mortar>,<item:minecraft:brick>,<item:rankine:mortar>],
  [<item:minecraft:brick>,<item:rankine:mortar>,<item:minecraft:brick>]
]);

recipeShaped("blast_brick",<item:immersiveengineering:blastbrick>*3,[
  [<item:immersiveengineering:plate_iron>,<item:rankine:mortar>,<item:immersiveengineering:plate_iron>],
  [<item:rankine:mortar>,<item:rankine:refractory_bricks>,<item:rankine:mortar>],
  [<item:immersiveengineering:plate_iron>,<item:rankine:mortar>,<item:immersiveengineering:plate_iron>]
]);