new Schema("createaddition:rolling")
	.simpleKey("result", "outputItem")
	.simpleKey("input", "inputItem")

new Schema("createaddition:charging")
	.simpleKey("result", "outputItem")
	.simpleKey("input", "inputItem")
	.simpleKey("energy", "intNumber")
	.simpleKey("maxChargeRate", "intNumber", 2147483647)

new Schema("createaddition:liquid_burning")
	.simpleKey("burnTime", "intNumber")
	.dynamicKey((components, componentBuilder) => components.get("inputFluid")().or(
		new componentBuilder(2)
			.add(components.get("fluidTag")().key("fluidTag"))
			.add(components.get("intNumber")().key("amount"))
			.inputRole())
		.key("input"))