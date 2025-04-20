new Schema("frostedheart:charger")
    .simpleKey("result", "outputItem")
    .simpleKey("input", "inputItem")
    .simpleKey("cost", "doubleNumber", 100)

/*new Schema("frostedheart:defrost_campfire")
    .simpleKey("results", "outputItemArray")
    .simpleKey("ingredient", "inputItem")
    .simpleKey("cookingtime", "doubleNumber", 100)*/

new Schema("frostedheart:generator")
    .simpleKey("result", "outputItem")
    .simpleKey("input", "inputItem")
    .simpleKey("time", "doubleNumber", 100)

new Schema("frostedheart:fuel_stove")
    .simpleKey("input", "inputItem")
    .simpleKey("fuel", "doubleNumber", 100)

new Schema("frostedheart:paper")
    .simpleKey("input", "inputItem")
    .simpleKey("level", "doubleNumber", 1)

new Schema("frostedheart:recipe_inner")
    .simpleKey("input", "inputItem")
    .simpleKey("durable", "doubleNumber", 1)

new Schema("frostedheart:steam_generator")
    .simpleKey("energy", "doubleNumber", 10)
    .simpleKey("input", "inputItem")
    .simpleKey("durable", "doubleNumber", 1)

new Schema("frostedresearch:inspire")
    .simpleKey("item", "inputItem")
    .simpleKey("amount", "doubleNumber", 1)