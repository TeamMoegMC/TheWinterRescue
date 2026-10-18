# Known Issues

This file documents known issues and temporary workarounds in The Winter Rescue modpack.

## Multiplayer Server Crash - ClassCastException in Temperature Calculation

**Status:** Temporarily Fixed (Workaround Applied)  
**Severity:** Critical (Server Crash)  
**Affects:** Multiplayer servers only  
**Original Report:** See crash report at https://mclo.gs/E7Crw1B

### Problem Description

In multiplayer server environments, when multiple players interact with temperature-calculating blocks (specifically `charcoal_pit:log_pile`) simultaneously, the server crashes with a ClassCastException:

```
java.lang.ClassCastException: class net.minecraft.world.phys.Vec3 cannot be cast to class net.minecraft.core.BlockPos
```

The root cause is a thread safety issue in the FrostedHeart mod's `SurroundingTemperatureSimulator.java` where a generator object appears to be shared globally, causing race conditions when multiple threads access it concurrently.

### Reproduction Steps

1. Set up a multiplayer server with multiple players
2. Have multiple players build charcoal kilns or campfires near each other
3. Have at least 2 players interact with the blocks simultaneously
4. Server crashes with ClassCastException

### Temporary Workaround

The `frostedheart:block_temp` recipe for `charcoal_pit:log_pile` has been temporarily disabled in:
- File: `kubejs/server_scripts/src/recipes_types/frostedheart/block_temp.js`

This prevents the crash but has the following gameplay impact:
- The log pile block will no longer contribute to environmental temperature calculations
- The block will still function normally for its primary purpose (charcoal production)
- Players may need to use alternative heat sources for temperature regulation

### Permanent Fix

This workaround will remain in place until:
1. The FrostedHeart mod is updated with a proper thread-safe implementation
2. Or an alternative solution is found that doesn't require disabling the feature

### Technical Details

The issue occurs because:
1. Temperature calculation runs every game tick
2. The simulator uses a shared mutable object (likely a Random or position generator)
3. Multiple threads access this object without proper synchronization
4. This causes one thread's Vec3 object to be incorrectly cast to BlockPos by another thread

### References

- Crash Report: https://mclo.gs/E7Crw1B
- FrostedHeart Repository: https://github.com/TeamMoegMC/FrostedHeart
