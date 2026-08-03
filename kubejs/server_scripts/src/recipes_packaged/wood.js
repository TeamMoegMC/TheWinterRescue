ServerEvents.recipes((event) => {
    let { create } = event.recipes;
    let woods = [];

    // 收集所有木板（排除 culms 和 fiberboard）
    Ingredient.of("#minecraft:planks").getItemIds().forEach((name) => {
        if (name.indexOf("culms") === -1 && name.indexOf("fiberboard") === -1) {
            woods.push(name.replace("_planks", ""));
        }
    });

    // IE 锯木机辅助函数
    function ieSawmill(input, output, stripped) {
        event.custom({
            "type": "immersiveengineering:sawmill",
            "energy": 200,
            "time": 20,
            "input": Ingredient.of(input),
            "result": Item.of(output),
            "secondaries": [
                { "output": { "item": "frostedheart:sawdust" }, "stripping": true },
                { "output": { "item": "frostedheart:sawdust" }, "stripping": false }
            ],
            "stripped": Ingredient.of(stripped)
        });
    }

    function ieSawmillStripped(input, output) {
        event.custom({
            "type": "immersiveengineering:sawmill",
            "energy": 100,
            "time": 20,
            "input": Ingredient.of(input),
            "result": Item.of(output),
            "secondaries": [
                { "output": { "item": "frostedheart:sawdust" }, "stripping": false }
            ]
        });
    }

    // 处理所有原木（跳过 caupona 和 frostedheart）
    Ingredient.of("#minecraft:logs").getItemIds().forEach((name) => {
        if (name.startsWith("caupona:") || name.startsWith("frostedheart:")) {
            return; // 跳过特殊模组原木
        }

        if (name.indexOf("stripped_") !== -1) {
            // 去皮原木 -> 4x 木板
            if (name.indexOf("log") !== -1) {
                create.cutting("4x " + name.replace("_log", "").replace("stripped_", "") + "_planks", name);
            } else if (name.indexOf("stem") !== -1) {
                create.cutting("4x " + name.replace("_stem", "").replace("stripped_", "") + "_planks", name);
            } else if (name.indexOf("wood") !== -1) {
                create.cutting("4x " + name.replace("_wood", "").replace("stripped_", "") + "_planks", name);
            }
        } else if (name.indexOf("log") !== -1 || name.indexOf("stem") !== -1) {
            // 普通原木/菌核 -> 去皮 + 锯木机
            let rl = name.split(":");
            event.remove({ output: rl[0] + ":stripped_" + rl[1], type: "create:cutting" });
            create.cutting(rl[0] + ":stripped_" + rl[1], name);
            ieSawmill(name, "6x " + name.replace("_log", "").replace("_stem", "") + "_planks", rl[0] + ":stripped_" + rl[1]);
            ieSawmillStripped(rl[0] + ":stripped_" + rl[1], "6x " + name.replace("_log", "").replace("_stem", "") + "_planks");
        } else if (name.indexOf("wood") !== -1) {
            // 普通木头 -> 去皮 + 锯木机
            let rl = name.split(":");
            event.remove({ output: rl[0] + ":stripped_" + rl[1], type: "create:cutting" });
            create.cutting(rl[0] + ":stripped_" + rl[1], name);
            ieSawmill(name, "6x " + name.replace("_wood", "") + "_planks", rl[0] + ":stripped_" + rl[1]);
            ieSawmillStripped(rl[0] + ":stripped_" + rl[1], "6x " + name.replace("_wood", "") + "_planks");
        }
    });

    // 木板 -> 2x 台阶（切割）
    woods.forEach((wood) => {
        event.remove({ output: wood + "_slab", type: 'minecraft:crafting_shaped' });
        create.cutting('2x ' + wood + "_slab", wood + "_planks");
    });

    // 防腐木 -> 2x 台阶（切割）
    Ingredient.of("#forge:treated_wood").getItemIds().forEach((wood) => {
        event.remove({ output: wood.split(":")[0] + ":slab_" + wood.split(":")[1], type: 'minecraft:crafting_shaped' });
        create.cutting('2x ' + wood.split(":")[0] + ':slab_' + wood.split(":")[1], wood);
    });
});