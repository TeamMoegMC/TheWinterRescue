/*
ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.recipes

	let recipes = [
		{
			input: 'minecraft:sandstone',
			output: Item.of('minecraft:quartz', 4),
			secondary: [Item.of('minecraft:quartz').withChance(0.5)],
		}
	]

	recipes.forEach((recipe) => {
		let re = immersiveengineering.crusher(recipe.output, recipe.input)
		if (recipe.id) {
			re.id(recipe.id);
		}
	})
})
*/