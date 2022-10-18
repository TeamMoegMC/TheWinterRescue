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
	console.info(Ingredient.of("#diet:fruits").getItemIds())
    event.add('itemfilters:check_nbt', 'tetra:modular_double')
	event.add('frostedheart:knife', 'tetra:modular_sword')
	event.add('frostedheart:knife', '#forge:knives')
	//event.add('ages_api:knives','#frostedheart:knife')
    event.add('forge:plates/bronze', "steampowered:bronze_sheet")
    event.add('forge:plates/cast_iron', "kubejs:cast_iron_plate")
    event.add('forge:plates/tungsten_steel', "kubejs:tungsten_steel_plate")
    event.add('forge:ingots/tungsten_steel', "kubejs:tungsten_steel")
    event.add('forge:plates/battery_alloy', "kubejs:battery_alloy_plate")
    event.add('forge:ingots/battery_alloy', "kubejs:battery_alloy")
    event.add('forge:dusts/wood', "rankine:sawdust")
	event.add("forge:ingots/antimony","rankine:antimony");
	event.add("forge:rods/cast_iron","kubejs:cast_iron_rod")
    event.add('the_winter_rescue:flux_block', "rankine:limestone")
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

    event.add('forge:ores/copper', "rankine:malachite")
    event.add('forge:ores/copper', "rankine:chalcocite")
    event.add('forge:ores/tin', "kubejs:native_tin")
    event.add('forge:ores/tin', "rankine:cassiterite")
	event.add('immersiveengineering:forbidden_in_crates', '#create:toolboxes')
	event.add('immersiveengineering:forbidden_in_crates', 'tetra:modular_toolbelt')
	event.add('immersiveengineering:forbidden_in_crates', '#charcoal_pit:ceramic_pots')
	event.add('immersiveengineering:forbidden_in_crates', 'charcoal_pit:clay_pot')
	event.add('immersiveengineering:forbidden_in_crates', '#storagedrawers:drawers')
	event.add('immersiveengineering:forbidden_in_crates', 'storagedrawers:compacting_drawers_3')
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
	//event.add("diet:sugars","#diet:fruits");
	//event.add("diet:vegetables","#diet:fruits")
	event.removeAll("diet:fruits")
	//event.remove("thermopolium:mushroom","#forge:mushrooms");
	//event.add("thermopolium:mushroom","#forge:edible_mushrooms");
	event.add("diet:plant_oil","kubejs:plant_oil");
	event.add("diet:plant_oil","#forge:crops/corn");
	event.add("diet:plant_oil","#forge:corn");
	event.add("diet:plant_oil","#forge:crops/walnut");
	event.add("diet:plant_oil","rankine:roasted_walnut");
	event.add("diet:plant_oil","rankine:trail_mix");
	event.add("diet:plant_oil","crockpot:popcorn");
	//event.add("diet:proteins","#diet:plant_oil")
	event.add("diet:plant_oil","create:bar_of_chocolate");
	event.add("diet:proteins","create:sweet_roll");
	event.add("diet:proteins","minecraft:cake");
	event.add("diet:proteins","rankine:pancake_batter")
	event.add("diet:proteins","frozenup:mug_of_milk")
	event.add("diet:proteins","#forge:milk");
	event.add("diet:proteins","frozenup:mug_of_chocolate_milk")
	event.add("diet:proteins","frozenup:mug_of_truffle_hot_chocolate")
	event.add("diet:plant_oil","crockpot:hot_cocoa");
	event.add("diet:proteins","crockpot:ice_cream");
	event.add("diet:plant_oil","crockpot:avaj");
	event.add("diet:grains","frozenup:truffle_muffin");
	event.add("diet:vitamin","stone_age:fat");
	event.add("diet:vitamin","stone_age:cooked_fat");

	event.remove("diet:vegetables","crockpot:corn")
	event.add("diet:grains","crockpot:corn")
	//event.add("diet:proteins","minecraft:milk");
	//event.add("diet:proteins","#forge:corn");
	event.add("diet:proteins","#forge:cheese");
	event.remove("diet:vegetables","crockpot:popcorn");
	//event.add("diet:proteins","#forge:crops/corn");
	event.add("kubejs:tetra_hammer","tetra:modular_double")
	event.add("rankine:tree_choppers","tetra:modular_double")
	event.add("rankine:tree_choppers","minecraft:iron_axe")
	event.add("forge:axes","minecraft:iron_axe")
		event.add('minecraft:shulker_box', 'minecraft:shulker_box')
	colors.forEach(clr=>{
		event.add('minecraft:shulker_box', 'minecraft:'+clr+'_shulker_box')
	})
	event.add('kubejs:straw_briquettes','kubejs:wet_straw_briquette');
	event.add('kubejs:straw_briquettes','kubejs:straw_briquette');
	event.add('thermopolium:container','frostedheart:advanced_thermos');
	event.add('thermopolium:container','frostedheart:thermos');
	event.add('thermopolium:cereals/baked','frostedheart:military_rations');
	event.add('thermopolium:cereals/baked','frostedheart:rye_bread');
	event.add('thermopolium:vegetables','frostedheart:military_rations');
	event.add('thermopolium:meats/meat','frostedheart:military_rations');
	event.add('thermopolium:meats/meat','charcoal_pit:chocolate');
	event.add('thermopolium:vegetables','frostedheart:white_turnip_block');
	event.add('thermopolium:vegetables','frostedheart:dried_vegetables');
	event.add('frostedheart:mushroom_base',"frostedheart:straw_briquette_red_mushroom")
	event.add('the_winter_rescue:leather',"minecraft:leather")
	event.add('the_winter_rescue:leather',"#forge:rubber")
	event.add('frostedheart:electronic_junk',"kubejs:damaged_gpu")
	event.add('frostedheart:electronic_junk',"kubejs:damaged_gpu")
    event.add('frostedheart:electronic_junk',"kubejs:damaged_circuit_board")
    event.add('frostedheart:electronic_junk',"kubejs:damaged_electric_motor")
    event.add('frostedheart:electronic_junk',"kubejs:damaged_camera")
    event.add('frostedheart:electronic_junk',"kubejs:burnt_circuit_board")
    event.add('frostedheart:electronic_junk',"kubejs:broken_robot_1")
    event.add('frostedheart:electronic_junk',"kubejs:broken_robot_2")
});