/*
 *  For creating all standard minecraft:crafting_shapeless recipes
 */

ServerEvents.recipes((event) => {
    let { create, kubejs, minecraft } = event.recipes

    let changeShapelessRecipes = [
        ["minecraft:flint", 2, [["minecraft:gravel", 3]]],
        ["charcoal_pit:straw", 9, ["minecraft:hay_block"]]
    ]
    changeShapelessRecipes.forEach((recipe, index) => {
        let [
            output,
            quantity,
            inputs
        ] = recipe.length === 3 ? recipe : [recipe[0], 1, recipe[1]]

        if (Array.isArray(output)) {
            let [itemID, nbt] = output
            output = Item.of(itemID, quantity).withNBT(nbt || {})
        } else {
            9
            output = Item.of(output, quantity)
        }

        let processedInputs = inputs.map((input) => {
            if (Array.isArray(input)) {
                let [item, count] = input
                return Item.of(item, count)
            } else if (typeof input === "string") {
                return input
            } else {
                throw new Error(`Invalid input format: ${ input }`)
            }
        })

        kubejs.shapeless(output, processedInputs)
            .id(`the_winter_rescue:minecraft/crafting_shapeless/change/${ index }`)
    })

    let addShapelessRecipes = [
        ["frostedheart:raw_rye_bread", 2, [["frostedheart:rye_flour", 2], "minecraft:water_bucket"]],
        ["immersiveengineering:crate", ["immersiveengineering:reinforced_crate"]],
        ["frostedheart:black_bread", 2, [["frostedheart:rye_flour", 2], "#forge:dusts/wood"]],
        ["minecraft:slime_ball", ["create:dough", "minecraft:lime_dye"]],
        [
            {
                "item": "frostedheart:straw_briquette_red_mushroom",
                "nbt": { "Damage": 4800 }
            }, ["kubejs:wet_straw_briquette", "minecraft:red_mushroom"]
        ],
        [
            {
                "item": "frostedheart:straw_briquette_brown_mushroom", "nbt": { "Damage": 4800 }
            }, ["kubejs:wet_straw_briquette", "minecraft:brown_mushroom"]
        ],
        ["frostedheart:quill_and_ink", 4, [["minecraft:feather", 3], "minecraft:glass_bottle", "frostedheart:generator_ash"]],
        ["frostedheart:rubbing_tool", 4, [["frostedheart:generator_ash", 2], "minecraft:paper", "frostedheart:rubbing_pad"]],
        ["stone_age:grass_lead", [["charcoal_pit:straw", 3]]],
        ["frostedheart:packed_snow", [["minecraft:snowball", 2], ["minecraft:snow_block", 2]]],
        ["stone_age:leather_strip", 4, ["minecraft:leather"]]
    ]
    addShapelessRecipes.forEach((recipe, index) => {
        let [
            output,
            quantity,
            inputs
        ] = recipe.length === 3 ? recipe : [recipe[0], 1, recipe[1]]

        // Check if the output is an array, and process it further if true
        if (Array.isArray(output)) {
            // Destructure the output array to get item ID and NBT data
            let [itemID, nbt] = output
            // Create an item with the given item ID, quantity, and NBT data
            output = Item.of(itemID, quantity).withNBT(nbt || {})
        } else {
            // If the output is not an array, create an item with the given item ID and quantity
            output = Item.of(output, quantity)
        }

        // Process each input to convert them into a unified format
        let processedInputs = inputs.map((input) => {
            // If the input is an array, destructure to get item and count, then create an item
            if (Array.isArray(input)) {
                let [item, count] = input
                return Item.of(item, count)
                // If the input is a string, return it as is
            } else if (typeof input === "string") {
                return input
                // If the input format is invalid, throw an error
            } else {
                throw new Error(`Invalid input format: ${ input }`)
            }
        })

        // Register a shapeless crafting recipe using kubejs.shapeless method
        kubejs.shapeless(
            output,
            processedInputs
        ).id(`the_winter_rescue:minecraft/crafting_shapeless/new/${ index }`)
    })

    Ingredient.of("#forge:vertical_slabs")
        .getItemIds()
        .forEach((name, index) => {
            let i = Ingredient.of(name.replace("_vertical", ""))
            if (!i.isEmpty()) {
                addShapelessRecipes.push([name, [i]]);
                addShapelessRecipes.push([i, [name]]);
            } else {
                minecraft.stonecutting(2, name.replace("_vertical_slab", ""))
                    .id(`the_winter_rescue:minecraft/stonecutting/vertical_slab/${ index }`)
            }
        })

    function makeLimedCoal (count, rep, materials) {
        for (let i = 1; i <= rep; i ++) {
            let cr = ["frostedheart:quicklime"];
            for (let j = 0; j < i; j ++) {
                materials.forEach((elm) => {
                    cr.push(elm)
                })
            }
            addShapelessRecipes.push([`kubejs:limed_coal`, (i * count), cr])
        }
    }

    makeLimedCoal(4, ["kubejs:coal_dust"]);

    create.splashing("kubejs:wet_coal_dust", [
        "kubejs:limed_coal"
    ])
})