onEvent('recipes', (event) => {
//event.custom(inspireRecipe("kubejs:silver",1000));
	Ingredient.of("#forge:edible_mushrooms").getItemIds().forEach((name)=>{
	event.custom(incubateRecipeI(Ingredient.of("#kubejs:straw_briquettes"),Ingredient.of(name),false,Ingredient.of("8x "+name),2400,1)).id("the_winter_rescue:incubate/"+name.split(":")[0]+"/"+name.split(":")[1]);
	});
});