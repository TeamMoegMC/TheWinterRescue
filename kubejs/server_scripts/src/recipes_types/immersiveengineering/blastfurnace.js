ServerEvents.recipes((event) => {
    let {immersiveengineering} = event.recipes

    let blastFurnaceRecipes = [
        ["frostedheart:cast_iron_ingot", "minecraft:iron_ingot", 600],
        ['kubejs:rough_graphite_electrode', 'kubejs:shaped_bounded_graphite', 2000]
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