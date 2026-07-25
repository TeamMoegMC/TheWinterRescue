PlayerEvents.loggedIn((event) => {
    let {player} = event

    // If the player has triggered the stage, return directly
    if (player.stages.has("first_login")) {
        return
    }

    let modGroup = [
        "ftbultimine",
        "oreexcavation",
        "veinmining"
    ]

    let detectedMods = []

    modGroup.forEach((modId) => {
        if (Platform.isLoaded(modId)) {
            detectedMods.push(modId)
        }
    })

    // If a mod is detected, send a message and set the player's stage
    if (detectedMods.length > 0) {
        let command = `tip displayCustom ${player.getUsername()} json "{\\"id\\":\\"vein_miner\\",\\"contents\\":[\\"?!\\"],\\"image\\":\\"twr_tips:textures/enjoyer.png\\",\\"display\\":{\\"fontColor\\":-5263441,\\"alwaysVisible\\":true}}"`
        Utils.server.runCommandSilent(command)
        // let getMod = detectedMods.join(", ")
        // let messageKey = detectedMods.length > 1 ? "message.kubejs.checkMultipleCheating" : "message.kubejs.checkCheating"
        // player.tell(Component.translate(messageKey, [getMod]))

        // Add a stage to the player to avoid triggering again
        player.stages.add("first_login")
    }
})