onEvent('item.tooltip', (event) => {
    /*
    Valid Color Codes:
    .black()
    .darkBlue()
    .darkGreen()
    .darkAqua()
    .darkRed()
    .darkPurple()
    .gold()
    .gray()
    .darkGray()
    .blue()
    .green()
    .aqua()
    .red()
    .lightPurple()
    .yellow()
    .white()
    .color('#808080') //any hex color
    */
    const recipes = [
        {
            items: [
                // 'integratedtunnels:part_interface_fluid',
                // 'integratedtunnels:part_importer_fluid',
                // 'integratedtunnels:part_exporter_fluid'
            ],
            text: [Text.of('XXXX').red()]
        },
        {
            items: [/*'kubejs:altered_recipe_indicator'*/],
            text: [Text.of('XXXXX').gold()]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
