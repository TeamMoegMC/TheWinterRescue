craftingTable.removeRecipe(<item:immersiveengineering:dust_iron>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_copper>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_aluminum>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_lead>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_silver>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_nickel>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_uranium>);
craftingTable.removeRecipe(<item:immersiveengineering:cloche>);
craftingTable.removeRecipe(<item:immersiveengineering:dynamo>);
craftingTable.removeRecipe(<item:immersiveengineering:drillhead_iron>);
craftingTable.removeRecipe(<item:immersiveengineering:drillhead_steel>);
craftingTable.removeRecipe(<item:immersiveengineering:circuit_table>);
craftingTable.removeRecipe(<item:immersivepetroleum:speedboat>);
craftingTable.removeRecipe(<item:immersiveengineering:sample_drill>);

recipeShaped("coke_brick",<item:immersiveengineering:cokebrick>*3,[
  [<item:minecraft:brick>,<item:rankine:mortar>,<item:minecraft:brick>],
  [<item:kubejs:bronze_plate>,<item:minecraft:brick>,<item:kubejs:bronze_plate>],
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

recipeShapeless("wirecopper", <item:immersiveengineering:wire_copper>,[<tag:items:forge:plates/copper>,<item:immersiveengineering:wirecutter>.anyDamage().transformDamage(1)]);

//blastfurnace
<recipetype:immersiveengineering:blast_furnace>.removeRecipe(<item:immersiveengineering:ingot_steel>);
<recipetype:immersiveengineering:blast_furnace>.removeRecipe(<item:immersiveengineering:storage_steel>);

<recipetype:immersiveengineering:blast_furnace>.addRecipe("aluminum_dust",<item:immersiveengineering:dust_aluminum>, 400,<item:immersiveengineering:ingot_aluminum>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("cast_iron",<item:minecraft:iron_ingot>, 600,<item:rankine:cast_iron_alloy>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_copper",<item:rankine:malachite>, 400,<item:immersiveengineering:ingot_copper>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_copper2",<item:kubejs:native_copper>, 400,<item:immersiveengineering:ingot_copper>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_tin",<item:kubejs:native_tin>, 400,<item:rankine:tin_ingot>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_tin2",<item:rankine:cassiterite>, 400,<item:rankine:tin_ingot>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_iron",<item:rankine:magnetite>, 400,<item:minecraft:iron_ingot>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_iron2",<item:kubejs:pyrite>, 400,<item:minecraft:iron_ingot>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_nickel",<item:rankine:pentlandite>, 400,<item:immersiveengineering:ingot_nickel>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_lead",<item:rankine:galena>, 400,<item:immersiveengineering:ingot_lead>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_antimony",<item:rankine:stibnite>, 400,<item:rankine:antimony_ingot>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_gold",<item:kubejs:gold>, 400,<item:minecraft:gold_ingot>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_silver",<item:kubejs:silver>, 400,<item:rankine:silver_ingot>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_halite",<item:kubejs:halite>, 400,<item:rankine:salt>,<item:immersiveengineering:slag>);
<recipetype:immersiveengineering:blast_furnace>.addRecipe("ores_vanadium",<item:rankine:vanadinite>, 400,<item:rankine:vanadium_ingot>,<item:immersiveengineering:slag>);

//alloying
<recipetype:immersiveengineering:alloy>.addRecipe("battery_alloy",<tag:items:forge:ingots/lead>*3,<tag:items:forge:ingots/antimony>, 400,<item:kubejs:battery_alloy>*4);

