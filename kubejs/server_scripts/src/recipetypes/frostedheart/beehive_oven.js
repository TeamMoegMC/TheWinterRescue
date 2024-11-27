/*
ServerEvents.recipes((event) => {
	let beehiveRecipes = [
		{ input: "frostedheart:magnesite_block", result: "frostedheart:magnesia_block" },
		{ input: "#the_winter_rescue:flux_block", result: "frostedheart:quicklime_block" }
	]
	beehiveRecipes.forEach((recipe) => {
		if (recipe.input.startsWith("#")) {
			event.custom({
				"type": "the_winter_rescue:beehive_oven",
				"input": {
					"tag": recipe.input.substring(1)
				},
				"result": {
					"block": recipe.result
				}
			})
		} else {
			event.custom({
				"type": "the_winter_rescue:beehive_oven",
				"input": {
					"item": recipe.input
				},
				"result": {
					"block": recipe.result
				}
			})
		}
	})
})
*/

ServerEvents.recipes((event) => {
    let {frostedheart} = event.recipes
})