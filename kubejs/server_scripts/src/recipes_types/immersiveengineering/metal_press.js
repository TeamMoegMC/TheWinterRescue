ServerEvents.recipes((event) => {

    event.remove({type: 'immersiveengineering:metal_press'});

    let recipes_mold_plate = [
        {output: 'frostedheart:cast_iron_sheet', input: 'frostedheart:cast_iron_ingot'},
        {output: 'frostedheart:lead_sheet', input: 'frostedheart:lead_ingot'},
        {output: 'frostedheart:invar_sheet', input: 'frostedheart:invar_ingot'},
        {output: 'steampowered:bronze_sheet', input: '#forge:ingots/bronze'},
        {output: 'create:iron_sheet', input: 'minecraft:iron_ingot'},
        {output: 'create:brass_sheet', input: '#forge:ingots/brass'},
        {output: 'create:copper_sheet', input: '#forge:ingots/copper'},
        {output: 'immersiveengineering:plate_steel', input: '#forge:ingots/steel'},
        {output: 'immersiveengineering:plate_aluminum', input: '#forge:ingots/aluminum'},
        {output: 'immersiveengineering:plate_lead', input: '#forge:ingots/lead'},
        {output: 'immersiveengineering:plate_constantan', input: '#forge:ingots/constantan'},
        {output: 'immersiveengineering:plate_silver', input: '#forge:ingots/silver'},
        {output: 'immersiveengineering:plate_electrum', input: '#forge:ingots/electrum'},
        {output: 'immersiveengineering:plate_gold', input: '#forge:ingots/gold'}
    ]
    let recipes = [
        {
            output: '3x immersiveengineering:stick_iron',
            input: '2x minecraft:iron_ingot',
            mold: 'immersiveengineering:mold_rod'
        },
        {
            output: 'kubejs:shaped_bounded_graphite',
            input: 'kubejs:bounded_graphite',
            mold: 'immersiveengineering:mold_rod'
        },
        {
            output: '3x immersiveengineering:stick_steel',
            input: '2x #forge:ingots/steel',
            mold: 'immersiveengineering:mold_rod'
        },
        {
            output: '3x immersiveengineering:stick_aluminum',
            input: '2x #forge:ingots/aluminum',
            mold: 'immersiveengineering:mold_rod'
        },
        {
            output: '3x frostedheart:cast_iron_rod',
            input: '2x frostedheart:cast_iron_ingot',
            mold: 'immersiveengineering:mold_rod'
        },
        {
            output: '3x immersiveengineering:wire_copper',
            input: '2x #forge:ingots/copper',
            mold: 'immersiveengineering:mold_wire'
        },
        {
            output: '3x immersiveengineering:wire_electrum',
            input: '2x #forge:ingots/electrum',
            mold: 'immersiveengineering:mold_wire'
        },
        {
            output: '3x immersiveengineering:wire_copper',
            input: '2x #forge:plates/copper',
            mold: 'immersiveengineering:mold_wire'
        },
        {
            output: '3x immersiveengineering:wire_electrum',
            input: '2x #forge:plates/electrum',
            mold: 'immersiveengineering:mold_wire'
        },
        {output: 'kubejs:constantan_coil', input: '4x #forge:ingots/constantan', mold: 'immersiveengineering:mold_wire'}
    ]
    recipes_mold_plate.forEach((recipe) => {
        event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, 'immersiveengineering:mold_plate');
    })
    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold);
    })
})