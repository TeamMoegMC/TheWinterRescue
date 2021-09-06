onEvent('recipes', (event) => {

    event.recipes.createCrushing([
        '2x minecraft:quartz',
        Item.of('4x minecraft:quartz').withChance(0.5)
    ], 'rankine:quartzite')

    event.recipes.createCrushing([Item.of('2x kubejs:flux'), Item.of('4x kubejs:flux').withChance(0.5)], '#the_winter_rescue:flux_block')


});
