import mods.stone_age.MillstoneManager;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;


//sawdust
var logs as IItemStack[] = [<item:minecraft:dark_oak_log>,<item:minecraft:dark_oak_wood>,<item:minecraft:stripped_dark_oak_log>,<item:minecraft:stripped_dark_oak_wood>,<item:minecraft:oak_log>,<item:minecraft:oak_wood>,<item:minecraft:stripped_oak_log>,<item:minecraft:stripped_oak_wood>,<item:minecraft:acacia_log>,<item:minecraft:acacia_wood>,<item:minecraft:stripped_acacia_log>,<item:minecraft:stripped_acacia_wood>,<item:minecraft:birch_log>,<item:minecraft:birch_wood>,<item:minecraft:stripped_birch_log>,<item:minecraft:stripped_birch_wood>,<item:minecraft:jungle_log>,<item:minecraft:jungle_wood>,<item:minecraft:stripped_jungle_log>,<item:minecraft:stripped_jungle_wood>,<item:minecraft:spruce_log>,<item:minecraft:spruce_wood>,<item:minecraft:stripped_spruce_log>,<item:minecraft:stripped_spruce_wood>,<item:rankine:cinnamon_log>,<item:rankine:cinnamon_wood>,<item:rankine:stripped_cinnamon_log>,<item:rankine:stripped_cinnamon_wood>,<item:rankine:cedar_log>,<item:rankine:cedar_wood>,<item:rankine:stripped_cedar_log>,<item:rankine:stripped_cedar_wood>,<item:rankine:sharinga_log>,<item:rankine:sharinga_wood>,<item:rankine:stripped_sharinga_log>,<item:rankine:stripped_sharinga_wood>,<item:rankine:black_walnut_log>,<item:rankine:black_walnut_wood>,<item:rankine:stripped_black_walnut_log>,<item:rankine:stripped_black_walnut_wood>,<item:rankine:cork_oak_log>,<item:rankine:cork_oak_wood>,<item:rankine:stripped_cork_oak_log>,<item:rankine:stripped_cork_oak_wood>,<item:rankine:coconut_palm_log>,<item:rankine:coconut_palm_wood>,<item:rankine:stripped_coconut_palm_log>,<item:rankine:stripped_coconut_palm_wood>,<item:rankine:pinyon_pine_log>,<item:rankine:pinyon_pine_wood>,<item:rankine:stripped_pinyon_pine_log>,<item:rankine:stripped_pinyon_pine_wood>,<item:rankine:juniper_log>,<item:rankine:juniper_wood>,<item:rankine:stripped_juniper_log>,<item:rankine:stripped_juniper_wood>,<item:rankine:balsam_fir_log>,<item:rankine:balsam_fir_wood>,<item:rankine:stripped_balsam_fir_log>,<item:rankine:stripped_balsam_fir_wood>,<item:rankine:magnolia_log>,<item:rankine:magnolia_wood>,<item:rankine:stripped_magnolia_log>,<item:rankine:stripped_magnolia_wood>,<item:rankine:yellow_birch_log>,<item:rankine:yellow_birch_wood>,<item:rankine:black_birch_log>,<item:rankine:black_birch_wood>,<item:rankine:eastern_hemlock_log>,<item:rankine:eastern_hemlock_wood>,<item:rankine:stripped_eastern_hemlock_log>,<item:rankine:stripped_eastern_hemlock_wood>,<item:rankine:maple_log>,<item:rankine:maple_wood>,<item:rankine:stripped_maple_log>,<item:rankine:stripped_maple_wood>,<item:minecraft:crimson_stem>,<item:minecraft:stripped_crimson_stem>,<item:minecraft:crimson_hyphae>,<item:minecraft:stripped_crimson_hyphae>,<item:minecraft:warped_stem>,<item:minecraft:stripped_warped_stem>,<item:minecraft:warped_hyphae>,<item:minecraft:stripped_warped_hyphae>,<item:watersource:coconut_tree_log>,<item:watersource:coconut_tree_head>,<item:watersource:stripped_coconut_tree_log>];
for i in 0 .. logs.length{
	<recipetype:stone_age:millstone>.addRecipe("sawdust" + i, <item:rankine:sawdust>, <item:rankine:sawdust>,logs[i],0.5, 2);
}


//rye_flour
<recipetype:stone_age:millstone>.addRecipe("rye_flour", <item:frostedheart:rye_flour>,<item:frostedheart:rye_flour>,<item:frostedheart:rye>,0.2, 1); 


//rye_bread
craftingTable.addShapeless("raw_rye_bread", <item:frostedheart:raw_rye_bread>, [<item:frostedheart:rye_flour>,<item:frostedheart:rye_flour>,<item:frostedheart:rye_flour>, <item:watersource:purified_water_bottle>.transformReplace(<item:minecraft:glass_bottle>)]);
furnace.addRecipe("rye_bread", <item:frostedheart:rye_bread> , <item:frostedheart:raw_rye_bread>, 1.0, 300);
campfire.addRecipe("rye_bread", <item:frostedheart:rye_bread> , <item:frostedheart:raw_rye_bread>, 1.0, 300);




