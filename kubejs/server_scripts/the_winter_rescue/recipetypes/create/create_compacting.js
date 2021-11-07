onEvent('recipes', (event) => {
    let items = [
        {input: 'kubejs:bauxite', output: 'rankine:alumina'},
        {input: 'rankine:kaolinite_block', output: '4x rankine:kaolinite_ball'}
    ]
    items.forEach((item) => {
        event.recipes.createCompacting(item.output, item.input)
    });
});
