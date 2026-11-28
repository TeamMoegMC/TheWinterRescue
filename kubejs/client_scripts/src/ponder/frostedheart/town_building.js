Ponder.registry((event) => {
    // Follow FH's BlockScanner, RoomPathfinder and TownSettlement.
    const roomCores = [
        "frostedheart:house",
        "frostedheart:warehouse",
        "frostedheart:mine_base",
        "frostedheart:hunting_base",
        "frostedheart:transport_station"
    ]
    const corePos = [2, 1, 4]

    const showRoom = (scene, core, width, top) => {
        scene.world.setBlocks(corePos, core, false)
        scene.configureBasePlate(0, 0, width)
        scene.showBasePlate()
        scene.scaleSceneView(0.75)
        scene.idle(10)
        for (let y = 1; y <= top; y++) {
            scene.world.showSection([0, y, 0, width - 1, y, width - 1], Direction.DOWN)
            scene.idle(10)
        }
        scene.idle(20)
    }

    // Preserve the collision boundary and door while exposing the interior.
    const exposeRoom = (scene, wall, roof) => {
        scene.world.replaceBlocks([1, 1, 1, wall, roof - 1, 1], "minecraft:glass", false)
        scene.world.replaceBlocks([1, 1, 2, 1, roof - 1, 2], "minecraft:glass", false)
        scene.world.replaceBlocks([1, 1, 4, 1, roof - 1, wall], "minecraft:glass", false)
        scene.world.replaceBlocks([2, roof, 2, wall - 1, roof, wall - 1], "minecraft:glass", false)
    }

    const placeBed = (scene, x, y, z) => {
        scene.world.setBlocks([x, y, z, x, y, z + 1], "minecraft:red_bed", false)
        scene.world.modifyBlock([x, y, z], state => state.with("facing", "south").with("part", "foot"), false)
        scene.world.modifyBlock([x, y, z + 1], state => state.with("facing", "south").with("part", "head"), false)
    }

    event.create(roomCores.concat(["frostedheart:mayors_seal"]))
        .tag("frostedheart:town_ponder")
        .scene("building_general", "Building for Your Town", "kubejs:town_building", (scene) => {
            showRoom(scene, "frostedheart:house", 10, 5)
            exposeRoom(scene, 8, 5)
            scene.text(80, "Build a room and place the matching town building block inside.", [2.5, 2, 4.5]).attachKeyFrame()
            scene.overlay.showOutline("green", {}, corePos, 80)
            scene.idle(90)

            scene.text(90, "Leave two clear blocks above it and a path through the room.", [2.5, 3, 4.5]).attachKeyFrame()
            scene.world.setBlocks([2, 3, 4], "minecraft:stone_bricks", false)
            scene.overlay.showOutline("red", {}, [2, 2, 4, 2, 3, 4], 40)
            scene.idle(40)
            scene.world.setBlocks([2, 3, 4], "minecraft:air", false)
            scene.overlay.showOutline("green", {}, [2, 2, 4, 2, 3, 4], 50)
            scene.idle(60)

            scene.text(90, "Fit a door into an outside wall to give the room an entrance.", [1, 2, 3.5]).attachKeyFrame()
            scene.overlay.showOutline("green", {}, [1, 1, 3, 1, 2, 3], 90)
            scene.idle(100)

            scene.text(100, "Use brick, glass, walls or fences to build the room in your own style.").attachKeyFrame()
            scene.world.setBlocks([3, 2, 1, 6, 3, 1], "minecraft:stone_brick_wall", false)
            for (let x = 3; x <= 6; x++) {
                for (let y = 2; y <= 3; y++) {
                    scene.world.modifyBlock([x, y, 1], state => state.with("west", "low").with("east", "low"), false)
                }
            }
            scene.idle(50)
            scene.world.setBlocks([3, 2, 1, 6, 3, 1], "minecraft:glass_pane", false)
            for (let x = 3; x <= 6; x++) {
                for (let y = 2; y <= 3; y++) {
                    scene.world.modifyBlock([x, y, 1], state => state.with("west", "true").with("east", "true"), false)
                }
            }
            scene.idle(60)

            scene.text(100, "Keep the floor clear and leave plenty of headroom.").attachKeyFrame()
            scene.overlay.showOutline("white", {}, [2, 0, 2, 7, 0, 7], 50)
            scene.idle(50)
            scene.overlay.showOutline("white", {}, [2, 1, 2, 7, 4, 7], 50)
            scene.idle(60)

            scene.text(90, "Connect floors with stairs or ladders. One building block serves all connected floors.").attachKeyFrame()
            scene.idle(100)
            scene.text(100, "Divide large buildings into separate rooms, each with its own building block.").attachKeyFrame()
            scene.idle(110)

            scene.text(90, "Right-click the building block to check its status and see what needs fixing.", [2.5, 1.5, 4.5]).attachKeyFrame()
            scene.showControls(60, [2.5, 2, 4.5], "right").rightClick()
            scene.idle(100)
            scene.text(90, "Use the Mayor's Seal to see your residents and arrange housing and jobs.").attachKeyFrame()
            scene.showControls(70, [4, 2, 4], "right").withItem("frostedheart:mayors_seal")
            scene.idle(100)
        })

    event.create("frostedheart:house")
        .tag("frostedheart:town_ponder")
        .scene("house_structure", "A Home for Your Residents", "kubejs:town_building", (scene) => {
            showRoom(scene, "frostedheart:house", 10, 5)
            exposeRoom(scene, 8, 5)
            scene.text(90, "Build a room with a door and space to move around.").attachKeyFrame()
            scene.overlay.showOutline("green", {}, [2, 1, 2, 7, 4, 7], 80)
            scene.idle(100)

            placeBed(scene, 4, 1, 3)
            placeBed(scene, 6, 1, 3)
            scene.text(90, "Add beds and plenty of space so more residents can move in.", [4.5, 1.5, 3.5]).attachKeyFrame()
            scene.overlay.showOutline("white", {}, [4, 1, 3, 6, 1, 4], 90)
            scene.idle(100)

            scene.text(90, "Comfortable temperatures, space and decorations help residents feel at home.").attachKeyFrame()
            scene.world.setBlocks([4, 1, 6], "minecraft:flower_pot", false)
            scene.world.setBlocks([6, 1, 6], "minecraft:lantern", false)
            scene.idle(100)
            scene.text(140, "Stock the town warehouse with food. Open Today's Meal in the house screen to see what residents ate.").attachKeyFrame()
            scene.idle(150)
            scene.text(140, "Use the Mayor's Seal to arrange housing and choose how many residents get full meals first.").attachKeyFrame()
            scene.showControls(70, [2.5, 2, 4.5], "right").withItem("frostedheart:mayors_seal")
            scene.idle(150)
        })

    event.create(["frostedheart:warehouse", "frostedheart:warehouse_interface", "frostedheart:warehouse_level_emitter"])
        .tag("frostedheart:town_ponder")
        .scene("warehouse_structure", "Warehouses and Item Transfers", "kubejs:town_warehouse", (scene) => {
            showRoom(scene, "frostedheart:warehouse", 8, 4)
            exposeRoom(scene, 6, 4)
            scene.text(90, "The town's warehouses share their supplies. Build more warehouses when you need extra storage.", [2.5, 1.5, 4.5]).attachKeyFrame()
            scene.idle(100)
            scene.text(90, "Build a room with clear paths and a door, just as you would for a house.").attachKeyFrame()
            scene.overlay.showOutline("green", {}, [1, 1, 3, 1, 2, 3], 80)
            scene.idle(100)
            scene.text(120, "Build a roomier warehouse to store more supplies. Right-click the warehouse block to check its capacity.").attachKeyFrame()
            scene.overlay.showOutline("white", {}, [2, 1, 2, 5, 3, 5], 80)
            scene.idle(130)

            scene.world.setBlocks([1, 1, 2], "frostedheart:warehouse_interface", false)
            scene.world.modifyBlock([1, 1, 2], state => state.with("facing", "west"), false)
            scene.text(90, "Connect your production line to a warehouse interface to move supplies in and out.", [1, 1.5, 2.5]).attachKeyFrame()
            scene.overlay.showOutline("green", {}, [1, 1, 2], 80)
            scene.idle(100)
            scene.text(100, "Choose what each interface slot should keep and how much. Extras go into storage, and shortages are refilled.", [1, 1.5, 2.5]).attachKeyFrame()
            scene.showControls(70, [1, 2, 2.5], "right").rightClick()
            scene.idle(110)

            scene.world.setBlocks([1, 1, 5], "frostedheart:warehouse_level_emitter", false)
            scene.world.modifyBlock([1, 1, 5], state => state.with("facing", "west"), false)
            scene.text(90, "The level emitter watches your stock and sends redstone signals to control production.", [1, 1.5, 5.5]).attachKeyFrame()
            scene.overlay.showOutline("green", {}, [1, 1, 5], 80)
            scene.idle(100)
            scene.text(100, "Warehouse interfaces need transport capacity. Assign workers to a transport station to keep supplies moving.").attachKeyFrame()
            scene.idle(110)
        })

    event.create("frostedheart:mine")
        .tag("frostedheart:town_ponder")
        .scene("mine_structure", "Finding Resources", "kubejs:town_mine", (scene) => {
            scene.configureBasePlate(0, 1, 4)
            scene.rotateCameraY(-30)
            scene.world.showSection([0, 0, 0, 3, 4, 5], Direction.EAST)
            scene.idle(30)
            scene.text(90, "Place a mining camp where you want to start digging.", [1.5, 1.5, 2.5]).attachKeyFrame()
            scene.overlay.showOutline("green", {}, [1, 1, 2], 80)
            scene.idle(100)
            scene.text(90, "Different biomes offer different resources. Right-click the camp to see what it can produce.").attachKeyFrame()
            scene.idle(100)
            scene.text(100, "Deposits shrink as you mine. Set up another camp farther away to look for fresh resources.").attachKeyFrame()
            scene.idle(110)
            scene.text(100, "A mining base supplies the workers. Open the camp to check its base and remaining deposits.", [1.5, 1.5, 2.5]).attachKeyFrame()
            scene.showControls(70, [1.5, 2, 2.5], "right").rightClick()
            scene.idle(110)
        })

    event.create("frostedheart:mine_base")
        .tag("frostedheart:town_ponder")
        .scene("mine_base_structure", "Putting Miners to Work", "kubejs:town_warehouse", (scene) => {
            showRoom(scene, "frostedheart:mine_base", 8, 4)
            exposeRoom(scene, 6, 4)
            scene.text(90, "Build a room for the mining base, with clear paths and a door.").attachKeyFrame()
            scene.overlay.showOutline("green", {}, corePos, 80)
            scene.idle(100)
            scene.text(90, "Make the room more spacious when you want to employ more miners.").attachKeyFrame()
            scene.overlay.showOutline("white", {}, [2, 0, 2, 5, 0, 5], 80)
            scene.idle(100)
            scene.text(90, "Use the Mayor's Seal to arrange jobs and staffing priorities.").attachKeyFrame()
            scene.showControls(70, [2.5, 2, 4.5], "right").withItem("frostedheart:mayors_seal")
            scene.idle(100)
            scene.text(100, "Your miners work each day. Experienced miners can bring in more resources.").attachKeyFrame()
            scene.idle(110)
            scene.text(140, "Leave room in storage so mined resources are not wasted. Open the base to check today's output.").attachKeyFrame()
            scene.showControls(70, [2.5, 2, 4.5], "right").rightClick()
            scene.idle(150)
        })

    event.create(["frostedheart:mine_base", "frostedheart:mine"])
        .tag("frostedheart:town_ponder")
        .scene("connect_mine_and_base", "Getting a Mining Camp Working", "kubejs:connect_mine_and_base", (scene) => {
            scene.scaleSceneView(0.5)
            scene.rotateCameraY(-30)
            scene.configureBasePlate(0, 4, 8)
            scene.world.replaceBlocks([3, 8, 8, 3, 10, 15], "minecraft:glass", false)
            scene.world.replaceBlocks([4, 8, 8, 4, 10, 8], "minecraft:glass", false)
            scene.world.replaceBlocks([6, 8, 8, 7, 10, 8], "minecraft:glass", false)
            scene.world.replaceBlocks([4, 11, 9, 6, 11, 14], "minecraft:glass", false)
            scene.world.showSection([0, 0, 0, 7, 11, 15], Direction.UP)
            scene.idle(30)
            scene.text(80, "The mining base sends workers to run nearby camps.", [4.5, 8.5, 10.5]).attachKeyFrame()
            scene.overlay.showOutline("green", {}, [4, 8, 10], 80)
            scene.idle(90)
            scene.text(80, "The camp marks where to mine. Different locations offer different resources.", [1.5, 1.5, 3.5]).attachKeyFrame()
            scene.overlay.showOutline("green", {}, [1, 1, 3], 80)
            scene.idle(90)
            scene.text(110, "Build the camp within your town's mining base range and assign workers to the base.").attachKeyFrame()
            scene.overlay.showOutline("green", {}, [1, 1, 3, 4, 8, 10], 100)
            scene.idle(120)
            scene.text(100, "Right-click the base to check how far its workers can reach.", [4.5, 8.5, 10.5]).attachKeyFrame()
            scene.showControls(70, [4.5, 9, 10.5], "right").rightClick()
            scene.idle(110)
            scene.text(140, "The next day, open the base's camp list to see which camps it is running.").attachKeyFrame()
            scene.idle(150)
            scene.text(140, "Keep some space free in the warehouse for the resources your miners bring back.").attachKeyFrame()
            scene.idle(150)
        })

    event.create(roomCores)
        .tag("frostedheart:town_ponder")
        .scene("2_story_building", "Adding Floors and Rooms", "kubejs:town_2_story_house", (scene) => {
            showRoom(scene, "frostedheart:house", 8, 7)
            scene.text(90, "Add another floor and connect it to make more room for your town.").attachKeyFrame()
            scene.overlay.showOutline("white", {}, [2, 0, 2, 5, 0, 5], 80)
            scene.idle(100)

            scene.text(90, "Build steps between floors and leave enough headroom to walk up.").attachKeyFrame()
            for (let step = 0; step < 4; step++) {
                scene.world.setBlocks([5, 1 + step, 2 + step], "minecraft:oak_planks", false)
                scene.idle(10)
            }
            scene.overlay.showOutline("green", {}, [2, 4, 2, 4, 4, 5], 70)
            scene.idle(60)

            scene.text(90, "A ladder on the wall can also provide access upstairs.").attachKeyFrame()
            for (let step = 0; step < 4; step++) {
                scene.world.setBlocks([5, 1 + step, 2 + step], "minecraft:air", false)
            }
            scene.world.setBlocks([5, 1, 2, 5, 4, 2], "minecraft:ladder", false)
            for (let y = 1; y <= 4; y++) {
                scene.world.modifyBlock([5, y, 2], state => state.with("facing", "west"), false)
            }
            scene.overlay.showOutline("green", {}, [5, 1, 2, 5, 4, 2], 80)
            scene.idle(100)

            scene.text(90, "Connected floors only need one building block between them.").attachKeyFrame()
            scene.overlay.showOutline("green", {}, [2, 1, 2, 5, 6, 5], 80)
            scene.idle(100)
            scene.world.setBlocks([4, 4, 4], "frostedheart:house", false)
            scene.text(100, "Two building blocks in the same room cause a conflict.", [4.5, 4.5, 4.5]).colored(PonderPalette.RED).attachKeyFrame()
            scene.overlay.showOutline("red", {}, [2, 1, 2, 5, 6, 5], 90)
            scene.idle(110)

            scene.world.setBlocks([5, 1, 2, 5, 4, 2], "minecraft:air", false)
            scene.world.setBlocks([2, 4, 2, 5, 4, 5], "minecraft:oak_planks", false)
            scene.world.setBlocks([4, 4, 4], "frostedheart:house", false)
            scene.world.setBlocks([1, 5, 3, 1, 6, 3], "minecraft:oak_door", false)
            scene.world.modifyBlock([1, 5, 3], state => state.with("facing", "east").with("half", "lower"), false)
            scene.world.modifyBlock([1, 6, 3], state => state.with("facing", "east").with("half", "upper"), false)
            for (let step = 0; step < 4; step++) {
                scene.world.setBlocks([0, 1 + step, 6 - step], "minecraft:oak_planks", false)
            }
            scene.text(100, "For separate buildings, divide the floors completely and give each its own entrance.").attachKeyFrame()
            scene.overlay.showOutline("green", {}, [2, 1, 2, 5, 3, 5], 90)
            scene.overlay.showOutline("green", {}, [2, 5, 2, 5, 6, 5], 90)
            scene.idle(110)
            scene.text(90, "Place a building block in each separate room, then right-click to check its status.").attachKeyFrame()
            scene.overlay.showOutline("green", {}, [1, 1, 3, 1, 2, 3], 80)
            scene.overlay.showOutline("green", {}, [1, 5, 3, 1, 6, 3], 80)
            scene.idle(100)
        })

    event.create("frostedheart:hunting_base")
        .tag("frostedheart:town_ponder")
        .scene("hunting_base_structure", "Putting Hunters to Work", "kubejs:town_warehouse", (scene) => {
            showRoom(scene, "frostedheart:hunting_base", 8, 4)
            exposeRoom(scene, 6, 4)
            scene.text(90, "Build a room for the hunting base, with a door and plenty of space to move around.").attachKeyFrame()
            scene.overlay.showOutline("green", {}, [2, 1, 2, 5, 3, 5], 80)
            scene.idle(100)
            scene.text(90, "Make room for more hunters, then use the Mayor's Seal to arrange their jobs.").attachKeyFrame()
            scene.showControls(70, [2.5, 2, 4.5], "right").withItem("frostedheart:mayors_seal")
            scene.idle(100)
            scene.text(90, "Keep the hunting base warm. Hunters cannot work when it gets too cold.").attachKeyFrame()
            scene.idle(100)
            scene.text(100, "Hunters bring food and other supplies to town. Experienced hunters help improve the catch.").attachKeyFrame()
            scene.idle(110)
            scene.text(140, "Keep room in the warehouse so the catch is not wasted. Open the hunting base to see its latest haul.").attachKeyFrame()
            scene.showControls(70, [2.5, 2, 4.5], "right").rightClick()
            scene.idle(150)
        })

    event.create("frostedheart:transport_station")
        .tag("frostedheart:town_ponder")
        .scene("transport_station_structure", "Keeping Supplies Moving", "kubejs:town_warehouse", (scene) => {
            showRoom(scene, "frostedheart:transport_station", 8, 4)
            exposeRoom(scene, 6, 4)
            scene.text(90, "Build a spacious room for the transport station so it can employ more workers.").attachKeyFrame()
            scene.overlay.showOutline("green", {}, [2, 1, 2, 5, 3, 5], 80)
            scene.idle(100)
            scene.text(90, "Use the Mayor's Seal to assign workers and choose which jobs take priority.").attachKeyFrame()
            scene.showControls(70, [2.5, 2, 4.5], "right").withItem("frostedheart:mayors_seal")
            scene.idle(100)
            scene.text(100, "Your workers provide transport capacity each day. Experienced workers can move more supplies.").attachKeyFrame()
            scene.idle(110)
            scene.text(100, "Faster transfers and longer journeys need more transport capacity.").attachKeyFrame()
            scene.idle(110)
            scene.text(100, "When transport capacity runs low, add workers or lower your devices' transfer speeds.").attachKeyFrame()
            scene.showControls(70, [2.5, 2, 4.5], "right").withItem("frostedheart:mayors_seal")
            scene.idle(110)
        })
})
