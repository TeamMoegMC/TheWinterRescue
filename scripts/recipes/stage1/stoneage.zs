import mods.stone_age.DryingRackManager;
import mods.stone_age.TreeStumpManager;
import mods.stone_age.MillstoneManager;

<recipetype:stone_age:drying_rack>.addRecipe("grass", <item:charcoal_pit:straw>, <item:primalwinter:snowy_vine>, 600, "grass");

<recipetype:stone_age:tree_stump>.addRecipe("copper_plate", <item:immersiveengineering:plate_copper>,<tag:items:ages_api:hammers>, <item:electrodynamics:ingotcopper>*2, 3);
<recipetype:stone_age:tree_stump>.addRecipe("flux", <item:kubejs:flux>*2, <tag:items:ages_api:hammers>, <tag:items:thelastwinter:flux_itemblock>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("al2o3", <item:rankine:alumina>, <tag:items:ages_api:hammers>, <item:rankine:bauxite_ore>, 2);
//planks
<recipetype:stone_age:tree_stump>.addRecipe("oak_plank", <item:minecraft:oak_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_oak_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("spruce_plank", <item:minecraft:spruce_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_spruce_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("birch_plank", <item:minecraft:birch_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_birch_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("jungle_plank", <item:minecraft:jungle_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_jungle_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("acacia_plank", <item:minecraft:acacia_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_acacia_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("dark_oak_plank", <item:minecraft:dark_oak_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_dark_oak_log>, 2);

<recipetype:stone_age:millstone>.addRecipe("al2o3_dust", <item:kubejs:alumina_dust>*2,<item:kubejs:alumina_dust>,<item:rankine:alumina>,0.4, 2);
<recipetype:stone_age:millstone>.addRecipe("kaolin_dust", <item:kubejs:kaolin_dust>,<item:kubejs:kaolin_dust>,<item:rankine:kaolinite_ball>,0.3, 1);

flintRecipe("grassbed",<item:stone_age:dried_grass_bed>,[
  [<item:minecraft:air>,<item:minecraft:air>,<item:charcoal_pit:straw>],
  [<item:charcoal_pit:straw>,<item:charcoal_pit:straw>,<item:charcoal_pit:straw>],
  [<tag:items:minecraft:wooden_slabs>,<tag:items:minecraft:wooden_slabs>,<tag:items:minecraft:wooden_slabs>]
],<item:rankine:flint_axe>);