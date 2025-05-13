ServerEvents.recipes((event) => {

    event.remove({type: 'immersiveengineering:metal_press'});

    let recipes_mold_plate = [
        {output: 'frostedheart:cast_iron_sheet', input: 'frostedheart:cast_iron_ingot'},
        {output: 'frostedheart:lead_sheet', input: 'frostedheart:lead_ingot'},
        {output: 'frostedheart:invar_sheet', input: 'frostedheart:invar_ingot'},
        {output: 'frostedheart:bronze_sheet', input: '#forge:ingots/bronze'},
        {output: 'create:iron_sheet', input: 'minecraft:iron_ingot'},
        {output: 'create:brass_sheet', input: '#forge:ingots/brass'},
        {output: 'create:copper_sheet', input: '#forge:ingots/copper'},
        {output: 'frostedheart:steel_sheet', input: '#forge:ingots/steel'},
        {output: 'frostedheart:aluminum_sheet', input: '#forge:ingots/aluminum'},
        {output: 'frostedheart:lead_sheet', input: '#forge:ingots/lead'},
        {output: 'frostedheart:constantan_sheet', input: '#forge:ingots/constantan'},
        {output: 'frostedheart:silver_sheet', input: '#forge:ingots/silver'},
        {output: 'frostedheart:electrum_sheet', input: '#forge:ingots/electrum'},
        {output: 'create:golden_sheet', input: '#forge:ingots/gold'},
        {output: 'frostedheart:duralumin_sheet', input: '#forge:ingots/duralumin'}
    ]
    let recipes = [
        {
            output: '3x frostedheart:copper_rod',
            input: '2x minecraft:copper_ingot',
            mold: 'immersiveengineering:mold_rod'
        },
		{
            output: '4x kubejs:wet_coal_briquette',
            input: '2x kubejs:wet_coal_dust',
            mold: 'immersiveengineering:mold_packing_4'
        },
        {
            output: '3x frostedheart:iron_rod',
            input: '2x minecraft:iron_ingot',
            mold: 'immersiveengineering:mold_rod'
        },
        {
            output: 'kubejs:shaped_bounded_graphite',
            input: 'kubejs:bounded_graphite',
            mold: 'immersiveengineering:mold_rod'
        },
        {
            output: '3x frostedheart:steel_rod',
            input: '2x #forge:ingots/steel',
            mold: 'immersiveengineering:mold_rod'
        },
        {
            output: '3x frostedheart:aluminum_rod',
            input: '2x #forge:ingots/aluminum',
            mold: 'immersiveengineering:mold_rod'
        },
        {
            output: '3x frostedheart:cast_iron_rod',
            input: '2x frostedheart:cast_iron_ingot',
            mold: 'immersiveengineering:mold_rod'
        },
        {
            output: '3x frostedheart:electrum_rod',
            input: '2x frostedheart:electrum_ingot',
            mold: 'immersiveengineering:mold_rod'
        },
        {
            output: '3x frostedheart:constantan_rod',
            input: '2x frostedheart:constantan_ingot',
            mold: 'immersiveengineering:mold_rod'
        },
        {
            output: '3x frostedheart:copper_wire',
            input: '2x #forge:ingots/copper',
            mold: 'immersiveengineering:mold_wire'
        },
        {
            output: '3x frostedheart:electrum_wire',
            input: '2x #forge:ingots/electrum',
            mold: 'immersiveengineering:mold_wire'
        },
        {
            output: '3x frostedheart:copper_wire',
            input: '2x #forge:plates/copper',
            mold: 'immersiveengineering:mold_wire'
        },
        {
            output: '3x frostedheart:electrum_wire',
            input: '2x #forge:plates/electrum',
            mold: 'immersiveengineering:mold_wire'
        },
        {
            output: '3x frostedheart:aluminum_wire',
            input: '2x #forge:plates/aluminum',
            mold: 'immersiveengineering:mold_wire'
        },
        {
            output: '3x frostedheart:steel_wire',
            input: '2x #forge:plates/steel',
            mold: 'immersiveengineering:mold_wire'
        },
        {
            output: '3x frostedheart:constantan_wire',
            input: '2x #forge:plates/constantan',
            mold: 'immersiveengineering:mold_wire'
        },
    ]
    recipes_mold_plate.forEach((recipe) => {
        event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, 'immersiveengineering:mold_plate');
    })
    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold);
    })
})