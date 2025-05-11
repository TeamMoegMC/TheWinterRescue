ServerEvents.recipes((event) => {
    let {create} = event.recipes
    let data = {
        recipes: [
            {output: '9x minecraft:iron_ingot', input: 'minecraft:iron_block'},
            {output: '9x minecraft:gold_ingot', input: 'minecraft:gold_block'},
            {output: '9x minecraft:diamond', input: 'minecraft:diamond_block'},
            {output: '9x minecraft:emerald', input: 'minecraft:emerald_block'},
            {output: '9x minecraft:lapis_lazuli', input: 'minecraft:lapis_block'},
            {output: '9x minecraft:netherite_ingot', input: 'minecraft:netherite_block'},
            {output: '4x frostedheart:charcoal_stick', input: 'kubejs:charcoal_briquette'},
            {output: '4x frostedheart:coal_stick', input: 'kubejs:coal_briquette'},
            {output: '12x create:shaft', input: 'frostedheart:cast_iron_ingot'},
        ]
    };
    let woods = []
    //auto bulk slab recipes
    Ingredient.of("#minecraft:planks").getItemIds().forEach((name) => {
        if (name.indexOf("culms") === -1&&name.indexOf("fiberboard")===-1) {
            woods.push(name.replace("_planks", ""));
        }
    });

    Ingredient.of("#minecraft:logs")
        .getItemIds()
        .forEach((name) => {
            if (name.indexOf("caupona") != -1) {

            } else if (name.indexOf("stripped_") !== -1) {
                if (name.indexOf("log") !== -1) {
                    create.cutting("4x " + name.replace("_log", "").replace("stripped_", "") + "_planks", name);
                } else if (name.indexOf("stem") !== -1) {
                    create.cutting("4x " + name.replace("_stem", "").replace("stripped_", "") + "_planks", name);
                } else if (name.indexOf("wood") !== -1) {
                    create.cutting("4x " + name.replace("_wood", "").replace("stripped_", "") + "_planks", name);
                }
            } else if (name.indexOf("log") !== -1 || name.indexOf("stem") !== -1) {
                let rl = name.split(":")
                event.remove({output: rl[0] + ":stripped_" + rl[1], type: "create:cutting"});
                create.cutting(rl[0] + ":stripped_" + rl[1], name);
            } else if (name.indexOf("wood") !== -1) {
                let rl = name.split(":")
                event.remove({output: rl[0] + ":stripped_" + rl[1], type: "create:cutting"});
                create.cutting(rl[0] + ":stripped_" + rl[1], name);
            }
        })
    woods.forEach((wood) => {
        event.remove({output: wood + "_slab", type: 'minecraft:crafting_shaped'});
        data.recipes.push({output: '2x ' + wood + "_slab", input: wood + "_planks"})
    })
    Ingredient.of("#forge:treated_wood").getItemIds().forEach((wood) => {
        event.remove({output: wood.split(":")[0] + ":slab_" + wood.split(":")[1], type: 'minecraft:crafting_shaped'});
        data.recipes.push({output: '2x ' + wood.split(":")[0] + ':slab_' + wood.split(":")[1], input: wood})
    })
    data.recipes.forEach((recipe) => {
        create.cutting(recipe.output, recipe.input)
    })
})