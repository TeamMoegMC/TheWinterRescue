/**
 event.recipes.createMechanicalCrafting('minecraft:piston', [
 'CCCCC',
 'CPIPC',
 'CPRPC'
 ], {
    C: '#forge:cobblestone',
    P: '#minecraft:planks',
    R: '#forge:dusts/redstone',
    I: '#forge:ingots/iron'
})
 */

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

    recipes.forEach((recipe) => {
        event.recipes.createMechanicalCrafting(recipe)
    })

});