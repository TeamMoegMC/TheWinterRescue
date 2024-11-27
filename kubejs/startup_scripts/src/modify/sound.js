BlockEvents.modification((event) => {
    // 齿轮音效喵
    let cogwheelSoundType = [
        "bronze",
        "cast_iron",
        "steel"
    ]
    cogwheelSoundType.forEach((materials) => {
        event.modify(`steampowered:${materials}_large_cogwheel`, (modify) => {
            modify.soundType = SoundType.LANTERN
        })
        event.modify(`steampowered:${materials}_cogwheel`, (modify) => {
            modify.soundType = SoundType.LANTERN
        })
    })
})