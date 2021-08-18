console.info('[KUBEJS_THE_WINTER_RESCUE] TWR Blocks Registered!')

onEvent('block.registry', (event) => {
    const blocks = [{ name: 'yuesha', material: 'rock', hardness: 2 }];

    blocks.forEach((block) => {
        event.create(block.name).material(block.material).hardness(block.hardness);
    });
});
