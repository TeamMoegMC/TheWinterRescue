craftingTable.removeRecipe(<item:electrodynamics:solarpanel>);
craftingTable.removeRecipe(<item:electrodynamics:advancedsolarpanel>);
craftingTable.removeRecipe(<item:electrodynamics:circuitelite>);
craftingTable.removeRecipe(<item:electrodynamics:circuitultimate>);
craftingTable.removeRecipe(<item:electrodynamics:pipesteel>);

recipeShaped("mineralwasher",<item:electrodynamics:mineralwasher>,[
  [<tag:items:forge:plates/steel>,<tag:items:forge:gears/steel>,<tag:items:forge:plates/steel>],
  [<item:electrodynamics:circuitadvanced>,<item:electrodynamics:electricpump>,<item:electrodynamics:circuitadvanced>],
  [<tag:items:forge:plates/steel>,<item:electrodynamics:pipesteel>,<tag:items:forge:plates/steel>]
]);
