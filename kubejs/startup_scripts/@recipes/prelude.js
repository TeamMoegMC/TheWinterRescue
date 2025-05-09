// priority: 100
let probejs$$RecipeSchema = Java.loadClass("dev.latvian.mods.kubejs.recipe.schema.RecipeSchema")
let probejs$$RecipeComponentBuilder = Java.loadClass("dev.latvian.mods.kubejs.recipe.component.RecipeComponentBuilder")
let probejs$$RegistryInfo = Java.loadClass("dev.latvian.mods.kubejs.registry.RegistryInfo")

/**
 * @type {Schema[]}
 */
let probejs$$Schemas = []

/**
 * @param {boolean} isInput
 */
function ComplexKey(isInput) {
    /**
     * @type {[string, string, any, boolean][]}
     */
    this.keys = []
    this.isInput = isInput
}

ComplexKey.prototype = {
    /**
     * @template {keyof Special.RecipeComponents} T
     * @param {string} key
     * @param {T} type
     * @param {(ReturnType<ReturnType<Special.RecipeComponents[T]>["key"]> extends Internal.RecipeKey<infer U> ? U : never)} [optional = undefined]
     * @param {boolean} [alwaysWrite = false]
     * @returns {this}
     */
    addKey(key, type, optional, alwaysWrite) {
        this.keys.push([key, type, optional, alwaysWrite])
        return this
    },

    /**
     * @param {Special.RecipeComponentMap} map
     * @returns {Internal.RecipeComponentBuilder}
     */
    build(map) {
        let builder = new probejs$$RecipeComponentBuilder(this.keys.length)
        for (let key of this.keys) {
            let component = map.get(key[1])().key(key[0])
            if (key[2] !== undefined) {
                if (key[2] !== null) component = component.optional(key[2])
                else component = component.defaultOptional()
                if (key[3]) component = component.alwaysWrite()
            }
            builder = builder.add(component)
        }
		if(this.isInput)
			builder=builder.inputRole()
		else
			builder=builder.outputRole()
        return builder
    }
}

/**
 * @param {Special.RecipeSerializer} recipeId
 */
function Schema(recipeId) {

    this.recipeId = recipeId
    /**
     * @type {([string, string, any, boolean] | [string, boolean, (arg: ComplexKey)=>void] | [(arg: Special.RecipeComponentMap, componentBuilder: typeof Internal.RecipeComponentBuilder)=>Internal.RecipeKey<any>])[]}
     */
    this.keys = []

    probejs$$Schemas.push(this)
}

Schema.prototype = {
    /**
     * @template {keyof Special.RecipeComponents} T
     * @param {string} key
     * @param {T} type
     * @param {(ReturnType<ReturnType<Special.RecipeComponents[T]>["key"]> extends Internal.RecipeKey<infer U> ? U : never)} [optional = undefined]
     * @param {boolean} [alwaysWrite = false]
     * @returns {this}
     */
    simpleKey(key, type, optional, alwaysWrite) {
        this.keys.push(["simple",key, type, optional, alwaysWrite])
        return this
    },

    /**
     * @param {string} key
     * @param {boolean} input
     * @param {(key: ComplexKey) => void} builder
     * @returns {this}
     */
    complexKey(key, input, builder) {
        this.keys.push(["complex",key, input, builder])
        return this
    },

    /**
     * @param {(components: Special.RecipeComponentMap, componentBuilder: typeof Internal.RecipeComponentBuilder)=>Internal.RecipeComponent<any>} builder
     * @returns {this}
     */
    dynamicKey(builder) {
        this.keys.push(["dynamic",builder])
        return this
    },

    /**
     * @param {Internal.RecipeSchemaRegistryEventJS} event
     */
    register(event) {
        // In case if the recipe serializer is not loaded, skip the registration
        let serializers = probejs$$RegistryInfo.RECIPE_SERIALIZER.vanillaRegistry.keySet().map(v => v.toString())
        if (serializers.indexOf(this.recipeId) === -1) return
        let keys = []
        let components = event.components
        let component = null;
        for (let key of this.keys) {
            if (key[0] =="simple") {
                component = components.get(key[2])().key(key[1])
                if (key[3] !== undefined) {
                    if (key[3] !== null) component = component.optional(key[3])
                    else component = component.defaultOptional()
                    if (key[4]) component = component.alwaysWrite()
                }
            } else if (key[0]=="complex") {
                let complex = new ComplexKey(key[2])
                key[3](complex)
                component = complex.build(components).key(key[1])
            } else if(key[0]=="dynamic"){
                component = key[1](components, probejs$$RecipeComponentBuilder)
            }
            keys.push(component)
        }
        event.register(this.recipeId, new probejs$$RecipeSchema(keys))
    }
}

StartupEvents.recipeSchemaRegistry((event) => {
    probejs$$Schemas.forEach((schema) => {
        schema.register(event)
    })
})