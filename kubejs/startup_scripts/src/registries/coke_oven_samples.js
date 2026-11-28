StartupEvents.registry("item", (event) => {
    const materials = {
        charcoal: "minecraft:item/charcoal",
        coke: "charcoal_pit:item/coke"
    }
    for (const [material, texture] of Object.entries(materials)) {
        for (const grade of ["underfired", "fired", "overfired"]) {
            event.create(`${grade}_${material}_sample`).texture(texture)
        }
    }
})
