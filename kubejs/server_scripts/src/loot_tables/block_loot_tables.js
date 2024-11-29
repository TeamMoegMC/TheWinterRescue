// ServerEvents.blockLootTables((event) => {
//     let ore_blocks = [
//         "frostedheart:pyrite_ore",
//         "frostedheart:nickel_ore",
//         "frostedheart:tin_ore",
//         "frostedheart:bauxite_block",
//         "frostedheart:kaolin_block",
//         "frostedheart:magnesite_ore",
//         "frostedheart:lead_ore",
//         "frostedheart:silver_ore",
//         "frostedheart:halite_ore",
//         "frostedheart:sylvite_ore"
//     ];
//     let ores = [
//         "frostedheart:raw_pyrite",
//         "frostedheart:raw_nickel",
//         "frostedheart:raw_tin",
//         "frostedheart:bauxite",
//         "frostedheart:kaolin",
//         "frostedheart:raw_magnesite",
//         "frostedheart:raw_lead",
//         "frostedheart:raw_silver",
//         "frostedheart:raw_halite",
//         "frostedheart:raw_sylvite"
//     ];
// // TODO: check if we still need this or move to FH
//     let i
//     let ores_i
//     let ore_blocks_i
//     for (i = 0; i < ores.length; i++) {
//         ores_i = ores[i]
//         ore_blocks_i = ore_blocks[i]

//         event.addSimpleBlock(ore_blocks_i, ores_i)
//         // event.addBlock(ore_blocks_i, table => {
//         //     table.addPool(pool => {
//         //         pool.rolls = 1
//         //         pool.survivesExplosion()
//         //         pool.addItem(ores_i)
//         //     })
//         // })
//     }
// //若要修改矿石掉落物，将矿石本身放在ore_blicks里，掉落物放在ores里。貌似必须是双引号才行(
// //!!!不要再添加铜矿沙砾了，那个是在别的地方做了合成表!!!

//     event.addBlock("minecraft:grass_block", table => {
//         table.addPool((pool) => {
//             pool.survivesExplosion()
//             pool.addItem("minecraft:dirt")
//         })
//         table.addPool((pool) => {
//             pool.survivesExplosion()
//             pool.randomChance(0.15)
//             pool.addItem("frostedheart:frozen_seeds", 4)
//             pool.addItem("kubejs:frozen_white_turnip", 1)
//             pool.addItem("minecraft:flint", 4)
//         })
//     })

//     event.modifyBlock("#minecraft:leaves", table => {
//         table.addPool((pool) => {
//             pool.addCondition({
//                 "condition": "minecraft:alternative",
//                 "terms": [
//                     {
//                         "condition": "minecraft:match_tool",
//                         "predicate": {
//                             "tag": "minecraft:swords"
//                         }
//                     },
//                     {
//                         "condition": "minecraft:match_tool",
//                         "predicate": {
//                             "enchantments": [
//                                 {
//                                     "enchantment": "minecraft:silk_touch",
//                                     "levels": {
//                                         "min": 1
//                                     }
//                                 }
//                             ]
//                         }
//                     }
//                 ]
//             })
//             pool.addItem("minecraft:vine", 1)
//         })
//     })
// })