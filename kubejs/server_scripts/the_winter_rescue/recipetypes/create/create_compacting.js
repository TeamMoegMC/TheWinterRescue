onEvent('recipes', (event) => {
    let items = [
        {output: 'rankine:alumina', input: 'kubejs:bauxite'},
        {output: '4x rankine:kaolinite', input: 'rankine:kaolin'},

        {output: "2x kubejs:wet_coal_briquette", input: "kubejs:wet_coal_dust"},
        {output: "4x kubejs:creosoted_coal_briquette", input: ["kubejs:anthracite_dust",Fluid.of('immersiveengineering:creosote', 100)]},
        {output: "rankine:graphite_block", input: "9x rankine:graphite"},
        {output: "3x kubejs:creosoted_coal_briquette", input: ["#forge:dusts/coal_coke",Fluid.of('immersiveengineering:creosote', 100)]},
        {output: "kubejs:creosoted_charcoal_briquette", input: ["kubejs:charcoal_dust",Fluid.of('immersiveengineering:creosote',260)]},
        {output: "kubejs:creosoted_sawdust_briquette", input: ["4x #forge:dusts/wood",Fluid.of('immersiveengineering:creosote', 25)]},
        {output: "4x kubejs:bound_coal_briquette", input: ["2x #kubejs:fuel_glue","#forge:dusts/coal_coke"]},
        {output: "5x kubejs:bound_coal_briquette", input: ["2x #kubejs:fuel_glue","kubejs:anthracite_dust"]},
        {output: "3x kubejs:bound_charcoal_briquette", input: ["4x #kubejs:fuel_glue","2x kubejs:charcoal_dust"]},
        {output: "4x kubejs:bound_coal_briquette", input: [Fluid.of('create:honey', 125),"#forge:dusts/coal_coke"]},
        {output: "5x kubejs:bound_coal_briquette", input: [Fluid.of('create:honey', 125),"kubejs:anthracite_dust"]},
        {output: "3x kubejs:bound_charcoal_briquette", input: [Fluid.of('create:honey', 250),"2x kubejs:charcoal_dust"]},
        {output: "charcoal_pit:coal_pile", input: ["8x minecraft:coal"]},
        {output: "kubejs:wet_straw_briquette", input: ["8x charcoal_pit:straw"]}
    ]
    let heated = [
        {output: "kubejs:creosoted_charcoal_briquette", input: ["kubejs:charcoal_dust",Fluid.of('immersiveengineering:creosote',250)]},
        {output: "kubejs:creosoted_sawdust_briquette", input: ["4x #forge:dusts/wood",Fluid.of('immersiveengineering:creosote', 10)]}
    ]

    items.forEach((item) => {
        event.recipes.createCompacting(item.output, item.input)
    });

    heated.forEach((item) => {
       event.recipes.createCompacting(item.output, item.input).heated()
    });
});
