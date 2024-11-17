let colors = [
	"white",
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

ServerEvents.tags('item', (event) => {
	event.add('itemfilters:check_nbt', 'tetra:modular_double')
	event.add('frostedheart:knife', 'tetra:modular_sword')
	event.add('frostedheart:knife', '#forge:knives')
	//event.add('ages_api:knives','#frostedheart:knife')
	event.add('forge:plates/bronze', "steampowered:bronze_sheet")
	event.add('forge:plates/cast_iron', "frostedheart:cast_iron_sheet")
	event.add('forge:plates/tungsten_steel', "frostedheart:tungsten_steel_sheet")
	event.add('forge:ingots/tungsten_steel', "frostedheart:tungsten_steel_ingot")
	event.add('forge:plates/battery_alloy', "frostedheart:lead_sheet")
	event.add('forge:ingots/battery_alloy', "frostedheart:lead_ingot")
	event.add('forge:dusts/wood', "frostedheart:sawdust")
	event.add("forge:rods/cast_iron", "frostedheart:cast_iron_rod")
	event.add('the_winter_rescue:flux_block', "minecraft:calcite")
	event.add('the_winter_rescue:flour', "stone_age:flour")
	event.add('the_winter_rescue:flour', "frostedheart:rye_flour")

	event.add('the_winter_rescue:cogwheels', "steampowered:bronze_cogwheel")
	event.add('the_winter_rescue:cogwheels', "steampowered:cast_iron_cogwheel")
	event.add('the_winter_rescue:cogwheels', "steampowered:steel_cogwheel")

	event.add('the_winter_rescue:large_cogwheels', "steampowered:bronze_large_cogwheel")
	event.add('the_winter_rescue:large_cogwheels', "steampowered:cast_iron_large_cogwheel")
	event.add('the_winter_rescue:large_cogwheels', "steampowered:steel_large_cogwheel")
	event.add('forge:ores/tin', "frostedheart:cassiterite")
	event.add('immersiveengineering:forbidden_in_crates', '#create:toolboxes')
	event.add('immersiveengineering:forbidden_in_crates', 'tetra:modular_toolbelt')
	event.add('immersiveengineering:forbidden_in_crates', '#charcoal_pit:ceramic_pots')
	event.add('immersiveengineering:forbidden_in_crates', 'charcoal_pit:clay_pot')
	event.add('immersiveengineering:forbidden_in_crates', '#storagedrawers:drawers')
	event.add('immersiveengineering:forbidden_in_crates', 'storagedrawers:compacting_drawers_3')
	event.add("kubejs:fuel_stick", "frostedheart:charcoal_stick")
	event.add("kubejs:fuel_stick", "frostedheart:coal_stick")
	event.add("kubejs:fuel_stick", "kubejs:straw_briquette")
	event.add("frostedheart:ash", "charcoal_pit:ash")
	event.add("frostedheart:cow_feed", "charcoal_pit:straw");
	event.add("kubejs:coal_dust", "kubejs:coal_dust")
	event.add("kubejs:kiln_dust", "kubejs:charcoal_dust")
	event.add("kubejs:kiln_dust", "kubejs:coal_dust")
	event.add("kubejs:fuel_glue", "minecraft:slime_ball")
	event.add("kubejs:fuel_glue", "create:dough")
	event.add("kubejs:fuel_glue", "#forge:bitumen")
	event.add("forge:ores/copper", "frostedheart:rusted_copper_ingot")
	event.add("forge:ores/tin", "frostedheart:gray_tin_ingot")
	event.add("forge:ores/iron", "frostedheart:rusted_iron_ingot")
	event.add("forge:dusts/zinc", "frostedheart:zinc_dust")
	//event.remove("caupona:mushroom","#forge:mushrooms");
	//event.add("caupona:mushroom","#forge:edible_mushrooms");


	event.add("kubejs:tetra_hammer", "tetra:modular_double")
	event.add("forge:axes", "minecraft:iron_axe")
	event.add('minecraft:shulker_box', 'minecraft:shulker_box')
	colors.forEach(clr => {
		event.add('minecraft:shulker_box', 'minecraft:' + clr + '_shulker_box')
	})
	event.add('kubejs:straw_briquettes', 'kubejs:wet_straw_briquette');
	event.add('kubejs:straw_briquettes', 'kubejs:straw_briquette');
	event.add('caupona:container', '#frostedheart:thermos');
	event.add('caupona:cereals/baked', 'frostedheart:military_rations');
	event.add('caupona:cereals/baked', 'frostedheart:rye_bread');
	event.add('caupona:vegetables', 'frostedheart:military_rations');
	event.add('caupona:meats/meat', 'frostedheart:military_rations');
	event.add('caupona:meats', 'frostedheart:chocolate');
	event.add('caupona:eggs', 'crockpot:cooked_egg');
	event.add('caupona:vegetables', 'frostedheart:white_turnip_block');
	event.add('caupona:vegetables', 'frostedheart:dried_vegetables');
	event.add('frostedheart:mushroom_base', "frostedheart:straw_briquette_red_mushroom")
	event.add('frostedheart:mushroom_base', "frostedheart:straw_briquette_brown_mushroom")
	event.add('the_winter_rescue:leather', "minecraft:leather")
	event.add('the_winter_rescue:leather', "#forge:rubber")

	event.add('frostedheart:electronic_junk', "kubejs:damaged_gpu")
	event.add('frostedheart:electronic_junk', "kubejs:damaged_gpu")
	event.add('frostedheart:electronic_junk', "kubejs:damaged_circuit_board")
	event.add('frostedheart:electronic_junk', "kubejs:damaged_electric_motor")
	event.add('frostedheart:electronic_junk', "kubejs:damaged_camera")
	event.add('frostedheart:electronic_junk', "kubejs:burnt_circuit_board")
	event.add('frostedheart:electronic_junk', "kubejs:broken_robot_1")
	event.add('frostedheart:electronic_junk', "kubejs:broken_robot_2")

	//Why we disable ftb ultimine? We consider it have a bad impact on player experience, since it greatly reduce difficulty of this modpack and can easily cause bug or cheat.	
	//为何要禁止连锁挖矿？我们以前认为使用连锁挖矿是个人行为，可以让后期不想挖矿的玩家偷懒。
	//但是部分玩家和游戏UP向各种所有玩家推荐连锁挖矿。
	//甚至一些新手玩家刚刚下载整合包就已经前来询问连锁挖矿相关问题，并直接安装连锁挖矿，而不是先体验整合包内容。
	//而新手玩家上手直接使用连锁挖矿显然是非常影响整体游戏体验的，也与我们设计的初衷相悖，因此我们被迫提高连锁挖矿的门槛。
	//如果你坚持要使用连锁挖矿，可以自行把对应的内容去除，但是出现任何问题后果自负。并且请不要向他人宣传连锁挖矿。
	//最终，我们是不推荐擅自修改整合包内容的，这样极大降低游戏体验。如果实在要爽，不如直接开创造。
	event.add('ftbultimine:included_tools', 'create:cogwheel')
});