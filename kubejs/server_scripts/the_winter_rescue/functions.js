//priority: 1005

function shapedRecipe(result, pattern, key, id) {
    return {result: result, pattern: pattern, key: key, id: id};
}

function flint_shapedRecipe(result, pattern, key, tool) {
    return {result: result, pattern: pattern, key: key, tool: tool};
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
    return {type: 'rankine:beehive_oven', input: input, result: result};
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
