/**
 * For creating all standard minecraft:crafting_shapeless recipes
 */

onEvent('recipes', (event) => {

    var changeShapelessRecipes = [
        shapelessRecipe('frozenup:truffle_muffin', ['frostedheart:rye_flour', 'minecraft:sugar', 'frozenup:truffle'])
    ]

    var newShapelessRecipes = [
        shapelessRecipe('stone_age:dried_grass', ['charcoal_pit:straw'])
    ]
	function makeLimedCoal(count,rep,materials){
		for(let i=1;i<=rep;i++){
			let cr=['rankine:quicklime'];
			for(let j=0;j<i;j++){
				materials.forEach((elm)=>{cr.push(elm);});
			}
			newShapelessRecipes.push(shapelessRecipe(((i)*count)+'x kubejs:limed_coal',cr));
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
	 event.smelting('kubejs:coal_briquette', 'kubejs:wet_coal_briquette');
	 event.campfireCooking('kubejs:coal_briquette', 'kubejs:wet_coal_briquette',0,200);
});
