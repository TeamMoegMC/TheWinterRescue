onEvent('recipes', (event) => {
    event.recipes.createMixing(
        ['rankine:high_refractory_brick'],
        ['4x rankine:fire_clay_ball', '2x rankine:magnesia', '2x rankine:quicklime']).heated()
});