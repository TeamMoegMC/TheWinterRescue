ServerEvents.recipes((event) => {

    let {immersiveengineering, create, minecraft} = event.recipes

    let allFurnace = [
        oreProcessRecipe("copper", "copper_ingot", 200, true, true),
        oreProcessRecipe("tin", "frostedheart:tin_ingot", 200, true, true),
        oreProcessRecipe("gold", "gold_ingot", 200, true, true),
        oreProcessRecipe("silver", "frostedheart:silver_ingot", 200, true, true),
        oreProcessRecipe("lead", "frostedheart:lead_ingot", 200, true, true),
        oreProcessRecipe("zinc", "create:zinc_ingot", 200, true, true),

        oreProcessRecipe("iron", "iron_ingot", 800, false, true),
        oreProcessRecipe("pyrite", "iron_ingot", 800, false, false),
        oreProcessRecipe("nickel", "frostedheart:nickel_ingot", 800, false, true),

        oreProcessRecipe("electrum", "frostedheart:electrum_ingot", 800, false, true),
    ]

    allFurnace.forEach((recipe) => {
		event.remove({"type":"minecraft:smelting","output":recipe.output})
		event.remove({"type":"minecraft:blasting","output":recipe.output})
    })
    allFurnace.forEach((recipe) => {
        let map = new Map()
        if (recipe.isElement) {
            let dust = Item.of("frostedheart:" + recipe.name + "_dust")
            dust = dust.isEmpty() ? Item.of("immersiveengineering:dust_" + recipe.name) : dust
            map.set(dust, 0.5)
        }
        let slurry = Item.of("frostedheart:" + recipe.name + "_slurry")
        if (!slurry.isEmpty()) {
            addSlurryRecipes(recipe.name)
            map.set(slurry, 0.75)
        }
        let rawCrushed = getItem("crushed_raw_" + recipe.name, ["create", "frostedheart"]);
        if (!rawCrushed.isEmpty()) {
            map.set(rawCrushed, 0.75)
        }
        let raw = getItem("raw_" + recipe.name, ["minecraft", "create", "frostedheart", "immersiveengineering"])
        if (!raw.isEmpty()) {
            map.set(raw, 1)
        }

        map.forEach((impurity, input) => {
            if (!input.isEmpty()) {
                let time = recipe.processTime * impurity
                if (recipe.lowMelting) {
                    let xp = impurity <= 0.5 ? 0 : impurity;
                    minecraft.smelting(recipe.output, input).xp(xp).cookingTime(recipe.processTime)
                    minecraft.blasting(recipe.output, input, xp, time * 0.75)
                }
                let bf = immersiveengineering.blast_furnace(recipe.output, input).time(time * 0.5)
                if (impurity > 0.5) {
                    bf.slag("immersiveengineering:slag")
                }
            }
        })
    })

    let removedSmeltingAndBlasting = [
        "frostedheart:steel_ingot",
        "immersiveengineering:ingot_uranium",
        "frostedheart:constantan_ingot",
        "frostedheart:aluminum_ingot",
        "frostedheart:magnesium_ingot"
    ]
    removedSmeltingAndBlasting.forEach((result) => {
        event.remove({ type: "minecraft:smelting", output: result })
        event.remove({ type: "minecraft:blasting", output: result })
    })

    let removedBlastFurnace = [
        "frostedheart:steel_ingot",
        "frostedheart:nickel_ingot",
        "immersiveengineering:ingot_steel",
        "immersiveengineering:storage_steel",
        "immersiveengineering:ingot_uranium"
    ]
    removedBlastFurnace.forEach((result) => {
        event.remove({ type: "immersiveengineering:blast_furnace", output: result })
    })

    let removedSplashing = [
        "frostedheart:nickel_nugget",
        "frostedheart:aluminum_nugget",
        "frostedheart:lead_nugget",
		"create:copper_nugget",
		"create:zinc_nugget",
		"immersiveengineering:uranium_nugget"
    ]
    removedSplashing.forEach((result) => {
        event.remove({ type: "create:splashing", output: result })
    })

    // remove normal smelting


    let normalSmeltingRecipes = [
        ["frostedheart:electrum_ingot", "#forge:dusts/electrum", 150, false],
        ["frostedheart:alumina_dust", "#forge:dusts/aluminum_hydroxide", 50, false],

        ["minecraft:paper", "frostedheart:pulp", 40, false]

    ]
	create.splashing([Item.of("#forge:crushed_raw_materials/iron"),Item.of("#forge:dusts/sulfur").withChance(0.5)],Ingredient.of("#forge:crushed_raw_materials/pyrite"))
	create.splashing([Item.of("#forge:dusts/zinc_oxide"),Item.of("#forge:dusts/sulfur").withChance(0.5)],Ingredient.of("#forge:crushed_raw_materials/zinc"))
    normalSmeltingRecipes.forEach(([output, input, time, slag]) => {
		event.remove({"type":"minecraft:smelting","output":output})
		event.remove({"type":"minecraft:blasting","output":output})
        minecraft.smelting(output, input)
		// minecraft.blasting(output, input)
        minecraft.blasting(output, input, 0, time*1.5)
        if (slag) {
            immersiveengineering.blast_furnace(output, input, "immersiveengineering:slag")
                .time(time)
        } else {
            immersiveengineering.blast_furnace(output, input)
                .time(time)
        }
    })

    let blastFurnaceRecipes = [
        ["minecraft:copper_ingot", "#twr:rusted_copper", 50, true],
        ["frostedheart:tin_ingot", "#forge:ingots/gray_tin", 50, true],
        ["frostedheart:aluminum_ingot", "#forge:dusts/aluminum", 800, false],
        ["minecraft:iron_ingot", "#twr:rusted_iron", 200, true],
        ["frostedheart:nickel_ingot", "frostedheart:nickel_matte", 200, true],

        ["frostedheart:sodium_chloride_dust", "#forge:raw_materials/halite", 400, true],
        ["frostedheart:sodium_chloride_dust", "#forge:crushed_raw_materials/halite", 300, true],

		['frostedheart:lead_ingot', '#forge:dusts/lead_oxide', 80, true],
        ["frostedheart:magnesia_dust", "frostedheart:crushed_raw_magnesite", 200, true],
        ["frostedheart:constantan_ingot", "#forge:dusts/constantan", 400, false],
        ["frostedheart:duralumin_ingot", "#forge:dusts/duralumin", 800, false],
        ["frostedheart:titanium_ingot", "#forge:dusts/titanium", 800, false],
		["frostedheart:magnesium_ingot", "#forge:dusts/magnesium", 100, false],

    ]
    blastFurnaceRecipes.forEach(([output, input, time, slag]) => {
		event.remove({"type":"minecraft:smelting","output":output})
		event.remove({"type":"minecraft:blasting","output":output})
        if (slag) {
            immersiveengineering.blast_furnace(output, input, "immersiveengineering:slag")
                .time(time)
        } else {
            immersiveengineering.blast_furnace(output, input)
                .time(time)
        }
    })

    
    function rotarySulfate(input, output, energy, sulfur, chance) {
        if (chance == 0)
            return rotarykilnRecipe3(input, output, Fluid.of("frostedheart:sulfur_dioxide", sulfur).toJson(), 200, energy)
        return rotarykilnRecipe3(input, output, Fluid.of("frostedheart:sulfur_dioxide", sulfur).toJson(), 200, energy, output, chance)
    }
    let kilnRecipes = [
        rotarykilnRecipe2("create:crushed_raw_copper", "frostedheart:copper_oxide_dust", 200, 32),
        rotarySulfate("#forge:dusts/sulfur", null, 32, 125, 0),
        rotarySulfate("frostedheart:crushed_raw_pyrite", "create:crushed_raw_iron", 64, 250, 0),
        rotarySulfate("create:crushed_raw_lead", "frostedheart:lead_oxide_dust", 32, 250, 0.25),
        rotarySulfate("create:crushed_raw_zinc", "frostedheart:zinc_oxide_dust", 32, 250, 0),
        rotarykilnRecipe3("create:crushed_raw_nickel", "frostedheart:nickel_matte", Fluid.of("frostedheart:sulfur_dioxide", 250).toJson(), 200, 64, "frostedheart:iron_slag", 1),
        carkilnRecipe(["3x frostedheart:nickel_matte", "2x frostedheart:quicklime"], ["3x frostedheart:nickel_ingot", "3x immersiveengineering:slag", "frostedheart:nickel_matte"], 1200,32)
    ]
    kilnRecipes.forEach((recipe) => {
        event.custom(recipe);
    })


    
    /**
     * @param {string} name 
     * @param {string} output 
     * @param {integer} processTime 
     * @param {boolean} lowMelting 
     * @param {boolean} isElement
     * @returns 
     */
    function oreProcessRecipe(name, output, processTime, lowMelting, isElement) {
        return {
            name: name,
            output: output,
            processTime: processTime,
            lowMelting: lowMelting,
            isElement: isElement
        }
    }

    function addSlurryRecipes(material) {
        let snowball = "frostedheart:condensed_ball_" + material + "_ore";
        let snowblock = "frostedheart:condensed_" + material + "_ore_block";
        let slurry = "frostedheart:" + material + "_slurry";

        minecraft.crafting_shaped("2x frostedheart:condensed_" + material + "_ore", [
            "AA",
        ], {
            A: snowball
        });
        minecraft.crafting_shaped(snowblock, [
            "AA",
            "AA"
        ], {
            A: snowball
        });
        minecraft.crafting_shapeless("4x " + snowball, snowblock);

        minecraft.smelting(slurry, snowblock);
        minecraft.blasting(slurry, snowblock, 0, 150);
        minecraft.campfire_cooking(slurry, snowblock, 0, 400);
        immersiveengineering.blast_furnace(slurry, snowblock).time(70);
        create.mixing([slurry, Fluid.of("water", 250)], snowblock, 30).heated();
        create.mixing([slurry, Fluid.of("water", 250)], "4x " + snowball, 30).heated();
    }
})