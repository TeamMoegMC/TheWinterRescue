var ore_blocks = ["rankine:magnetite_ore", "rankine:pyrite_ore", "rankine:native_copper_ore", "rankine:malachite_ore", "rankine:pentlandite_ore", "rankine:native_tin_ore", "rankine:cassiterite_ore", "rankine:bauxite_ore", "rankine:stibnite_ore", "rankine:cinnabar_ore", "rankine:magnesite_ore", "rankine:galena_ore", "rankine:halite_ore", "rankine:fluorite_ore", "rankine:vanadinite_ore", "rankine:native_silver_ore", "rankine:native_gold_ore"];
var ores = ["rankine:magnetite", "kubejs:pyrite", "kubejs:native_copper", "rankine:malachite", "rankine:pentlandite", "kubejs:native_tin", "rankine:cassiterite", "kubejs:bauxite", "rankine:stibnite", "rankine:cinnabar", "rankine:magnesite", "rankine:galena", "kubejs:halite", "rankine:fluorite", "rankine:vanadinite", "kubejs:silver", "kubejs:gold"];
var i;
var ores_i;
var ore_blocks_i;

onEvent('block.loot_tables', event => {
    for (i = 0; i < ores.length; i++) {
        ores_i = ores[i];
        ore_blocks_i = ore_blocks[i];
        event.addBlock(ore_blocks_i, table => {
            table.addPool(pool => {
                pool.rolls = 1
                pool.survivesExplosion()
                pool.addItem(ores_i)
            })
        })
    }

    event.addBlock('rankine:sphalerite_ore', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.survivesExplosion()
            pool.addItem('rankine:sphalerite')
        })
    })
	
/*	event.modifyBlock('primalwinter:snowy_dirt', table => {
		table.addPool(pool => {
			
			pool.survivesExplosion()
            pool.addItem('minecraft:dirt')
            pool.addItem('kubejs:frozen_seeds_melon')
            pool.addItem('kubejs:frozen_seeds_wheat')
            pool.addItem('kubejs:frozen_seeds_pumpkin')
            pool.addItem('kubejs:frozen_seeds_beetroots')
            pool.addItem('kubejs:frozen_seeds_unknown')
            pool.addItem('kubejs:frozen_seeds_blackwheat')
            pool.addItem('kubejs:frozen_white_turnip')
			pool.randomChance(0.1)
			pool.addItem('minecraft:flint')
		})
    })*/
	
	event.modifyBlock('primalwinter:snowy_dirt', table => {
		table.addPool(pool=> {
			pool.survivesExplosion()
			pool.randomChance(0.15)
            pool.addItem('kubejs:frozen_seeds_melon', 1)
            pool.addItem('kubejs:frozen_seeds_wheat', 1)
            pool.addItem('kubejs:frozen_seeds_pumpkin', 1)
            pool.addItem('kubejs:frozen_seeds_beetroots', 1)
            pool.addItem('kubejs:frozen_seeds_unknown', 4)
            pool.addItem('kubejs:frozen_seeds_blackwheat', 1)
            pool.addItem('kubejs:frozen_white_turnip', 1)
			pool.addItem('minecraft:flint', 4)
			pool.addItem('notreepunching:flint_shard', 2)
		})
	})
	
	event.addBlock('minecraft:dirt', table => {
		table.addPool(pool=> {
			pool.survivesExplosion()
            pool.addItem('minecraft:dirt', 80)
            pool.addItem('kubejs:frozen_seeds_melon', 1)
            pool.addItem('kubejs:frozen_seeds_wheat', 1)
            pool.addItem('kubejs:frozen_seeds_pumpkin', 1)
            pool.addItem('kubejs:frozen_seeds_beetroots', 1)
            pool.addItem('kubejs:frozen_seeds_unknown', 4)
            pool.addItem('kubejs:frozen_seeds_blackwheat', 1)
            pool.addItem('kubejs:frozen_white_turnip', 1)
			pool.addItem('minecraft:flint', 3)
			pool.addItem('notreepunching:flint_shard', 2)
		})
	})
	
	event.modifyBlock('primalwinter:snowy_sand', table => {
		table.addPool(pool =>{
			pool.survivesExplosion()
			pool.randomChance(0.1)
			pool.addItem('minecraft:flint', 4)
			pool.addItem('notreepunching:flint_shard', 1)
		})
	})
	
	
	
//	event.addBlock('minecraft:dirt')
	
})




