ServerEvents.recipes((event) => {
	let { create, kubejs } = event.recipes

	// Define metal tags
	let tags = {
		ingots: "#forge:ingots",
		blocks: "#forge:storage_blocks",
		nuggets: "#forge:nuggets"
	}

	// Iterate through the tags and generate recipes
	Object.keys(tags).forEach((key) => {
		let itemIds = Ingredient.of(tags[key]).getItemIds()

		if (!itemIds || itemIds.length === 0) {
			console.error(`No items found for tag: ${ tags[key] }`)
			return 0
		}

		itemIds.forEach((itemId, index) => {
			if (key === "blocks") {
				// Metal block => 9 ingots
				let ingotId = itemId.replace("block", "ingot")
				if (Item.exists(ingotId)) {
					kubejs.shapeless(Item.of(ingotId, 9), [itemId])
				} else {
					console.warn(`Skipping: No ingot found for block: ${ itemId }`)
				}
			} else if (key === "ingots") {
				// Metal ingot => 9 nuggets
				let nuggetId = itemId.replace("ingot", "nugget")
				if (Item.exists(nuggetId)) {
					kubejs.shapeless(Item.of(nuggetId, 9), [itemId])
					// 9 nuggets => Metal ingot
					kubejs.shapeless(Item.of(itemId, 1), Array(9).fill(nuggetId))
				} else {
					console.warn(`Skipping: No nugget found for ingot: ${ itemId }`)
				}

				// 9 ingots => Metal block
				let blockId = itemId.replace("ingot", "block")
				if (Item.exists(blockId)) {
					kubejs.shapeless(Item.of(blockId, 1), Array(9).fill(itemId))
				} else {
					console.warn(`Skipping: No block found for ingot: ${ itemId }`)
				}
			}
		})
	})

	function createCompactingRecipe (sheet, ingot) {
		create.compacting(sheet, ingot);
	}

	let metals = [
		{ mod: "steampowered", metal: "bronze" },
		{ mod: "frostedheart", metal: "lead" },
		{ mod: "frostedheart", metal: "cast_iron" },
		{ mod: "frostedheart", metal: "invar" },
		{ mod: "create", metal: "copper" },
		{ mod: "create", metal: "brass" },
		{ mod: "create", metal: "iron" },
		{ mod: "immersiveengineering", metal: "aluminum" },
		{ mod: "immersiveengineering", metal: "lead" },
		{ mod: "immersiveengineering", metal: "constantan" },
		{ mod: "immersiveengineering", metal: "steel" },
		{ mod: "immersiveengineering", metal: "electrum" },
		{ mod: "immersiveengineering", metal: "silver" },
		{ mod: "immersiveengineering", metal: "gold" }
	]
	metals.forEach((metal) => {
		let sheet = `2x ${ metal.mod }:${ metal.metal }_sheet`
		let ingot = `3x #forge:ingots/${ metal.metal }`
		createCompactingRecipe(sheet, ingot)
	})
})