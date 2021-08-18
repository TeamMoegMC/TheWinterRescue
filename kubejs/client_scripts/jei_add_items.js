onEvent('jei.add.items', (event) => {
    const items = [
        Item.of('xx:xx').nbt({ texture: 'xx:xx' }),
        'xx:xx'
    ];

    items.forEach((item) => event.add(item));
});
