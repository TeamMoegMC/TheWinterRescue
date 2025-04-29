/*
 *  For creating all standard minecraft:crafting_shapeless recipes
 */

ServerEvents.recipes((event) => {
    let {create, kubejs, minecraft} = event.recipes

    let changeShapelessRecipes = [

    ]
    changeShapelessRecipes.forEach((recipe, index) => {
		if(!Array.isArray(recipe.ingredients)){
			recipe.ingredients=[recipe.ingredients];
		}
		event.remove({output: Item.of(recipe.result), type: 'minecraft:crafting_shapeless'});
        kubejs.shapeless(recipe.result, recipe.ingredients)
            .id(recipe.id?recipe.id:`the_winter_rescue:minecraft/crafting_shapeless/change/${index}`)
    })
    let addShapelessRecipes = [
        shapelessRecipe("2x frostedheart:raw_rye_bread", ["2x frostedheart:rye_flour", "minecraft:water_bucket"]),
        shapelessRecipe("stone_age:raw_bread", ["3x stone_age:flour", "minecraft:water_bucket"]),
        shapelessRecipe("2x stone_age:raw_bread", ["2x stone_age:flour", "2x minecraft:sugar", "minecraft:water_bucket"]),
		shapelessRecipe("minecraft:flint", "3x minecraft:gravel"),
        shapelessRecipe("9x charcoal_pit:straw", "minecraft:hay_block"),
        shapelessRecipe("immersiveengineering:crate", "immersiveengineering:reinforced_crate"),
        shapelessRecipe("2x frostedheart:black_bread", ["2x frostedheart:rye_flour", "#forge:dusts/wood", "minecraft:water_bucket"]),
        shapelessRecipe("minecraft:slime_ball", ["create:dough", "minecraft:lime_dye"]),
        shapelessRecipe(Item.of("frostedheart:straw_briquette_red_mushroom",1,{"Damage": 4800}), ["kubejs:wet_straw_briquette", "minecraft:red_mushroom"]),
        shapelessRecipe(Item.of("frostedheart:straw_briquette_brown_mushroom",1,{"Damage": 4800}), ["kubejs:wet_straw_briquette", "minecraft:brown_mushroom"]),
        shapelessRecipe("frostedresearch:quill_and_ink", ["minecraft:feather", "minecraft:glass_bottle", "4x frostedheart:generator_ash"]),
        shapelessRecipe("frostedresearch:quill_and_ink", ["minecraft:feather", "minecraft:glass_bottle", "2x frostedheart:generator_ash", "2x minecraft:ink_sac"]),
        shapelessRecipe("frostedresearch:quill_and_ink", ["minecraft:feather", "minecraft:glass_bottle", "2x frostedheart:generator_ash", "2x minecraft:glow_ink_sac"]),
        shapelessRecipe("frostedresearch:rubbing_tool", ["2x frostedheart:generator_ash", "minecraft:paper", "frostedresearch:rubbing_pad"]),
        shapelessRecipe("2x stone_age:grass_lead", "3x charcoal_pit:straw" ),
        shapelessRecipe("frostedheart:packed_snow", ["2x minecraft:snowball", "2x minecraft:snow_block"]),
        shapelessRecipe("4x stone_age:leather_strip", "minecraft:leather"),
        shapelessRecipe("4x frostedheart:peat","frostedheart:peat_block"),
        shapelessRecipe("4x frostedheart:kaolin","frostedheart:kaolin_block"),
        shapelessRecipe("4x frostedheart:bauxite","frostedheart:bauxite_block"),
        shapelessRecipe("frostedheart:constantan_wire", ["#forge:plates/constantan", "immersiveengineering:wirecutter"]),
        shapelessRecipe("2x frostedheart:charcoal_stick","kubejs:charcoal_briquette"),
        shapelessRecipe("2x frostedheart:coal_stick","kubejs:coal_briquette"),
        shapelessRecipe("stone_age:raw_hide","4x minecraft:rabbit_hide"),
        shapelessRecipe("stone_age:raw_hide","2x frostedheart:fox_hide"),
        shapelessRecipe("stone_age:raw_hide","2x frostedheart:wolf_hide"),
        shapelessRecipe("2x stone_age:raw_hide","1x frostedheart:polar_bear_hide"),
        shapelessRecipe("frostedheart:magnesite_block","9x frostedheart:raw_magnesite"),
        shapelessRecipe("frostedheart:quicklime_block","9x frostedheart:quicklime"),
        shapelessRecipe("frostedheart:magnesia_block","9x frostedheart:magnesia_dust"),
        shapelessRecipe("4x stone_age:bone_arrow_head",["#stone_age:bones","immersiveengineering:hammer"]),
        shapelessRecipe("4x stone_age:bone_arrow_head",["#stone_age:bones","#forge:hammers"]),
        shapelessRecipe("16x caupona:vivid_charcoal",["#minecraft:coals","3x charcoal_pit:straw"]),
		shapelessRecipe("2x stone_age:fish_bone",["minecraft:bone","minecraft:flint"]),
		shapelessRecipe("3x immersiveengineering:fertilizer",["#twr:potassium_rich", "#twr:nitrogen_rich", "#twr:phosphorous_rich"]),
        // shapelessRecipe("2x stone_age:fish_bone",["#stone_age:bones","minecraft:flint"])
        //,shapelessRecipe("4x minecraft:clay_ball","minecraft:clay")
    ]
    addShapelessRecipes.forEach((recipe, index) => {
		if(!Array.isArray(recipe.ingredients)){
			recipe.ingredients=[recipe.ingredients];
		}
        kubejs.shapeless(
            recipe.result,
            recipe.ingredients
        ).id(recipe.id?recipe.id:`the_winter_rescue:minecraft/crafting_shapeless/new/${index}`)
    })

    Ingredient.of("#forge:vertical_slabs")
        .getItemIds()
        .forEach((name, index) => {
            let i = Ingredient.of(name.replace("_vertical", ""))
            if (!i.isEmpty()) {
                addShapelessRecipes.push([name, [i]]);
                addShapelessRecipes.push([i, [name]]);
            } else {
                minecraft.stonecutting(2, name.replace("_vertical_slab", ""))
                    .id(`the_winter_rescue:minecraft/stonecutting/vertical_slab/${index}`)
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
            addShapelessRecipes.push([`kubejs:limed_coal`, (i * count), cr])
        }
    }

    makeLimedCoal(4, ["kubejs:coal_dust"]);

    create.splashing("kubejs:wet_coal_dust", [
        "kubejs:limed_coal"
    ])
})