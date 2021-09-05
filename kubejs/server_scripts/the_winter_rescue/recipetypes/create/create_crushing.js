onEvent('recipes', (event) => {

    event.recipes.createCrushing([
        '2x minecraft:quartz',
        Item.of('4x minecraft:quartz').withChance(0.5)
    ], 'rankine:quartzite')

});
