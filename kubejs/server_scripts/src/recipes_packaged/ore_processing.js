ServerEvents.recipes((event) => {

    let {immersiveengineering, create, minecraft} = event.recipes

    let removedSmeltingAndBlasting = [
        "minecraft:iron_ingot",
        "frostedheart:steel_ingot",
        "frostedheart:nickel_ingot",
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
		["minecraft:copper_ingot", "#forge:dusts/copper", 100, false],
		["frostedheart:lead_ingot", "#forge:dusts/lead", 100, false],
		["frostedheart:tin_ingot", "#forge:dusts/tin", 100, false],
		["create:zinc_ingot", "#forge:dusts/zinc", 100, false],
		
        ["frostedheart:silver_ingot", "#forge:raw_materials/silver", 200, true],
        ["frostedheart:silver_ingot", "#forge:crushed_raw_materials/silver", 150, true],
        ["frostedheart:silver_ingot", "#forge:dusts/silver", 200, false],

        ["minecraft:gold_ingot", "#forge:raw_materials/gold", 200, true],
        ["minecraft:gold_ingot", "#forge:crushed_raw_materials/gold", 150, true],
        ["minecraft:gold_ingot", "#forge:dusts/gold", 200, false],

        ["frostedheart:electrum_ingot", "#forge:dusts/electrum", 200, false],
        ["frostedheart:alumina_dust", "#forge:dusts/aluminum_hydroxide", 40, false],

        ["minecraft:paper", "frostedheart:pulp", 40, false]

    ]
	create.splashing([Item.of("#forge:crushed_raw_materials/iron"),Item.of("#forge:dusts/sulfur").withChance(0.5)],Ingredient.of("#forge:crushed_raw_materials/pyrite"))
	create.splashing([Item.of("#forge:dusts/zinc_oxide"),Item.of("#forge:dusts/sulfur").withChance(0.5)],Ingredient.of("#forge:crushed_raw_materials/zinc"))
    normalSmeltingRecipes.forEach(([output, input, time, slag]) => {
		event.remove({"type":"minecraft:smelting","output":output})
		event.remove({"type":"minecraft:blasting","output":output})
        minecraft.smelting(output, input)
		minecraft.blasting(output, input)
        if (slag) {
            immersiveengineering.blast_furnace(output, input, "immersiveengineering:slag")
                .time(time)
        } else {
            immersiveengineering.blast_furnace(output, input)
                .time(time)
        }
    })

    let blastFurnaceRecipes = [
	    ["minecraft:copper_ingot", "#forge:raw_materials/copper", 200, true],
        ["minecraft:copper_ingot", "#forge:crushed_raw_materials/copper", 150, true],
        ["minecraft:copper_ingot", "#forge:dusts/copper_oxide", 100, true],
        
        ["minecraft:copper_ingot", "#twr:rusted_copper", 50, true],

        ["frostedheart:lead_ingot", "#forge:raw_materials/lead", 200, true],
        ["frostedheart:lead_ingot", "#forge:crushed_raw_materials/lead", 150, true],
        

        ["frostedheart:tin_ingot", "#forge:raw_materials/tin", 200, true],
        ["frostedheart:tin_ingot", "#forge:crushed_raw_materials/tin", 150, true],
        ["frostedheart:tin_ingot", "#forge:ingots/gray_tin", 50, true],
        

        ["create:zinc_ingot", "#forge:raw_materials/zinc", 200, true],
        ["create:zinc_ingot", "#forge:crushed_raw_materials/zinc", 150, true],
        
        ["create:zinc_ingot", "#forge:dusts/zinc_oxide", 100, true],
        ["frostedheart:aluminum_ingot", "#forge:dusts/aluminum", 800, false],

        ["minecraft:iron_ingot", "#forge:raw_materials/iron", 400, true],
        ["minecraft:iron_ingot", "#forge:crushed_raw_materials/iron", 300, true],
        ["minecraft:iron_ingot", "#twr:rusted_iron", 200, true],
        ["minecraft:iron_ingot", "#forge:dusts/iron", 100, false],

        ["minecraft:iron_ingot", "#forge:raw_materials/pyrite", 400, true],
        ["minecraft:iron_ingot", "#forge:crushed_raw_materials/pyrite", 300, true],

        ["frostedheart:nickel_ingot", "#forge:raw_materials/nickel", 400, true],
        ["frostedheart:nickel_ingot", "create:crushed_raw_nickel", 300, true],
        ["frostedheart:nickel_ingot", "frostedheart:nickel_matte", 200, true],
        ["frostedheart:nickel_ingot", "#forge:dusts/nickel", 200, false],

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
    
})