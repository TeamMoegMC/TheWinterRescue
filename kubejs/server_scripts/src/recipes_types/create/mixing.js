ServerEvents.recipes((event) => {
    let {create} = event.recipes
    let recipes = [
        {
            output: ["3x frostedheart:fire_clay_ball"],
            input: ["4x frostedheart:kaolin_dust", "4x frostedheart:bauxite_dust", "minecraft:clay_ball"]
        },
        {
            output: [Fluid.of("frostedheart:cryolite", 500)],
            input: ["2x frostedheart:cryolite_dust", "frostedheart:aluminium_hydroxide_dust", Fluid.of("frostedheart:sulfuric_acid", 500)]
        },
        {
            output: [Fluid.of("frostedheart:latex", 1000)],
            input: ["immersiveengineering:dust_sulfur", Fluid.of("frostedheart:resin", 1000)]
        },
        {
            output: [Fluid.of("frostedheart:latex", 1000)],
            input: [Fluid.of("frostedheart:sulfur_dioxide", 300), Fluid.of("frostedheart:resin", 1000)]
        },
        {
            output: [Fluid.of("frostedheart:lime_water", 1000)],
            input: ["frostedheart:quicklime", Fluid.of("minecraft:water", 1000)]
        },
        {
            output: ["kubejs:limed_coal"],
            input: ["kubejs:coal_dust", Fluid.of("frostedheart:lime_water", 100)]
        },
        {
            output: ["frostedheart:raw_rye_bread"],
            input: ["frostedheart:rye_flour", Fluid.of("minecraft:water", 250)]
        },
        {
            output: ["3x frostedheart:raw_rye_bread"],
            input: ["2x frostedheart:rye_flour", "minecraft:sugar", Fluid.of("minecraft:water", 500)]
        },
        {
            output: ["3x kubejs:sawdust_rye_dough"],
            input: ["2x frostedheart:rye_flour", "#forge:dusts/wood", Fluid.of("minecraft:water", 500)]
        },
        {
            output: ["create:dough"],
            input: ["create:wheat_flour", Fluid.of("minecraft:water", 250)]
        },
        {
            output: ["3x create:dough"],
            input: ["2x create:wheat_flour", "minecraft:sugar", Fluid.of("minecraft:water", 500)]
        },
        {
            output: ["minecraft:slime_ball"],
            input: ["create:dough", "minecraft:lime_dye"]
        },
        {
            output: ["kubejs:bounded_graphite"],
            input: ["4x #forge:dusts/hop_graphite", Fluid.of("frostedheart:tar", 1000)]
        },
        {
            output: [Fluid.of("frostedheart:ferrous_chloride", 375)],
            input: [Fluid.of("frostedheart:hydrochloric_acid", 750), "create:crushed_raw_iron"]
        },
        {
            output: [Fluid.of("frostedheart:ferrous_chloride", 250), "immersiveengineering:slag"],
            input: [Fluid.of("frostedheart:hydrochloric_acid", 500), "frostedheart:iron_slag"]
        },
        {
            output: [Fluid.of("frostedheart:ferric_chloride", 500)],
            input: [Fluid.of("frostedheart:ferrous_chloride", 500), "#forge:dusts/iron"]
        },
        {
            output: [Fluid.of("frostedheart:ferrous_chloride", 250)],
            input: [Fluid.of("frostedheart:hydrochloric_acid", 500), "#twr:rusted_iron"]
        },
        {
            output: [Fluid.of("frostedheart:copper_chloride", 250)],
            input: [Fluid.of("frostedheart:hydrochloric_acid", 500), "#twr:rusted_copper"]
        },
        {
            output: [Fluid.of("frostedheart:copper_chloride", 375)],
            input: [Fluid.of("frostedheart:hydrochloric_acid", 750), "frostedheart:copper_oxide_dust"]
        },
        {
            output: [Fluid.of("frostedheart:zinc_sulfate", 375)],
            input: [Fluid.of("frostedheart:sulfuric_acid", 750), "frostedheart:zinc_oxide_dust"]
        },
        {
            output: [Fluid.of("frostedheart:copper_chloride", 300)],
            input: [Fluid.of("frostedheart:hydrochloric_acid", 600), "create:crushed_raw_copper"]
        },
        {
            output: [Fluid.of("minecraft:milk", 1000)],
            input: [Fluid.of("frostedheart:protein", 500), Fluid.of("minecraft:water", 500), "minecraft:sugar"]
        },
        {
            output: ["8x immersiveengineering:treated_wood_horizontal"],
            input: ["8x #minecraft:planks", Fluid.of("immersiveengineering:creosote", 1000)]
        },
        {
            output: ["frostedheart:pulp"],
            input: ["4x #forge:dusts/wood", "#forge:clay", Fluid.of("minecraft:water", 100)]
        },
        {
            output: ["frostedheart:sodium_sulfide_dust"],
            input: ["frostedheart:sodium_ingot", "#forge:dusts/sulfur"]
        },
        {
            output: ["4x frostedheart:pulp"],
            input: ["6x #forge:dusts/wood", "frostedheart:sodium_sulfide_dust", "frostedheart:sodium_hydroxide_dust", Fluid.of("minecraft:water", 100)]
        },
        // {
        //     output: ["3x immersiveengineering:fertilizer"],
        //     // K, N, P
        //     input: ["#frostedheart:potassium_rich", "#frostedheart:nitrogen_rich", "#frostedheart:phosphorous_rich"]
        // },
        {
            output: ["6x frostedheart:basic_increasing_fertilizer"],
            // K, P, N
            input: ["3x #frostedheart:potassium_rich", "2x #frostedheart:phosphorous_rich", "#frostedheart:nitrogen_rich"]
        },
        {
            output: ["6x frostedheart:basic_accelerated_fertilizer"],
            // K, P, N
            input: ["#frostedheart:potassium_rich", "2x #frostedheart:phosphorous_rich", "3x #frostedheart:nitrogen_rich", Fluid.of("minecraft:water", 100)]
        },
        {
            output: ["6x frostedheart:advanced_increasing_fertilizer"],
            // K, P, N
            input: ["3x #frostedheart:potassium_industrial", "2x #frostedheart:phosphorous_industrial", "#frostedheart:nitrogen_industrial"]
        },
        {
            output: ["6x frostedheart:advanced_accelerated_fertilizer"],
            // K, P, N
            input: ["#frostedheart:potassium_industrial", "2x #frostedheart:phosphorous_industrial", "3x #frostedheart:nitrogen_industrial", Fluid.of("minecraft:water", 100)]
        },
        {
            output: ["minecraft:dirt"],
            input: ["minecraft:mud", "frostedheart:biomass"]
        },
        {
            output: ["minecraft:dirt"],
            input: ["minecraft:mud", "frostedheart:peat"]
        },
        {
            output: ["2x frostedheart:mortar"],
            input: ["minecraft:sand", Fluid.of("frostedheart:lime_water", 500)]
        },
        {
            output: ['6x supplementaries:soap'],
            input: ["stone_age:fat", Fluid.of("minecraft:water", 500)]
        },
    ]
    let heated = [
        {
            output: [Fluid.of("frostedheart:sulfuric_acid", 1000)],
            input: ["#forge:dusts/sulfur", Fluid.of("minecraft:water", 1000)]
        },
        {
            output: [Fluid.of("frostedheart:sulfuric_acid", 500)],
            input: [Fluid.of("frostedheart:sulfur_dioxide", 250), Fluid.of("minecraft:water", 500)]
        },
        {
            output: ["frostedheart:aluminium_hydroxide_dust"],
            input: ["frostedheart:sodium_hydroxide_dust", "2x frostedheart:crushed_raw_bauxite"]
        },
        {
            output: [Fluid.of("caupona:nail_soup", 1000)],
            input: ["kubejs:activated_carbon", Fluid.of("minecraft:water", 1000)]
        },
        {
            output: [Fluid.of("frostedheart:hydrochloric_acid", 1000)],
            input: [Fluid.of("minecraft:water", 1000), Fluid.of("frostedheart:chlorine", 500)]
        },
        {
            output: ["3x immersiveindustry:refractory_kiln_brick"],
            input: ["3x frostedheart:fire_clay_ball", "5x frostedheart:alumina_dust", "immersiveengineering:dust_hop_graphite"]
        },
        {
            output: [Fluid.of("frostedheart:resin", 100)],
            input: ["minecraft:dandelion"]
        },
        {
            output: [Fluid.of("frostedheart:resin", 200)],
            input: ["frostedheart:rubber_dandelion"]
        },
        {
            output: ["2x frostedheart:high_refractory_brick"],
            input: ["4x frostedheart:fire_clay_ball", "#forge:dusts/magnesia", "#forge:dusts/quicklime"]
        },
        {
            output: ["minecraft:dirt"],
            input: ["frostedheart:dirt_permafrost", "frostedheart:biomass"]
        },
        {
            output: ["minecraft:dirt"],
            input: ["frostedheart:coarse_dirt_permafrost", "frostedheart:biomass"]
        },
        {
            output: ["minecraft:dirt"],
            input: ["frostedheart:mud_permafrost", "frostedheart:biomass"]
        },
        {
            output: ["minecraft:rooted_dirt"],
            input: ["frostedheart:rooted_dirt_permafrost", "frostedheart:biomass"]
        },
        {
            output: ["minecraft:dirt"],
            input: ["frostedheart:dirt_permafrost", "frostedheart:peat"]
        },
        {
            output: ["minecraft:dirt"],
            input: ["frostedheart:coarse_dirt_permafrost", "frostedheart:peat"]
        },
        {
            output: ["minecraft:dirt"],
            input: ["frostedheart:mud_permafrost", "frostedheart:peat"]
        },
        {
            output: ["minecraft:rooted_dirt"],
            input: ["frostedheart:rooted_dirt_permafrost", "frostedheart:peat"]
        },
        {
            output: ["minecraft:sugar"],
            input: ["4x minecraft:beetroot", Fluid.of("minecraft:water", 1000)]
        },
        {
            output: ["minecraft:sugar"],
            input: ["minecraft:sugar_cane", Fluid.of("minecraft:water", 1000)]
        }
    ]
    recipes.forEach((recipe, index) => {
        create.mixing(recipe.output, recipe.input)
            .id(`the_winter_rescue:create/mixing/none/${index}`)
    })
    heated.forEach((recipe, index) => {
        create.mixing(recipe.output, recipe.input)
            .id(`the_winter_rescue:create/mixing/heated/${index}`)
            .heated()
    })
})