
onEvent('recipes', (event) => {
var ores = ["rankine:magnetite", "kubejs:pyrite", "rankine:chalcocite", "rankine:malachite", "rankine:pentlandite", "kubejs:native_tin", "rankine:cassiterite", "kubejs:bauxite", "rankine:stibnite", "rankine:cinnabar", "rankine:magnesite", "rankine:galena", "kubejs:halite", "rankine:fluorite", "rankine:vanadinite", "kubejs:silver", "kubejs:gold", "rankine:hematite"];
var ore_name = ["magnetite", "pyrite", "chalcocite", "malachite", "pentlandite", "native_tin", "cassiterite", "bauxite", "stibnite", "cinnabar", "magnesite", "galena", "halite", "fluorite", "vanadinite", "silver", "gold", "hematite"];
var by_products = [];
var i;
var ores_i;
var ore_name_i;
var crushed_ore_i;
var washed_ore_i;
var wash_input;
/*
在by_products数组的对应位置设置副产物
例如:
by_products[1] = [Item.of("minecraft:diamond").withChance(0.5)];
ore_name中的1号位置(第二个元素)是pyrite(黄铁矿)，这行代码将在将粉碎黄铁矿洗为洗净黄铁矿的合成中加入副产物钻石，产出概率为百分之五十。
*/
by_products[1] = [Item.of("rankine:sulfur").withChance(0.5)];

    for (i = 0; i < ores.length; i++) {
        ores_i = ores[i];
        ore_name_i = ore_name[i];
        crushed_ore_i = "kubejs:" + "crushed_ore_" + ore_name_i;
        event.recipes.createCrushing([
            crushed_ore_i,
            Item.of(crushed_ore_i).withChance(0.5)
        ], ores_i)
    }

    for (i = 0; i < ore_name.length; i++) {
        crushed_ore_i = "kubejs:crushed_ore_" + ore_name[i];
        washed_ore_i = "kubejs:washed_ore_" + ore_name[i];
        if (by_products[i] != undefined) {
            wash_input = by_products[i];
            wash_input.unshift(washed_ore_i);
            event.recipes.createSplashing(
                wash_input, crushed_ore_i)
        } else {
            event.recipes.createSplashing(
                [
                    washed_ore_i
                ], crushed_ore_i)
        }

    }

    // low-smelt point metals
    event.smelting('rankine:vanadium_ingot', 'kubejs:washed_ore_vanadinite');
    event.smelting('immersiveengineering:ingot_lead', 'kubejs:washed_ore_galena');
    event.smelting('rankine:tin_ingot', 'kubejs:washed_ore_cassiterite');
    event.smelting('rankine:tin_ingot', 'kubejs:washed_ore_native_tin');
    event.smelting('rankine:antimony', 'kubejs:washed_ore_stibnite');

    var data = {
        recipes: [
    {output: 'minecraft:iron_ingot', input: 'kubejs:washed_ore_magnetite',time:300},
    {output: 'minecraft:iron_ingot', input: 'kubejs:washed_ore_pyrite',time:300},
    {output: 'minecraft:iron_ingot', input: 'kubejs:washed_ore_hematite',time:300},
    {output: 'rankine:copper_ingot', input: 'kubejs:washed_ore_malachite',time:150},
    {output: 'rankine:copper_ingot', input: 'kubejs:washed_ore_chalcocite',time:120},
    {output: 'immersiveengineering:ingot_silver', input: 'kubejs:washed_ore_silver',time:150},
    {output: 'minecraft:gold_ingot', input: 'kubejs:washed_ore_gold',time:150},
    {output: 'immersiveengineering:ingot_nickel', input: 'kubejs:washed_ore_pentlandite',time:300},
	{output: 'immersiveengineering:ingot_nickel', input: 'kubejs:nickel_matte',time:300},
	{output: 'rankine:antimony', input: 'kubejs:antimony_oxide',time:80},
	{output: 'rankine:copper_ingot', input: 'kubejs:copper_oxide',time:90},
	{output: 'immersiveengineering:ingot_lead', input: 'kubejs:lead_oxide',time:80}
     ]
    };
	data.recipes.forEach((recipe) => {
    event.recipes.immersiveengineeringBlastFurnace(recipe.output, recipe.input, 'immersiveengineering:slag').time(recipe.time);
    });
	function rotarySulfate(input,output,energy,sulfur,chance){
		if(chance==0)
			return rotarykilnRecipe3(input,output,Fluid.of("frostedheart:sulfur_dioxide",sulfur).toJson(),200,energy)
		return rotarykilnRecipe3(input,output,Fluid.of("frostedheart:sulfur_dioxide",sulfur).toJson(),200,energy,output,chance)
	}
	let kilnRecipes=[
		rotarySulfate("kubejs:washed_ore_chalcocite","kubejs:copper_oxide",32,125,0),
		rotarykilnRecipe2("kubejs:washed_ore_malachite","kubejs:copper_oxide",200,32),
		rotarykilnRecipe2("kubejs:washed_ore_magnetite","kubejs:washed_ore_hematite",200,32,"kubejs:washed_ore_hematite",0.25),
		rotarySulfate("kubejs:washed_ore_pyrite","kubejs:washed_ore_hematite",64,250,0),
		rotarySulfate("kubejs:washed_ore_galena","kubejs:lead_oxide",32,250,0.25),
		rotarykilnRecipe3("kubejs:washed_ore_pentlandite","kubejs:nickel_matte",Fluid.of("frostedheart:sulfur_dioxide",250).toJson(),200,64,"kubejs:iron_slag",1),
		rotarySulfate("kubejs:washed_ore_stibnite","kubejs:antimony_oxide",32,250,0.25),
		carkilnRecipe(["3x kubejs:nickel_matte","2x rankine:quicklime"],["3x immersiveengineering:ingot_nickel","3x immersiveengineering:slag","kubejs:nickel_matte"],1200)
	]
	kilnRecipes.forEach((recipe)=>{event.custom(recipe);console.info(recipe)});
	
});

			
