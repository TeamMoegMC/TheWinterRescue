// priority: 0

Ponder.registry((event) => {
    // Creosote funnel
    event.create(["charcoal_pit:sandy_collector", "immersiveengineering:creosote_bucket", "charcoal_pit:log_pile"])
        .tag("the_winter_rescue:creosote_funnel")
        .scene("creosote_funnel_use", "", (scene) => {
            let dirt = "minecraft:dirt"

            scene.showBasePlate()
            scene.idle(20)

            //
            scene.addKeyframe()
            scene.world.setBlocks([2, 1, 2], "charcoal_pit:sandy_collector")
            scene.world.showSection([2, 1, 2], Direction.DOWN)
            scene.idle(20)
            scene.text(60, "The Creosote Funnel can produce a certain amount of creosote oil after a Log Pile burns", [2, 1.5, 2])
            scene.idle(60)

            //
            scene.addKeyframe()
            let dirt1 = [[2, 2, 3], [1, 2, 2], [2, 2, 1], [3, 2, 2]]
            dirt1.forEach((pos) => {
                scene.world.setBlocks(pos, dirt)
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)
            scene.text(40, "Surround it with four solid blocks on all sides.")
            scene.idle(40)

            //
            scene.addKeyframe()
            scene.world.setBlocks([2, 2, 2], "charcoal_pit:log_pile")
            scene.world.modifyBlocks([2, 2, 2], (state) => state.with("axis", "y"), false)
            scene.world.showSection([2, 2, 2], Direction.DOWN)
            scene.idle(20)
            scene.text(40, "Place a Log Pile in the center.", [2, 3.5, 2])
            scene.idle(40)

            //
            scene.addKeyframe()
            scene.showControls(20, [2, 3.5, 2], "down")
                .withItem("charcoal_pit:fire_starter")
            scene.idle(30)
            scene.world.modifyBlocks([2, 2, 2], (state) => state.with("lit", "true"), false)
            scene.world.showIndependentSectionImmediately([2, 3, 2])
            scene.world.setBlocks([2, 3, 2], "minecraft:fire")
            scene.idle(30)
            scene.world.setBlocks([2, 3, 2], dirt, false)

            //
            scene.addKeyframe()
            scene.idle(40)
            let dirt2 = [[2, 2, 3], [1, 2, 2], [2, 2, 1], [3, 2, 2], [2, 3, 2]]
            dirt2.forEach((pos) => {
                scene.world.setBlocks(pos, "minecraft:air")
            })
            scene.world.modifyBlocks([2, 2, 2], "charcoal_pit:wood_ash", false)
            scene.idle(20)
            scene.world.modifyBlocks([2, 2, 2], "minecraft:air")
            scene.idle(20)
            scene.showControls(30, [2, 2.5, 2], "down")
                .withItem("immersiveengineering:creosote_bucket")
            scene.idle(20)
        })

    // Bloomery
    event.create(["charcoal_pit:main_bloomery", "charcoal_pit:sandy_tuyere", "charcoal_pit:sandy_brick", "charcoal_pit:bellows", "charcoal_pit:mechanical_bellows"])
        .tag("the_winter_rescue:bloomery")
        // bloomery building
        .scene("assembly", "1", "kubejs:bloomery", (scene) => {
            scene.showBasePlate()
            scene.idle(20)

            scene.world.showSection([4, 1, 0, 0, 1, 4], Direction.DOWN)
            scene.addKeyframe()
            scene.idle(40)
            scene.world.showSection([4, 2, 0, 0, 2, 4], Direction.DOWN)
            scene.addKeyframe()
            scene.idle(40)

            // Bloomery info scene
            scene.addKeyframe()
            scene.overlay.showText(50)
                .text("A single Bellow is required for the Bloomery to work")
                .pointAt([3, 2, 1])
            scene.idle(60)
            scene.overlay.showOutline("green", {}, [3, 2, 1], 130)
            scene.overlay.showText(50)
                .text("Make sure to check it's vent orientation")
                .pointAt([3, 2, 1])
            scene.idle(60)
            scene.overlay.showText(50)
                .colored(PonderPalette.RED)
                .text("If the vent doesnt face the Tuyere, the Bellow will not work")
                .pointAt([3, 2, 1])
            scene.idle(70)

            scene.addKeyframe()
            scene.overlay.showText(50)
                .text("Right-Click to push air in using the Bellow")
                .pointAt([3, 2, 1])
            scene.idle(30)
            scene.showControls(20, [3, 2, 1], "right")
            scene.world.modifyBlocks([3, 2, 1], (state) => state.with("push", "true"), false)
            scene.idle(20)
            scene.world.modifyBlocks([3, 2, 1], (state) => state.with("push", "false"), false)
            scene.idle(20)

            // Bloomery extraupgrade scene
            scene.addKeyframe()
            // let pos2 = util.grid().at(1, 2, 1)
            scene.overlay.showOutline("green", {}, [1, 2, 1], 50)
            scene.overlay.showText(50)
                .colored(PonderPalette.GREEN)
                .text("Another Tuyere can be added on this side, just make sure to check it's vent direction")
                .pointAt([1, 2, 1])
            scene.idle(30)
            scene.world.setBlocks([1, 2, 1], "charcoal_pit:bellows", true)
            scene.world.modifyBlocks([1, 2, 1], (state) => state.with("Direction", Direction.EAST), false)
            scene.idle(30)

            scene.world.showSection([2, 3, 2], Direction.DOWN)
            scene.overlay.showOutline("green", {}, [1, 3, 1, 3, 3, 3], 40)
            scene.overlay.showText(50)
                .colored(PonderPalette.GREEN)
                .text("Another layer can be placed for 2x processing. You cannot stack another layer after this one")
                .pointAt([2, 3, 2])
            scene.idle(40)
        })

        // bloomery usage
        .scene("usage", "Using the bloomery", "kubejs:bloomery", (scene) => {
            scene.showBasePlate()
            scene.world.showSection([4, 1, 0, 0, 2, 4], Direction.DOWN)
            scene.idle(20)

            //
            scene.overlay.showText(50)
                .colored(PonderPalette.GREEN)
                .text("To start processing, use Shift + Right-Click with the first ore in hand (not blocks)")
                .pointAt([2, 3, 2])
            scene.idle(50)
            scene.showControls(20, [2, 3, 2], "down")
                .withItem("minecraft:raw_iron")
            scene.idle(20)

            scene.addKeyframe()
            scene.overlay.showText(40)
                .colored(PonderPalette.GREEN)
                .text("After the initial placement, Right-Click the pile with the ore and charcoal")
                .pointAt([2, 3, 2])
            scene.idle(50)

            scene.showControls(40, [2, 3, 2], "right")
                .withItem("minecraft:charcoal")

            let theSection = scene.world.showIndependentSectionImmediately([2, 6, 2])
            scene.world.moveSection(theSection, [0, - 4, 0], 0)
            scene.idle(50)

            scene.addKeyframe()
            scene.overlay.showText(40)
                .colored(PonderPalette.GREEN)
                .text("After filling it up, start it by using a firestarter")
                .pointAt([2, 3, 2])
            scene.showControls(40, [2, 3.5, 2], "down")
                .withItem("charcoal_pit:fire_starter")
            scene.idle(50)

            scene.world.modifyBlocks([2, 6, 2], (state) => state.with("stage", "9"), false)
            scene.world.setBlocks([2, 3, 2], "minecraft:fire")
            scene.world.showIndependentSectionImmediately([2, 3, 2])
            scene.world.modifyBlocks([2, 1, 2], (state) => state.with("stage", "1"), false)

            let swapBlockFromTo = scene.world.showIndependentSectionImmediately([1, 8, 1, 3, 9, 3])
            scene.world.moveSection(scene.world.showIndependentSectionImmediately(swapBlockFromTo), [0, - 7, 0], 0)
            scene.idle(50)

            scene.showControls(40, [3, 3, 1], "down")
                .rightClick()
            scene.world.modifyBlocks([3, 2, 1], (state) => state.with("push", "true"), false)
            scene.world.modifyBlocks([2, 1, 2], (state) => state.with("stage", "2"), false)
            scene.idle(20)
            scene.world.modifyBlocks([3, 2, 1], (state) => state.with("push", "false"), false)

            scene.overlay.showText(40)
                .colored(PonderPalette.GREEN)
                .text("Once it's done burning, you can mine it up and collect the iron")
                .pointAt([2, 2, 2])
            scene.idle(40)
        })
})

// Generator Consruction (Tier 1)
event.create(["frostedheart:generator", "frostedheart:generator_core_t1", "frostedheart:generator_amplifier_r1", "frostedheart:generator_brick"])
    .tag("the_winter_rescue:generator")
    .scene("basic_usage", "", "kubejs:generator_t1", (scene) => {
        scene.configureBasePlate(0, 0, 5)
        scene.scaleSceneView(0.7) // zoom out, t2 is big
        scene.showBasePlate()
        scene.idle(10)

        // Generic build
        scene.world.showSection([2, 1, 2], Direction.DOWN)
        scene.addKeyframe()
        scene.idle(40)
        scene.world.showSection([2, 2, 2], Direction.DOWN)
        scene.addKeyframe()
        scene.idle(40)
        scene.world.showSection([2, 3, 2], Direction.DOWN)
        scene.addKeyframe()
        scene.idle(40)
        scene.world.showSection([2, 4, 2], Direction.DOWN)
        scene.addKeyframe()
        scene.idle(40)

        // text
        scene.overlay.showText(40)
            .text("Right-Click to assemble")
            .pointAt([3, 2, 1])
        scene.idle(20)
        scene.showControls(40, [2, 2, 1], "right")
            .withItem("immersiveengineering:hammer")

        scene.world.moveSection(scene.world.showIndependentSectionImmediately([1, 6, 1, 3, 10, 3]), [0, - 5, 0], 0)
        scene.world.replaceBlocks([1, 1, 1, 3, 4, 3], "minecraft:air", false)
        scene.idle(40)
    })

// Generator Consruction (Tier 2)
event.create(["frostedheart:generator_t2", "frostedheart:invar_block"])
    .tag("the_winter_rescue:generator")
    .scene("basic_usage", "", "kubejs:generator_t2", (scene) => {
        scene.configureBasePlate(0, 0, 5)
        scene.scaleSceneView(0.5) // zoom out, t2 is big
        scene.showBasePlate()
        scene.idle(10)

        // Generic build
        let block1 = [
            [4, 1, 0, 0, 1, 4],
            [4, 2, 0, 0, 2, 4],
            [4, 3, 0, 0, 3, 4],
            [4, 4, 0, 0, 4, 4],
            [4, 5, 0, 0, 5, 4],
            [4, 6, 0, 0, 6, 4],
            [4, 7, 0, 0, 7, 4],
        ]
        block1.forEach((pos) => {
            scene.world.showSection(pos, Direction.DOWN)
            scene.addKeyframe()
            scene.idle(40)
        })

        // text
        scene.overlay.showText(40)
            .text("Right-Click to assemble")
            .pointAt([3, 2, 1])
        scene.idle(20)
        scene.showControls(40, [2, 2, 1], "right")
            .withItem("immersiveengineering:hammer")
        scene.world.moveSection(scene.world.showIndependentSectionImmediately([1, 8, 1, 3, 15, 3]), [0, - 8, 0], 0)
        scene.world.replaceBlocks([1, 1, 1, 3, 7, 3], "minecraft:air", false)
        scene.idle(40)
    })
/*
.scene("usage", "", "kubejs:generator_t2", (scene) => {
    scene.configureBasePlate(0, 0, 5)
    scene.scaleSceneView(1)
    scene.showBasePlate()
    scene.idle(10)
    scene.world.moveSection(scene.world.showIndependentSectionImmediately(util.select().fromTo(1, 8, 1, 3, 15, 3)).vector().of(0, -8, 0), 0)
    scene.world.replaceBlocks(util.select().fromTo(1, 1, 1, 3, 7, 3).getDefaultState("minecraft:air"), false)
    scene.idle(20)
    scene.addKeyframe()
    scene.overlay.showOutline(PonderPalette.GREEN, new Object().select().position(2,1,2), 20)
    scene.overlay.showText(20)
        .text("Input heat medium from bottom blue marked ")
        .pointAt(util.vector().blockSurface(util.grid().at(2, 1, 2), Direction.DOWN))
    scene.idle(40)
    scene.addKeyframe()

    scene.overlay.showOutline(PonderPalette.GREEN, new Object().select().position(1,1,2), 60)
    scene.overlay.showOutline(PonderPalette.GREEN, new Object().select().position(3,1,2), 60)
    scene.overlay.showOutline(PonderPalette.GREEN, new Object().select().position(2,1,1), 60)
    scene.overlay.showOutline(PonderPalette.GREEN, new Object().select().position(2,1,3), 60)
    scene.overlay.showText(60)
        .text("Export energy from the bottom of these locations")
        .pointAt(util.vector().blockSurface(util.grid().at(2, 1, 2), Direction.DOWN))
    scene.idle(20)
    scene.rotateCameraY(180)
    scene.idle(40)
})
    */

// Crucible
event.create(["immersiveindustry:crucible", "immersiveindustry:burning_chamber", "frostedheart:high_refractory_bricks", "immersiveengineering:blastfurnace_preheater"])
    .tag("the_winter_rescue:crucible")
    .scene("assembly", "", "kubejs:steel_mill_crucible", (scene) => {
        scene.configureBasePlate(0, 0, 5)
        scene.scaleSceneView(0.7) // zoom out, t2 is big
        scene.showBasePlate()
        scene.idle(10)

        // Generic build
        scene.world.showSection([4, 1, 0, 0, 1, 4], Direction.DOWN)
        scene.addKeyframe()
        scene.idle(40)
        scene.world.showSection([4, 2, 0, 0, 2, 4], Direction.DOWN)
        scene.addKeyframe()
        scene.idle(40)
        scene.world.showSection([4, 3, 0, 0, 3, 4], Direction.DOWN)
        scene.addKeyframe()
        scene.idle(40)
        scene.world.showSection([4, 4, 0, 0, 4, 4], Direction.DOWN)
        scene.addKeyframe()
        scene.idle(40)
        scene.addKeyframe()
        // text
        scene.overlay.showText(40)
            .text("Right-Click to assemble")
            .pointAt([3, 2, 1])
        scene.idle(20)
        scene.showControls(40, [2, 2, 1], "right")
            .withItem("immersiveengineering:hammer")
        scene.world.moveSection(scene.world.showIndependentSectionImmediately([1, 6, 1, 3, 10, 3]), [0, - 5, 0], 0)
        scene.world.replaceBlocks([1, 1, 1, 3, 4, 3], "minecraft:air", false)
        scene.idle(40)
        scene.addKeyframe()
        scene.rotateCameraY(180)
        scene.idle(20)
        scene.overlay.showText(40)
            .text("Install Preheater here")
            .pointAt([2, 1, 4])
        scene.idle(20)
        scene.world.moveSection(scene.world.showIndependentSection([0, 6, 4, 4, 10, 4], Direction.north), [0, - 5, 0], 0)
        scene.idle(60)
    })
    .scene("basic_usage", "", "kubejs:steel_mill_crucible_usage", (scene) => {
        scene.configureBasePlate(0, 0, 6)
        scene.showBasePlate()
        scene.idle(10)

        scene.world.showSection([1, 1, 2, 3, 4, 4], Direction.DOWN)
        scene.idle(20)
        // text
        scene.overlay.showText(40)
            .text("Install Preheater here")
            .pointAt([2, 1, 1])
        scene.idle(20)
        scene.world.showSection([2, 1, 1, 2, 4, 1], Direction.south)
        scene.idle(20)
        scene.overlay.showText(40)
            .text("Power must be provided here")
            .pointAt([2, 4, 1])
        scene.idle(40)
        scene.addKeyframe()
        scene.overlay.showText(20)
            .text("You can either use GUI or automation input")
            .pointAt([1, 1, 2])
        scene.idle(40)
        scene.addKeyframe()
        scene.overlay.showText(20)
            .text("Ingredients can be throw into crucible")
            .pointAt([2, 5, 3])
        scene.idle(20)
        scene.showControls(10, [2, 5, 3], "right")
            .withItem("kubejs:flux")
        scene.idle(12)
        let fluxItem = scene.world.createItemEntity([2, 5, 3], [0, 0, 0], Ingredient.of("kubejs:flux"))
        scene.idle(20)
        scene.showControls(10, [2, 5, 3], "down")
            .withItem("minecraft:iron_ingot")
        scene.idle(12)
        let ironItem = scene.world.createItemEntity([2, 5, 3], [0, 0, 0], Ingredient.of("minecraft:iron_ingot"))
        scene.idle(40)
        scene.addKeyframe()
        scene.overlay.showText(20)
            .text("Ingredients can also insert into crucible on the top")
            .pointAt([2, 5, 3])
        scene.world.showSection([2, 5, 2], Direction.DOWN)
        scene.idle(20)
        scene.showControls(10, [2, 5, 2], "down")
            .withItem("minecraft:iron_ingot")
        scene.idle(20)
        scene.showControls(10, [2, 5, 2], "down")
            .withItem("kubejs:flux")
        scene.idle(40)
        scene.addKeyframe()
        scene.rotateCameraY(90)
        scene.idle(20)
        scene.world.showSection([4, 1, 0, 5, 2, 5], Direction.west)
        scene.overlay.showText(20)
            .text("Coke coal can insert to the burners")
            .pointAt([4, 1, 3])
        scene.showControls(20, [4, 1, 3], "down")
            .withItem("immersiveengineering:coal_coke")
        scene.idle(40)
        scene.addKeyframe()
        scene.world.showSection([4, 2, 0, 5, 5, 5], Direction.north)
        scene.overlay.showText(20)
            .text("Products can be extracted from sides of the crucible part")
            .pointAt([4, 4, 3])
        scene.idle(20)

        scene.world.createItemOnBelt([4, 3, 3], Direction.up, "immersiveengineering:ingot_steel");
        scene.idle(40)
    })

event.create(["immersiveindustry:steam_turbine", "immersiveengineering:generator"])
    .tag("the_winter_rescue:steam_turbine")
    .scene("basic_usage", "", "kubejs:steam_turbine", (scene) => {
        scene.rotateCameraY(130)
        scene.scaleSceneView(0.7) // zoom out, t2 is big
        scene.configureBasePlate(0, 0, 9) // baseplace is a square
        scene.showBasePlate()
        scene.idle(20)

        scene.world.showSection([4, 1, 0, 0, 1, 8], Direction.DOWN)
        scene.addKeyframe()
        scene.idle(40)
        scene.world.showSection([4, 2, 0, 0, 2, 8], Direction.DOWN)
        scene.addKeyframe()
        scene.idle(40)
        scene.world.showSection([4, 3, 0, 0, 3, 8], Direction.DOWN)
        scene.addKeyframe()
        scene.idle(40)

        scene.rotateCameraY(- 110)
        scene.overlay.showText(40)
            .text("Right-Click to assemble")
            .pointAt([3, 2, 1])
        scene.idle(20)
        scene.showControls(40, [2, 2, 1], "down")
            .withItem("immersiveengineering:hammer")
        scene.world.moveSection(scene.world.showIndependentSectionImmediately([1, 5, 1, 3, 10, 7]), [0, - 4, 0], 0)
        scene.world.replaceBlocks([1, 1, 1, 3, 3, 7], "minecraft:air", false)
        scene.idle(60)
        scene.addKeyframe()
        scene.rotateCameraY(180)
        scene.overlay.showText(40)
            .text("Input steam here")
            .pointAt([1, 2, 8])
        scene.idle(60)
    })

event.create(["minecraft:charcoal", "charcoal_pit:log_pile", "charcoal_pit:wood_ash"])
    .tag("the_winter_rescue:charcoal_pit")
    .scene("basic_usage", "", (scene) => {
        let dirt = "minecraft:dirt"

        scene.showBasePlate()
        scene.idle(20)

        scene.addKeyframe()
        scene.world.setBlocks([2, 1, 2], "charcoal_pit:log_pile")
        scene.world.showSection([2, 1, 2], Direction.DOWN)
        scene.world.modifyBlocks([2, 1, 2], (state) => state.with("axis", "y"), false)
        scene.idle(20)

        scene.addKeyframe()
        let dirtBlock = [[2, 1, 3], [1, 1, 2], [2, 1, 1], [3, 1, 2]]
        dirtBlock.forEach((pos) => {
            scene.world.setBlocks(pos, dirt)
            scene.world.showSection(pos, Direction.DOWN)
            scene.idle(2)
        })
        scene.idle(20)

        scene.addKeyframe()
        scene.showControls(20, [2, 2.5, 2], "down")
            .withItem("charcoal_pit:fire_starter")
        scene.idle(30)
        scene.addKeyframe()
        scene.world.modifyBlocks([2, 1, 2], (state) => state.with("lit", "true"), false)
        scene.world.setBlocks([2, 2, 2], "minecraft:fire", false)

        scene.world.showIndependentSectionImmediately([2, 2, 2])
        scene.idle(20)
        scene.world.setBlocks([2, 4, 2], dirt)
        scene.world.moveSection(scene.world.showIndependentSection([2, 4, 2], Direction.DOWN), [0, - 2, 0], 0)
        scene.world.setBlocks([2, 2, 2], "minecraft:air", false)

        scene.addKeyframe()
        scene.idle(40)

        let air1 = [[2, 1, 3], [1, 1, 2], [2, 1, 1], [3, 1, 2], [2, 4, 2]]
        air1.forEach((pos) => {
            scene.world.setBlocks(pos, "minecraft:air")
        })
        scene.world.setBlocks([2, 1, 2], "charcoal_pit:wood_ash", false)
        scene.idle(20)
        scene.world.setBlocks([2, 1, 2], "minecraft:air")
        let charcoal1 = scene.world.createItemEntity([2.5, 2, 2.5], Direction.DOWN, "7x minecraft:charcoal")
        let ash1 = scene.world.createItemEntity([2.5, 2, 2.5], Direction.DOWN, "2x charcoal_pit:ash")
        scene.idle(40)
        scene.world.removeEntity(charcoal1)
        scene.world.removeEntity(ash1)

        //
        scene.addKeyframe()
        scene.idle(20)
        let dirt2 = [
            [3, 1, 4], [2, 1, 4], [1, 1, 4],
            [0, 1, 3], [0, 1, 2], [0, 1, 1],
            [1, 1, 0], [2, 1, 0], [3, 1, 0],
            [4, 1, 1], [4, 1, 2], [4, 1, 3]
        ]
        dirt2.forEach((pos) => {
            scene.world.setBlocks(pos, dirt)
            scene.world.showSection(pos, Direction.DOWN)
            scene.idle(2)
        })

        scene.world.setBlocks([3, 6, 1, 1, 6, 3], "charcoal_pit:log_pile")
        scene.world.modifyBlocks([3, 6, 1, 1, 6, 3], (state) => state.with("axis", "y"), false)
        scene.world.moveSection(scene.world.showIndependentSection([3, 6, 1, 1, 6, 3], Direction.DOWN), [0, - 5, 0], 0)
        scene.idle(20)

        scene.addKeyframe()
        scene.showControls(20, [2, 2.5, 2], "down")
            .withItem("charcoal_pit:fire_starter")
        scene.idle(30)
        scene.world.modifyBlocks([3, 6, 1, 1, 6, 3], (state) => state.with("lit", "true"), false)
        scene.world.setBlocks([3, 7, 1, 1, 7, 3], "minecraft:fire", false)
        scene.world.moveSection(scene.world.showIndependentSectionImmediately([3, 7, 1, 1, 7, 3]), [0, - 5, 0], 0)
        scene.idle(20)
        scene.world.setBlocks([3, 7, 1, 1, 7, 3], "minecraft:air", false)

        scene.world.setBlocks([3, 8, 1, 1, 8, 3], dirt, false)
        scene.world.moveSection(scene.world.showIndependentSection([3, 8, 1, 1, 8, 3], Direction.DOWN), [0, - 6, 0], 0)
        scene.idle(20)

        scene.addKeyframe()
        let air2 = [
            [3, 1, 4], [2, 1, 4], [1, 1, 4],
            [0, 1, 3], [0, 1, 2], [0, 1, 1],
            [1, 1, 0], [2, 1, 0], [3, 1, 0],
            [4, 1, 1], [4, 1, 2], [4, 1, 3]
        ]
        air2.forEach((pos) => {
            scene.world.setBlocks(pos, "minecraft:air")
        })
        scene.world.setBlocks([3, 8, 1, 1, 8, 3], "minecraft:air")
        scene.world.setBlocks([3, 6, 1, 1, 6, 3], "charcoal_pit:wood_ash")
        scene.idle(20)
        scene.world.setBlocks([3, 6, 1, 1, 6, 3], "minecraft:air")

        let createItemEntity = [
            [3.5, 1.5, 3.5], [2.5, 1.5, 3.5], [1.5, 1.5, 3.5],
            [3.5, 1.5, 2.5], [2.5, 1.5, 2.5], [1.5, 1.5, 2.5],
            [3.5, 1.5, 1.5], [2.5, 1.5, 1.5], [1.5, 1.5, 1.5],
        ]
        createItemEntity.forEach((pos) => {
            scene.world.createItemEntity(pos, Direction.DOWN, "7x minecraft:charcoal")
            scene.world.createItemEntity(pos, Direction.DOWN, "2x charcoal_pit:ash")
        })
        scene.idle(20)
    })

event.create(["charcoal_pit:straw", "charcoal_pit:clay_pot"])
    .tag("the_winter_rescue:charcoal_pit")
    .scene("basic_usage", "", "kubejs:pottery_kiln", (scene) => {
        scene.showBasePlate()
        scene.scaleSceneView(1)
        scene.idle(20)

        scene.showControls(40, [1, 1, 1], "down")
            .withItem("minecraft:cobblestone")
            .whileSneaking()
        scene.idle(40)

        scene.world.showSection([2, 1, 0, 0, 1, 2], Direction.DOWN)
        scene.idle(40)

        scene.overlay.showText(60)
            .text("Surrounding blocks can be ANY block, not just dirt.")
            .pointAt([2, 1, 2])

        scene.world.moveSection(scene.world.showIndependentSection([0, 2, 0, 2, 2, 2], Direction.DOWN), [0, - 1, 0], 0)
        scene.addKeyframe()
        scene.idle(30)

        scene.world.setBlocks([1, 1, 1], "minecraft:air", false)
        scene.showControls(30, [1, 1, 1], "down")
            .rightClick()
            .withItem("charcoal_pit:straw")
        scene.world.moveSection(scene.world.showIndependentSection([2, 3, 1], Direction.DOWN), [- 1, - 2, 0], 0)
        scene.idle(40)

        scene.showControls(30, [1, 1, 1], "down")
            .rightClick()
            .withItem("minecraft:oak_log")

        scene.world.moveSection(scene.world.showIndependentSection([0, 3, 1], Direction.DOWN), [1, - 2, 0], 0)
        scene.idle(40)

        scene.showControls(40, [1, 1, 1], "down")
            .rightClick()
            .withItem("charcoal_pit:fire_starter")
        scene.world.setBlocks([1, 2, 1], "minecraft:fire", true)
        scene.world.showSection([1, 2, 1], Direction.UP)
        scene.addKeyframe()
        scene.idle(60)
    })