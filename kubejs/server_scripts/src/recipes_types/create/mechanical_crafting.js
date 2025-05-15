ServerEvents.recipes((event) => {
    let {create} = event.recipes

    let recipes = [
        shapedRecipe("steampowered:alternator", [
            "BBEBB",
            "FFACD",
            "BBEBB"
        ], {
            A: "#forge:rods/cast_iron",
            B: "#forge:plates/cast_iron",
            C: "steampowered:cast_iron_cogwheel",
            D: "steampowered:cast_iron_large_cogwheel",
            E: "immersiveengineering:coil_lv",
            F: "immersiveengineering:wirecoil_copper"
        }),
        shapedRecipe("steampowered:bronze_flywheel", [
            " DDD ",
            "DACAD",
            "DCBCD",
            "DACAD",
            " DDD "
        ], {
            A: "steampowered:bronze_cogwheel",
            B: "steampowered:bronze_large_cogwheel",
            C: "create:shaft",
            D: "#forge:plates/bronze"
        }),
        shapedRecipe("steampowered:bronze_steam_engine", [
            "DCEDD",
            "CCABF",
            "DCEDD"
        ], {
            A: "steampowered:bronze_cogwheel",
            B: "steampowered:bronze_large_cogwheel",
            C: "create:fluid_pipe",
            D: "#forge:plates/bronze",
            E: "create:propeller",
            F: "create:shaft"
        }),
        shapedRecipe("steampowered:cast_iron_flywheel", [
            " DDD ",
            "DACAD",
            "DCBCD",
            "DACAD",
            " DDD "
        ], {
            A: "steampowered:cast_iron_cogwheel",
            B: "steampowered:cast_iron_large_cogwheel",
            C: "create:shaft",
            D: "#forge:plates/cast_iron"
        }),
        shapedRecipe("steampowered:cast_iron_steam_engine", [
            "DCEDD",
            "CCABF",
            "DCEDD"
        ], {
            A: "steampowered:cast_iron_cogwheel",
            B: "steampowered:cast_iron_large_cogwheel",
            C: "create:fluid_pipe",
            D: "#forge:plates/cast_iron",
            E: "create:propeller",
            F: "create:shaft"
        }),
        shapedRecipe("frostedresearch:mechanical_calculator", [
            "HHHHH",
            "APAIA",
            "BDCDB",
            "APAAA",
            "HHHHH"
        ], {
            A: "steampowered:cast_iron_cogwheel",
            B: "create:shaft",
            C: "create:andesite_casing",
            D: "create:precision_mechanism",
            H: "#forge:treated_wood",
            I: "minecraft:bell",
            P: "minecraft:piston"
        }),
        shapedRecipe("steampowered:steel_flywheel", [
            " DDD ",
            "DACAD",
            "DCBCD",
            "DACAD",
            " DDD "
        ], {
            A: "steampowered:steel_cogwheel",
            B: "steampowered:steel_large_cogwheel",
            C: "create:shaft",
            D: "#forge:plates/steel"
        }),
        shapedRecipe("steampowered:steel_steam_engine", [
            "DCEDD",
            "CCABF",
            "DCEDD"
        ], {
            A: "steampowered:steel_cogwheel",
            B: "steampowered:steel_large_cogwheel",
            C: "create:fluid_pipe",
            D: "#forge:plates/steel",
            E: "create:propeller",
            F: "create:shaft"
        }),
        shapedRecipe("create:blaze_burner", [
            "BC CB",
            "BCDCB",
            "BAAAB"
        ], {
            A: "#forge:plates/cast_iron",
            B: "#forge:rods/cast_iron",
            C: "#forge:plates/constantan",
            D: "minecraft:lava_bucket",
        }),
        shapedRecipe("immersiveindustry:electrolyzer", [
            "FFEFF",
            "FBCBF",
            "FCBCF",
            "FFDFF"
        ], {
            B: "#forge:ingots/silver",
            C: "#forge:ingots/gold",
            D: "immersiveengineering:wirecoil_copper",
            E: "immersiveengineering:circuit_board",
            F: "immersiveengineering:slab_sheetmetal_steel"
        }),
        shapedRecipe(Item.of("2x create:crushing_wheel"), [
            " AAA ",
            "ABCBA",
            "ACBCA",
            "ABCBA",
            " AAA ",
        ], {
            A: "#forge:ingots/cast_iron",
            B: "#minecraft:planks",
            C: "#forge:stone"
        })
    ]
    recipes.forEach((recipe) => {
        event.remove({output: recipe.result, type: "create:mechanical_crafting"});
        create.mechanical_crafting(recipe)
    })

    let workbench_recipes = [
        shapedRecipe("create:rotation_speed_controller", [
            " AEA ",
            "CDBDC",
            " AFA "
        ], {
            A: "#forge:plates/brass",
            B: "create:brass_casing",
            C: "create:shaft",
            D: "#the_winter_rescue:cogwheels",
            E: "create:electron_tube",
            F: "create:precision_mechanism"
        })
    ]
    workbench_recipes.forEach((recipe) => {
        event.remove({output: recipe.result, type: "minecraft:crafting_shaped"});
        create.mechanical_crafting(recipe)
    })
})