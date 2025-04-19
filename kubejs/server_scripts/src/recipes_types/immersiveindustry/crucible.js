ServerEvents.recipes((event) => {
    const recipes = [
        // hard recipes
        crucibleRecipe(["#forge:dusts/iron", "frostedheart:flux"], "frostedheart:steel_ingot", 1000, 1500),
        crucibleRecipe(["#forge:dusts/tungsten"], "frostedheart:tungsten_ingot", 1000, 3422),
        crucibleRecipe(["#forge:dusts/steel"], "frostedheart:steel_ingot", 800, 1500),

        // alloys
        crucibleRecipe([["7x #forge:ingots/aluminum","#forge:dusts/aluminum"], ["#forge:ingots/copper","#forge:dusts/copper"], ["#forge:ingots/magnesium","#forge:dusts/magnesium"]], "9x frostedheart:duralumin_ingot", 900, 630),
        crucibleRecipe(["6x #forge:ingots/steel", "#forge:ingots/tungsten"], "7x frostedheart:tungsten_steel_ingot", 700, 3422),
        crucibleRecipe(["3x #forge:ingots/copper", "#forge:ingots/tin"], "4x frostedheart:bronze_ingot", 400, 913),
        crucibleRecipe(["2x #forge:ingots/iron", "#forge:ingots/nickel"], "3x frostedheart:invar_ingot", 300, 1427),
        crucibleRecipe(["#forge:ingots/gold", "#forge:ingots/silver"], "2x frostedheart:electrum_ingot", 200, 960),
        crucibleRecipe(["#forge:ingots/copper", "#forge:ingots/nickel"], "2x frostedheart:constantan_ingot", 200, 1300),
        crucibleRecipe(["2x #forge:ingots/copper", "#forge:ingots/zinc"], "3x create:brass_ingot", 300, 900),
    ]

    recipes.forEach((recipe) => {
        event.custom(recipe)
    })
})