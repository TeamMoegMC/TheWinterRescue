onEvent('recipes', (event) => {
	
	event.remove({ type: 'immersiveengineering:metal_press'});

    const recipes_mold_plate = [
        { output: 'kubejs:cast_iron_plate', input: 'rankine:cast_iron_alloy'},
		{ output: 'kubejs:battery_alloy_plate', input: 'kubejs:battery_alloy'},
		{ output: 'steampowered:bronze_sheet', input: '#forge:ingots/bronze'},
		{ output: 'create:iron_sheet', input: 'minecraft:iron_ingot'},
		{ output: 'create:brass_sheet', input: '#forge:ingots/brass'},
		{ output: 'create:copper_sheet', input: '#forge:ingots/copper'},
		{ output: 'immersiveengineering:plate_steel', input: '#forge:ingots/steel'},
		{ output: 'immersiveengineering:plate_aluminum', input: '#forge:ingots/aluminum'},
		{ output: 'immersiveengineering:plate_lead', input: '#forge:ingots/lead'},
		{ output: 'immersiveengineering:plate_constantan', input: '#forge:ingots/constantan'},
		{ output: 'immersiveengineering:plate_silver', input: '#forge:ingots/silver'},
		{ output: 'immersiveengineering:plate_gold', input: '#forge:ingots/gold'}
	];
	const recipes = [
		{ output: '3x immersiveengineering:stick_iron', input: '2x minecraft:iron_ingot', mold: 'immersiveengineering:mold_rod'},
		{ output: '3x immersiveengineering:stick_steel', input: '2x #forge:ingots/steel', mold: 'immersiveengineering:mold_rod'},
		{ output: '3x immersiveengineering:stick_aluminum', input: '2x #forge:ingots/aluminum', mold: 'immersiveengineering:mold_rod'},
		{ output: '3x rankine:cast_iron_rod', input: '2x rankine:cast_iron_alloy', mold: 'immersiveengineering:mold_rod'},
		
		{ output: 'immersiveengineering:wire_copper', input: '#forge:plates/copper', mold: 'immersiveengineering:mold_wire'}
    ];
	
    recipes_mold_plate.forEach((recipe) => {
		event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, 'immersiveengineering:mold_plate');
    });
	
    recipes.forEach((recipe) => {
		event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold);
    });
});
