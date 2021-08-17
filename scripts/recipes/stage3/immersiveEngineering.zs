
craftingTable.removeRecipe(<item:immersiveengineering:drillhead_iron>);
craftingTable.removeRecipe(<item:immersiveengineering:drillhead_steel>);
craftingTable.removeRecipe(<item:immersiveengineering:circuit_table>);
craftingTable.removeRecipe(<item:immersivepetroleum:speedboat>);
craftingTable.removeRecipe(<item:immersiveengineering:sample_drill>);

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
  [<tag:items:forge:plates/aluminum>,<item:immersiveengineering:component_steel>,<tag:items:forge:plates/aluminum>],
  [<item:immersiveengineering:component_steel>,<tag:items:forge:ingots/steel>,<item:immersiveengineering:component_steel>],
  [<tag:items:forge:plates/aluminum>,<item:immersiveengineering:component_steel>,<tag:items:forge:plates/aluminum>]
]);

recipeShaped("capacitor_lv",<item:immersiveengineering:capacitor_lv>,[
  [<item:minecraft:iron_ingot>,<item:minecraft:iron_ingot>,<item:minecraft:iron_ingot>],
  [<item:electrodynamics:battery>,<item:electrodynamics:battery>,<item:electrodynamics:battery>],
  [<item:immersiveengineering:treated_wood_horizontal>,<item:minecraft:redstone>,<item:immersiveengineering:treated_wood_horizontal>]
]);
recipeShaped("capacitor_mv",<item:immersiveengineering:capacitor_mv>,[
  [<tag:items:forge:plates/aluminum>,<tag:items:forge:plates/aluminum>,<tag:items:forge:plates/aluminum>],
  [<item:electrodynamics:battery>,<item:electrodynamics:battery>,<item:electrodynamics:battery>],
  [<item:immersiveengineering:treated_wood_horizontal>,<item:minecraft:redstone>,<item:immersiveengineering:treated_wood_horizontal>]
]);
recipeShaped("capacitor_hv",<item:immersiveengineering:capacitor_hv>,[
  [<item:kubejs:tungsten_steel_plate>,<item:kubejs:tungsten_steel_plate>,<item:kubejs:tungsten_steel_plate>],
  [<item:electrodynamics:battery>,<item:electrodynamics:battery>,<item:electrodynamics:battery>],
  [<item:immersiveengineering:treated_wood_horizontal>,<item:minecraft:redstone>,<item:immersiveengineering:treated_wood_horizontal>]
]);
recipeShaped("fluid_pump",<item:immersiveengineering:fluid_pump>,[
  [<item:minecraft:air>,<item:electrodynamics:circuitbasic>,<item:minecraft:air>],
  [<tag:items:forge:plates/steel>,<item:electrodynamics:electricpump>,<tag:items:forge:plates/steel>],
  [<tag:items:forge:plates/steel>,<item:immersiveengineering:fluid_pipe>,<tag:items:forge:plates/steel>]
]);
recipeShaped("factory_hopper",<item:engineersdecor:factory_hopper>,[
  [<item:minecraft:air>,<item:electrodynamics:circuitbasic>,<item:minecraft:air>],
  [<tag:items:forge:plates/steel>,<item:minecraft:hopper>,<tag:items:forge:plates/steel>],
  [<tag:items:forge:plates/steel>,<tag:items:forge:plates/steel>,<tag:items:forge:plates/steel>]
]);
<recipetype:immersiveengineering:mixer>.addRecipe("sulphuric_acid",<tag:fluids:minecraft:water>, [<item:electrodynamics:oxidetrisulfur>], 4000, <fluid:electrodynamics:fluidsulfuricacid>, 2000);
<recipetype:immersiveengineering:mixer>.addRecipe("fluidsulfuricacid",<tag:fluids:thelastwinter:fluidsulfuricacid>, [<item:minecraft:glowstone_dust>], 4000, <fluid:kubejs:hydrogen_fluoride>, 1000);
<recipetype:immersiveengineering:mixer>.addRecipe("hydrogen_fluoride",<tag:fluids:thelastwinter:hydrogen_fluoride>, [<item:kubejs:aluminium_oxide_dust>], 4000, <fluid:kubejs:fluoroaluminic_acid>, 1000);
<recipetype:immersiveengineering:mixer>.addRecipe("fluoroaluminic_acid",<tag:fluids:thelastwinter:fluoroaluminic_acid>, [<tag:items:forge:salt>], 4000, <fluid:kubejs:cryolite>, 1000);
<recipetype:immersiveengineering:mixer>.addRecipe("lime_water",<tag:fluids:minecraft:water>, [<item:rankine:quicklime>], 4000, <fluid:kubejs:lime_water>, 500);