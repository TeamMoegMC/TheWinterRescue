onEvent('recipes', (event) => {
    // event.stonecutting('byg:end_sand', 'betterendforge:endstone_dust');
});

stonecutterTagConversion = (event, tag) => {
    let ingredient = Ingredient.of(tag);
    ingredient.stacks.forEach((block) => {
        event.stonecutting(block.id, ingredient);
    });
};
