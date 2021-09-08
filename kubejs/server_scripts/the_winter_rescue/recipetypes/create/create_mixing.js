onEvent('recipes', (event) => {
    event.recipes.createMixing(
        ['rankine:high_refractory_brick'],
        ['4x rankine:fire_clay_ball', '2x rankine:magnesia', '2x rankine:quicklime']).heated()

    event.recipes.createMixing(
        ['3x rankine:fire_clay_ball'],
        ['4x kubejs:kaolin_dust', '4x kubejs:impure_alumina_dust', 'minecraft:clay_ball'])
});