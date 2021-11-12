onEvent('recipes', (event) => {
    let recipes = [
        shapedRecipe('steampowered:alternator', ['BBEBB', 'FFACD', 'BBEBB'], {
            A: 'rankine:cast_iron_support',
            B: '#forge:plates/cast_iron',
            C: 'steampowered:cast_iron_cogwheel',
            D: 'steampowered:cast_iron_large_cogwheel',
            E: 'immersiveengineering:coil_lv',
            F: 'immersiveengineering:wirecoil_copper'
        }),
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
        shapedRecipe('steampowered:cast_iron_flywheel', [' DDD ', 'DACAD', 'DCBCD', 'DACAD', ' DDD '], {
            A: 'steampowered:cast_iron_cogwheel',
            B: 'steampowered:cast_iron_large_cogwheel',
            C: 'create:shaft',
            D: '#forge:plates/cast_iron',
        }),
        shapedRecipe('steampowered:cast_iron_steam_engine', ['DCEDD', 'CCABF', 'DCEDD'], {
            A: 'steampowered:cast_iron_cogwheel',
            B: 'steampowered:cast_iron_large_cogwheel',
            C: 'create:fluid_pipe',
            D: '#forge:plates/cast_iron',
            E: 'create:propeller',
            F: 'create:shaft',
        }),
        shapedRecipe('steampowered:steel_flywheel', [' DDD ', 'DACAD', 'DCBCD', 'DACAD', ' DDD '], {
            A: 'steampowered:steel_cogwheel',
            B: 'steampowered:steel_large_cogwheel',
            C: 'create:shaft',
            D: '#forge:plates/steel',
        }),
        shapedRecipe('steampowered:steel_steam_engine', ['DCEDD', 'CCABF', 'DCEDD'], {
            A: 'steampowered:steel_cogwheel',
            B: 'steampowered:steel_large_cogwheel',
            C: 'create:fluid_pipe',
            D: '#forge:plates/steel',
            E: 'create:propeller',
            F: 'create:shaft',
        })
    ]
	let shapeless=[
		{output:'9x minecraft:iron_ingot',input:'minecraft:iron_block'},
		{output:'9x minecraft:gold_ingot',input:'minecraft:gold_block'},
		{output:'9x minecraft:diamond',input:'minecraft:diamond_block'},
		{output:'9x minecraft:emerald',input:'minecraft:emerald_block'},
		{output:'9x minecraft:lapis_lazuli',input:'minecraft:lapis_block'},
		{output:'9x minecraft:netherite_ingot',input:'minecraft:netherite_ingot'}
	]
	shapeless.forEach((r)=>{
		recipes.push(shapedRecipe(r.output, ['A'], {
            A: r.input
        }))
	})
    recipes.forEach((recipe) => {
        event.remove({output: recipe.result, type: 'create:mechanical_crafting'});
        event.recipes.createMechanicalCrafting(recipe)
    })

});