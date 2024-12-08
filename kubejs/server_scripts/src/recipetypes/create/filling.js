ServerEvents.recipes((event) => {
    let { create } = event.recipes
    let recipes = [
        {
            output: ["minecraft:leather"],
            input: ["stone_age:raw_hide", Fluid.of("frostedheart:sulfur_dioxide", 250)]
        }
    ]
    recipes.forEach((recipe, index) => {
        create.filling(recipe.output, recipe.input)
            .id(`the_winter_rescue:create/filling/${ index }`)
    })
})