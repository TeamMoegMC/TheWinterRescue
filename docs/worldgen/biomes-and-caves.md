# 1.20 群系分布与洞穴

- 状态：配置及相关源码已核对，实际覆盖比例未实测。
- 最后核对：2026-11-14；TWR `826284a7`，FH `4853812fa`。
- 范围：真菌/冰霜等地下群系、挖掘形状与装饰。
- 锚点：`normal.json`、`biome_excavation_density.json`、`gf_caves/rift.json`、`CaveCarverConfiguration`。

## 群系分布不是固定百分比

[normal.json](../../kubejs/data/minecraft/worldgen/world_preset/normal.json) 的 `biome_source.biomes` 按 temperature、humidity、continentalness、erosion、weirdness、depth、offset 参与最近参数匹配。参数长度不能换算为世界覆盖率；temperature 不是摄氏度，depth 不是 Y 坐标。

| 群系 | 参数示例，不能替代完整表 |
|---|---|
| `the_winter_rescue:mycelium_caves` 真菌洞穴 | 部分行为 depth 0.2..0.5、continentalness 0.3..1、temperature 0.2..0.75；另有深层和特殊大陆度分支 |
| `the_winter_rescue:ice_caves` 冰霜洞穴 | 部分行为 depth 0.2..0.5、continentalness -0.19..0.3、temperature -1..0.2、erosion -1..0.05；另有湿度/怪异度及深层分支 |
| `minecraft:lush_caves` 繁茂洞穴 | 独立的群系参数和装饰定义，不是真菌洞穴的别名 |

调稀有度必须核对同一群系的全部参数行及竞争群系。群系存在不保证当前位置为空腔；热液矿床还会由区域源覆盖，见 [矿床](hydrothermal-deposits.md)。

## 空腔尺度

[biome_excavation_density](../../kubejs/data/the_winter_rescue/worldgen/density_function/overworld/biome_excavation_density.json) 根据高度与 `depth_agnostic_biome_selector` 选择特殊挖掘，组合 [glacial_fungus_caves_spline](../../kubejs/data/the_winter_rescue/worldgen/density_function/overworld/glacial_fungus_caves_spline.json) 的气候遮罩及 [gf_caves/rift](../../kubejs/data/the_winter_rescue/worldgen/density_function/overworld/gf_caves/rift.json)。Y>=128 不启用这一路挖掘；rift 的有效形状分支在 `38 <= Y < 120`，不是所有地下洞穴都只在此高度生成。

rift 读取 `rift_mask` 噪声，`xz_scale=0.05`、`y_scale=0`；阈值、倍率及高度渐变共同决定形状。噪声尺度控制特征空间尺度，阈值影响挖掘带宽，不能认定某个参数翻倍就使洞厅体积翻倍。扩张群系范围、扩大空腔、增加装饰是三种独立改动。

## wide_cave

[wide_cave.json](../../kubejs/data/the_winter_rescue/worldgen/configured_carver/wide_cave.json) 使用原版 `minecraft:cave`。本次遍历 51 个群系定义，引用 `the_winter_rescue:wide_cave` 的只有 [热液矿床](../../kubejs/data/the_winter_rescue/worldgen/biome/hydrothermal_deposits.json) 与 [岩浆矿床](../../kubejs/data/the_winter_rescue/worldgen/biome/magmatic_deposits.json)。[真菌洞穴](../../kubejs/data/the_winter_rescue/worldgen/biome/mycelium_caves.json) 和 [冰霜洞穴](../../kubejs/data/the_winter_rescue/worldgen/biome/ice_caves.json) 只引用 minecraft:cave、minecraft:canyon。

| 字段 | 当前值 | 解释 |
|---|---|---|
| probability | 0.15 | 雕刻启动机会，不是洞穴面积占比 |
| y | -64..25 均匀 | 起点高度，非整个洞道边界 |
| yScale | 0.5..1.0 | 纵向形状参数 |
| horizontal_radius_multiplier / vertical_radius_multiplier | 均为 0.9..1.0 | 不能称为显著扩大洞厅 |
| floor_level | -1..0 | 洞底截断 |
| lava_level | -54 | 熔岩层锚点 |
| xScale | 文件写 1.5..4.0 | 原版 1.20.1 CaveCarverConfiguration 及其基础 Codec 不读取，不产生横向放大效果 |

Codec 结论来自本地 1.20.1 字节码字段核对，不是只凭 JSON 名称推断。追加 carver 可能增加支洞与交叉空腔，但不负责保证热液主厅。

## 洞内装饰

群系 `features` 按生成阶段执行；placed feature 决定候选 count、rarity、height_range、biome 过滤，configured feature 与 FH 实现决定尺寸及成功条件。`creature_spawn_probability` 是生物生成参数，不是洞穴概率。

冰洞当前示例：ice blob 12 次候选、大型冰体 10 次、冰锥 1 次再经 chance=2 筛选，小晶体 104..157 次。候选次数不是成功数量，不会由此生成相同数量的大洞厅。覆冰/装饰整区块扫描与候选型放置也有不同边界。完整规则及历史验证范围见 FH [冰霜洞穴当前实现](../../../FrostedHeart/docs/worldgen/ice-caves.md)。

群系 JSON 原版温度参数与 FH `biome_temp` 摄氏温度配方是不同系统；不能通过更改一个字段同时控制群系稀有度和玩家保温。

## 验证

本次静态核对参数、carver 引用和链接；未启动游戏。调参后应分开统计三维群系覆盖、可行走空腔、装饰成功数、矿物量及区块生成时间，包含多种子、浅/深层和跨区块边界；条件构造的测试群系不能代表自然概率。
