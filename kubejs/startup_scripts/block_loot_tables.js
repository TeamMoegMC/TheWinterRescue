console.info('[KUBEJS_THE_WINTER_RESCUE] TWR Worldgen Registered!')

var ore_blocks = ["rankine:magnetite_ore", "rankine:pyrite_ore", "rankine:native_cooper_ore"   , "rankine:malachite_ore", "rankine:pentlandite_ore", "rankine:native_tin_ore"   , "rankine:cassiterite_ore", "rankine:bituminous_ore", "rankine:lignite_ore", "rankine:bauxite_ore", "rankine:stibnite_ore", "rankine:cinnabar_ore", "rankine:magnesite_ore", "rankine:galena_ore", "rankine:halite_ore", "rankine:fluorite_ore", "rankine:vanadinite_ore", "rankine:native_silver_ore", "rankine:native_gold_ore"];
var ores =       ["rankine:magnetite"    ,     "kubejs:pyrite" , "kubejs:raw_ore_native_cooper", "rankine:malachite"    , "rankine:pentlandite"	   , "kubejs:raw_ore_native_tin", "rankine:cassiterite"    , "kubejs:bituminous_ore" , "kubejs:lignite_ore" , "kubejs:bauxite"     , "rankine:stibnite"    , "rankine:cinnabar"    , "rankine:magnesite"    , "rankine:galena"    , "kubejs:halite"     , "rankine:fluorite"    , "rankine:vanadinite"    , "kubejs:raw_ore_silver"    , "kubejs:raw_ore_gold    "];
var i;
var ores_i;
var ore_blocks_i;

onEvent('block.loot_tables', event => {
	for (i=0; i<ores.length; i++){
		ores_i = ores[i];
		ore_blocks_i = ore_blocks[i];
		event.build(ore_blocks_i, table => { 
			table.pool(pool => {
			pool.rolls = 1 
			pool.survivesExplosion()
			pool.addItem(ores_i)
			})
		})
	};
})




