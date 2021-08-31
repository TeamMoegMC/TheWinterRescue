onEvent('item.tags', (event) => {
    event.remove('forge:string', 'notreepunching:plant_string')
    event.add('itemfilters:check_nbt', 'custommachinery:custom_machine_item')
    event.add('itemfilters:check_nbt', 'tetra:modular_double')
    event.add('the_winter_rescue:flux_block', "rankine:tufa_limestone")
    event.add('the_winter_rescue:flux_block', "rankine:white_marble")
    event.add('the_winter_rescue:flux_block', "rankine:black_marble")
    event.add('the_winter_rescue:flux_block', "rankine:dolostone")
    event.add('the_winter_rescue:flux_block', "rankine:chalk")
    event.add('the_winter_rescue:flour', "stone_age:flour")
    event.add('the_winter_rescue:flour', "frostedheart:rye_flour")
});