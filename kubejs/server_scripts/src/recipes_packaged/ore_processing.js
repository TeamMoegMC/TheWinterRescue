ServerEvents.recipes((event) => {
    let { immersiveengineering, create, minecraft } = event.recipes

    // let ores = [
    //     "frostedheart:raw_pyrite",
    //     "frostedheart:raw_nickel",
    //     "frostedheart:raw_lead",
    //     "frostedheart:bauxite",
    //     "frostedheart:kaolin",
    //     "frostedheart:raw_magnesite",
    //     "frostedheart:raw_lead",
    //     "frostedheart:raw_halite",
    //     "frostedheart:raw_silver",
    //     "minecraft:raw_gold",
    //     "minecraft:raw_iron",
    //     "create:raw_zinc",
    //     "minecraft:raw_copper"
    // ]
    // let ore_name = [
    //     "pyrite",
    //     "nickel",
    //     "lead",
    //     "bauxite",
    //     "kaolin",
    //     "magnesite",
    //     "lead",
    //     "halite",
    //     "silver",
    //     "gold",
    //     "iron",
    //     "zinc",
    //     "copper"
    // ]
    // let by_products = [];
    // let i;
    // let ores_i;
    // let ore_name_i;
    // let crushed_ore_i;
    // let washed_ore_i;
    // let wash_input;
    // /*
    // 在by_products数组的对应位置设置副产物
    // 例如:
    // by_products[1] = [Item.of("minecraft:diamond").withChance(0.5)];
    // ore_name中的1号位置(第二个元素)是pyrite(黄铁矿)，这行代码将在将粉碎黄铁矿洗为洗净黄铁矿的合成中加入副产物钻石，产出概率为百分之五十。
    // */
    // by_products[0] = [Item.of("immersiveengineering:sulfur_dust").withChance(0.2)]
    // by_products[3] = [Item.of("frostedheart:cryolite_dust").withChance(0.2)]

    // for (i = 0; i < ores.length; i ++) {
    //     ores_i = ores[i];
    //     ore_name_i = ore_name[i];
    //     crushed_ore_i = "frostedheart:" + "crushed_raw_" + ore_name_i
    //     create.crushing([
    //         crushed_ore_i,
    //         Item.of(crushed_ore_i).withChance(0.5),
    //         by_products[i]
    //     ], ores_i)
    // }

    // low-smelt point metals
    minecraft.smelting("frostedheart:lead_ingot", "frostedheart:crushed_raw_lead")
    minecraft.smelting("frostedheart:tin_ingot", "frostedheart:crushed_raw_tin")

    let blastFurnaceRecipes = [
        ["minecraft:iron_ingot", "frostedheart:crushed_raw_pyrite", 300],
        ["minecraft:iron_ingot", "create:crushed_raw_iron", 300],
        ["frostedheart:silver_ingot", "frostedheart:crushed_raw_silver", 150],
        ["minecraft:gold_ingot", "create:crushed_raw_gold", 150],
        ["frostedheart:nickel_ingot", "frostedheart:crushed_raw_nickel", 300],
        ["frostedheart:nickel_ingot", "frostedheart:nickel_matte", 300],
        ["minecraft:copper_ingot", "frostedheart:copper_oxide_dust", 90],
        ["frostedheart:lead_ingot", "frostedheart:lead_oxide_dust", 80],
        ["create:zinc_ingot", "create:crushed_raw_zinc", 150],
        ["create:zinc_ingot", "create:crushed_raw_copper", 150]
    ]
    blastFurnaceRecipes.forEach(([output, input, time]) => {
        immersiveengineering.blast_furnace(output, input, "immersiveengineering:slag")
            .time(time)
    })

    /*
    function rotarySulfate(input, output, energy, sulfur, chance) {
        if (chance == 0)
            return rotarykilnRecipe3(input, output, Fluid.of("frostedheart:sulfur_dioxide", sulfur).toJson(), 200, energy)
        return rotarykilnRecipe3(input, output, Fluid.of("frostedheart:sulfur_dioxide", sulfur).toJson(), 200, energy, output, chance)
    }
    let kilnRecipes = [
        rotarykilnRecipe2("create:crushed_raw_copper", "frostedheart:copper_oxide_dust", 200, 32),
        rotarySulfate("#forge:dusts/sulfur", "minecraft:air", 32, 125, 0),
        rotarySulfate("frostedheart:crushed_raw_pyrite", "create:crushed_raw_iron", 64, 250, 0),
        rotarySulfate("frostedheart:crushed_raw_lead", "frostedheart:lead_oxide_dust", 32, 250, 0.25),
        rotarySulfate("create:crushed_raw_zinc", "frostedheart:zinc_oxide_dust", 32, 250, 0),
        rotarykilnRecipe3("frostedheart:crushed_raw_nickel", "frostedheart:nickel_slag", Fluid.of("frostedheart:sulfur_dioxide", 250).toJson(), 200, 64, "frostedheart:iron_slag", 1),
        carkilnRecipe(["3x frostedheart:nickel_slag", "2x frostedheart:quicklime"], ["3x immersiveengineering:ingot_nickel", "3x immersiveengineering:slag", "frostedheart:nickel_slag"], 1200)
    ]
    kilnRecipes.forEach((recipe) => {
        event.custom(recipe); console.info(recipe)
    })
    */
})