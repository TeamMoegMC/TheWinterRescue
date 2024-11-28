/*
ServerEvents.recipes((event) => {
	let recipes = [
		tree_stumpRecipe(Item.of('create:copper_sheet'), Item.of('create:copper_ingot'),
			Ingredient.of('#forge:hammers'), 3, 2),
		tree_stumpRecipe(Item.of('create:copper_sheet'), Item.of('minecraft:copper_ingot'),
			Ingredient.of('#forge:hammers'), 3, 2),
		tree_stumpRecipe(Item.of('create:copper_sheet'), Item.of('immersiveengineering:ingot_copper'),
			Ingredient.of('#forge:hammers'), 3, 2),
		tree_stumpRecipe(Item.of('steampowered:bronze_sheet'), Item.of('frostedheart:bronze_ingot'),
			Ingredient.of('#forge:hammers'), 3, 2),
		tree_stumpRecipe(Item.of('create:iron_sheet'), Item.of('minecraft:iron_ingot'),
			Ingredient.of('#forge:hammers'), 3, 2),
		tree_stumpRecipe(Item.of('frostedheart:cast_iron_sheet'), Item.of('frostedheart:cast_iron_ingot'),
			Ingredient.of('#forge:hammers'), 3, 2),
		tree_stumpRecipe(Item.of('immersiveengineering:plate_gold'), Item.of('minecraft:gold_ingot'),
			Ingredient.of('#forge:hammers'), 3, 2),
		tree_stumpRecipe(Item.of('frostedheart:invar_sheet'), Item.of('frostedheart:invar_ingot'),
			Ingredient.of('#forge:hammers'), 3, 2),
		tree_stumpRecipe(Item.of('create:brass_sheet'), Item.of('create:brass_ingot'),
			Ingredient.of('#forge:hammers'), 3, 2),
		tree_stumpRecipe(Item.of('kubejs:flux'), Ingredient.of('#the_winter_rescue:flux_block'),
			Ingredient.of('#forge:hammers'), 3),
		tree_stumpRecipe(Item.of('frostedheart:crushed_bauxite_ore'), Item.of('frostedheart:bauxite'),
			Ingredient.of('#forge:hammers'), 3),
		tree_stumpRecipe(Item.of('3x frostedheart:kaolin'), Item.of('frostedheart:kaolin_block'),
			Ingredient.of('#forge:hammers'), 3),
		tree_stumpRecipe(Item.of("2x kubejs:wet_coal_briquette"), Item.of("kubejs:wet_coal_dust"),
			Ingredient.of('#forge:hammers'), 2),
		tree_stumpRecipe(Item.of('immersiveengineering:slab_treated_wood_horizontal', 2), Item.of('immersiveengineering:treated_wood_horizontal'),
			Ingredient.of('#forge:axes'), 2),
		tree_stumpRecipe(Item.of('immersiveengineering:slab_treated_wood_vertical', 2), Item.of('immersiveengineering:treated_wood_vertical'),
			Ingredient.of('#forge:axes'), 2),
		tree_stumpRecipe(Item.of('immersiveengineering:slab_treated_wood_packaged', 2), Item.of('immersiveengineering:treated_wood_packaged'),
			Ingredient.of('#forge:axes'), 2),
		tree_stumpRecipe(Item.of('kubejs:creosoted_sawdust_briquette'), Item.of('kubejs:creosoted_sawdust'),
			Ingredient.of('#forge:hammers'), 2)
	]
	let wood_recipes = []
	//auto bulk wood recipes
	//Ingredient.of("#minecraft:carpets").getItemIds().forEach(name=>{console.info(name)});
	Ingredient.of("#minecraft:logs").getItemIds().forEach((name) => {
		if (name.indexOf("log") != -1) {
			let namex = name.replace("_log", "").replace("stripped_", "");
			wood_recipes.push(tree_stumpRecipe(Item.of(namex + '_planks', 3), Item.of(name),
				Ingredient.of('#forge:axes'), 2))
			wood_recipes.push(tree_stumpRecipe(Item.of(namex + '_slab', 2), Item.of(namex + '_planks'),
				Ingredient.of('#forge:axes'), 2))
		} else if (name.indexOf("wood") != -1) {
			let namex = name.replace("_wood", "").replace("stripped_", "");
			wood_recipes.push(tree_stumpRecipe(Item.of(namex + '_planks', 3), Item.of(name),
				Ingredient.of('#forge:axes'), 2))
		} else if (name.indexOf("stem") != -1) {
			let namex = name.replace("_stem", "").replace("stripped_", "");
			wood_recipes.push(tree_stumpRecipe(Item.of(namex + '_planks', 3), Item.of(name),
				Ingredient.of('#forge:axes'), 2))
		}

	});

	wood_recipes.forEach((recipe) => {
		event.remove({ output: recipe.result, type: 'minecraft:crafting_shapeless' });
		event.custom({
			"type": "stone_age:tree_stump",
			"ingredient": recipe.ingredients.toJson(),
			"tool": recipe.tool.toJson(),
			"chopTimes": recipe.chop,
			"amount": recipe.amount,
			"result": recipe.result.toJson()
		})
	})
	recipes.forEach((recipe) => {
		event.custom({
			"type": "stone_age:tree_stump",
			"ingredient": recipe.ingredients.toJson(),
			"tool": recipe.tool.toJson(),
			"chopTimes": recipe.chop,
			"amount": recipe.amount,
			"result": recipe.result.toJson()
		})
	})
});
*/

ServerEvents.recipes((event) => {
    let { stone_age } = event.recipes

    /* 看起来这个配方类型还没做完, 等哪天做完了解除注释
    stone_age.tree_stump("2x steampowered:bronze_sheet", "3x frostedheart:bronze_ingot", "#forge:hammers", )
        .chopTimes(3)
    stone_age.tree_stump("2x frostedheart:lead_sheet", "3x frostedheart:lead_ingot", "#forge:hammers")
        .chopTimes(3)
    stone_age.tree_stump("2x frostedheart:cast_iron_sheet", "3x frostedheart:cast_iron_ingot", "#forge:hammers")
        .chopTimes(3)
    stone_age.tree_stump("2x frostedheart:invar_sheet", "3x frostedheart:invar_ingot", "#forge:hammers")
        .chopTimes(3)

    let metals = [
        "copper",
        "brass",
        "iron"
    ]
    metals.forEach((plate) => {
        stone_age.tree_stump(`2x create:${plate}_sheet`, `3x #forge:ingots/${plate}`, "#forge:hammers")
            .chopTimes(3)
    })

    let metals2 = [
        "aluminum",
        "lead",
        "constantan",
        "steel",
        "electrum",
        "silver",
        "gold"
    ]
    metals2.forEach((plate) => {
        stone_age.tree_stump(`2x immersiveengineering:plate_${plate}`, `3x #forge:ingots/${plate}`, "#forge:hammers")
            .chopTimes(3)
    })
    */
})