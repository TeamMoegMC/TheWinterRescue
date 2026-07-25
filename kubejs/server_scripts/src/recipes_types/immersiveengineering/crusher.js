ServerEvents.recipes((event) => {
    let {immersiveengineering} = event.recipes
    let recipes = [
        // garbage
        {
            output: [
                Item.of("#forge:wires/copper").withChance(1),
                Item.of("frostedheart:vulcanized_rubber").withChance(0.75),
            ],
            input: "frostedheart:cable"
        },
        {
            output: [
                Item.of("12x frostedheart:rusted_iron_nugget"),
                Item.of("#forge:wires/copper").withChance(1),
            ],
            input: "frostedheart:deflection_coil"
        },
        {
            output: [
                Item.of("12x frostedheart:rusted_iron_nugget"),
                Item.of("immersiveengineering:insulating_glass").withChance(0.5),
            ],
            input: "frostedheart:insulator"
        },
        {
            output: [
                Item.of("12x frostedheart:rusted_iron_nugget"),
                Item.of("#forge:wires/copper").withChance(1),
            ],
            input: "frostedheart:stator"
        },
        {
            output: [
                Item.of("frostedheart:sawdust"),
                Item.of("5x minecraft:gold_nugget").withChance(1),
                Item.of("9x frostedheart:aluminum_nugget").withChance(1),
            ],
            input: "kubejs:damaged_gpu"
        },
        {
            output: [
                Item.of("frostedheart:sawdust"),
                Item.of("5x minecraft:gold_nugget").withChance(1),
                Item.of("6x frostedheart:rusted_iron_nugget").withChance(1),
            ],
            input: "kubejs:damaged_circuit_board"
        },
        {
            output: [
                Item.of("frostedheart:sawdust"),
                Item.of("5x minecraft:gold_nugget").withChance(1),
                Item.of("supplementaries:ash").withChance(1),
            ],
            input: "kubejs:burnt_circuit_board"
        },
        {
            output: [
                Item.of("6x frostedheart:rusted_iron_nugget"),
                Item.of("4x minecraft:gold_nugget").withChance(1),
                Item.of("4x frostedheart:aluminum_nugget").withChance(1),
                Item.of("frostedheart:copper_wire").withChance(0.5),
            ],
            input: "kubejs:broken_robot_1"
        },
        {
            output: [
                Item.of("6x frostedheart:aluminum_nugget"),
                Item.of("6x minecraft:gold_nugget").withChance(1),
                Item.of("frostedheart:copper_wire").withChance(0.5),
                Item.of("4x frostedheart:titanium_nugget").withChance(0.5),
            ],
            input: "kubejs:broken_robot_2"
        },
        {
            output: [
                Item.of("9x frostedheart:aluminum_nugget"),
                Item.of("5x minecraft:gold_nugget").withChance(1),
                Item.of("minecraft:sand").withChance(1),
            ],
            input: "kubejs:damaged_camera"
        },
        {
            output: [
                Item.of("9x frostedheart:rusted_iron_nugget"),
                Item.of("frostedheart:copper_wire").withChance(1),
            ],
            input: "kubejs:damaged_electric_motor"
        },
    ]
    recipes.forEach((recipe, index) => {
		immersiveengineering.crusher(recipe.output[0],recipe.input,recipe.output.slice(1))
		    .id(`the_winter_rescue:immersiveengineering/crusher_crushing/${index}`)
    })
})