ServerEvents.recipes((event) => {
    let { create } = event.recipes

    let recipes = []
    recipes.forEach((recipe, Index) => {
        create.splashing(recipe.output, recipe.input)
            .id(`the_winter_rescue:create/splashing/${ index }`)
    })
})