console.info('[KUBEJS_THE_WINTER_RESCUE] TWR Fluids Registered!')

onEvent('fluid.registry', event => {
  const generalFluids = [
      
  ];
  
  generalFluids.forEach((fluid) => {
    if (fluid.type == 'thick') {
        event.create(fluid.id).textureThick(fluid.texture).bucketColor(fluid.texture); //.displayName(fluid.display);
    }
    else if (fluid.type == 'thin') {
        event.create(fluid.id).textureThin(fluid.texture).bucketColor(fluid.texture); //.displayName(fluid.display);
    }/*
    else if (fluid.type == 'custom') {
        event.create(fluid.id).displayName(fluid.display).textureStill(fluid.still).textureFlowing(fluid.flowing).bucketColor(fluid.color)
    }*/
  });

  event.create('lime_water').textureThin(0xB0C4DE).bucketColor(0xB0C4DE).group('frostedheart')
  event.create('chlorine').textureThin(0xB0C4DE).bucketColor(0xB0C4DE).group('frostedheart')
  event.create('magnesium_chloride').textureThin(0xB0C4DE).bucketColor(0xB0C4DE).group('frostedheart')
  event.create('salt_water').textureThin(0x4169E1).bucketColor(0x4169E1).group('frostedheart')
  event.create('sodium_hydroxide').textureThin(0xADD8E6).bucketColor(0xADD8E6).group('frostedheart')
  event.create('sodium_aluminate').textureThin(0xADD8E6).bucketColor(0xADD8E6).group('frostedheart')
  event.create('hydrogen_fluoride').textureThin(0x00FF7F).bucketColor(0x00FF7F).group('frostedheart')
  event.create('fluoroaluminic_acid').textureThin(0x00FF7F).bucketColor(0x00FF7F).group('frostedheart')
  event.create('cryolite').textureThin(0x90EE90).bucketColor(0x90EE90).group('frostedheart')
  event.create('aluminium').textureThin(0xD4F2E7).bucketColor(0xD4F2E7).group('frostedheart')
})
