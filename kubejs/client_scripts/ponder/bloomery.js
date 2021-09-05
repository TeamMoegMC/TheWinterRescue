onEvent("ponder.tag.registry", event => {
    event.create("the_winter_rescue:multi_block", "charcoal_pit:sandy_brick", "Useless stuff", "This stuff is useless!")
})

onEvent("ponder.registry", event => {
    event.create("charcoal_pit:main_bloomery", ["charcoal_pit:sandy_tuyere", "charcoal_pit:main_bloomery","charcoal_pit:bellows"])
        .tag("the_winter_rescue:multi_block")
        .scene("basic_usage", "1", "kubejs:3x3", (scene, util) => {
            var pos = util.grid().at(1, 1, 1)

            scene.showBasePlate()
            scene.idle(10)

            scene.overlay().showText(20)
                .text("2")
                .pointAt(util.vector().centerOf(pos))
            scene.idle(20)

            scene.world().setBlock(pos, util.getDefaultState("charcoal_pit:main_bloomery"), true)
            scene.world().showSection(util.select().layer(1), Facing.down)
            scene.idle(20)

           scene.overlay().showText(60)
                .text("3")
                .pointAt(util.vector().centerOf(pos))
           scene.idle(60)


            scene.idle(40)

            // what??? you can MINE and PLACE blocks in MINECRAFT??
        })
})