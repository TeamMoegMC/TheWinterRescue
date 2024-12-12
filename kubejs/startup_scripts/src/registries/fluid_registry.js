console.info("[KUBEJS_THE_WINTER_RESCUE] TWR Fluids Registered!")

StartupEvents.registry("fluid", (event) => {
    /*
    let generalFluids = []
    generalFluids.forEach((fluid) => {
        if (fluid.type === "thick") {
            event.create(fluid.id)
                .thickTexture(fluid.texture)
                .bucketColor(fluid.texture)
                // .displayName(fluid.display)
        } else if (fluid.type === "thin") {
            event.create(fluid.id)
                .thinTexture(fluid.texture)
                .bucketColor(fluid.texture)
                // .displayName(fluid.display)
        } else if (fluid.type === "custom") {
            event.create(fluid.id)
                .displayName(fluid.display)
                .textureStill(fluid.still)
                .textureFlowing(fluid.flowing)
                // .bucketColor(fluid.color)
        }
    })
    */
   
    /*
    event.create("ferrous_chloride")
        .tthinTexture(0xBB3333)
    event.create("protein")
        .stillTexture("kubejs:block/protein_fluid")
        .flowingTexture("kubejs:block/protein_fluid")
        .viscosity(200)
        .density(200)
     */
})