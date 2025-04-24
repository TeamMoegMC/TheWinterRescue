//priority: 1005

function IEIngredient(input) {

	if(Array.isArray(input)){
		var count=0;
		var inps=[];
		for(let i of input){
			let inp=Item.of(i);
			if(count==0)
			count=inp.getCount();
			inps.push(inp.withCount(1).toJson());
		}
		return {base_ingredient: inps, count: count}
	}
    let inp = Item.of(input)
    return {base_ingredient: inp.withCount(1).toJson(), count: inp.getCount()}
}
function IEIngredientWithSize(input,amount) {
    let inp = Item.of(input)
    return {base_ingredient: inp.withCount(1).toJson(), count: amount}
}
function FluidTag(tag, amount) {
    return {"tag": tag, "amount": amount}
}

function shapedRecipe(result, pattern, key, id) {
    return {result: result, pattern: pattern, key: key, id: id}
}

function tree_stumpRecipe(result, ingredients, tool, chop, amount) {
    return {result: result, ingredients: ingredients, tool: tool, chop: chop, amount: amount}
}

function campfireRecipe(result, ingredients, time) {
    return {result: result, ingredients: ingredients, time: time}
}

function millstoneRecipe(result, ingredients, secondResult, secondChance, activateCount) {
    return {
        result: result,
        ingredients: ingredients,
        secondResult: secondResult,
        secondChance: secondChance,
        activateCount: activateCount
    }
}

function shapelessRecipe(result, ingredients, id) {
    return {result: result, ingredients: ingredients, id: id}
}

function shapelessRecipeGroup(result, ingredients, id, group) {
    return {result: result, ingredients: ingredients, id: id, group: group}
}

function inspireRecipe(input, result) {
    return {
        type: "frostedheart:inspire",
        item: Item.of(input).toJson(),
        amount: result
    }
}
function chemical(input,input_fluid,output,output_fluid,time){
	let result={
	"type": "immersiveindustry:chemical",
	"time": time
	}
	if(input){
		
		result.inputs=[];
		for(let i of input){
			if(i.base_ingredient)
				result.inputs.push(i)
			else
				result.inputs.push(IEIngredient(i));
		}
	}
	if(input_fluid)
	result.input_fluids=input_fluid;
	if(output){
		result.outputs=[];
		for(let i of output)
			result.outputs.push(Item.of(i));
	}
	if(output_fluid){
		result.result_fluids=[];
		for(let i of output_fluid){
			let fluidOut={"fluid":i.id,"amount":i.amount};
			
			if(i.nbt)
				fluidOut.tag=i.nbt
			result.result_fluids.push(fluidOut);
		}
	}

	return result
}
function incubateItemRecipe(input, catalyst, use_catalyst, result, time, water) {
    return {
        type: "frostedheart:incubate",
        input: IEIngredient(input),
        consume_catalyst: use_catalyst,
        catalyst: IEIngredient(catalyst),
        output: Item.of(result),
        time: time,
        water: water
    }
}

function incubateFluidRecipe(input, catalyst, use_catalyst, result, resultfluid, time, water) {
    return {
        type: "frostedheart:incubate",
        input: IEIngredient(input),
        consume_catalyst: use_catalyst,
        catalyst: IEIngredient(catalyst),
        fluid: FluidStack.of(resultfluid),
        output: Item.of(result),
        time: time,
        water: water
    }
}

function incubateRecipe(input, catalyst, use_catalyst, result, resultfluid, time, water) {
    return {
        type: "frostedheart:incubate",
        input: IEIngredient(input),
        consume_catalyst: use_catalyst,
        catalyst: IEIngredient(catalyst),
        output: result,
        fluid: FluidStack.of(resultfluid),
        time: time,
        water: water
    }
}

function carkilnRecipe(inputs, output, time, energy) {
    let ings = []
    inputs.forEach((key) => {
        ings.push(IEIngredient(key))
    })
    let outs = []
    output.forEach((key) => {
        outs.push(IEIngredient(key))
    })
    return {
        "type": "immersiveindustry:car_kiln",
        "inputs": ings,
        "results": outs,
        "time": time,
        "tickEnergy": energy
    }
}

function crucibleRecipe(inputs, output, time, temperature) {
    let ings = []
    inputs.forEach((key) => {
        ings.push(IEIngredient(key))
    })
    return {
        "type": "immersiveindustry:crucible",
        "inputs": ings,
        "result": IEIngredient(output),
        "time": time,
        "temperature": temperature
    }
}

function rotarykilnRecipe(input, output, time, energy) {
    return rotarykilnRecipe2(input,output,time,energy)
}

function rotarykilnRecipe2(input, output, time, energy, byproduct, chance) {
    return rotarykilnRecipe3(input,output,null,time,energy,byproduct,chance)
}

function rotarykilnRecipe3(input, output, output_fluid, time, energy, byproduct, chance) {
	
    var ret= {
        "type": "immersiveindustry:rotary_kiln",
        "input": IEIngredient(input),
        "time": time,
        "tickEnergy": energy
    }
	if(byproduct!=null)
		ret.byproduct={"output":Item.of(byproduct),"chance":chance};
	if(output!=null)
		ret.result= Item.of(output);
	if(output_fluid!=null)
		ret.result_fluid=output_fluid;
	return ret;
}

function unificationBlacklistEntry(material, type) {
    return {
        material: material,
        type: type
    }
}

function entryIsBlacklisted(material, type) {
    for (let i = 0; i < unificationBlacklist.length; i++) {
        if (unificationBlacklist[i].material === material && unificationBlacklist[i].type === type) {
            return true
        }
    }
    return false
}

function tagIsEmpty(tag) {
    return getPreferredItemInTag(Ingredient.of(tag)).id === air
}

function getPreferredItemInTag(tag) {
    return utils
        .listOf(tag.stacks)
        .toArray()
        .sort(({mod: a}, {mod: b}) => compareIndices(a, b, tag))[0] || Item.of(air)
}

function compareIndices(a, b, tag) {
    if (a === b) {
        return 0
    } // iff a == b, they"ll be found at the same position in modPriorities

    for (let mod of modPriorities) {
        if (mod === a) {
            return -1
        } // if a comes before b, then idx(a) < idx(b), so -1
        if (mod === b) {
            return 1
        } // if a comes after b, then idx(a) > idx(b), so 1
    }

    console.error("[" + a + ", " + b + "] were both unaccounted for in mod unification" + (tag ? " for " + tag : "!"))
    return 0
}

function wrapArray(array) {
    return utils.listOf(array).toArray()
}

function getStrippedLogFrom(logBlock) {
    let result = air
    buildWoodVariants.find((wood) => {
        if (wood.logBlock === logBlock) {
            result = wood.logBlockStripped
            return result
        }
    })
    return result
}

let unificationBlacklist = [
    // unificationBlacklistEntry("quartz", "gem"),
    // unificationBlacklistEntry("quartz", "storage_block")
]