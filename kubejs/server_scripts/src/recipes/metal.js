ServerEvents.recipes((event) => {
	let { create, kubejs } = event.recipes

	create.compacting("2x steampowered:bronze_sheet", "3x frostedheart:bronze_ingot")
	create.compacting("2x frostedheart:lead_sheet", "3x frostedheart:lead_ingot")
	create.compacting("2x frostedheart:cast_iron_sheet", "3x frostedheart:cast_iron_ingot")
	create.compacting("2x frostedheart:invar_sheet", "3x frostedheart:invar_ingot")

	let metals = [
		"copper",
		"brass",
		"iron"
	]
	metals.forEach((plate) => {
		create.compacting(`2x create:${ plate }_sheet`, `3x #forge:ingots/${ plate }`)
	})

	let metals2 = [
		"aluminum",
		"lead",
		"constantan",
		"steel",
		"electrum",
		"silver",
		"gold"
	]
	metals2.forEach((plate) => {
		create.compacting(`2x immersiveengineering:plate_${ plate }`, `3x #forge:ingots/${ plate }`)
	})

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
			return
		}

		itemIds.forEach((itemId, index) => {
			if (key === "blocks") {
				// Metal block -> 9 ingots
				let ingotId = itemId.replace("block", "ingot")
				if (Item.exists(ingotId)) {
					kubejs.shapeless(Item.of(ingotId, 9), [itemId])
						.id(`the_winter_rescue:matel/blocks/ingots/${ index }`)
				} else {
					console.warn(`Skipping: No ingot found for block: ${ itemId }`)
				}
			} else if (key === "ingots") {
				// Metal ingot -> 9 nuggets
				let nuggetId = itemId.replace("ingot", "nugget")
				if (Item.exists(nuggetId)) {
					kubejs.shapeless(Item.of(nuggetId, 9), [itemId])
						.id(`the_winter_rescue:matel/ingots/nuggets/${ index }`)
					// 9 nuggets -> Metal ingot
					kubejs.shapeless(itemId, Array(9).fill(nuggetId))
						.id(`the_winter_rescue:matel/nuggets/ingots/${ index }`)
				} else {
					console.warn(`Skipping: No nugget found for ingot: ${ itemId }`)
				}

				// 9 ingots -> Metal block
				let blockId = itemId.replace("ingot", "block")
				if (Item.exists(blockId)) {
					kubejs.shapeless(blockId, Array(9).fill(itemId))
						.id(`the_winter_rescue:matel/ingots/blocks/${ index }`)
				} else {
					console.warn(`Skipping: No block found for ingot: ${ itemId }`)
				}
			}
		})
	})
})