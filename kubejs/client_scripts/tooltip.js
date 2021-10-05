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
                'minecraft:blast_furnace'
            ],
            text: [Text.of('This item is disabled by the Gamemaster').red()]
        },
        {
            items: ['primalwinter:snowy_vine'],
            text: [Text.of('使用燧石小刀切割原版树叶得到').gray()]
        },
        {
            items: ['notreepunching:flint_knife'],
            text: [Text.of('切割原版树叶得到覆雪的藤蔓').gray()]
        },
        {
            items: ['stone_age:flint_knife'],
            text: [Text.of('右击燧石工作台进行合成').gray()]
        },
        {
            items: ['stone_age:tanning_rack'],
            text: [Text.of('放置待处理物品后，然后使用燧石加工刀右击处理').gray()]
        },
        {
            items: ['notreepunching:clay_tool'],
            text: [Text.of('右击放置在地面上的粘土块进行加工').gray()]
        },
        {
            items: ['minecraft:campfire'],
            text: [Text.of('按Q丢入燃料，然后使用任何起火方式点燃').gray()]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
