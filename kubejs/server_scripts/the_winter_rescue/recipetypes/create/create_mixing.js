onEvent('recipes', (event) => {
    event.recipes.createMixing(
        ['rankine:high_refractory_brick'],
        ['4x rankine:fire_clay_ball', '2x rankine:magnesia', '2x rankine:quicklime']).heated()
    event.recipes.createMixing(
        ['3x rankine:fire_clay_ball'],
        ['4x kubejs:kaolin_dust', '4x kubejs:impure_alumina_dust', 'minecraft:clay_ball'])
    event.recipes.createMixing(
        [Fluid.of('kubejs:sulfuric_acid', 500)],
        ['2x #forge:dusts/sulfur', Fluid.of('minecraft:water', 500)])
    event.recipes.createMixing(
        [Fluid.of('kubejs:cryolite', 500)],
        ['2x minecraft:glowstone_dust', 'kubejs:aluminium_hydroxide_dust', Fluid.of('kubejs:sulfuric_acid', 500)])
    event.recipes.createMixing(
        ['kubejs:aluminium_hydroxide_dust'],
        ['rankine:sodium_hydroxide', '2x kubejs:washed_ore_bauxite']).heated()
    event.recipes.createMixing(
        ['3x rankine:vulcanized_rubber'],
        ['immersiveengineering:dust_sulfur', Fluid.of('rankine:latex', 500)])
});