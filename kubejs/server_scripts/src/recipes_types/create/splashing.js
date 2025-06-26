ServerEvents.recipes((event) => {
    let {create} = event.recipes

    let recipes = [
//        {
//            input:  ["frostedheart:raw_rye_bread"],
//            output: ["frostedheart:rye_flour"]
//        },
    ]
    recipes.forEach((recipe, index) => {
        create.splashing(recipe.input, recipe.output)
            .id(`the_winter_rescue:create/splashing/${index}`)
    })
})