onEvent('item.modification', event => {
  event.modify("#minecraft:carpets", item => {
	item.burnTime = 0
  })
})