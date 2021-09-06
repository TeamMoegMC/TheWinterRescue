onEvent('item.tags', (event) => {
    event.add('itemfilters:check_nbt', 'custommachinery:custom_machine_item')
    event.add('itemfilters:check_nbt', 'tetra:modular_double')

    event.remove('forge:string', 'notreepunching:plant_string')
    event.add('forge:plates/bronze', "steampowered:bronze_sheet")
    event.add('forge:plates/cast_iron', "kubejs:cast_iron_plate")
    event.add('forge:dusts/wood', "rankine:sawdust")
    event.add('forge:hammers', "stone_age:stone_hammer")
    event.add('forge:hammers', "stone_age:copper_hammer")
    event.add('forge:hammers', "stone_age:bronze_hammer")
    event.add('ages_api:hammers', "rankine:stone_hammer")
    event.add('ages_api:hammers', "rankine:bronze_hammer")
    event.add('ages_api:hammers', "rankine:steel_hammer")

    event.add('the_winter_rescue:flux_block', "rankine:tufa_limestone")
    event.add('the_winter_rescue:flux_block', "rankine:white_marble")
    event.add('the_winter_rescue:flux_block', "rankine:black_marble")
    event.add('the_winter_rescue:flux_block', "rankine:dolostone")
    event.add('the_winter_rescue:flux_block', "rankine:chalk")
    event.add('the_winter_rescue:flour', "stone_age:flour")
    event.add('the_winter_rescue:flour', "frostedheart:rye_flour")

    event.add('the_winter_rescue:cogwheels', "steampowered:bronze_cogwheel")
    event.add('the_winter_rescue:cogwheels', "steampowered:cast_iron_cogwheel")
    event.add('the_winter_rescue:cogwheels', "steampowered:steel_cogwheel")

    event.add('the_winter_rescue:large_cogwheels', "steampowered:bronze_large_cogwheel")
    event.add('the_winter_rescue:large_cogwheels', "steampowered:cast_iron_large_cogwheel")
    event.add('the_winter_rescue:large_cogwheels', "steampowered:steel_large_cogwheel")
});