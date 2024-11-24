ServerEvents.recipes((event) => {
	let { frostedheart } = event.recipes

	frostedheart.generator("frostedheart:generator_ash", [
		"kubejs:sawdust_briquette"
	]).time(1600)

	frostedheart.generator("frostedheart:generator_ash", [
		"kubejs:coal_briquette"
	]).time(1800)

	frostedheart.generator("frostedheart:generator_ash", [
		"kubejs:charcoal_briquette"
	]).time(1800)
})