ServerEvents.recipes((event) => {
    let { kubejs, minecraft } = event.recipes;

    const CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag");

    // 炸药桶配方
    let desc = Text.of("ℹ ")
        .append(Text.translatable("tooltip.kubejs.gunpowder_barrel.crafting"))
        .gray();
    let displayBarrel = Item.of("frostedheart:gunpowder_barrel").withLore(desc);
    let barrel = ["charcoal_pit:barrel", Item.of("frostedheart:gunpowder_barrel", {canCraft:true}).weakNBT()]
    kubejs.shapeless(displayBarrel, [barrel, "1x #twr:gunpowder_barrel_ingredient"]).modifyResult((grid, result) => {
        return handleGunpowderBarrelRecipe(grid, result);
    });
    kubejs.shapeless(displayBarrel, [barrel, "2x #twr:gunpowder_barrel_ingredient"]).modifyResult((grid, result) => {
        return handleGunpowderBarrelRecipe(grid, result);
    });
    kubejs.shapeless(displayBarrel, [barrel, "3x #twr:gunpowder_barrel_ingredient"]).modifyResult((grid, result) => {
        return handleGunpowderBarrelRecipe(grid, result);
    });
    kubejs.shapeless(displayBarrel, [barrel, "4x #twr:gunpowder_barrel_ingredient"]).modifyResult((grid, result) => {
        return handleGunpowderBarrelRecipe(grid, result);
    });
    kubejs.shapeless(displayBarrel, [barrel, "5x #twr:gunpowder_barrel_ingredient"]).modifyResult((grid, result) => {
        return handleGunpowderBarrelRecipe(grid, result);
    });
    kubejs.shapeless(displayBarrel, [barrel, "6x #twr:gunpowder_barrel_ingredient"]).modifyResult((grid, result) => {
        return handleGunpowderBarrelRecipe(grid, result);
    });
    kubejs.shapeless(displayBarrel, [barrel, "7x #twr:gunpowder_barrel_ingredient"]).modifyResult((grid, result) => {
        return handleGunpowderBarrelRecipe(grid, result);
    });
    kubejs.shapeless(displayBarrel, [barrel, "8x #twr:gunpowder_barrel_ingredient"]).modifyResult((grid, result) => {
        return handleGunpowderBarrelRecipe(grid, result);
    });

    const ingredientEffects = new Map();
    ingredientEffects.set("minecraft:gunpowder",          [18, 10]);
    ingredientEffects.set("kubejs:he_gunpowder",          [45, 50]);
    ingredientEffects.set('minecraft:lapis_lazuli',       [0 , 12]);
    ingredientEffects.set("frostedheart:cast_iron_ingot", [0 , 25]);
    ingredientEffects.set("minecraft:diamond",            [0 , 80]);
    /**
     * @param {Internal.ModifyRecipeCraftingGrid} grid 
     * @param {Internal.ItemStack} result 
     * @returns {Internal.ItemStack}
     */
    function handleGunpowderBarrelRecipe(grid, result) {
        let range = 0;
        let fortune = 0;
        // 计算材料范围和时运数值
        grid.findAll().forEach(item => {
            let v = ingredientEffects.get(item.id.normalize());
            if (v != undefined) {
                range += v[0];
                fortune += v[1];
            }
        });

        // 如果是炸药桶则添加时运效果
        let barrel = grid.find("frostedheart:gunpowder_barrel");
        if (!barrel.isEmpty() && barrel.nbt.canCraft) {
            return fortune == 0 ? Item.empty : applyFortune(barrel, fortune);
        }
        
        if (range >= 348) {
            range = 3;
        } else if (range >= 130) {
            range = 2;
        } else if (range >= 32) {
            range = 1;
        } else {
            return Item.empty;
        }
        let fortuneLevel = 0;
        if (range == 1) {
            fortuneLevel = Math.min(Math.floor(fortune / 27), 4);
            fortune -= fortuneLevel * 27;
        } else if (range == 2) {
            fortuneLevel = Math.min(Math.floor(fortune / 75), 4);
            fortune -= fortuneLevel * 75;
        } else if (range == 3) {
            fortuneLevel = Math.min(Math.floor(fortune / 147), 4);
            fortune -= fortuneLevel * 147;
        }

        let nbt = new CompoundTag();
        nbt.putInt("fortuneLeft", fortune);
        nbt.putBoolean("canCraft", true);
        if (range > 1) {
            nbt.putInt("range", range);
        }
        if (fortuneLevel > 0) {
            nbt.putInt("fortuneLevel", fortuneLevel);
        }
        return Item.of('frostedheart:gunpowder_barrel', nbt).withLore(desc);
    }
    /**
     * @param {Internal.ItemStack} barrel 
     * @returns {Internal.ItemStack}
     */
    function applyFortune(barrel, fortune) {
        let nbt = barrel.nbt.copy();
        fortune += nbt.fortuneLeft;
        let range = nbt.range || 1;
        let fortuneLevel = nbt.fortuneLevel || 0;

        if (range == 1) {
            fortune += fortuneLevel * 27;
            fortuneLevel = Math.min(Math.floor(fortune / 27), 4);
        } else if (range == 2) {
            fortune += fortuneLevel * 75;
            fortuneLevel = Math.min(Math.floor(fortune / 75), 4);
        } else if (range == 3) {
            fortune += fortuneLevel * 147;
            fortuneLevel = Math.min(Math.floor(fortune / 147), 4);
        } else {
            return Item.empty;
        }

        nbt = barrel.getNbt();
        nbt.remove("display");
        nbt.remove("canCraft");
        nbt.remove("fortuneLeft");
        if (fortuneLevel > 0) {
            nbt.putInt("fortuneLevel", fortuneLevel);
        }
        return Item.of('frostedheart:gunpowder_barrel', nbt);
    }
    // 下落nbt
    kubejs.shapeless(Item.of("frostedheart:gunpowder_barrel", {willFall: true}), ["frostedheart:gunpowder_barrel", "#forge:sand"])
    .keepIngredient("#forge:sand")
    .modifyResult((grid, result) => {
        let barral = grid.find("frostedheart:gunpowder_barrel");
        let nbt = barral.nbt ? barral.nbt.copy() : {};
        nbt.willFall = true;
        return Item.of('frostedheart:gunpowder_barrel', nbt);
    });
    // 无破坏nbt
    kubejs.shapeless(Item.of("frostedheart:gunpowder_barrel", {wontDestroyBlock: true}), ["frostedheart:gunpowder_barrel", global.WATER_BUCKETS])
    .keepIngredient("minecraft:water_bucket")
    .keepIngredient("frostedheart:ceramic_bucket")
    .modifyResult((grid, result) => {
        let barral = grid.find("frostedheart:gunpowder_barrel");
        let nbt = barral.nbt ? barral.nbt.copy() : {};
        nbt.wontDestroyBlock = true;
        return Item.of('frostedheart:gunpowder_barrel', nbt);
    })

    // ------------------------------------

    kubejs.shapeless('2x create:filter', ["create:filter", "create:filter"])
    .modifyResult((grid, result) => {
        return grid.find('create:filter').withCount(2)
    })
    .id("the_winter_rescue:minecraft/crafting_shapeless/new/filter_copy")

    kubejs.shapeless("2x create:attribute_filter", ["create:attribute_filter", "create:attribute_filter"])
    .modifyResult((grid, result) => {
        return grid.find('create:attribute_filter').withCount(2)
    })
    .id("the_winter_rescue:minecraft/crafting_shapeless/new/attribute_filter_copy")

    // 钻头补充柴油
    // let displayDrill = Item.of("immersiveengineering:drill", {Fluid: {Amount: 1000, FluidName: "immersiveengineering:biodiesel"}});
    // kubejs.shapeless(displayDrill, ["immersiveengineering:drill", 'immersiveengineering:biodiesel_bucket'])
    // .replaceIngredient("immersiveengineering:biodiesel_bucket", "minecraft:bucket")
    // .modifyResult((grid, result) => {
    //     let drill = grid.find("immersiveengineering:drill");
    //     let drillNbt = drill.nbt ? drill.nbt.copy() : {};
    //     let fluid = drillNbt.Fluid || {Amount: 0, FluidName: ""};
    //     let dieselLeft = fluid.Amount || 0;
    //     if (dieselLeft >= 2000) {
    //         return Item.empty;
    //     }
    //     dieselLeft += 1000;
    //     dieselLeft = Math.min(dieselLeft, 2000);
    //     drillNbt.Fluid = {Amount: dieselLeft, FluidName: "immersiveengineering:biodiesel"};
    //     return Item.of(drill, drillNbt);
    // }).id('the_winter_rescue:drill_refill_biodiesel');
})
