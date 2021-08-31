var ores =   ["rankine:magnetite", "kubejs:pyrite" , "kubejs:native_copper", "rankine:malachite", "rankine:pentlandite", "kubejs:native_tin", "rankine:cassiterite", "kubejs:bauxite" , "rankine:stibnite", "rankine:cinnabar", "rankine:magnesite", "rankine:galena", "kubejs:halite" , "rankine:fluorite", "rankine:vanadinite", "kubejs:silver", "kubejs:gold"];
var ore_name =   ["magnetite", "pyrite" , "native_copper", "malachite", "pentlandite", "native_tin", "cassiterite", "bauxite" , "stibnite", "cinnabar", "magnesite", "galena", "halite" , "fluorite", "vanadinite", "silver", "gold"];
var i;
var ores_i;
var ore_name_i;
var crushed_ore_i;
onEvent('recipes', (event) => {
	for(i=0; i<ores.length; i++){
		ores_i = ores[i];
		ore_name_i = ore_name[i];
		curshed_ore_i = "kubejs:" + "crushed_ore_" + ore_name_i;
		event.recipes.createCrushing([
		curshed_ore_i,
		Item.of(curshed_ore_i).withChance(0.5)
		], ores_i)
	}
});

