ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.sandpaper_polishing("immersiveengineering:graphite_electrode", [
		"kubejs:rough_graphite_electrode"
	])
})