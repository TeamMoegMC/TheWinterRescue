ServerEvents.recipes((event) => {
    let { minecraft } = event.recipes
    let recipes = [
        { input: 'kubejs:shaped_bounded_graphite', output: 'kubejs:rough_graphite_electrode' }
    ]
    recipes.forEach((recipe) => {
        let re = minecraft.blasting(recipe.output, recipe.input)
        if (recipe.xp) {
            re.xp(recipe.xp);
        }
        if (recipe.id) {
            re.id(recipe.id);
        }
    })
})