

onEvent('block.loot_tables', event => {
	var ore_blocks = [
"rankine:magnetite_ore", 
"rankine:pyrite_ore", 
"rankine:malachite_ore", 
"rankine:pentlandite_ore", 
"rankine:native_tin_ore", 
"rankine:cassiterite_ore", 
"rankine:bauxite_ore", 
"rankine:stibnite_ore", 
"rankine:cinnabar_ore", 
"rankine:magnesite_ore", 
"rankine:galena_ore",
"rankine:vanadinite_ore", 
"rankine:native_silver_ore", 
"rankine:native_gold_ore"
// "rankine:sphalerite_ore"
];
var ores = [
"rankine:magnetite", 
"kubejs:pyrite", 
"rankine:malachite", 
"rankine:pentlandite", 
"kubejs:native_tin", 
"rankine:cassiterite", 
"kubejs:bauxite", 
"rankine:stibnite", 
"rankine:cinnabar", 
"rankine:magnesite", 
"rankine:galena",
"rankine:vanadinite", 
"kubejs:silver", 
"kubejs:gold"
// "rankine:sphalerite"
];
var i;
var ores_i;
var ore_blocks_i;
    for (i = 0; i < ores.length; i++) {
        ores_i = ores[i];
        ore_blocks_i = ore_blocks[i];

        event.addSimpleBlock(ore_blocks_i, ores_i)
        // event.addBlock(ore_blocks_i, table => {
        //     table.addPool(pool => {
        //         pool.rolls = 1
        //         pool.survivesExplosion()
        //         pool.addItem(ores_i)
        //     })
        // })
    }
//若要修改矿石掉落物，将矿石本身放在ore_blicks里，掉落物放在ores里。貌似必须是双引号才行(
	/*var modseedfunction= table => {
		table.addPool(pool=> {
			pool.survivesExplosion()
			pool.randomChance(0.15)
            pool.addItem('frostedheart:frozen_seeds', 4)
            //pool.addItem('kubejs:frozen_seeds_wheat', 1)
            //pool.addItem('kubejs:frozen_seeds_pumpkin', 1)
            //pool.addItem('kubejs:frozen_seeds_beetroots', 1)
            //pool.addItem('kubejs:frozen_seeds_unknown', 4)
            //pool.addItem('kubejs:frozen_seeds_blackwheat', 1)
            pool.addItem('kubejs:frozen_white_turnip', 1)
			pool.addItem('minecraft:flint', 4)
		})
	};

	event.modifyBlock('primalwinter:snowy_dirt',modseedfunction)*/
	
	event.addBlock('primalwinter:snowy_dirt', table => {
		table.addPool(pool=> {
		pool.survivesExplosion()
		pool.addItem('rankine:loam')
		}),
		table.addPool(pool=> {
			pool.survivesExplosion()
			pool.randomChance(0.15)
            pool.addItem('frostedheart:frozen_seeds', 4)
            //pool.addItem('kubejs:frozen_seeds_wheat', 1)
            //pool.addItem('kubejs:frozen_seeds_pumpkin', 1)
            //pool.addItem('kubejs:frozen_seeds_beetroots', 1)
            //pool.addItem('kubejs:frozen_seeds_unknown', 4)
            //pool.addItem('kubejs:frozen_seeds_blackwheat', 1)
            pool.addItem('kubejs:frozen_white_turnip', 1)
			pool.addItem('minecraft:flint', 4)
		})
	})
	
	event.modifyBlock('primalwinter:snowy_sand', table => {
		table.addPool(pool =>{
			pool.survivesExplosion()
			pool.randomChance(0.1)
			pool.addItem('minecraft:flint', 4)
		})
	})
	
	event.modifyBlock("#minecraft:leaves", table => {
		table.addPool(pool =>{
			pool.addCondition({
                  "condition": "minecraft:alternative",
                  "terms": [
                    {
                      "condition": "minecraft:match_tool",
                      "predicate": {
                        "tag": "frostedheart:knife"
                      }
                    },
                    {
                      "condition": "minecraft:match_tool",
                      "predicate": {
                        "enchantments": [
                          {
                            "enchantment": "minecraft:silk_touch",
                            "levels": {
                              "min": 1
                            }
                          }
                        ]
                      }
                    }
                  ]
                })
			pool.addItem('primalwinter:snowy_vine', 1)
		})
	})
	event.modifyBlock("primalwinter:snowy_vine", table => {
		table.addPool(pool =>{
			pool.addCondition({
                  "condition": "minecraft:alternative",
                  "terms": [
                    {
                      "condition": "minecraft:match_tool",
                      "predicate": {
                        "tag": "frostedheart:knife"
                      }
                    },
                    {
                      "condition": "minecraft:match_tool",
                      "predicate": {
                        "enchantments": [
                          {
                            "enchantment": "minecraft:silk_touch",
                            "levels": {
                              "min": 1
                            }
                          }
                        ]
                      }
                    }
                  ]
                })
			pool.addItem('primalwinter:snowy_vine', 1)
		})
	})
})




