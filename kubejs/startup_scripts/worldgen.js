onEvent('worldgen.add', event => {
	  event.addOre(ore => {
    ore.block = 'rankine:kaolinite_block' 
    ore.spawnsIn.blacklist = false
    ore.spawnsIn.values = [
      'rankine:tufa_limestone',
	  'rankine:dolostone',
	  'rankine:chalk',
	  'rankine:carbonaceous_shale',
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