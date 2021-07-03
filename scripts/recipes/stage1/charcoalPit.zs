

craftingTable.removeRecipe(<item:charcoal_pit:main_bloomery>);
craftingTable.removeRecipe(<item:rankine:charcoal_pit>);

recipeShaped("mechanical_bellows",<item:charcoal_pit:mechanical_bellows>,[
  [<item:minecraft:stone>,<item:minecraft:stone>,<item:minecraft:stone>],
  [<item:minecraft:piston>,<item:charcoal_pit:bellows>,<item:minecraft:air>],
  [<item:minecraft:stone>,<item:minecraft:stone>,<item:minecraft:stone>]
]);
recipeShaped("piston",<item:minecraft:piston>,[
  [<tag:items:minecraft:planks>,<tag:items:minecraft:planks>,<tag:items:minecraft:planks>],
  [<item:minecraft:stone>,<tag:items:minecraft:planks>,<item:minecraft:stone>],
  [<item:minecraft:stone>,<item:electrodynamics:geariron>,<item:minecraft:stone>]
]);


