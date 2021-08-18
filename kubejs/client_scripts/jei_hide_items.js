onEvent('jei.hide.items', (event) => {
    materialsToUnify.forEach((material) => {
        if (material == 'iesnium' || material == 'graphite' || material == 'hop_graphite') {
            return;
        }
        itemsToHide.push(
            // 'immersiveengineering:ingot_' + material,
            // 'immersiveengineering:dust_' + material,
            // 'immersiveengineering:nugget_' + material,
            // 'immersiveengineering:stick_' + material,
        );
    });

    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    disabledItems.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    regexHide.forEach((regexExpression) => {
        event.hide(regexExpression);
    });
});
