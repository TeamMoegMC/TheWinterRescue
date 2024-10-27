RecipeViewerEvents.removeRecipes((event) => {
    //console.log('JEI RECIPE CATEGORIES: ' + event.getCategoryIds());
    //console.log('Valid Keys: ' + Object.keys(event));
    // event.remove('minecraft:blast_furnace', {});

    recipesToHide.forEach((recipe) => {
        recipe.recipes_by_id.forEach((id) => {
            if (recipe.category == 'minecraft:crafting') {
                // event.remove('create:automatic_shaped', [id]);
            }
            console.log(`Category: ${recipe.category}, Hiding: ${id}`);
            event.remove(recipe.category, [id]);
        });
    });	
});