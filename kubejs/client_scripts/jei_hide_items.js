onEvent('jei.hide.items', (event) => {
    // materialsToUnify.forEach((material) => {
    //     if (material == 'iesnium' || material == 'graphite' || material == 'hop_graphite') {
    //         return;
    //     }
    //     itemsToHide.push(
    //         // 'immersiveengineering:ingot_' + material,
    //         // 'immersiveengineering:dust_' + material,
    //         // 'immersiveengineering:nugget_' + material,
    //         // 'immersiveengineering:stick_' + material,
    //     );
    // });


    clientItemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    serverItemsToHide.forEach((disabledItem) => {
        // if (disabledItem.toString.startsWith("#")) {
        //     var tag = Ingredient.of(disabledItem);
        //     tag.stacks.forEach((item) => {
        //         event.hide(item);
        //     })
        // }
        
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    regexHide.forEach((regexExpression) => {
        event.hide(regexExpression);
    });
});
