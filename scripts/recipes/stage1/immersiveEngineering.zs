
<recipetype:immersiveengineering:alloy>.addRecipe("stone",<item:minecraft:cobblestone>,<item:minecraft:cobblestone>, 200,<item:minecraft:stone>*2);
<recipetype:immersiveengineering:alloy>.addRecipe("stone2",<tag:items:forge:stone>, <tag:items:forge:stone>, 200,<item:minecraft:stone>*2);
craftingTable.addShaped("generator_brick",<item:frostedheart:generator_brick>*3,[
  [<item:minecraft:stone>,<item:minecraft:clay_ball>,<item:minecraft:stone>],
  [<item:minecraft:brick>,<item:minecraft:stone>,<item:minecraft:brick>],
  [<item:minecraft:stone>,<item:minecraft:clay_ball>,<item:minecraft:stone>]
]);
craftingTable.addShaped("amplifier_r1",<item:frostedheart:generator_amplifier_r1>,[
  [<item:minecraft:stone>,<item:minecraft:brick>,<item:minecraft:stone>],
  [<item:minecraft:clay_ball>,<item:electrodynamics:ingotcopper>,<item:minecraft:clay_ball>],
  [<item:minecraft:stone>,<item:minecraft:brick>,<item:minecraft:stone>]
]);
craftingTable.addShaped("core_t1",<item:frostedheart:generator_core_t1>,[
  [<item:minecraft:brick>,<item:electrodynamics:ingotcopper>,<item:minecraft:brick>],
  [<item:electrodynamics:ingotcopper>,<item:frostedheart:energy_core>,<item:electrodynamics:ingotcopper>],
  [<item:minecraft:brick>,<item:electrodynamics:ingotcopper>,<item:minecraft:brick>]
]);