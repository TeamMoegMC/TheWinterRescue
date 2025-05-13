ServerEvents.recipes((event) => {
    let {immersiveengineering} = event.recipes

    let recipes = [
        // 暂时没有粉碎机特定的配方
    ]
    recipes.forEach(([input, output, secondaries], index) => {
		if(secondaries)
        immersiveengineering.crusher(output, input, 
            secondaries
        ).id(`the_winter_rescue:immersiveengineering/crusher/${index}`)
		else
			 immersiveengineering.crusher(output, input,[]
        ).id(`the_winter_rescue:immersiveengineering/crusher/${index}`)
    })
})