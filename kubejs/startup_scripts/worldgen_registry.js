console.info('[KUBEJS_THE_WINTER_RESCUE] TWR Worldgen Registered!')

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
  event.addOre(ore => {
	ore.worldgenLayer = 'top_layer_modification'
    ore.block = 'kubejs:copper_gravel' 
    ore.spawnsIn.blacklist = false
    ore.spawnsIn.values = [
      'minecraft:gravel',
	  'minecraft:dirt',
	  'minecraft:sand'
    ]
    ore.biomes.blacklist = false
	    ore.biomes.values = [
	  '#river',
	  '#beach'
    ]

    ore.clusterMinSize = 5
    ore.clusterMaxSize = 8
    ore.clusterCount = 6
    ore.minHeight = 50
    ore.maxHeight = 72
    ore.squared = true 
  })
})
