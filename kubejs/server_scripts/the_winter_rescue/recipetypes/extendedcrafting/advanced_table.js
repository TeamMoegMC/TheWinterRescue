onEvent('recipes', (event) => {
    let recipes = [
        shapedRecipe('steampowered:bronze_flywheel', [' DDD ', 'DACAD', 'DCBCD', 'DACAD', ' DDD '], {
            A: 'steampowered:bronze_cogwheel',
            B: 'steampowered:bronze_large_cogwheel',
            C: 'create:shaft',
            D: '#forge:plates/bronze',
        }),
        shapedRecipe('steampowered:bronze_steam_engine', ['DCEDD', 'CCABF', 'DCEDD'], {
            A: 'steampowered:bronze_cogwheel',
            B: 'steampowered:bronze_large_cogwheel',
            C: 'create:fluid_pipe',
            D: '#forge:plates/bronze',
            E: 'create:propeller',
            F: 'create:shaft',
        }),
		shapedRecipe('create:blaze_burner', ['AC CA', 'ABDBA', 'ABBBA', 'AAAAA'], {
            A: 'kubejs:cast_iron_plate',
            B: '#forge:plates/constantan',
            C: '#forge:plates/bronze',
            D: 'minecraft:lava_bucket',
        }),
		shapedRecipe(Item.of('custommachinery:custom_machine_item', '{machine:"the_winter_rescue:electrolyzer"}'), ['AAAAA', 'ABECA', 'ABDCA', 'AAAAA'], {
            A: 'kubejs:cast_iron_plate',
            B: '#forge:ingots/silver',
            C: '#forge:ingots/gold',
            D: 'minecraft:glass',
			E: 'immersiveengineering:circuit_board',
        })
    ]

    let j = 0;
    recipes.forEach(function (recipe) {
        event.recipes.extendedcrafting.shaped_table(recipe.result, recipe.pattern, recipe.key).id('the_winter_rescue:extendedcrafting/advanced_table/new/'+j);
        j++;
    });
});