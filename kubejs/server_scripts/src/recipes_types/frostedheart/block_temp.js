ServerEvents.recipes((event) => {

    // TEMPORARY FIX: Disabled due to ClassCastException in multiplayer servers
    // Crash Report: https://mclo.gs/E7Crw1B
    // See KNOWN_ISSUES.md for details
    // The frostedheart mod's SurroundingTemperatureSimulator.java has a thread safety issue
    // where Vec3 objects get cast to BlockPos, causing server crashes in multiplayer
    // when multiple players interact with temperature-calculating blocks simultaneously.
    // This recipe will be re-enabled once the upstream mod is fixed.
    /*
    event.custom({
        type: "frostedheart:block_temp",
        block: "charcoal_pit:log_pile",
        must_lit: true,
        temperature: 300.0
    })
    */

})