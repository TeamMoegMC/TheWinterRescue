onEvent('worldgen.add', event => {
	  event.addOre(ore => {
    ore.block = 'rankine:kaolinite_block' 

    ore.spawnsIn.values = [
      'rankine:tufa_limestone',
	  'rankine:dolostone',
	  'rankine:chalk',
	  'rankine:carbonaceous_shale',
	  'rankine:siltstone'
    ]
    

    
    ore.clusterMinSize = 10
    ore.clusterMaxSize = 20 
    ore.clusterCount = 8
    ore.minHeight = 32 
    ore.maxHeight = 72 
    ore.squared = true 

  })
})