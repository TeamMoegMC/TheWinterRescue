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

    ]

    removedSplashing.forEach((result) => {
        event.remove({ type: "create:splashing", output: result })
    })

    // remove normal smelting


    let normalSmeltingRecipes = [
        ["minecraft:copper_ingot", "#forge:raw_materials/copper", 200],
        ["minecraft:copper_ingot", "#forge:crushed_raw_materials/copper", 150],
        ["minecraft:copper_ingot", "#forge:dusts/copper_oxide", 100],
        ["minecraft:copper_ingot", "#forge:dusts/copper", 100],
        ["minecraft:copper_ingot", "#forge:ingots/rusted_copper", 50],

        ["frostedheart:lead_ingot", "#forge:raw_materials/lead", 200],
        ["frostedheart:lead_ingot", "#forge:crushed_raw_materials/lead", 150],
        ["frostedheart:lead_ingot", "#forge:dusts/lead", 100],

        ["frostedheart:tin_ingot", "#forge:raw_materials/tin", 200],
        ["frostedheart:tin_ingot", "#forge:crushed_raw_materials/tin", 150],
        ["frostedheart:tin_ingot", "#forge:ingots/gray_tin", 50],
        ["frostedheart:tin_ingot", "#forge:dusts/tin", 100],

        ["create:zinc_ingot", "#forge:raw_materials/zinc", 200],
        ["create:zinc_ingot", "#forge:crushed_raw_materials/zinc", 150],
        ["create:zinc_ingot", "#forge:dusts/zinc", 100],
        ["create:zinc_ingot", "#forge:dusts/zinc_oxide", 100],

        ["frostedheart:silver_ingot", "#forge:raw_materials/silver", 200],
        ["frostedheart:silver_ingot", "#forge:crushed_raw_materials/silver", 150],
        ["frostedheart:silver_ingot", "#forge:dusts/silver", 200],

        ["minecraft:gold_ingot", "#forge:raw_materials/gold", 200],
        ["minecraft:gold_ingot", "#forge:crushed_raw_materials/gold", 150],
        ["minecraft:gold_ingot", "#forge:dusts/gold", 200],

        ["frostedheart:magnesium_ingot", "#forge:dusts/magnesium", 100],

        ["frostedheart:electrum_ingot", "#forge:dusts/electrum", 200],
        ["frostedheart:alumina_dust", "#forge:dusts/aluminum_hydroxide", 200],

    ]

    normalSmeltingRecipes.forEach(([output, input, time]) => {
        minecraft.smelting(output, input)
        immersiveengineering.blast_furnace(output, input, "immersiveengineering:slag")
            .time(time)
    })

    let blastFurnaceRecipes = [
        ["frostedheart:aluminum_ingot", "#forge:dusts/aluminum", 800],

        ["minecraft:iron_ingot", "#forge:raw_materials/iron", 400],
        ["minecraft:iron_ingot", "#forge:crushed_raw_materials/iron", 300],
        ["minecraft:iron_ingot", "frostedheart:rusted_iron_ingot", 200],

        ["minecraft:iron_ingot", "#forge:raw_materials/pyrite", 400],
        ["minecraft:iron_ingot", "#forge:crushed_raw_materials/pyrite", 300],

        ["frostedheart:nickel_ingot", "#forge:raw_materials/nickel", 400],
        ["frostedheart:nickel_ingot", "create:crushed_raw_nickel", 300],
        ["frostedheart:nickel_ingot", "frostedheart:nickel_matte", 200],
        ["frostedheart:nickel_ingot", "#forge:dusts/nickel", 200],

        ["frostedheart:sodium_chloride_dust", "#forge:raw_materials/halite", 400],
        ["frostedheart:sodium_chloride_dust", "#forge:crushed_raw_materials/halite", 300],
		['immersiveengineering:ingot_lead', '#forge:dusts/lead_oxide',80],
        ["frostedheart:magnesia_dust", "frostedheart:crushed_raw_magnesite", 200],
        ["frostedheart:constantan_ingot", "#forge:dusts/constantan", 400],
        ["frostedheart:duralumin_ingot", "#forge:dusts/duralumin", 800],
        ["frostedheart:titanium_ingot", "#forge:dusts/titanium", 800],

    ]
    blastFurnaceRecipes.forEach(([output, input, time]) => {
        immersiveengineering.blast_furnace(output, input, "immersiveengineering:slag")
            .time(time)
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