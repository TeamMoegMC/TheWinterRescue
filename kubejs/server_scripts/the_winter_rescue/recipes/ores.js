onEvent('recipes', (event) => {

    let ores = [
        "rankine:magnetite_ore",
        "rankine:malachite_ore",
        "rankine:galena_ore",
        "rankine:native_gold_ore",
        "rankine:native_silver_ore",
        "rankine:native_tin_ore",
        "rankine:bauxite_ore",
        "rankine:sphalerite_ore",
        "rankine:pentlandite_ore",
        "rankine:sperrylite_ore"
    ]
    ores.forEach((ore) => {
        event.remove({type: 'create:crushing', input: ore})
        event.remove({type: 'create:milling', input: ore})
    });
});
