console.info('[KUBEJS_STARTUP] Fluids Scripts Loaded/Reloaded!')

onEvent('fluid.registry', event => {
  event.create('lime_water').textureThin(0xB0C4DE).bucketColor(0xB0C4DE)
})
