import mods.stone_age.DryingRackManager;
import mods.stone_age.TreeStumpManager;
import mods.stone_age.MillstoneManager;

campfire.addRecipe("torch",<item:minecraft:torch>,<item:stone_age:unlit_torch>,0,100);

<recipetype:stone_age:drying_rack>.addRecipe("grass", <item:charcoal_pit:straw>, <item:primalwinter:snowy_vine>, 600, "grass");

<recipetype:stone_age:tree_stump>.addRecipe("copper_plate1", <item:immersiveengineering:plate_copper>,<tag:items:ages_api:hammers>, <item:electrodynamics:ingotcopper>*2, 3);
<recipetype:stone_age:tree_stump>.addRecipe("copper_plate2", <item:immersiveengineering:plate_copper>,<tag:items:ages_api:hammers>, <item:rankine:copper_ingot>*2, 3);
<recipetype:stone_age:tree_stump>.addRecipe("copper_plate3", <item:immersiveengineering:plate_copper>,<tag:items:ages_api:hammers>, <item:cavesandcliffs:copper_ingot>*2, 3);
<recipetype:stone_age:tree_stump>.addRecipe("copper_plate4", <item:immersiveengineering:plate_copper>,<tag:items:ages_api:hammers>, <item:charcoal_pit:copper_ingot>*2, 3);
<recipetype:stone_age:tree_stump>.addRecipe("copper_plate5", <item:immersiveengineering:plate_copper>,<tag:items:ages_api:hammers>, <item:immersiveengineering:ingot_copper>*2, 3);
<recipetype:stone_age:tree_stump>.addRecipe("copper_plate6", <item:immersiveengineering:plate_copper>,<tag:items:ages_api:hammers>, <item:libvulpes:ingotcopper>*2, 3);
<recipetype:stone_age:tree_stump>.addRecipe("bronze_plate", <item:electrodynamics:platebronze>,<tag:items:ages_api:hammers>, <item:electrodynamics:ingotbronze>*2, 3);
<recipetype:stone_age:tree_stump>.addRecipe("plate_iron", <item:immersiveengineering:plate_iron>,<tag:items:ages_api:hammers>, <item:minecraft:iron_ingot>*2, 3);
<recipetype:stone_age:tree_stump>.addRecipe("cast_iron_plate", <item:kubejs:cast_iron_plate>,<tag:items:ages_api:hammers>, <item:rankine:cast_iron_alloy>*2, 3);
<recipetype:stone_age:tree_stump>.addRecipe("battery_alloy_plate", <item:kubejs:battery_alloy_plate>,<tag:items:ages_api:hammers>, <item:kubejs:battery_alloy>*2, 3);

<recipetype:stone_age:tree_stump>.addRecipe("flux", <item:kubejs:flux>*2, <tag:items:ages_api:hammers>, <tag:items:thelastwinter:flux_itemblock>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("al2o3", <item:rankine:alumina>, <tag:items:ages_api:hammers>, <item:rankine:bauxite_ore>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("redstone", <item:minecraft:redstone>*2, <tag:items:ages_api:hammers>, <item:rankine:cinnabar_ore>, 2);
//planks
/*<recipetype:stone_age:tree_stump>.addRecipe("oak_plank", <item:minecraft:oak_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_oak_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("spruce_plank", <item:minecraft:spruce_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_spruce_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("birch_plank", <item:minecraft:birch_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_birch_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("jungle_plank", <item:minecraft:jungle_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_jungle_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("acacia_plank", <item:minecraft:acacia_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_acacia_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("dark_oak_plank", <item:minecraft:dark_oak_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_dark_oak_log>, 2);
*/
<recipetype:stone_age:tree_stump>.addRecipe("treated_wood_slab",<item:immersiveengineering:slab_treated_wood_horizontal>*2,<tag:items:forge:axes>,<item:immersiveengineering:treated_wood_horizontal>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("dark_oak_plank", <item:minecraft:dark_oak_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_dark_oak_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("oak_plank", <item:minecraft:oak_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_oak_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("acacia_plank", <item:minecraft:acacia_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_acacia_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("birch_plank", <item:minecraft:birch_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_birch_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("jungle_plank", <item:minecraft:jungle_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_jungle_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("spruce_plank", <item:minecraft:spruce_planks>*3, <tag:items:forge:axes>, <item:minecraft:stripped_spruce_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("cinnamon_plank", <item:rankine:cinnamon_planks>*3, <tag:items:forge:axes>, <item:rankine:stripped_cinnamon_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("cedar_plank", <item:rankine:cedar_planks>*3, <tag:items:forge:axes>, <item:rankine:stripped_cedar_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("sharinga_plank", <item:rankine:sharinga_planks>*3, <tag:items:forge:axes>, <item:rankine:stripped_sharinga_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("black_walnut_plank", <item:rankine:black_walnut_planks>*3, <tag:items:forge:axes>, <item:rankine:stripped_black_walnut_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("cork_oak_plank", <item:rankine:cork_oak_planks>*3, <tag:items:forge:axes>, <item:rankine:stripped_cork_oak_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("coconut_palm_plank", <item:rankine:coconut_palm_planks>*3, <tag:items:forge:axes>, <item:rankine:stripped_coconut_palm_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("pinyon_pine_plank", <item:rankine:pinyon_pine_planks>*3, <tag:items:forge:axes>, <item:rankine:stripped_pinyon_pine_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("juniper_plank", <item:rankine:juniper_planks>*3, <tag:items:forge:axes>, <item:rankine:stripped_juniper_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("balsam_fir_plank", <item:rankine:balsam_fir_planks>*3, <tag:items:forge:axes>, <item:rankine:stripped_balsam_fir_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("magnolia_plank", <item:rankine:magnolia_planks>*3, <tag:items:forge:axes>, <item:rankine:stripped_magnolia_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("eastern_hemlock_plank", <item:rankine:eastern_hemlock_planks>*3, <tag:items:forge:axes>, <item:rankine:stripped_eastern_hemlock_log>, 2);
<recipetype:stone_age:tree_stump>.addRecipe("maple_plank", <item:rankine:maple_planks>*3, <tag:items:forge:axes>, <item:rankine:stripped_maple_log>, 2);

<recipetype:stone_age:millstone>.addRecipe("al2o3_dust", <item:kubejs:impure_alumina_dust>*2,<item:kubejs:impure_alumina_dust>,<item:rankine:alumina>,0.4, 2);
<recipetype:stone_age:millstone>.addRecipe("kaolin_dust", <item:kubejs:kaolin_dust>,<item:kubejs:kaolin_dust>,<item:rankine:kaolinite_ball>,0.3, 1);

<recipetype:stone_age:flint_workbench>.removeRecipe(<item:minecraft:furnace>);
<recipetype:stone_age:flint_workbench>.removeRecipe(<item:stone_age:backpack>);


flintRecipe("grassbed",<item:stone_age:dried_grass_bed>,[
  [<item:minecraft:air>,<item:minecraft:air>,<item:charcoal_pit:straw>],
  [<item:charcoal_pit:straw>,<item:charcoal_pit:straw>,<item:charcoal_pit:straw>],
  [<tag:items:minecraft:wooden_slabs>,<tag:items:minecraft:wooden_slabs>,<tag:items:minecraft:wooden_slabs>]
],<tag:items:forge:axes>);

flintRecipe("log_pile",<item:charcoal_pit:log_pile>,[
  [<tag:items:minecraft:logs_that_burn>,<tag:items:minecraft:logs_that_burn>,<tag:items:minecraft:logs_that_burn>],
  [<tag:items:minecraft:logs_that_burn>,<tag:items:minecraft:logs_that_burn>,<tag:items:minecraft:logs_that_burn>],
  [<tag:items:minecraft:logs_that_burn>,<tag:items:minecraft:logs_that_burn>,<tag:items:minecraft:logs_that_burn>]
],<tag:items:forge:axes>);

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

<recipetype:stone_age:flint_workbench>.addRecipe("canteen", <item:survive:canteen>,[
  [<item:minecraft:air>,<item:minecraft:leather>,<item:minecraft:air>],
  [<item:minecraft:leather>,<item:minecraft:air>,<item:minecraft:leather>],
  [<item:minecraft:leather>,<item:minecraft:leather>,<item:minecraft:leather>]
],<item:stone_age:flint_knife>);

<recipetype:stone_age:flint_workbench>.addRecipe("generator_brick",<item:frostedheart:generator_brick>*3,[
  [<item:minecraft:stone>,<item:minecraft:clay_ball>,<item:minecraft:stone>],
  [<item:minecraft:brick>,<item:minecraft:stone>,<item:minecraft:brick>],
  [<item:minecraft:stone>,<item:minecraft:clay_ball>,<item:minecraft:stone>]
],<item:stone_age:flint_knife>);
<recipetype:stone_age:flint_workbench>.addRecipe("amplifier_r1",<item:frostedheart:generator_amplifier_r1>*2,[
  [<item:minecraft:stone>,<item:minecraft:brick>,<item:minecraft:stone>],
  [<item:minecraft:clay_ball>,<item:electrodynamics:ingotcopper>,<item:minecraft:clay_ball>],
  [<item:minecraft:stone>,<item:minecraft:brick>,<item:minecraft:stone>]
],<item:stone_age:flint_knife>);
<recipetype:stone_age:flint_workbench>.addRecipe("core_t1",<item:frostedheart:generator_core_t1>,[
  [<item:minecraft:brick>,<item:electrodynamics:ingotcopper>,<item:minecraft:brick>],
  [<item:electrodynamics:ingotcopper>,<item:frostedheart:energy_core>,<item:electrodynamics:ingotcopper>],
  [<item:minecraft:brick>,<item:electrodynamics:ingotcopper>,<item:minecraft:brick>]
],<item:stone_age:flint_knife>);

<recipetype:stone_age:flint_workbench>.addRecipe("copper_hammer",<item:stone_age:copper_hammer>,[
  [<item:electrodynamics:ingotcopper>,<item:electrodynamics:ingotcopper>,<item:stone_age:leather_strip>],
  [<item:minecraft:air>,<item:minecraft:stick>,<item:electrodynamics:ingotcopper>],
  [<item:minecraft:stick>,<item:minecraft:air>,<item:electrodynamics:ingotcopper>]
],<item:stone_age:flint_knife>);
<recipetype:stone_age:flint_workbench>.addRecipe("bronze_hammer",<item:stone_age:bronze_hammer>,[
  [<item:electrodynamics:ingotbronze>,<item:electrodynamics:ingotbronze>,<item:stone_age:leather_strip>],
  [<item:minecraft:air>,<item:minecraft:stick>,<item:electrodynamics:ingotbronze>],
  [<item:minecraft:stick>,<item:minecraft:air>,<item:electrodynamics:ingotbronze>]
],<item:stone_age:flint_knife>);

craftingTable.removeRecipe(<item:rankine:flint_pickaxe>);
<recipetype:stone_age:flint_workbench>.addRecipe("flint_pickaxe",<item:rankine:flint_pickaxe>,[
  [<item:minecraft:flint>,<item:rankine:rope>,<item:minecraft:flint>],
  [<item:minecraft:air>,<item:minecraft:stick>,<item:minecraft:air>],
  [<item:minecraft:air>,<item:minecraft:stick>,<item:minecraft:air>]
],<item:stone_age:flint_knife>);

craftingTable.removeRecipe(<item:rankine:flint_axe>);
<recipetype:stone_age:flint_workbench>.addRecipe("flint_axe",<item:rankine:flint_axe>,[
  [<item:minecraft:flint>,<item:rankine:rope>,<item:minecraft:air>],
  [<item:minecraft:flint>,<item:minecraft:stick>,<item:minecraft:air>],
  [<item:minecraft:air>,<item:minecraft:stick>,<item:minecraft:air>]
],<item:stone_age:flint_knife>);

craftingTable.removeRecipe(<item:rankine:flint_spear>);
<recipetype:stone_age:flint_workbench>.addRecipe("flint_spear",<item:rankine:flint_spear>,[
  [<item:minecraft:air>,<item:minecraft:flint>,<item:minecraft:flint>],
  [<item:minecraft:air>,<item:rankine:rope>,<item:minecraft:flint>],
  [<item:minecraft:stick>,<item:minecraft:air>,<item:minecraft:air>]
],<item:stone_age:flint_knife>);

craftingTable.removeRecipe(<item:rankine:flint_shovel>);
<recipetype:stone_age:flint_workbench>.addRecipe("flint_shovel",<item:rankine:flint_shovel>,[
  [<item:minecraft:air>,<item:minecraft:flint>,<item:minecraft:air>],
  [<item:minecraft:air>,<item:rankine:rope>,<item:minecraft:air>],
  [<item:minecraft:air>,<item:minecraft:stick>,<item:minecraft:air>]
],<item:stone_age:flint_knife>);

craftingTable.removeRecipe(<item:charcoal_pit:clay_pot>);
<recipetype:stone_age:flint_workbench>.addRecipe("clay_pot",<item:charcoal_pit:clay_pot>,[
  [<item:minecraft:clay_ball>,<item:minecraft:clay_ball>,<item:minecraft:clay_ball>],
  [<item:minecraft:clay_ball>,<item:minecraft:air>,<item:minecraft:clay_ball>],
  [<item:minecraft:clay_ball>,<item:minecraft:clay_ball>,<item:minecraft:clay_ball>]
],<item:stone_age:flint_knife>);

craftingTable.removeRecipe(<item:charcoal_pit:barrel>);
<recipetype:stone_age:flint_workbench>.addRecipe("barrel",<item:charcoal_pit:barrel>,[
  [<tag:items:minecraft:wooden_slabs>,<tag:items:minecraft:wooden_slabs>,<tag:items:minecraft:wooden_slabs>],
  [<tag:items:minecraft:wooden_slabs>,<item:minecraft:air>,<tag:items:minecraft:wooden_slabs>],
  [<tag:items:minecraft:wooden_slabs>,<tag:items:minecraft:wooden_slabs>,<tag:items:minecraft:wooden_slabs>]
],<item:stone_age:flint_knife>);

craftingTable.removeRecipe(<item:rankine:bronze_door>);
<recipetype:stone_age:flint_workbench>.addRecipe("bronze_door",<item:rankine:bronze_door>,[
  [<item:electrodynamics:ingotbronze>,<item:electrodynamics:ingotbronze>,<item:minecraft:air>],
  [<item:electrodynamics:ingotbronze>,<item:electrodynamics:ingotbronze>,<item:minecraft:air>],
  [<item:electrodynamics:ingotbronze>,<item:electrodynamics:ingotbronze>,<item:minecraft:air>]
],<item:stone_age:flint_knife>);

<recipetype:stone_age:flint_workbench>.addRecipe("rye_bread",<item:frostedheart:rye_bread>,[
  [<item:frostedheart:rye>,<item:frostedheart:rye>,<item:frostedheart:rye>]
],<item:stone_age:flint_knife>);

<recipetype:stone_age:flint_workbench>.addRecipe("fish_bone",<item:stone_age:fish_bone> * 2,[
  [<item:minecraft:bone>,<item:minecraft:flint>,<item:minecraft:bone>]
],<item:stone_age:flint_knife>);