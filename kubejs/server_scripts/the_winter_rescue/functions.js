//priority: 1005

function IEIngredient(input) {
	let inp=Ingredient.of(input);
    return {base_ingredient: inp.withCount(1).toJson(), count: inp.getCount()};
}
function FluidTag(tag,amount) {
    return {"tag":tag,"amount":amount};
}
function shapedRecipe(result, pattern, key, id) {
    return {result: result, pattern: pattern, key: key, id: id};
}

function tree_stumpRecipe(result, ingredients, tool, chop, amount) {
    return {result: result, ingredients: ingredients, tool: tool, chop:chop, amount:amount};
}

function campfireRecipe(result, ingredients, time) {
    return {result: result, ingredients: ingredients, time: time};
}

function millstoneRecipe(result, ingredients, secondResult, secondChance, activateCount) {
    return {result: result, ingredients: ingredients, secondResult: secondResult, secondChance:secondChance, activateCount:activateCount};
}

function shapelessRecipe(result, ingredients, id) {
    return {result: result, ingredients: ingredients, id: id};
}
function shapelessRecipeGroup(result, ingredients, id, group) {
    return {result: result, ingredients: ingredients, id: id, group: group};
}
function beehiveRecipe(input, result) {
    return {type: 'frostedheart:beehive_oven', input: input, result: result};
}

function inspireRecipe(input, result) {
    return {type: 'frostedheart:inspire', item: Item.of(input).toJson(), amount: result};
}

function incubateItemRecipe(input,catalyst,use_catalyst,result,time,water) {
    return {type: "frostedheart:incubate",input: IEIngredient(input),consume_catalyst:use_catalyst,catalyst:IEIngredient(catalyst),output: Item.of(result),time:time,water:water};
}
function incubateFluidRecipe(input,catalyst,use_catalyst,result,resultfluid,time,water) {
    return {type: "frostedheart:incubate",input: IEIngredient(input),consume_catalyst:use_catalyst,catalyst:IEIngredient(catalyst),fluid:FluidStack.of(resultfluid),output: Item.of(result),time:time,water:water};
}
function incubateRecipe(input,catalyst,use_catalyst,result,resultfluid,time,water) {
    return {type: "frostedheart:incubate",input: IEIngredient(input),consume_catalyst:use_catalyst,catalyst:IEIngredient(catalyst),output: result,fluid:FluidStack.of(resultfluid),time:time,water:water};
}
function carkilnRecipe(inputs,output,time,energy,start_cost){
	let ings=[];
	inputs.forEach((key)=>{
		ings.push(IEIngredient(key));
	})
	let outs=[];
	output.forEach((key)=>{
		outs.push(IEIngredient(key));
		
	})
	return {
		"type": "immersiveindustry:car_kiln",
		"inputs": ings,
		"results": outs,
		"time": time,
		"tickEnergy":energy,
		"start_fluid_cost":start_cost
	};
}
function rotarykilnRecipe(input,output,time,energy){
	return {
		"type": "immersiveindustry:rotary_kiln",
		"input": IEIngredient(input),
		"result": Item.of(output),
		"time": time,
		"tickEnergy":energy
	};
}
function rotarykilnRecipe2(input,output,time,energy,byproduct,chance){
	return {
		"type": "immersiveindustry:rotary_kiln",
		"input": IEIngredient(input),
		"byproduct": IEIngredient(byproduct),
		"chance":chance,
		"result": Item.of(output),
		"time": time,
		"tickEnergy":energy
	};
}
function rotarykilnRecipe3(input,output,output_fluid,time,energy,byproduct,chance){
	return {
		"type": "immersiveindustry:rotary_kiln",
		"input": IEIngredient(input),
		"byproduct": Item.of(byproduct),
		"result_fluid": output_fluid,
		"chance":chance,
		"result": Item.of(output),
		"time": time,
		"tickEnergy":energy
	};
}
function unificationBlacklistEntry(material, type) {
    return {material: material, type: type};
}

function entryIsBlacklisted(material, type) {
    for (var i = 0; i < unificationBlacklist.length; i++) {
        if (unificationBlacklist[i].material == material && unificationBlacklist[i].type == type) {
            return true;
        }
    }
    return false;
}

function tagIsEmpty(tag) {
    return getPreferredItemInTag(Ingredient.of(tag)).id == air;
}

function getPreferredItemInTag(tag) {
    let pref =
        utils
            .listOf(tag.stacks)
            .toArray()
            .sort(({mod: a}, {mod: b}) => compareIndices(a, b, tag))[0] || Item.of(air);
    return pref;
}

function compareIndices(a, b, tag) {
    if (a == b) return 0; // iff a == b, they'll be found at the same position in modPriorities

    for (let mod of modPriorities) {
        if (mod == a) return -1; // if a comes before b, then idx(a) < idx(b), so -1
        if (mod == b) return 1; // if a comes after b, then idx(a) > idx(b), so 1
    }

    console.error('[' + a + ', ' + b + '] were both unaccounted for in mod unification' + (tag ? ' for ' + tag : '!'));
    return 0;
}

function wrapArray(array) {
    return utils.listOf(array).toArray();
}

function getStrippedLogFrom(logBlock) {
    let result = air;
    buildWoodVariants.find((wood) => {
        if (wood.logBlock == logBlock) {
            result = wood.logBlockStripped;
            return result;
        }
    });
    return result;
}

const unificationBlacklist = [
    // unificationBlacklistEntry('quartz', 'gem'),
    // unificationBlacklistEntry('quartz', 'storage_block')
];
