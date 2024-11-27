ServerEvents.recipes((event) => {
    let {immersiveengineering} = event.recipes

    let blastFurnaceRecipes = [
        ["immersiveengineering:ingot_aluminum", "immersiveengineering:dust_aluminum", 800],
        ["frostedheart:cast_iron_ingot", "minecraft:iron_ingot", 900],
        ["minecraft:copper_ingot", "#forge:ores/copper", 200],
        ["frostedheart:tin_ingot", "#forge:ores/tin", 150],
        ["minecraft:iron_ingot", "frostedheart:raw_pyrite", 400],
        ["minecraft:iron_ingot", "minecraft:raw_iron", 400],
        ["immersiveengineering:ingot_nickel", "frostedheart:raw_nickel", 400],
        ["minecraft:iron_ingot", "frostedheart:rusted_iron_ingot", 200],
        ["immersiveengineering:ingot_lead", "frostedheart:raw_lead", 200],
        // ["minecraft:gold_ingot", "frostedheart:raw_gold", 200],
        ["immersiveengineering:ingot_silver", "frostedheart:raw_silver", 200],
        ["frostedheart:sodium_chloride_dust", "frostedheart:raw_halite", 200],
        ["create:zinc_ingot", "create:raw_zinc", 200]
    ]
    blastFurnaceRecipes.forEach(([output, input, time], index) => {
        immersiveengineering.blast_furnace(output, input, "immersiveengineering:slag")
            .id(`the_winter_rescue:immersiveengineering/blast_furnace/${index}`)
            .time(time)
    })

    // 移除旧的钢铁高炉配方
    event.remove({type: "immersiveengineering:blast_furnace", output: "immersiveengineering:ingot_steel"})
    event.remove({type: "immersiveengineering:blast_furnace", output: "immersiveengineering:storage_steel"})
})