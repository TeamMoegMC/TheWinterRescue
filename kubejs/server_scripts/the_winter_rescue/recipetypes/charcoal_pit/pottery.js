ServerEvents.recipes((event) => {
	let { charcoal_pit } = event.recipes

	charcoal_pit.pottery("minecraft:stone", "#forge:cobblestone")
	charcoal_pit.pottery("minecraft:stone", "#forge:stone")
})