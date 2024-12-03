new Schema("stone_age:tree_stump")
	.simpleKey("result", "outputItem")
	.simpleKey("input", "inputItem")
	.simpleKey("tool", "inputItem")
	.simpleKey("chopTimes", "doubleNumber")
/*
{
	"type": "stone_age:tree_stump",
	"tool": {
		"tag": "ages_api:hammers"
	},
	"ingredient": {
		"item": "minecraft:bone"
	},
	"chopTimes": 1,
	"result": {
		"item": "minecraft:bone_meal"
	}
}
 */
new Schema("stone_age:millstone")
	.simpleKey("result", "outputItem")
	.simpleKey("ingredient", "inputItem")
	.simpleKey("secondResult", "outputItem")
	.simpleKey("secondChance", "doubleNumber", 0.1)
	.simpleKey("activateCount", "doubleNumber", 1)
/*
{
	"type": "stone_age:millstone",
	"ingredient": {
		"item": "minecraft:wheat"
	},
	"activateCount": 2,
	"result": {
		"item": "stone_age:flour",
		"count": 2
	},
	"secondResult": {
		"item": "stone_age:flour"
	},
	"secondChance": 0.1
}
*/
new Schema("stone_age:drying_rack")
	.simpleKey("result", "outputItem")
	.simpleKey("ingredient", "inputItem")
	.simpleKey("dryingTime", "doubleNumber", 100)
/*
{
	"type": "stone_age:drying_rack",
	"ingredient": {
	"item": "minecraft:grass"
	},
	"dryingTime": 1200,
	"result": {
	"item": "stone_age:dried_grass"
	}
}
*/