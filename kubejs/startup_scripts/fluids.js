console.info('[KUBEJS_STARTUP] Fluids Scripts Loaded/Reloaded!')

onEvent('fluid.registry', event => {
  event.create('lime_water').textureThin(0xB0C4DE).bucketColor(0xB0C4DE)
  event.create('chlorine').textureThin(0xB0C4DE).bucketColor(0xB0C4DE)
  event.create('magnesium_chloride').textureThin(0xB0C4DE).bucketColor(0xB0C4DE)
  event.create('salt_water').textureThin(0x4169E1).bucketColor(0x4169E1)
  event.create('sodium_hydroxide').textureThin(0xADD8E6).bucketColor(0xADD8E6)
  event.create('sodium_aluminate').textureThin(0xADD8E6).bucketColor(0xADD8E6)
  event.create('hydrogen_fluoride').textureThin(0x00FF7F).bucketColor(0x00FF7F)
  event.create('fluoroaluminic_acid').textureThin(0x00FF7F).bucketColor(0x00FF7F)
  event.create('cryolite').textureThin(0x90EE90).bucketColor(0x90EE90)
  event.create('aluminium').textureThin(0xD4F2E7).bucketColor(0xD4F2E7)
})
