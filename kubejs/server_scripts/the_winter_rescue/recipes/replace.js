onEvent('recipes', (event) => {
    event.replaceInput({}, 'create:andesite_alloy', 'rankine:cast_iron_ingot')
    event.replaceInput({}, 'create:cogwheel', '#the_winter_rescue:cogwheels')
    event.replaceInput({}, 'create:large_cogwheel', '#the_winter_rescue:large_cogwheels')
    event.replaceInput({}, 'rankine:sawdust', '#forge:dusts/wood')
    event.replaceInput({}, 'minecraft:dried_kelp', '#forge:leather')
	event.replaceInput({output:'immersiveengineering:turret_gun'}, 'immersiveengineering:circuit_board', 'kubejs:servo_core')
	event.replaceInput({output:'immersiveengineering:turret_chem'}, 'immersiveengineering:circuit_board', 'kubejs:servo_core')
});