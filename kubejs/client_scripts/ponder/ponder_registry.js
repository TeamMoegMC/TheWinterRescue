// priority: 0

onEvent("ponder.registry", event => {
    // Bloomery
    event.create("the_winter_rescue:bloomery", ["charcoal_pit:main_bloomery", "charcoal_pit:sandy_tuyere", "charcoal_pit:sandy_brick"])
        .tag("the_winter_rescue:bloomery")
        // bloomery building
        .scene("assembly", "1", "kubejs:bloomery", (scene, util) => {
            scene.showBasePlate()
            scene.idle(20)

            scene.world().showSection(util.select().layer(1), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            scene.world().showSection(util.select().layer(2), Facing.down)
            scene.addKeyframe()
            scene.idle(40)

            // Bloomery info scene
            scene.addKeyframe()
            const pos = util.grid().at(3, 2, 1)
            scene.overlay().showText(50)
                .text("A single Bellow is required for the Bloomery to work - UNTRANSLATED")
                .pointAt(util.vector().centerOf(pos))
            scene.idle(60)
            scene.overlay().showOutline(PonderPalette.GREEN, new Object(), util.select().position(pos), 130)
            scene.overlay().showText(50)
                .text("Make sure to check it's vent orientation - UNTRANSLATED")
                .pointAt(util.vector().centerOf(pos))
            scene.idle(60)
            scene.overlay().showText(50)
                .colored(PonderPalette.RED)
                .text("If the vent doesnt face the Tuyere, the Bellow will not work - UNTRANSLATED")
                .pointAt(util.vector().centerOf(pos))
            scene.idle(70)

            scene.addKeyframe()
            scene.overlay().showText(50)
                .text("Right-Click to push air in using the Bellow - UNTRANSLATED")
                .pointAt(util.vector().centerOf(pos))
            scene.idle(30)
            scene.overlay().showControls(new PonderInput(util.vector().blockSurface(pos, Facing.down), PonderPointing.RIGHT)
                .rightClick(), 20)
            scene.world().modifyBlock(pos, state => state.with("push", true))
            scene.idle(20)
            scene.world().modifyBlock(pos, state => state.with("push", false))
            scene.idle(20)

            // Bloomery extraupgrade scene
            scene.addKeyframe()
            const pos2 = util.grid().at(1, 2, 1)
            scene.overlay().showOutline(PonderPalette.GREEN, new Object(), util.select().position(pos2), 50)
            scene.overlay().showText(50)
                .colored(PonderPalette.GREEN)
                .text("Another Tuyere can be added on this side, just make sure to check it's vent direction - UNTRANSLATED")
                .pointAt(util.vector().centerOf(pos2))
            scene.idle(30)
            scene.world().setBlock(pos2, util.getDefaultState("charcoal_pit:bellows"), true)
            scene.world().modifyBlock(pos2, state => state.with("facing", Facing.east))
            scene.idle(30)
    
            scene.world().showSection(util.select().layer(3), Facing.down)
            scene.overlay().showOutline(PonderPalette.GREEN, new Object(), util.select().fromTo(1, 3, 1, 3, 3, 3), 40)
            scene.overlay().showText(50)
                .colored(PonderPalette.GREEN)
                .text("Another layer can be placed for 2x processing. You cannot stack another layer after this one - UNTRANSLATED")
                .pointAt(util.vector().centerOf(util.grid().at(2, 3, 2)))
            scene.idle(40)
        })
        // bloomery usage
        .scene("usage", "Using the bloomery - UNTRANSLATED", "kubejs:bloomery", (scene, util) => {
            scene.showBasePlate()
            scene.idle(5)
            scene.world().showSection(util.select().layer(1), Facing.down)
            scene.idle(5)
            scene.world().showSection(util.select().layer(2), Facing.down)
            scene.idle(5)
        
            const center = util.grid().at(2, 2, 2)

            scene.overlay().showOutline(PonderPalette.GREEN, new Object(), util.select().position(center), 50)
            scene.overlay().showText(50)
                .colored(PonderPalette.GREEN)
                .text("To start processing, use Shift + Right-Click with the first ore in hand (not blocks) - UNTRANSLATED")
                .pointAt(util.vector().centerOf(center))
            scene.overlay().showControls(new PonderInput(util.vector().blockSurface(center, Facing.down), PonderPointing.RIGHT)
                .rightClick()
                .whileSneaking()
                .withItem("rankine:magnetite"), 20)
            scene.idle(50)

            scene.addKeyframe()
            scene.overlay().showText(40)
                .colored(PonderPalette.GREEN)
                .text("After the initial placement, Right-Click the pile with the ore and charcoal - UNTRANSLATED")
                .pointAt(util.vector().centerOf(center))
            scene.overlay().showControls(new PonderInput(util.vector().blockSurface(center, Facing.down), PonderPointing.RIGHT)
                .rightClick()
                .withItem("rankine:magnetite"), 40)
            scene.idle(50)

            scene.overlay().showControls(new PonderInput(util.vector().blockSurface(center, Facing.down), PonderPointing.RIGHT)
                .rightClick()
                .withItem("minecraft:charcoal"), 40)


            const sectionFromTo = util.select().fromTo(1, 5, 1, 3, 7, 3);
            const theSection = scene.world().showIndependentSectionImmediately(sectionFromTo);
            scene.world().moveSection(theSection, util.vector().of(0, -4, 0), 0)
            scene.idle(50)

            scene.addKeyframe()
            scene.overlay().showText(40)
                .colored(PonderPalette.GREEN)
                .text("After filling it up, start it by using a firestarter - UNTRANSLATED")
                .pointAt(util.vector().centerOf(center))
            scene.overlay().showControls(new PonderInput(util.vector().blockSurface(util.grid().at(2, 3, 2), Facing.down), PonderPointing.RIGHT)
                .rightClick()
                .withItem("charcoal_pit:fire_starter"), 40)
            scene.world().replaceBlocks(sectionFromTo, util.getDefaultState("minecraft:air"), false)

            const swapBlockFromTo = util.select().fromTo(1, 8, 1, 3, 9, 3);
            
            scene.world().moveSection(scene.world().showIndependentSectionImmediately(swapBlockFromTo), util.vector().of(0, -7, 0), 0)
            scene.idle(50)

            scene.overlay().showText(40)
                .colored(PonderPalette.GREEN)
                .text("Once it's done burning, you can mine it up and collect the iron - UNTRANSLATED")
                .pointAt(util.vector().centerOf(center))
            scene.idle(40)
        })

    // Generator Consruction (Tier 1)
    event.create("the_winter_rescue:generator_construction_t1", 
        [
            "frostedheart:generator", 
            "frostedheart:generator_core_t1", 
            "frostedheart:generator_amplifier_r1", 
            "frostedheart:generator_brick"
        ])
        .tag("the_winter_rescue:generator")
        .scene("basic_usage", "", "kubejs:generator_t1", (scene, util) => {
            scene.configureBasePlate(0, 0, 5)
            scene.scaleSceneView(0.7) // zoom out, t2 is big
            scene.showBasePlate()
            scene.idle(10)

            // Generic build
            scene.world().showSection(util.select().layer(1), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            scene.world().showSection(util.select().layer(2), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            scene.world().showSection(util.select().layer(3), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            scene.world().showSection(util.select().layer(4), Facing.down)
            scene.addKeyframe()
            scene.idle(40)

            const pos = util.grid().at(2, 2, 1)
            // text
            scene.overlay().showText(40)
                .text("Right-Click to assemble - UNTRANSLATED")
                .pointAt(util.vector().centerOf(pos))
            scene.idle(20)
            scene.overlay().showControls(new PonderInput(util.vector().blockSurface(pos, Facing.down), PonderPointing.RIGHT)
                .rightClick().withItem("immersiveengineering:hammer"),
                40)
            scene.world().moveSection(scene.world().showIndependentSectionImmediately(util.select().fromTo(1, 6, 1, 3, 10, 3)), util.vector().of(0, -5, 0), 0)
            scene.world().replaceBlocks(util.select().fromTo(1, 1, 1, 3, 4, 3), util.getDefaultState("minecraft:air"), true)
            scene.idle(40)
        })

    // Generator Consruction (Tier 2)
    event.create("the_winter_rescue:generator_construction_t2", ["frostedheart:generator_t2"])
        .tag("the_winter_rescue:generator")
        .scene("basic_usage", "", "kubejs:generator_t2", (scene, util) => {
            scene.configureBasePlate(0, 0, 5)
            scene.scaleSceneView(0.6) // zoom out, t2 is big
            scene.showBasePlate()
            scene.idle(10)

            // Generic build
            scene.world().showSection(util.select().layer(1), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            scene.world().showSection(util.select().layer(2), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            scene.world().showSection(util.select().layer(3), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            scene.world().showSection(util.select().layer(4), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            scene.world().showSection(util.select().layer(5), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            scene.world().showSection(util.select().layer(6), Facing.down)
            scene.addKeyframe()
            scene.idle(40)

            const pos = util.grid().at(2, 2, 1)
            // text
            scene.overlay().showText(40)
                .text("Right-Click to assemble")
                .pointAt(util.vector().centerOf(pos))
            scene.idle(20)
            scene.overlay().showControls(new PonderInput(util.vector().blockSurface(pos, Facing.down), PonderPointing.RIGHT)
                .rightClick().withItem("immersiveengineering:hammer"),
                40)
            scene.world().moveSection(scene.world().showIndependentSectionImmediately(util.select().fromTo(1, 8, 1, 3, 15, 3)), util.vector().of(0, -8, 0), 0)
            scene.world().replaceBlocks(util.select().fromTo(1, 1, 1, 3, 6, 3), util.getDefaultState("minecraft:air"), true)
            scene.idle(40)
        })

    // Crucible
    event.create("the_winter_rescue:steel_mill", ["immersiveindustry:crucible", "immersiveindustry:burning_chamber", "rankine:high_refractory_bricks"])
        .tag("the_winter_rescue:crucible")
        .scene("basic_usage", "", "kubejs:steel_mill_crucible", (scene, util) => {
            scene.configureBasePlate(0, 0, 5)
            scene.scaleSceneView(0.7) // zoom out, t2 is big
            scene.showBasePlate()
            scene.idle(10)

            // Generic build
            scene.world().showSection(util.select().layer(1), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            scene.world().showSection(util.select().layer(2), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            scene.world().showSection(util.select().layer(3), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            scene.world().showSection(util.select().layer(4), Facing.down)
            scene.addKeyframe()
            scene.idle(40)

            const pos = util.grid().at(2, 2, 1)
            // text
            scene.overlay().showText(40)
                .text("Right-Click to assemble - UNTRANSLATED")
                .pointAt(util.vector().centerOf(pos))
            scene.idle(20)
            scene.overlay().showControls(new PonderInput(util.vector().blockSurface(pos, Facing.down), PonderPointing.RIGHT)
                .rightClick().withItem("immersiveengineering:hammer"),
                40)
            scene.world().moveSection(scene.world().showIndependentSectionImmediately(util.select().fromTo(1, 6, 1, 3, 10, 3)), util.vector().of(0, -5, 0), 0)
            scene.world().replaceBlocks(util.select().fromTo(1, 1, 1, 3, 4, 3), util.getDefaultState("minecraft:air"), true)
            scene.idle(40)
        })

    event.create("the_winter_rescue:steam_turbine", ["immersiveindustry:steam_turbine", "immersiveengineering:generator"])
        .tag("the_winter_rescue:steam_turbine")
        .scene("basic_usage", "", "kubejs:steam_turbine", (scene, util) => {
            scene.rotateCameraY(130)
            scene.scaleSceneView(0.7) // zoom out, t2 is big
            scene.configureBasePlate(0, 0, 9) // baseplace is a square
			scene.showBasePlate()
			scene.idle(20)

            scene.world().showSection(util.select().layer(1), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            scene.world().showSection(util.select().layer(2), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            scene.world().showSection(util.select().layer(3), Facing.down)
            scene.addKeyframe()
            scene.idle(40)

            scene.rotateCameraY(-110)
            const pos = util.grid().at(2, 2, 1)
            scene.overlay().showText(40)
                .text("Right-Click to assemble - UNTRANSLATED")
                .pointAt(util.vector().centerOf(pos))
            scene.idle(20)
            scene.overlay().showControls(new PonderInput(util.vector().blockSurface(pos, Facing.down), PonderPointing.RIGHT)
                .rightClick().withItem("immersiveengineering:hammer"),
                40)
            scene.world().moveSection(scene.world().showIndependentSectionImmediately(util.select().fromTo(1, 5, 1, 3, 10, 7)), util.vector().of(0, -4, 0), 0)
            scene.world().replaceBlocks(util.select().fromTo(1, 1, 1, 3, 3, 7), util.getDefaultState("minecraft:air"), true)
            scene.idle(60)
        })

	event.create("the_winter_rescue:beehive_oven_pit", ["rankine:beehive_oven_pit"])
        .tag("the_winter_rescue:beehive_oven_pit")
        .scene("basic_usage", "", "kubejs:beehive_oven_pit", (scene, util) => {
            scene.configureBasePlate(0, 0, 5)
            scene.rotateCameraY(-70)
			scene.showBasePlate()
			scene.idle(20)

            scene.world().showSection(util.select().layer(1), Facing.down)
            scene.addKeyframe()
            scene.idle(40)
            
			scene.overlay().showText(40)
                .text("Place marble on the top without blocking the beehive oven pit - UNTRANSLATED")
                .pointAt(util.vector().centerOf(util.grid().at(2, 2, 2)))
            scene.overlay().showOutline(PonderPalette.GREEN, new Object(), util.select().fromTo(1, 2, 1, 3, 2, 3), 40)
            scene.world().showSection(util.select().layer(2), Facing.down)
            scene.addKeyframe()
            scene.idle(50)

            const pos = util.grid().at(2, 1, 2);
			scene.overlay().showText(40)
                .text("After placing the blocks, use a flint and steel to turn it on - UNTRANSLATED")
                .pointAt(util.vector().centerOf(pos))
            scene.overlay().showControls(new PonderInput(util.vector().blockSurface(pos, Facing.down), PonderPointing.DOWN)
                .rightClick().withItem("minecraft:flint_and_steel"),
                40)
            scene.addKeyframe()
			scene.idle(40)

			scene.overlay().showText(40)
                .text("Once it finishes, you will get quicklime from the marble - UNTRANSLATED")
                .pointAt(util.vector().centerOf(pos))
            scene.world().moveSection(scene.world().showIndependentSectionImmediately(util.select().fromTo(1, 3, 1, 3, 5, 3)), util.vector().of(0, -3, 0), 0)
            scene.world().replaceBlocks(util.select().fromTo(1, 1, 1, 3, 1, 3), util.getDefaultState("minecraft:air"), false)
            scene.idle(40)
        })
})