/**
 * For creating all standard minecraft:crafting_shapeless recipes
 */

onEvent('recipes', (event) => {

    var changeShapelessRecipes = [
        shapelessRecipe('frozenup:truffle_muffin', ['frostedheart:rye_flour', 'minecraft:sugar', 'frozenup:truffle']),
		shapelessRecipe('2x rankine:dry_mortar', ['rankine:quicklime','#minecraft:sand']),
		shapelessRecipe('rankine:dry_mortar', ['#forge:clay','#minecraft:sand',"minecraft:dirt"]),
		shapelessRecipe('2x rankine:dry_mortar', ['#forge:clay_balls','#minecraft:sand',"rankine:tufa_limestone"]),
		shapelessRecipe('2x rankine:dry_mortar', ['#forge:clay_balls','#minecraft:sand',"minecraft:dirt"]),
		shapelessRecipe('3x rankine:dry_mortar', ['rankine:quicklime',"#rankine:mortar_special"]),
		shapelessRecipe('2x rankine:dry_mortar', ['#forge:ash','#minecraft:sand',"#forge:slag"]),
		shapelessRecipe('2x minecraft:flint', ['minecraft:gravel','minecraft:gravel','minecraft:gravel'])
    ]
	event.recipes.createSplashing(["rankine:mortar"],"rankine:dry_mortar");
    var newShapelessRecipes = [
		shapelessRecipe('watersource:purified_water_bottle', ['frostedheart:steam_bottle','minecraft:snowball']),
		shapelessRecipe('immersiveengineering:crate', ['immersiveengineering:reinforced_crate']),
        shapelessRecipe('stone_age:dried_grass', ['charcoal_pit:straw']),
		shapelessRecipe({"item":'frostedheart:straw_briquette_red_mushroom',"nbt":{"Damage":4800}}, ['kubejs:wet_straw_briquette', 'minecraft:red_mushroom']),
		shapelessRecipe({"item":'frostedheart:straw_briquette_brown_mushroom',"nbt":{"Damage":4800}}, ['kubejs:wet_straw_briquette', 'minecraft:brown_mushroom'])
    ]
	Ingredient.of("#forge:vertical_slabs").getItemIds().forEach((name)=>{
		let i=Ingredient.of(name.replace("_vertical",""));
		if(!i.isEmpty()){
			newShapelessRecipes.push(shapelessRecipe(name,[i]));
			newShapelessRecipes.push(shapelessRecipe(i,[name]));
		}else
			event.stonecutting("2x "+name,name.replace("_vertical_slab",""));
	});
	function makeLimedCoal(count,rep,materials){
		for(let i=1;i<=rep;i++){
			let cr=['rankine:quicklime'];
			for(let j=0;j<i;j++){
				materials.forEach((elm)=>{cr.push(elm);});
			}
			newShapelessRecipes.push(shapelessRecipeGroup(((i)*count)+'x kubejs:limed_coal',cr,cr[0]));
		}
	}
	makeLimedCoal(2,8,['kubejs:anthracite_dust']);
	makeLimedCoal(1,8,['kubejs:subbituminous_coal_dust']);
	makeLimedCoal(1,4,['kubejs:coal_dust']);
	makeLimedCoal(3,4,['kubejs:bituminous_coal_dust','kubejs:bituminous_coal_dust']);
	makeLimedCoal(2,2,['kubejs:lignite_dust','kubejs:lignite_dust','kubejs:lignite_dust']);
    /**
     * Remove a recipe from minecraft crafting table and add new one
     */
    let i = 0;
    changeShapelessRecipes.forEach(function (recipe) {
        event.remove({output: recipe.result, type: 'minecraft:crafting_shapeless'});
        event.shapeless(recipe.result, recipe.ingredients).id('the_winter_rescue:minecraft/crafting_shapeless/' + i);
        i++;
    });

    let j = 0;
    newShapelessRecipes.forEach(function (recipe) {
        event.shapeless(recipe.result, recipe.ingredients).id('the_winter_rescue:minecraft/crafting_shapeless/new/' + j);
        j++;
    });
	 event.recipes.createSplashing(["kubejs:wet_coal_dust"],"kubejs:limed_coal");
	 event.recipes.createCompacting(["2x kubejs:wet_coal_briquette"], "kubejs:wet_coal_dust");
	 event.recipes.createCompacting(["4x kubejs:creosoted_coal_briquette"], ["kubejs:anthracite_dust",Fluid.of('immersiveengineering:creosote', 100)]);
	 
	 
	 event.recipes.createCompacting(["3x kubejs:creosoted_coal_briquette"], ["#forge:dusts/coal_coke",Fluid.of('immersiveengineering:creosote', 100)]);
	 event.recipes.createCompacting(["kubejs:creosoted_charcoal_briquette"], ["kubejs:charcoal_dust",Fluid.of('immersiveengineering:creosote',250)]).heated();
	 event.recipes.createCompacting(["kubejs:creosoted_sawdust_briquette"], ["4x #forge:dusts/wood",Fluid.of('immersiveengineering:creosote', 5)]).heated()
	 event.recipes.createCompacting(["kubejs:creosoted_charcoal_briquette"], ["kubejs:charcoal_dust",Fluid.of('immersiveengineering:creosote',260)]);
	 event.recipes.createCompacting(["kubejs:creosoted_sawdust_briquette"], ["4x #forge:dusts/wood",Fluid.of('immersiveengineering:creosote', 25)]);
	 event.recipes.createCompacting(["4x kubejs:bound_coal_briquette"], ["2x #kubejs:fuel_glue","#forge:dusts/coal_coke"]);
	 event.recipes.createCompacting(["5x kubejs:bound_coal_briquette"], ["2x #kubejs:fuel_glue","kubejs:anthracite_dust"]);
	 event.recipes.createCompacting(["3x kubejs:bound_charcoal_briquette"], ["4x #kubejs:fuel_glue","2x kubejs:charcoal_dust"]);
	 event.recipes.createCompacting(["4x kubejs:bound_coal_briquette"], [Fluid.of('create:honey', 125),"#forge:dusts/coal_coke"]);
	 event.recipes.createCompacting(["5x kubejs:bound_coal_briquette"], [Fluid.of('create:honey', 125),"kubejs:anthracite_dust"]);
	 event.recipes.createCompacting(["3x kubejs:bound_charcoal_briquette"], [Fluid.of('create:honey', 250),"2x kubejs:charcoal_dust"]);
	 event.recipes.createCompacting(["kubejs:wet_straw_briquette"], ["8x charcoal_pit:straw"]);
});
