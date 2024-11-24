ServerEvents.recipes((event) => {
	let { charcoal_pit } = event.recipes

	charcoal_pit.pottery("minecraft:stone", "#forge:cobblestone")
		.experience(0.35)
	charcoal_pit.pottery("minecraft:stone", "#forge:stone")
		.experience(0.35)
	charcoal_pit.pottery("frostedheart:ceramic_bucket", "kubejs:clay_bucket")
		.experience(0.35)
	charcoal_pit.pottery("frostedheart:refractory_brick", "frostedheart:fire_clay_ball")
		.experience(0.4)
	charcoal_pit.pottery("frostedheart:quicklime", "kubejs:flux")
		.experience(0.35)
})