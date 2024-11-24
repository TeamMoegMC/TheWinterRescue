ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.recipes

	immersiveengineering.blast_furnace_fuel("kubejs:charcoal_dust", 360)
	immersiveengineering.blast_furnace_fuel("kubejs:anthracite_dust", 2300)
	immersiveengineering.blast_furnace_fuel("#forge:dusts/coal_coke", 1340)
})