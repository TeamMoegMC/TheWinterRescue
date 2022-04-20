console.info('[KUBEJS_THE_WINTER_RESCUE] TWR Worldgen Registered!')

onEvent('worldgen.add', event => {
	  event.addOre(ore => {
    ore.block = 'rankine:kaolin' 
    ore.spawnsIn.blacklist = false
    ore.spawnsIn.values = [
      'rankine:limestone',
	  'rankine:dolostone',
	  'rankine:chalk',
	  'rankine:shale',
	  'rankine:siltstone'
    ]
    ore.biomes.blacklist = true
	ore.biomes.values = [
	  '#nether',
	  '#the_end'
    ]

    ore.clusterMinSize = 10
    ore.clusterMaxSize = 20
    ore.clusterCount = 8
    ore.minHeight = 32
    ore.maxHeight = 84
    ore.squared = true 
  })
})
