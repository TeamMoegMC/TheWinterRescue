PlayerEvents.loggedIn((event) => {
	let { player } = event

	global.debugUserName.forEach((debugUser) => {
		let playerInfo = Text.translate("text.kubejs.player").getString()
		let modPackVersion = Text.translate("text.kubejs.version").getString()
		player.paint({
			playerTip: {
				type: "text",
				x: 10,
				y: "$screenH - 30",
				alignX: "left",
				text: playerInfo,
				scale: 0.7
			},
			versionTip: {
				type: "text",
				x: 10,
				y: "$screenH - 20",
				alignX: "left",
				text: modPackVersion,
				scale: 0.7
			}
		})
		if (player.username === debugUser) {
			let devInfo = Text.translate("text.kubejs.dev").getString()
			player.paint({
				devTip: {
					type: "text",
					x: 10,
					y: "$screenH - 40",
					alignX: "left",
					text: devInfo,
					scale: 0.7
				}
			})
		}
	})
})