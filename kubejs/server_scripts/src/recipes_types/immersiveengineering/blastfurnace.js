ServerEvents.recipes((event) => {
    let {immersiveengineering} = event.recipes

    let blastFurnaceRecipes = [
        ["frostedheart:cast_iron_ingot", "minecraft:iron_ingot", 600, true],
        ['kubejs:rough_graphite_electrode', 'kubejs:shaped_bounded_graphite', 2000, true],
        ['frostedheart:refractory_brick', 'frostedheart:fire_clay_ball', 100, false],
        ['charcoal_pit:unfired_sandy_brick', 'charcoal_pit:sandy_brick_item', 100, false],
        ['charcoal_pit:unfired_brick', 'minecraft:brick', 100, false],
    ]
    blastFurnaceRecipes.forEach(([output, input, time, slag], index) => {
        if (slag) {
            immersiveengineering.blast_furnace(output, input, "immersiveengineering:slag")
                .id(`the_winter_rescue:immersiveengineering/blast_furnace/${index}`)
                .time(time)
        } else {
            immersiveengineering.blast_furnace(output, input)
                .id(`the_winter_rescue:immersiveengineering/blast_furnace/${index}`)
                .time(time)
        }
    })

    // 移除旧的钢铁高炉配方
    event.remove({type: "immersiveengineering:blast_furnace", output: "immersiveengineering:ingot_steel"})
    event.remove({type: "immersiveengineering:blast_furnace", output: "immersiveengineering:storage_steel"})
})