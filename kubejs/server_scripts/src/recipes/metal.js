ServerEvents.recipes((event) => {
    let {kubejs} = event.recipes

    let metalGroup = [
        "titanium",
        "magnesium",
        "bronze",
        "tin",
        "duralumin",
        "invar",
        "zinc",
        "tungsten",
        "cast_iron",
        "tungsten_steel",
    ]
    // Define metal tags
    /*let tags = {
        ingots: "#forge:ingots/metal",
        blocks: "#forge:storage_blocks/metal",
        nuggets: "#forge:nuggets/metal",
        plates: "#forge:plates/metal"
    }*/


    metalGroup.forEach((material) => {
        kubejs.shapeless(Item.of(`#forge:nuggets/${material}`, 9), Item.of(`#forge:ingots/${material}`))
        kubejs.shapeless(Item.of(`#forge:ingots/${material}`), Item.of(`#forge:nuggets/${material}`, 9))
        kubejs.shapeless(Item.of(`#forge:storage_blocks/${material}`), Item.of(`#forge:ingots/${material}`, 9))
        kubejs.shapeless(Item.of(`#forge:ingots/${material}`, 9), Item.of(`#forge:storage_blocks/${material}`))
    })

// Iterate through the tags and generate recipes
    /*Object.keys(tags).forEach((key) => {
        let itemIds = Ingredient.of(tags[key]).getItemIds()

        if (!itemIds || itemIds.length === 0) {
            console.error(`No items found for tag: ${tags[key]}`)
            return 0
        }

        itemIds.forEach((itemId) => {
            if (key === "blocks") {
                // Metal block => 9 ingots
                let ingotId = itemId.replace("block", "ingot")
                if (Item.exists(ingotId)) {
                    kubejs.shapeless(Item.of(ingotId, 9), [itemId])
                } else {
                     console.warn(`Skipping: No ingot found for block: ${ itemId }`)
                }
            } else if (key === "ingots") {
                // Metal ingot => 9 nuggets
                let nuggetId = itemId.replace("ingot", "nugget")
                if (Item.exists(nuggetId)) {
                    kubejs.shapeless(Item.of(nuggetId, 9), [itemId])
                    // 9 nuggets => Metal ingot
                    kubejs.shapeless(Item.of(itemId, 1), Array(9).fill(nuggetId))
                } else {
                     console.warn(`Skipping: No nugget found for ingot: ${ itemId }`)
                }

                // 9 ingots => Metal block
                let blockId = itemId.replace("ingot", "block")
                if (Item.exists(blockId)) {
                    kubejs.shapeless(Item.of(blockId, 1), Array(9).fill(itemId))
                } else {
                     console.warn(`Skipping: No block found for ingot: ${ itemId }`)
                }
            }
        })
    })*/

    kubejs.shapeless("9x create:copper_nugget", [
        "#forge:ingots/copper"
    ])
    kubejs.shapeless("minecraft:copper_ingot", [
        "9x #forge:nuggets/copper"
    ])

    let metals = [
        {mod: "frostedheart", metal: "bronze"},
        {mod: "frostedheart", metal: "lead"},
        {mod: "frostedheart", metal: "cast_iron"},
        {mod: "frostedheart", metal: "invar"},
        {mod: "frostedheart", metal: "steel"},
        {mod: "frostedheart", metal: "aluminum"},
        {mod: "frostedheart", metal: "constantan"},
        {mod: "frostedheart", metal: "electrum"},
        {mod: "frostedheart", metal: "silver"},
		{mod: "frostedheart", metal: "nickel"},
		{mod: "frostedheart", metal: "tin",no_plate:true},
        {mod: "create", metal: "copper"},
        {mod: "create", metal: "brass"},
        {mod: "create", metal: "iron"},
		{mod: "create", metal: "zinc",no_plate:true},
        {mod: "create", metal: "gold",no_plate:true},
        {mod: "immersiveengineering", metal: "uranium",no_plate:true}
    ]
    metals.forEach((metal) => {
        let sheet = `${metal.mod}:${metal.metal}_sheet`
        let ingot = `#forge:ingots/${metal.metal}`
        /*		console.log(sheet)
                console.log(ingot)
                create.compacting(sheet, ingot);*/
		if(!metal.no_plate)
        event.custom({
            type: "create:compacting",
            ingredients: Ingredient.of(ingot, 3),
            results: Item.of(sheet, 2)
        })
		event.remove({id:"immersiveengineering:crusher/raw_ore_"+metal.metal})
		event.remove({id:"immersiveengineering:crusher/raw_block_"+metal.metal})
		event.remove({id:"immersiveengineering:arcfurnace/raw_block_"+metal.metal})
		event.remove({id:"immersiveengineering:arcfurnace/raw_ore_"+metal.metal})
    })
})