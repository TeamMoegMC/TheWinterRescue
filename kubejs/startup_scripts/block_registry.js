console.info('[KUBEJS_THE_WINTER_RESCUE] TWR Blocks Registered!')
onEvent('block.registry', (event) => {
   //event.create('copper_gravel').material('sand').hardness(1.5).harvestTool('shovel', 0).requiresTool(true);
   event.create('duralumin_block').material('metal').hardness(5).harvestTool('pickaxe', 2).requiresTool(true);
   event.create('sheetmetal_duralumin').material('metal').hardness(5).harvestTool('pickaxe', 2).requiresTool(true);

   // rankine blocks
   event.create('quicklime_block').material('stone').hardness(2).harvestTool('pickaxe', 1).requiresTool(true);
   event.create('refractory_bricks').material('stone').hardness(2).harvestTool('pickaxe', 1).requiresTool(true);
   event.create('high_refractory_bricks').material('stone').hardness(2).harvestTool('pickaxe', 1).requiresTool(true);
   event.create('magnesite_block').material('stone').hardness(2).harvestTool('pickaxe', 1).requiresTool(true);
   event.create('magnesia_block').material('stone').hardness(2).harvestTool('pickaxe', 1).requiresTool(true);
   event.create('packed_snow').material('stone').hardness(2).harvestTool('pickaxe', 1).requiresTool(true);
   event.create('invar_block').material('stone').hardness(2).harvestTool('pickaxe', 1).requiresTool(true);

});
