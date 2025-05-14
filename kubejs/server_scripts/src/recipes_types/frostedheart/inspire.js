ServerEvents.recipes((event) => {
    function inspire(item,count){
		event.custom({
			type: "frostedresearch:inspire",
			item: Item.of(item).toJson(),
			amount: count
		})
	}

        inspire("kubejs:damaged_gpu", 10)
        inspire("kubejs:damaged_circuit_board", 6)
        inspire("kubejs:damaged_electric_motor", 5)
        inspire("kubejs:damaged_camera", 5)
        inspire("kubejs:burnt_circuit_board", 2)
        inspire("kubejs:broken_robot_1", 20)
        inspire("kubejs:broken_robot_2", 20)
		inspire("frostedheart:iron_fence_remains", 1)
		inspire("frostedheart:ferrocerium_fire_starter", 5)
		inspire("frostedheart:iron_parts", 1)
		inspire("frostedheart:iron_truss_remains", 1)
		inspire("frostedheart:insulator", 1)
		inspire("frostedresearch:intelligence", 25)


})