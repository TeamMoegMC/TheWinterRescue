JEIEvents.hideItems((event) => {

    // client only hide
    let itemsToHide = [
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
        'kubejs:pcb_base',
    ]

    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem)
        }
    })

    global.DISABLED_ITEM.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem)
        }
    })

    event.hide("#itemfilters:filters")

    let regexHide = []
    regexHide.forEach((regexExpression) => {
        event.hide(regexExpression)
    })
})
