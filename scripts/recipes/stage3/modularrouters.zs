import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import mods.jei.JEI;
import crafttweaker.api.tag.MCTag;

var removingItems as IItemStack[] = [
<item:modularrouters:activator_module>,
<item:modularrouters:breaker_module>,
<item:modularrouters:dropper_module>,
<item:modularrouters:extruder_module_1>,
<item:modularrouters:extruder_module_2>,
<item:modularrouters:flinger_module>,
<item:modularrouters:placer_module>,
<item:modularrouters:player_module>,
<item:modularrouters:sender_module_3>,
<item:modularrouters:vacuum_module>,
// ban temperary
<item:modularrouters:stack_upgrade>,
<item:modularrouters:speed_upgrade>
];

for i in 0 .. removingItems.length {
    craftingTable.removeRecipe(removingItems[i]);
    mods.jei.JEI.hideItem(removingItems[i]);
    // Ban speed upgrades for now

}

craftingTable.removeRecipe(<tag:items:modularrouters:augments>);
mods.jei.JEI.hideRegex(".*augment.*");

recipeShaped("modularrouters_blank_module",<item:modularrouters:blank_module>,[
  [<item:electrodynamics:wirecopper>,<item:electrodynamics:circuitadvanced>],
  [<tag:items:forge:plates/aluminum>,<tag:items:forge:plates/aluminum>],
  [<tag:items:forge:plates/aluminum>,<tag:items:forge:plates/aluminum>]
]);

recipeShaped("modularrouters_item_router",<item:modularrouters:item_router>,[
  [<tag:items:forge:plates/aluminum>,<tag:items:forge:gears/steel>,<tag:items:forge:plates/aluminum>],
  [<tag:items:forge:plates/aluminum>,<item:modularrouters:blank_module>,<tag:items:forge:plates/aluminum>],
  [<tag:items:forge:plates/aluminum>,<tag:items:forge:gears/steel>,<tag:items:forge:plates/aluminum>]
]);

recipeShaped("modularrouters_blank_upgrade",<item:modularrouters:blank_upgrade>,[
  [<tag:items:forge:plates/aluminum>,<item:electrodynamics:ceramicplate>,<tag:items:forge:plates/aluminum>],
  [<item:electrodynamics:ceramicplate>,<tag:items:forge:plates/aluminum>,<item:electrodynamics:circuitadvanced>],
  [<tag:items:forge:plates/aluminum>,<item:electrodynamics:wirecopper>,<item:minecraft:air>]
]);

recipeShaped("modularrouters_fluid_module",<item:modularrouters:fluid_module>,[
  [<item:modularrouters:blank_module>,<item:electrodynamics:wireinsulatedcopper>],
  [<item:electrodynamics:electricpump>,<item:electrodynamics:wireinsulatedcopper>]
]);

recipeShaped("modularrouters_fluid_module_2",<item:modularrouters:fluid_module_2>,[
  [<item:electrodynamics:electricpump>,<item:electrodynamics:wireinsulatedgold>],
  [<item:modularrouters:blank_module>,<item:electrodynamics:electricpump>],
  [<item:electrodynamics:electricpump>,<item:electrodynamics:wireinsulatedgold>]
]);

recipeShaped("modularrouters_puller_module_1",<item:modularrouters:puller_module_1>,[
  [<item:modularrouters:blank_module>,<item:immersiveengineering:conveyor_covered>],
  [<item:immersiveengineering:conveyor_covered>,<item:electrodynamics:wireinsulatedcopper>]
]);

recipeShaped("modularrouters_puller_module_2",<item:modularrouters:puller_module_2>,[
  [<item:modularrouters:puller_module_1>,<item:modularrouters:puller_module_1>],
  [<item:modularrouters:puller_module_1>,<item:modularrouters:puller_module_1>],
  [<item:modularrouters:puller_module_1>,<item:electrodynamics:wireinsulatedgold>]
]);

recipeShaped("modularrouters_sender_module_1",<item:modularrouters:sender_module_1>,[
  [<item:modularrouters:puller_module_1>,<item:immersiveengineering:conveyor_covered>],
  [<item:immersiveengineering:conveyor_covered>,<item:minecraft:piston>]
]);

recipeShaped("modularrouters_sender_module_2",<item:modularrouters:sender_module_2>,[
  [<item:modularrouters:puller_module_2>,<item:immersiveengineering:conveyor_covered>],
  [<item:immersiveengineering:conveyor_covered>,<item:immersiveengineering:conveyor_covered>],
  [<item:immersiveengineering:conveyor_covered>,<item:minecraft:piston>]
]);

recipeShaped("modularrouters_void_module",<item:modularrouters:void_module>,[
  [<item:minecraft:flint_and_steel>,<tag:items:forge:gears/steel>,<item:minecraft:flint_and_steel>],
  [<tag:items:forge:gears/steel>,<item:modularrouters:blank_module>,<tag:items:forge:gears/steel>],
  [<item:minecraft:flint_and_steel>,<tag:items:forge:gears/steel>,<item:minecraft:flint_and_steel>]
]);

