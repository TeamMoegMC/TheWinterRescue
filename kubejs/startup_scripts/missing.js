let old_frozen=["kubejs:frozen_seeds_wheat", "kubejs:frozen_seeds_melon", "kubejs:frozen_seeds_pumpkin", "kubejs:frozen_seeds_beetroots", "kubejs:frozen_seeds_unknown", "kubejs:frozen_seeds_blackwheat"];
onEvent('item.missing_mappings', event => {
	old_frozen.forEach(e=>{event.remap(e,"frostedheart:frozen_seeds")})
	
})
onEvent('fluid.missing_mappings', event => {
	event.remap("frostedheart:hot_water","thermopolium:nail_soup")
})
