ServerEvents.recipes((event) => {
    let {create} = event.recipes
    let recipes = [
        {
            output: [
                Item.of("6x create:copper_nugget"),
                Item.of("3x frostedheart:rusted_copper_nugget").withChance(1),
            ],
            input: "frostedheart:cable"
        },
        {
            output: [
                Item.of("12x frostedheart:rusted_iron_nugget"),
                Item.of("6x create:copper_nugget").withChance(1),
                Item.of("3x frostedheart:rusted_copper_nugget").withChance(1),
            ],
            input: "frostedheart:deflection_coil"
        },
        {
            output: [
                Item.of("12x frostedheart:rusted_iron_nugget"),
            ],
            input: "frostedheart:insulator"
        },
        {
            output: [
                Item.of("12x frostedheart:rusted_iron_nugget"),
                Item.of("6x create:copper_nugget").withChance(1),
                Item.of("3x frostedheart:rusted_copper_nugget").withChance(1),
            ],
            input: "frostedheart:stator"
        },
    ]
    recipes.forEach((recipe, index) => {
        create.crushing(recipe.output, recipe.input)
            .id(`the_winter_rescue:create/crushing/${index}`)
    })
	event.remove({type: "create:crushing"})
})