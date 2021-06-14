######################################################
# README for the rifts.json and monoliths.json files #
######################################################
NOTE -- EDITING THE rifts.json and monoliths.json FILES REQUIRES A MINECRAFT RESTART TO UPDATE!
Each of these JSON files contains the 'variants' property, which is a list of all the rifts and monoliths to spawn, respectively.

Each dimensional rift in rifts.json is an object with the following properties:
 - blockSelector: A BlockSetSelector describing the blocks this rift is made of.
       See the bottom of this README for documentation on BlockSetSelectors.
 - fluidColor: The color of ANY DIMENSIONAL PLASMA IN THIS DIMENSION. Keep in mind this hue is added to the base purple hue
   - red: Any hex string from 00 to FF.
   - green: Any hex string from 00 to FF.
   - blue: Any hex string from 00 to FF.
   - alpha: Any hex string from 00 to FF.
 - minY: The minimum y-coordinate a rift can spawn at.
 - maxY: The maximum y-coordinate a rift can spawn at.
 - playerTeleportedMinY: The minimum y-coordinate a player can be teleported to in the target dimension.
 - playerTeleportedMaxY: The maximum y-coordinate a player can be teleported to in the target dimension.
 - spawnDimension: The dimension this rift will spawn in. This MUST be distinct for each variant! In other words - only ONE variant per dimension!
 - targetDimension: The dimension this rift will teleport you to. This does not have to be distinct for each variant.
 - spawnChance: The chance of a Rift spawning.
 - spawnPlatformBlock: Sometimes, when teleporting the player, a small 3x3 platform is generated for the player to stand on.
       This is the block the platform will be made of. Should be a block that matches the target dimension well.

Each monolith in monoliths.json is an object with the following properties:
 - stairSelector: A BlockSetSelector describing the stairs on the perimeter of this monolith.
 - cornerSelector: A BlockSetSelector describing the blocks on the corners of this monolith.
 - insideSelector: A BlockSetSelector describing the blocks making up the inside of this monolith.
 - fenceSelector: A BlockSetSelector describing the fences used in this monolith.
 - powerBlock: The block required to power this monolith.
 - decorationBlock: The block in the four corners of the power grid at the center of this monolith.
 - beamStopBlocks: A list of blocks through which the beams of ANY RECLAIMERS PLACED IN THIS DIMENSION cannot pass.
 - unpoweredBeamColor: The color of the beam of ANY RECLAIMER IN THIS DIMENSION, when UNPOWERED.
   - red: Any hex string from 00 to FF.
   - green: Any hex string from 00 to FF.
   - blue: Any hex string from 00 to FF.
   - alpha: Any hex string from 00 to FF.
 - poweredBeamColor: The color of the beam of ANY RECLAIMER IN THIS DIMENSION, when POWERED.
   - red: Any hex string from 00 to FF.
   - green: Any hex string from 00 to FF.
   - blue: Any hex string from 00 to FF.
   - alpha: Any hex string from 00 to FF.
 - minY: The minimum y-coordinate this monolith can spawn at.
 - maxY: The maximum y-coordinate this monolith can spawn at.
 - playerTeleportedMinY: The minimum y-coordinate a player can be teleported to in the target dimension.
 - playerTeleportedMaxY: The maximum y-coordinate a player can be teleported to in the target dimension.
 - spawnDimension: The dimension this monolith will spawn in. This MUST be distinct for each variant! In other words - only ONE variant per dimension!
 - targetDimension: The dimension this monolith will teleport you to. This does not have to be distinct for each variant.
 - spawnChance: The chance of a Monolith spawning.

BlockSetSelector information:
A BlockSetSelector describes a set of blocks and the probability of each block being chosen.
Each BlockSetSelector has the following two fields:
   - entries: An object where each entry's key is a block, and each value is that block's probability of being chosen.
        The total sum of all probabilities SHOULD NOT exceed 1.0!
   - defaultBlock: The block used for any leftover probability ranges.
        For example, if the total sum of all the probabilities of the entries is 0.6, then
        there is a 0.4 chance of the defaultBlock being selected.

Here's an example BlockSetSelector:
"entries": {
  "minecraft:cobblestone": 0.25,
  "minecraft:air": 0.2,
  "minecraft:stonebrick[variant=stonebrick]": 0.1
},
"defaultBlock": "minecraft:planks[variant=oak]"

For each block, this selector has a 25% chance of returning cobblestone, 20% chance of choosing air,
10% chance of choosing stone bricks, and a 100 - (25 + 20 + 10) = 45% chance of choosing oak planks (since it's the default block).
