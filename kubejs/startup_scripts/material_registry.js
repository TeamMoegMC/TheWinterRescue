let allItems = []


metalOres.forEach((ore) => {
    oreStates.forEach((state) => {
        allItems.push(`${state}_${ore}`);
        
    });
});

nonmetalOres.forEach((ore) => {
    oreStates.forEach((state) => {
        allItems.push(`${state}_${ore}`);
        
    });
});

onEvent('item.registry', event => {
    allItems.forEach((item) => {
        event.create(item).group('frostedheart').texture(`kubejs:item/${item}`);
    });
});

