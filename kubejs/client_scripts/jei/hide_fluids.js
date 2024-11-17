JEIEvents.hideFluids((event) => {
	fluidsToHide.forEach((disabledFluid) => {
		if (!Fluid.of(disabledFluid).isEmpty()) {
			event.hide(disabledFluid);
		}
	});
});