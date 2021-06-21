
craftingTable.removeByName("rankine:rope_grass");
craftingTable.removeByName("rankine:fire_clay_ball");	
recipeShaped("rope",<item:rankine:rope>*2,[
  [<item:charcoal_pit:straw>,<item:charcoal_pit:straw>],
  [<item:charcoal_pit:straw>,<item:minecraft:air>]
]);

recipeShaped("fire_clay",<item:rankine:fire_clay_ball>*3,[
  [<item:kubejs:kaolin_dust>,<item:kubejs:alumina_dust>,<item:kubejs:kaolin_dust>],
  [<item:kubejs:alumina_dust>,<item:minecraft:clay_ball>,<item:kubejs:alumina_dust>],
  [<item:kubejs:kaolin_dust>,<item:kubejs:alumina_dust>,<item:kubejs:kaolin_dust>]
]);