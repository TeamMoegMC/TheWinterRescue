var ore_blocks = ["rankine:magnetite_ore", "rankine:pyrite_ore", "rankine:native_copper_ore", "rankine:malachite_ore", "rankine:pentlandite_ore", "rankine:native_tin_ore", "rankine:cassiterite_ore", "rankine:bauxite_ore", "rankine:stibnite_ore", "rankine:cinnabar_ore", "rankine:magnesite_ore", "rankine:galena_ore", "rankine:halite_ore", "rankine:fluorite_ore", "rankine:vanadinite_ore", "rankine:native_silver_ore", "rankine:native_gold_ore", "rankine:sphalerite_ore"];
var ores = ["rankine:magnetite", "kubejs:pyrite", "kubejs:native_copper", "rankine:malachite", "rankine:pentlandite", "kubejs:native_tin", "rankine:cassiterite", "kubejs:bauxite", "rankine:stibnite", "rankine:cinnabar", "rankine:magnesite", "rankine:galena", "kubejs:halite", "rankine:fluorite", "rankine:vanadinite", "kubejs:silver", "kubejs:gold", "rankine:sphalerite"];
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
//若要修改矿石掉落物，将矿石本身放在ore_blicks里，掉落物放在ores里。貌似必须是双引号才行(

	
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
		})
	})
	
	event.modifyBlock('primalwinter:snowy_sand', table => {
		table.addPool(pool =>{
			pool.survivesExplosion()
			pool.randomChance(0.1)
			pool.addItem('minecraft:flint', 4)
		})
	})

	
})




