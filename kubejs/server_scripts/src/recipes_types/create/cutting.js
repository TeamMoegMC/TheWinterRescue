ServerEvents.recipes((event) => {
    let { create } = event.recipes;
    let data = {
        recipes: [
            { output: '9x minecraft:iron_ingot', input: 'minecraft:iron_block' },
            { output: '9x minecraft:gold_ingot', input: 'minecraft:gold_block' },
            { output: '9x minecraft:diamond', input: 'minecraft:diamond_block' },
            { output: '9x minecraft:emerald', input: 'minecraft:emerald_block' },
            { output: '9x minecraft:lapis_lazuli', input: 'minecraft:lapis_block' },
            { output: '9x minecraft:netherite_ingot', input: 'minecraft:netherite_block' },
            { output: '4x frostedheart:charcoal_stick', input: 'kubejs:charcoal_briquette' },
            { output: '4x frostedheart:coal_stick', input: 'kubejs:coal_briquette' },
            { output: '12x create:shaft', input: 'frostedheart:cast_iron_ingot' },
        ]
    };

    // 批量注册切割配方
    data.recipes.forEach((recipe) => {
        create.cutting(recipe.output, recipe.input);
    });
});