ServerEvents.recipes((event) => {
    let { create } = event.recipes

    event.remove({ type: "create:pressing" })

    create.compacting("2x steampowered:bronze_sheet", "3x frostedheart:bronze_ingot")
    create.compacting("2x frostedheart:lead_sheet", "3x frostedheart:lead_ingot")
    create.compacting("2x frostedheart:cast_iron_sheet", "3x frostedheart:cast_iron_ingot")
    create.compacting("2x frostedheart:invar_sheet", "3x frostedheart:invar_ingot")

    let metals = [
        "copper",
        "brass",
        "iron"
    ]
    metals.forEach((plate) => {
        create.compacting(`2x create:${ plate }_sheet`, `3x #forge:ingots/${ plate }`)
    })

    let metals2 = [
        "aluminum",
        "lead",
        "constantan",
        "steel",
        "electrum",
        "silver",
        "gold"
    ]
    metals2.forEach((plate) => {
        create.compacting(`2x immersiveengineering:plate_${ plate }`, `3x #forge:ingots/${ plate }`)
    })
})