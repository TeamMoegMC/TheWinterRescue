onEvent('item.tags', (event) => {
    event.add('itemfilters:check_nbt', 'tetra:modular_double')

    event.add('forge:plates/bronze', "steampowered:bronze_sheet")
    event.add('forge:plates/cast_iron', "kubejs:cast_iron_plate")
    event.add('forge:plates/tungsten_steel', "kubejs:tungsten_steel_plate")
    event.add('forge:ingots/tungsten_steel', "kubejs:tungsten_steel")
    event.add('forge:plates/battery_alloy', "kubejs:battery_alloy_plate")
    event.add('forge:ingots/battery_alloy', "kubejs:battery_alloy")
    event.add('forge:dusts/wood', "rankine:sawdust")

    event.add('the_winter_rescue:flux_block', "rankine:tufa_limestone")
    event.add('the_winter_rescue:flux_block', "rankine:white_marble")
    event.add('the_winter_rescue:flux_block', "rankine:black_marble")
    event.add('the_winter_rescue:flux_block', "rankine:dolostone")
    event.add('the_winter_rescue:flux_block', "rankine:chalk")
    event.add('the_winter_rescue:flour', "stone_age:flour")
    event.add('the_winter_rescue:flour', "frostedheart:rye_flour")

    event.add('ages_api:axes', "rankine:flint_axe")
	event.add('ages_api:axes', "rankine:bronze_axe")
	event.add('ages_api:hammers', 'rankine:stone_hammer')
	event.add('ages_api:hammers', 'rankine:bronze_hammer')


    event.add('the_winter_rescue:cogwheels', "steampowered:bronze_cogwheel")
    event.add('the_winter_rescue:cogwheels', "steampowered:cast_iron_cogwheel")
    event.add('the_winter_rescue:cogwheels', "steampowered:steel_cogwheel")

    event.add('the_winter_rescue:large_cogwheels', "steampowered:bronze_large_cogwheel")
    event.add('the_winter_rescue:large_cogwheels', "steampowered:cast_iron_large_cogwheel")
    event.add('the_winter_rescue:large_cogwheels', "steampowered:steel_large_cogwheel")

    event.add('forge:ores/copper', "kubejs:native_copper")
    event.add('forge:ores/copper', "rankine:malachite")
    event.add('forge:ores/tin', "kubejs:native_tin")
    event.add('forge:ores/tin', "rankine:cassiterite")
    event.add('forge:coal_coke', "charcoal_pit:coke")
	
	event.add("kubejs:coal_dust","kubejs:anthracite_dust")
	event.add("kubejs:coal_dust","kubejs:bituminous_coal_dust")
	event.add("kubejs:coal_dust","kubejs:subbituminous_coal_dust")
	event.add("kubejs:coal_dust","kubejs:lignite_dust")
	event.add("kubejs:coal_dust","kubejs:coal_dust")
	event.add("kubejs:fuel_glue","minecraft:slime_ball")
	event.add("kubejs:fuel_glue","create:dough")
	event.add("kubejs:fuel_glue","#forge:bitumen")

});