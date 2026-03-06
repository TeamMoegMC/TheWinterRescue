JEIEvents.hideItems((event) => {

    let itemsToHide = [
        // stone age
        "stone_age:dried_grass",
        "stone_age:thatch_block",
        "stone_age:flint_workbench",
        "stone_age:unlit_torch",
        'stone_age:flour',
        "stone_age:raw_bread",

        // charcoal pit
        "charcoal_pit:ash_block",
        "charcoal_pit:ash",
        "charcoal_pit:coke_block",
        "charcoal_pit:fertilizer",

        // ie
        "immersiveengineering:toolbox",
        "immersiveengineering:sorter",
        "immersiveengineering:fluid_sorter",
        "immersiveengineering:watermill",
        "immersiveengineering:windmill",
		'immersiveengineering:windmill_blade',
		'immersiveengineering:windmill_sail',

        // create power devices: we have steam power
        "create:water_wheel",
        "create:large_water_wheel",
        "create:cogwheel",
        "create:large_cogwheel",
        "create:windmill_bearing",
        "create:steam_engine",

        // create
        "create:cart_assembler",

        // materials
        "create:crushed_raw_tin",
        "create:crushed_raw_aluminum",
        "immersiveengineering:raw_aluminum",
        "immersiveengineering:raw_block_aluminum",
        "immersiveengineering:ore_aluminum",
        "immersiveengineering:deepslate_ore_aluminum",

        "supplementaries:end_stone_lamp",

        // nutrition items
        'kubejs:fruits_and_vegs',
        'kubejs:grains',
        'kubejs:plant_oil',
        'kubejs:protein',
        'kubejs:diabetes_risks',
        'kubejs:vitamin_toxicity',

        // uncraftable items
        'frostedheart:vegetable_sawdust_soup',
        'frostedheart:rye_sawdust_porridge',
        'frostedheart:rye_porridge',
        'frostedheart:vegetable_soup',

        // incomplete item
        'kubejs:incomplete_bronze_cogwheel',
        'kubejs:incomplete_cast_iron_cogwheel',
        'kubejs:incomplete_steel_cogwheel',
        'kubejs:incomplete_large_bronze_cogwheel',
        'kubejs:incomplete_large_cast_iron_cogwheel',
        'kubejs:incomplete_large_steel_cogwheel',
        'kubejs:incomplete_capacitor_lv',
        'kubejs:incomplete_capacitor_mv',
        'kubejs:incomplete_capacitor_hv',
    ]

    let regexHide = []
    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem)
        }
    })

    event.hide("#itemfilters:filters")

    regexHide.forEach((regexExpression) => {
        event.hide(regexExpression)
    })
})
