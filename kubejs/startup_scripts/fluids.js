console.info('[KUBEJS_STARTUP] Fluids Scripts Loaded/Reloaded!')

onEvent('fluid.registry', event => {
  event.create('lime_water').textureThin(0xB0C4DE).bucketColor(0xB0C4DE)
  event.create('chlorine').textureThin(0xB0C4DE).bucketColor(0xB0C4DE)
  event.create('magnesium_chloride').textureThin(0xB0C4DE).bucketColor(0xB0C4DE)
})
