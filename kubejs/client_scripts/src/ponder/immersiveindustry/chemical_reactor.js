Ponder.registry((event) => {
    event.create(["immersiveengineering:slab_sheetmetal_aluminum"])
        .tag("immersiveindustry:ponder")
        .scene("chemical_reactor", "", "kubejs:chemical_reactor", (scene) => {
            scene.showBasePlate()
            scene.idle(20)

            //
            scene.addKeyframe()
            let block1 = [
                [3, 1, 3], [2, 1, 3], [1, 1, 3],
                [3, 1, 2], [2, 1, 2], [1, 1, 2],
                [3, 1, 1], [2, 1, 1], [1, 1, 1]
            ]
            block1.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            //
            scene.addKeyframe()
            let block2 = [
                [3, 2, 3], [2, 2, 3], [1, 2, 3],
                [3, 2, 2], [2, 2, 2], [1, 2, 2],
                [3, 2, 1], [2, 2, 1], [1, 2, 1]
            ]
            block2.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            //
            scene.addKeyframe()
            let block3 = [
                [3, 3, 3], [2, 3, 3], [1, 3, 3],
                [3, 3, 2], [2, 3, 2], [1, 3, 2],
                [3, 3, 1], [2, 3, 1], [1, 3, 1]
            ]
            block3.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            //
            scene.addKeyframe()
            let block4 = [
                [3, 4, 3], [2, 4, 3], [1, 4, 3],
                [3, 4, 2], [2, 4, 2], [1, 4, 2],
                [3, 4, 1], [2, 4, 1], [1, 4, 1]
            ]
            block4.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            // move
            scene.addKeyframe()
            scene.overlay.showOutline("blue", {}, [2, 2, 1], 40)
            scene.overlay.showText(40)
                .text("R-Click to assemble")
                .pointAt([3, 2, 1.5])
            scene.idle(40)
            scene.showControls(20, [3, 2, 1.5], "right")
                .withItem("immersiveengineering:hammer")
            scene.idle(20)
            scene.world.moveSection(scene.world.showIndependentSectionImmediately([3, 6, 1, 1, 10, 3]), [0, -5, 0], 0)
            scene.world.replaceBlocks([3, 1, 1, 1, 4, 3], "minecraft:air", true)
            scene.idle(20)
        })
})