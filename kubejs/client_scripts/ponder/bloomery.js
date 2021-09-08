onEvent("ponder.tag.registry", event => {
    event.create("the_winter_rescue:multi_block", "charcoal_pit:sandy_brick", "Useless stuff", "This stuff is useless!")
})

onEvent("ponder.registry", event => {
    event.create("charcoal_pit:main_bloomery", ["charcoal_pit:sandy_tuyere", "charcoal_pit:main_bloomery","charcoal_pit:sandy_brick"])
        .tag("the_winter_rescue:multi_block")
        .scene("basic_usage", "1", "kubejs:bloomery", (scene, util) => {
            var pos = util.grid().at(2, 0, 2)
			
            scene.showBasePlate()

            scene.idle(20)

            scene.world().showSection(util.select().layer(1), Facing.down)
            scene.idle(40)
			scene.world().showSection(util.select().layer(2), Facing.down)
			scene.idle(40)
           scene.overlay().showText(60)
                .text("2")
                .pointAt(util.vector().centerOf(pos))
			scene.world().showSection(util.select().layer(3), Facing.down)
           scene.idle(60)
        })
})