let colors=["white",
"orange",
"magenta",
"light_blue",
"yellow",
"lime",
"pink",
"gray",
"light_gray",
"cyan",
"purple",
"blue",
"brown",
"black",
"green",
"red"
];
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
	event.add('immersiveengineering:forbidden_in_crates', '#create:toolboxes')
	event.add('immersiveengineering:forbidden_in_crates', 'tetra:modular_toolbelt')
	event.add('immersiveengineering:forbidden_in_crates', '#charcoal_pit:ceramic_pots')
	event.add('immersiveengineering:forbidden_in_crates', 'charcoal_pit:clay_pot')
	event.add('immersiveengineering:forbidden_in_crates', '#storagedrawers:drawers')
	event.add("kubejs:fuel_stick","frostedheart:charcoal_stick")
	event.add("kubejs:fuel_stick","frostedheart:coal_stick")
	event.add("kubejs:fuel_stick","kubejs:straw_briquette")
	event.add("frostedheart:ash","charcoal_pit:ash")
	event.add("frostedheart:cow_feed","charcoal_pit:straw");
	event.add("kubejs:coal_dust","kubejs:anthracite_dust")
	event.add("kubejs:coal_dust","kubejs:bituminous_coal_dust")
	event.add("kubejs:coal_dust","kubejs:subbituminous_coal_dust")
	event.add("kubejs:coal_dust","kubejs:lignite_dust")
	event.add("kubejs:coal_dust","kubejs:coal_dust")
	event.add("kubejs:fuel_glue","minecraft:slime_ball")
	event.add("kubejs:fuel_glue","create:dough")
	event.add("kubejs:fuel_glue","#forge:bitumen")
	event.add("forge:ores/copper","kubejs:rusted_copper_ingot")
	event.add("forge:ores/tin","kubejs:gray_tin_ingot")
	event.add("forge:ores/iron","kubejs:rusted_iron_ingot")
	event.add("the_winter_rescue:bloom_iron","kubejs:rusted_iron_ingot")
	event.add("diet:sugars",Ingredient.of("#diet:fruits").getItemIds());
	event.add("diet:fruits",Ingredient.of("#diet:vegetables").getItemIds());
	event.add("diet:vitamin",Ingredient.of("#diet:proteins").getItemIds());
	
	event.add("diet:plant_oil","kubejs:plant_oil");
	event.add("diet:plant_oil","#forge:crops/corn");
	event.add("diet:plant_oil","#forge:corn");
	event.add("diet:plant_oil","#forge:crops/walnut");
	event.add("diet:plant_oil","rankine:roasted_walnut");
	event.add("diet:plant_oil","rankine:trail_mix");
	event.add("diet:plant_oil","charcoal_pit:corn_kernels");
	event.add("diet:plant_oil","charcoal_pit:popcorn");
	event.add("diet:plant_oil","charcoal_pit:cooked_chestnut");
	event.add("diet:plant_oil","charcoal_pit:chocolate");
	event.add("diet:plant_oil","crockpot:popcorn");
	event.add("diet:proteins","#diet:plant_oil")
	event.remove("diet:vitamin",Ingredient.of("#diet:plant_oil").getItemIds())
	event.add("kubejs:tetra_hammer","tetra:modular_double")
	event.add("rankine:tree_choppers","tetra:modular_double")
		event.add('minecraft:shulker_box', 'minecraft:shulker_box')
	colors.forEach(clr=>{
		event.add('minecraft:shulker_box', 'minecraft:'+clr+'_shulker_box')
	})

});