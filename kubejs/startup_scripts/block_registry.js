console.info('[KUBEJS_THE_WINTER_RESCUE] TWR Blocks Registered!')
onEvent('block.registry', (event) => {
   //event.create('copper_gravel').material('sand').hardness(1.5).harvestTool('shovel', 0).requiresTool(true);
   event.create('duralumin_block').material('metal').hardness(5).harvestTool('pickaxe', 2).requiresTool(true);
   event.create('sheetmetal_duralumin').material('metal').hardness(5).harvestTool('pickaxe', 2).requiresTool(true);
});
