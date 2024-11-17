/*

- immersiveengineeringAlloy

event.recipes.immersiveengineeringAlloy(output, input1, input2)

- immersiveengineeringBlastFurnace

event.recipes.immersiveengineeringBlastFurnace(output, input)
event.recipes.immersiveengineeringBlastFurnace(output, input, slag)

- immersiveengineeringBlastFurnaceFuel

event.recipes.immersiveengineeringBlastFurnaceFuel(input).time(300)

- immersiveengineeringCokeOven

event.recipes.immersiveengineeringCokeOven(output, input).creosote(250).time(900)

- immersiveengineeringCloche

event.recipes.immersiveengineeringCloche([outputs], input, soil)
event.recipes.immersiveengineeringCloche([outputs], input, soil, render) // Render format: {type: 'crop', block: 'minecraft:wheat'}

- immersiveengineeringFertilizer

event.recipes.immersiveengineeringFertilizer(input).growthModifier(1.5)

- immersiveengineeringMetalPress

event.recipes.immersiveengineeringMetalPress(output, input, mold)

- immersiveengineeringArcFurnace

event.recipes.immersiveengineeringArcFurnace([outputs], input)
event.recipes.immersiveengineeringArcFurnace([outputs], input, [additives])
event.recipes.immersiveengineeringArcFurnace([outputs], input, [additives], slag)

- immersiveengineeringCrusher

event.recipes.immersiveengineeringCrusher(output, input)
event.recipes.immersiveengineeringCrusher(output, input, [secondaries]) // Secondary output format: {chance: 0.5, output: 'item:id'}

- immersiveengineeringSawmill


event.recipes.immersiveengineeringSawmill(output, input)

event.recipes.immersiveengineeringSawmill(output, input, [secondaries]) // Secondary output format: {stripping: true, output: 'item:id'}

event.recipes.immersiveengineeringSawmill(output, input, [secondaries], stripped)

*/