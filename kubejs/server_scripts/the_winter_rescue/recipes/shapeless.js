/*
 * For creating all standard minecraft:crafting_shapeless recipes
 */

ServerEvents.recipes((event) => {
	let { create, kubejs, minecraft } = event.recipes

	let changeShapelessRecipes = [
		["minecraft:flint", 2, ["minecraft:gravel", "minecraft:gravel", "minecraft:gravel"]],
		["charcoal_pit:straw", 9, ["minecraft:hay_block"]]
	]
	changeShapelessRecipes.forEach((recipe, index) => {
		event.remove({ output: recipe[0], type: "minecraft:crafting_shapeless" })
		kubejs.shapeless(recipe[0], recipe[2])
			.id(`the_winter_rescue:minecraft/crafting_shapeless/${index++}`)
	})

	let newShapelessRecipes = [
		["frostedheart:raw_rye_bread", 2, ["frostedheart:rye_flour", "minecraft:water_bucket"]],
		["immersiveengineering:crate", 1, ["immersiveengineering:reinforced_crate"]],
		// ["stone_age:dried_grass", 1, ["charcoal_pit:straw"]],
		["frostedheart:black_bread", 2, ["frostedheart:rye_flour", "frostedheart:rye_flour", "#forge:dusts/wood"]],
		["minecraft:slime_ball", 1, ["create:dough", "minecraft:lime_dye"]],
		// ["stone_age:raw_bread", 1, ["create:dough", "minecraft:sugar"]],
		[{ "item": "frostedheart:straw_briquette_red_mushroom", "nbt": { "Damage": 4800 } }, 1, ["kubejs:wet_straw_briquette", "minecraft:red_mushroom"]],
		[{ "item": "frostedheart:straw_briquette_brown_mushroom", "nbt": { "Damage": 4800 } }, 1, ["kubejs:wet_straw_briquette", "minecraft:brown_mushroom"]],
		[Item.of("frostedheart:advanced_thermos", 1, "{Damage:0,Fluid:{FluidName:'frostedheart:wolfberry_tea',Amount:3000}}"), [Item.of("frostedheart:advanced_thermos", "{Damage:0,Fluid:{FluidName:'caupona: nail_soup',Amount:3000}}"), "frostedheart:dried_wolfberries"]],
		[Item.of("frostedheart:thermos", 1, "{Damage:0,Fluid:{FluidName:'frostedheart:wolfberry_tea',Amount:1500}}"), [Item.of("frostedheart:thermos", "{Damage:0,Fluid:{FluidName:'caupona:nail_soup',Amount:1500}}"), "frostedheart:dried_wolfberries"]],
		["frostedheart:quill_and_ink", 4, ["minecraft:feather", "minecraft:glass_bottle", "frostedheart:generator_ash"]],
		["frostedheart:rubbing_tool", 4, ["frostedheart:generator_ash", "minecraft:paper", "frostedheart:rubbing_pad"]]
	]
	// 添加新的无规则配方
	newShapelessRecipes.forEach((recipe, index) => {
		kubejs.shapeless(recipe[0], recipe[2])
			.id(`the_winter_rescue:minecraft/crafting_shapeless/new/${index++}`)
	})

	Ingredient.of("#forge:vertical_slabs")
		.getItemIds()
		.forEach((name, index) => {
			let i = Ingredient.of(name.replace("_vertical", ""))
			if (!i.isEmpty()) {
				newShapelessRecipes.push([name, 1, [i]]);
				newShapelessRecipes.push([i, 1, [name]]);
			} else {
				minecraft.stonecutting(2, name.replace("_vertical_slab", ""))
					.id(`the_winter_rescue:minecraft/stonecutting/vertical_slab/${index++}`)
			}
		})

	function makeLimedCoal(count, rep, materials) {
		for (let i = 1; i <= rep; i++) {
			let cr = ["frostedheart:quicklime"];
			for (let j = 0; j < i; j++) {
				materials.forEach((elm) => {
					cr.push(elm)
				})
			}
			newShapelessRecipes.push([`kubejs:limed_coal`, (i * count), cr])
		}
	}
	makeLimedCoal(1, 4, ["kubejs:coal_dust"]);

	create.splashing("kubejs:wet_coal_dust", [
		"kubejs:limed_coal"
	])
})
