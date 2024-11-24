ServerEvents.recipes((event)=>{
	let { frostedheart } = event.recipes

	frostedheart.charger("4x kubejs:activated_carbon",[
		"minecraft:charcoal"
	]).cost(125)
})