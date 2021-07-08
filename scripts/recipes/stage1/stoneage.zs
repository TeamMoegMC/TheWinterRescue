import mods.stone_age.DryingRackManager;
import mods.stone_age.TreeStumpManager;
import mods.stone_age.MillstoneManager;

<recipetype:stone_age:drying_rack>.addRecipe("grass", <item:charcoal_pit:straw>, <item:primalwinter:snowy_vine>, 600, "grass");

<recipetype:stone_age:tree_stump>.addRecipe("copper_plate", <item:immersiveengineering:plate_copper>,<tag:items:ages_api:hammers>, <item:electrodynamics:ingotcopper>*2, 3);
<recipetype:stone_age:tree_stump>.addRecipe("bronze_plate", <item:electrodynamics:platebronze>,<tag:items:ages_api:hammers>, <item:electrodynamics:ingotbronze>*2, 3);
<recipetype:stone_age:tree_stump>.addRecipe("plate_iron", <item:immersiveengineering:plate_iron>,<tag:items:ages_api:hammers>, <item:minecraft:iron_ingot>*2, 3);
<recipetype:stone_age:tree_stump>.addRecipe("cast_iron_plate", <item:kubejs:cast_iron_plate>,<tag:items:ages_api:hammers>, <item:rankine:cast_iron_alloy>*2, 3);
<recipetype:stone_age:tree_stump>.addRecipe("battery_alloy_plate", <item:kubejs:battery_alloy_plate>,<tag:items:ages_api:hammers>, <item:kubejs:battery_alloy>*2, 3);

<recipetype:stone_age:tree_stump>.addRecipe("flux", <item:kubejs:flux>*2, <tag:items:ages_api:hammers>, <tag:items:thelastwinter:flux_itemblock>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("al2o3", <item:rankine:alumina>, <tag:items:ages_api:hammers>, <item:rankine:bauxite_ore>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("redstone", <item:minecraft:redstone>*2, <tag:items:ages_api:hammers>, <item:rankine:cinnabar_ore>, 2);
//planks
<recipetype:stone_age:tree_stump>.addRecipe("oak_plank", <item:minecraft:oak_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_oak_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("spruce_plank", <item:minecraft:spruce_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_spruce_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("birch_plank", <item:minecraft:birch_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_birch_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("jungle_plank", <item:minecraft:jungle_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_jungle_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("acacia_plank", <item:minecraft:acacia_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_acacia_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("dark_oak_plank", <item:minecraft:dark_oak_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_dark_oak_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("treated_wood_slab",<item:immersiveengineering:slab_treated_wood_horizontal>*2,<tag:items:forge:axes>,<item:immersiveengineering:treated_wood_horizontal>, 2);

<recipetype:stone_age:millstone>.addRecipe("al2o3_dust", <item:kubejs:impure_alumina_dust>*2,<item:kubejs:impure_alumina_dust>,<item:rankine:alumina>,0.4, 2);
<recipetype:stone_age:millstone>.addRecipe("kaolin_dust", <item:kubejs:kaolin_dust>,<item:kubejs:kaolin_dust>,<item:rankine:kaolinite_ball>,0.3, 1);

<recipetype:stone_age:flint_workbench>.removeRecipe(<item:minecraft:furnace>);
<recipetype:stone_age:flint_workbench>.removeRecipe(<item:stone_age:backpack>);


flintRecipe("grassbed",<item:stone_age:dried_grass_bed>,[
  [<item:minecraft:air>,<item:minecraft:air>,<item:charcoal_pit:straw>],
  [<item:charcoal_pit:straw>,<item:charcoal_pit:straw>,<item:charcoal_pit:straw>],
  [<tag:items:minecraft:wooden_slabs>,<tag:items:minecraft:wooden_slabs>,<tag:items:minecraft:wooden_slabs>]
],<item:rankine:flint_axe>);

flintRecipe("log_pile",<item:charcoal_pit:log_pile>,[
  [<tag:items:minecraft:logs_that_burn>,<tag:items:minecraft:logs_that_burn>,<tag:items:minecraft:logs_that_burn>],
  [<tag:items:minecraft:logs_that_burn>,<tag:items:minecraft:logs_that_burn>,<tag:items:minecraft:logs_that_burn>],
  [<tag:items:minecraft:logs_that_burn>,<tag:items:minecraft:logs_that_burn>,<tag:items:minecraft:logs_that_burn>]
],<item:rankine:flint_axe>);

flintRecipe("workbench",<item:minecraft:crafting_table>,[
  [<item:minecraft:iron_ingot>,<item:minecraft:iron_ingot>,<item:minecraft:iron_ingot>],
  [<item:immersiveengineering:treated_wood_horizontal>,<item:immersiveengineering:treated_wood_horizontal>,<item:immersiveengineering:treated_wood_horizontal>],
  [<item:immersiveengineering:slab_treated_wood_horizontal>,<item:immersiveengineering:slab_treated_wood_horizontal>,<item:immersiveengineering:slab_treated_wood_horizontal>]
],<tag:items:notreepunching:saws>);

flintRecipe("millstone",<item:stone_age:millstone>,[
  [<item:minecraft:air>,<item:minecraft:stick>,<item:minecraft:air>],
  [<item:minecraft:air>,<tag:items:forge:stones/andesite>,<item:minecraft:air>],
  [<item:minecraft:stone>,<tag:items:forge:stones/granite>,<item:minecraft:stone>]
],<item:stone_age:flint_knife>);

flintRecipe("main_bloomery",<item:charcoal_pit:main_bloomery>,[
  [<item:rankine:mortar>,<item:electrodynamics:platebronze>,<item:rankine:mortar>],
  [<item:electrodynamics:platebronze>,<item:charcoal_pit:sandy_brick>,<item:electrodynamics:platebronze>],
  [<item:rankine:mortar>,<item:electrodynamics:platebronze>,<item:rankine:mortar>]
],<item:stone_age:flint_knife>);


flintRecipe("hammer", <item:immersiveengineering:hammer>,[
  [<item:minecraft:air>,<tag:items:forge:ingots/copper>,<item:stone_age:leather_strip>],
  [<item:minecraft:air>,<tag:items:forge:rods/wooden>,<tag:items:forge:ingots/copper>],
  [<tag:items:forge:rods/wooden>,<item:minecraft:air>,<item:minecraft:air>]
],<item:stone_age:flint_knife>);

craftingTable.removeRecipe(<item:charcoal_pit:sandy_tuyere>);
<recipetype:stone_age:flint_workbench>.addRecipe("tuyere",<item:charcoal_pit:sandy_tuyere>,[
  [<item:charcoal_pit:sandy_brick_item>,<item:rankine:mortar>,<item:charcoal_pit:sandy_brick_item>],
  [<item:rankine:mortar>,<item:immersiveengineering:plate_copper>,<item:rankine:mortar>],
  [<item:charcoal_pit:sandy_brick_item>,<item:rankine:mortar>,<item:charcoal_pit:sandy_brick_item>]
],<item:stone_age:flint_knife>);

craftingTable.removeRecipe(<item:immersiveengineering:alloybrick>);
<recipetype:stone_age:flint_workbench>.addRecipe("alloy_brick",<item:immersiveengineering:alloybrick>*2,[
  [<item:immersiveengineering:plate_copper>,<item:minecraft:brick>],
  [<item:minecraft:brick>,<item:immersiveengineering:plate_copper>]
],<item:stone_age:flint_knife>);

craftingTable.removeRecipe(<item:charcoal_pit:bellows>);
<recipetype:stone_age:flint_workbench>.addRecipe("bellows",<item:charcoal_pit:bellows>,[
  [<item:immersiveengineering:treated_wood_horizontal>,<item:immersiveengineering:slab_treated_wood_horizontal>,<item:immersiveengineering:treated_wood_horizontal>],
  [<item:minecraft:leather>,<item:minecraft:leather>,<item:minecraft:leather>],
  [<item:immersiveengineering:treated_wood_horizontal>,<item:immersiveengineering:slab_treated_wood_horizontal>,<item:immersiveengineering:treated_wood_horizontal>]
],<item:stone_age:flint_knife>);

craftingTable.removeRecipe(<item:charcoal_pit:sandy_brick>);
<recipetype:stone_age:flint_workbench>.addRecipe("sandy_brick", <item:charcoal_pit:sandy_brick>*2,[
  [<item:charcoal_pit:sandy_brick_item>,<item:rankine:mortar>,<item:charcoal_pit:sandy_brick_item>],
  [<item:rankine:mortar>,<item:charcoal_pit:sandy_brick_item>,<item:rankine:mortar>],
  [<item:charcoal_pit:sandy_brick_item>,<item:rankine:mortar>,<item:charcoal_pit:sandy_brick_item>]
],<item:stone_age:flint_knife>);

craftingTable.removeRecipe(<item:charcoal_pit:unfired_sandy_brick>);
<recipetype:stone_age:flint_workbench>.addRecipe("unfired_sandy_brick", <item:charcoal_pit:unfired_sandy_brick>*4,[
  [<item:minecraft:sand>,<item:minecraft:clay_ball>,<item:minecraft:sand>],
  [<item:minecraft:clay_ball>,<item:minecraft:sand>,<item:minecraft:clay_ball>],
  [<item:minecraft:sand>,<item:minecraft:clay_ball>,<item:minecraft:sand>]
],<item:stone_age:flint_knife>);


<recipetype:stone_age:flint_workbench>.addRecipe("campfire", <item:minecraft:campfire>,[
  [<item:minecraft:air>,<item:charcoal_pit:straw>,<item:minecraft:air>],
  [<tag:items:minecraft:logs>,<item:charcoal_pit:straw>,<tag:items:minecraft:logs>],
  [<tag:items:minecraft:logs>,<item:minecraft:gravel>,<tag:items:minecraft:logs>]
],<item:stone_age:flint_knife>);

<recipetype:stone_age:flint_workbench>.addRecipe("sandy_collector", <item:charcoal_pit:sandy_collector>,[
  [<item:charcoal_pit:sandy_brick_item>,<item:minecraft:air>,<item:charcoal_pit:sandy_brick_item>],
  [<item:charcoal_pit:sandy_brick_item>,<item:notreepunching:ceramic_bucket>,<item:charcoal_pit:sandy_brick_item>],
  [<item:charcoal_pit:sandy_brick_item>,<item:charcoal_pit:sandy_brick_item>,<item:charcoal_pit:sandy_brick_item>]
],<item:stone_age:flint_knife>);

<recipetype:stone_age:flint_workbench>.addRecipe("iron_saw", <item:notreepunching:iron_saw>,[
  [<item:minecraft:air>,<item:minecraft:air>,<tag:items:forge:rods/wooden>],
  [<item:minecraft:air>,<tag:items:forge:rods/wooden>,<item:minecraft:iron_ingot>],
  [<tag:items:forge:rods/wooden>,<item:minecraft:iron_ingot>,<item:minecraft:air>]
],<item:stone_age:flint_knife>);

<recipetype:stone_age:flint_workbench>.addRecipe("stone_bricks", <item:minecraft:stone_bricks>*5,[
  [<item:minecraft:stone>,<item:rankine:mortar>,<item:minecraft:stone>],
  [<item:rankine:mortar>,<item:minecraft:stone>,<item:rankine:mortar>],
  [<item:minecraft:stone>,<item:rankine:mortar>,<item:minecraft:stone>]
],<item:stone_age:flint_knife>);