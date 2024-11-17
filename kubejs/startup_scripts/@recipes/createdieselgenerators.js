new Schema("createdieselgenerators:basin_fermenting")
    .simpleKey("results", "outputFluidArray")
    .simpleKey("ingredients", "inputItemArray")
    .simpleKey("processingTime", "intNumber")

new Schema("createdieselgenerators:distillation")
    .simpleKey("results", "outputFluidArray")
    .simpleKey("ingredients", "inputFluidArray")
    .simpleKey("heatRequirement", "nonBlankString")
    .simpleKey("processingTime", "intNumber")

