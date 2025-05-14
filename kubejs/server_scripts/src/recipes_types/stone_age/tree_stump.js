ServerEvents.recipes((event) => {
    let recipes = [
        // Ingots to Sheets
        tree_stumpRecipe(Item.of('create:copper_sheet'), Item.of('minecraft:copper_ingot'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 2),
        tree_stumpRecipe(Item.of('create:iron_sheet'), Item.of('minecraft:iron_ingot'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 2),
        tree_stumpRecipe(Item.of('create:brass_sheet'), Item.of('create:brass_ingot'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 2),
        tree_stumpRecipe(Item.of('create:golden_sheet'), Item.of('minecraft:gold_ingot'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 2),
        tree_stumpRecipe(Item.of('frostedheart:bronze_sheet'), Item.of('frostedheart:bronze_ingot'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 2),
        tree_stumpRecipe(Item.of('frostedheart:lead_sheet'), Item.of('frostedheart:lead_ingot'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 2),
        tree_stumpRecipe(Item.of('frostedheart:cast_iron_sheet'), Item.of('frostedheart:cast_iron_ingot'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 2),
        tree_stumpRecipe(Item.of('frostedheart:invar_sheet'), Item.of('frostedheart:invar_ingot'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 2),
        tree_stumpRecipe(Item.of('frostedheart:aluminum_sheet'), Item.of('frostedheart:aluminum_ingot'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 2),
        tree_stumpRecipe(Item.of('frostedheart:constantan_sheet'), Item.of('frostedheart:constantan_ingot'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 2),
        tree_stumpRecipe(Item.of('frostedheart:steel_sheet'), Item.of('frostedheart:steel_ingot'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 2),
        tree_stumpRecipe(Item.of('frostedheart:electrum_sheet'), Item.of('frostedheart:electrum_ingot'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 2),
        tree_stumpRecipe(Item.of('frostedheart:silver_sheet'), Item.of('frostedheart:silver_ingot'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 2),

        // Other materials
        tree_stumpRecipe(Item.of('3x frostedheart:flux'), Ingredient.of('#the_winter_rescue:flux_block'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 1),
        tree_stumpRecipe(Item.of('frostedheart:crushed_raw_bauxite'), Item.of('frostedheart:bauxite'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 1),
        tree_stumpRecipe(Item.of('3x frostedheart:kaolin'), Item.of('frostedheart:kaolin_block'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 3, 1),
        tree_stumpRecipe(Item.of("2x kubejs:wet_coal_briquette"), Item.of("kubejs:wet_coal_dust"),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 2, 1),
        tree_stumpRecipe(Item.of('immersiveengineering:slab_treated_wood_horizontal', 2), Item.of('immersiveengineering:treated_wood_horizontal'),
            Ingredient.of({"type":"chorda:tool","tool":"axe_dig"}), 2, 1),
        tree_stumpRecipe(Item.of('immersiveengineering:slab_treated_wood_vertical', 2), Item.of('immersiveengineering:treated_wood_vertical'),
            Ingredient.of({"type":"chorda:tool","tool":"axe_dig"}), 2, 1),
        tree_stumpRecipe(Item.of('immersiveengineering:slab_treated_wood_packaged', 2), Item.of('immersiveengineering:treated_wood_packaged'),
            Ingredient.of({"type":"chorda:tool","tool":"axe_dig"}), 2, 1),
        tree_stumpRecipe(Item.of('kubejs:creosoted_sawdust_briquette'), Item.of('kubejs:creosoted_sawdust'),
            Ingredient.of({"type":"chorda:tool","tool":"hammer_dig"}), 2, 1),
        // tree_stumpRecipe(Item.of("stone_age:fish_bone", 3), Item.of('minecraft:bone'),
        //     Ingredient.of('#minecraft:swords'), 2, 1)
    ]

    recipes.forEach((recipe) => {
        event.custom({
            type: "stone_age:tree_stump",
            ingredient: recipe.ingredients,
//			input: recipe.ingredients,
            tool: recipe.tool,
            chopTimes: recipe.chop,
            amount: recipe.amount,
            result: recipe.result
        })
    })


    // Wood Processing
    let wood_recipes = []
	let names=[]
    Ingredient.of("#minecraft:logs").getItemIds().forEach((name) => {
		
        if (name.indexOf("log") != -1) {
            let namex = name.replace("_log", "").replace("stripped_", "");
			if(Item.of(namex + '_planks', 3).isEmpty())return;
            wood_recipes.push(tree_stumpRecipe(Item.of(namex + '_planks', 3), Item.of(name),
                Ingredient.of({"type":"chorda:tool","tool":"axe_dig"}), 2))
			names.push(namex);
            wood_recipes.push(tree_stumpRecipe(Item.of(namex + '_slab', 2), Item.of(namex + '_planks'),
                Ingredient.of({"type":"chorda:tool","tool":"axe_dig"}), 2))
			names.push(namex);
        } else if (name.indexOf("wood") != -1) {
            let namex = name.replace("_wood", "").replace("stripped_", "");
            wood_recipes.push(tree_stumpRecipe(Item.of(namex + '_planks', 3), Item.of(name),
                Ingredient.of({"type":"chorda:tool","tool":"axe_dig"}), 2))
			names.push(namex);
        } else if (name.indexOf("stem") != -1) {
            let namex = name.replace("_stem", "").replace("stripped_", "");
            wood_recipes.push(tree_stumpRecipe(Item.of(namex + '_planks', 3), Item.of(name),
                Ingredient.of({"type":"chorda:tool","tool":"axe_dig"}), 2))
			names.push(namex);
        }

    });

    wood_recipes.forEach((recipe,index) => {
        event.remove({output: recipe.result, type: 'minecraft:crafting_shapeless'});
        event.custom({
            type: "stone_age:tree_stump",
            ingredient: recipe.ingredients,
            tool: recipe.tool,
            chopTimes: recipe.chop,
//			amount: recipe.amount,
            result: recipe.result
        }).id(names[index]+"_"+index)
    })
});