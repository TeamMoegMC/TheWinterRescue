// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('[KUBEJS_SERVER] Server Scripts Loaded/Reloaded!')

/* Tutorial
var x = event.variableName

event.variableName = 10

event.functionName()	

event.functionName(10, 'abc')

*/

onEvent('recipes', event => {
    // Change recipes here
})

onEvent('item.tags', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    // event.get('forge:cobblestone').add('minecraft:diamond_ore')

    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})