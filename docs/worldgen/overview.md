# 1.20 世界生成总览

- 状态：数据与源码已核对，未进行本次自然生成实测。
- 最后核对：2026-11-14；TWR `1.20` / `826284a7`，配套 FH 本地源码 `4853812fa`。
- 范围：正常主世界的群系、密度与区域矿床；不是全部维度或第三方结构的完整说明。
- 锚点：`normal.json`、`regional_overworld.json`、`DepositBiomeSource`、`DepositDensity`、`export_deposits.py`。

## 正式入口

[normal 世界预设](../../kubejs/data/minecraft/worldgen/world_preset/normal.json) 的主世界使用 `minecraft:noise`，`settings=the_winter_rescue:regional_overworld`，`biome_source.type=frostedheart:deposit_biomes`。其参数行继续描述普通多噪声群系，区域布局内再覆盖为 `the_winter_rescue:hydrothermal_deposits`。

[regional_overworld](../../kubejs/data/the_winter_rescue/worldgen/noise_settings/regional_overworld.json) 由普通 [overworld](../../kubejs/data/minecraft/worldgen/noise_settings/overworld.json) 包装生成；高度范围配置 `min_y=-64`、`height=384`。

| noise_router 字段 | 接入 | 作用 |
|---|---|---|
| `depth` | `the_winter_rescue:deposits/regions` | 透传原 depth，同时携带种子驱动的矿床区域 |
| `final_density` | `frostedheart:deposit_terrain`，`field=density` | 在区域附近混合专用空腔形状 |
| `fluid_level_floodedness` | 同类型，`field=floodedness` | 局部调整含水层 |

基础 [twr_final_density](../../kubejs/data/the_winter_rescue/worldgen/density_function/overworld/noise_router/twr_final_density.json) 为 `min(原版 final_density + biome_addition_density, biome_excavation_density)`；专用矿床在此之后接入。一般群系挖掘、原版噪声洞穴、carver 雕刻和 feature 装饰是不同层，不能互相替代解释。

## TWR 与 FH 的职责

TWR 的 `kubejs/data/` 提供预设、多噪声参数、密度函数组合、装饰候选和群系挂载；FH 注册并实现自定义密度、群系源、矿床布局和冰洞 Feature。

- [DepositBiomeSource](../../../FrostedHeart/src/main/java/com/teammoeg/frostedheart/content/world/features/deposit/DepositBiomeSource.java)：包裹原多噪声查询，布局外保留原群系。
- [DepositRegions](../../../FrostedHeart/src/main/java/com/teammoeg/frostedheart/content/world/features/deposit/DepositRegions.java)：生成区域中心与布局。
- [DepositDensity](../../../FrostedHeart/src/main/java/com/teammoeg/frostedheart/content/world/features/deposit/DepositDensity.java)：将布局应用到地形与含水层。
- [FH 世界生成说明](../../../FrostedHeart/docs/worldgen/README.md)：冰洞算法与既有验证入口。

跨仓库链接假设两库同级放置；文档标记的是本次核对源码，不保证任意已安装 FH JAR 与其一致。

## 维护和验证

[biome_source_tree.ipynb](../../Scripts/worldgen/biome_source_tree.ipynb) 是群系表维护入口之一；矿床 [export_deposits.py](../../Scripts/worldgen/deposits/export_deposits.py) 统一导出区域接入资源。修改生成产物时应同时核对 authored 来源，避免下次导出覆盖。

1. 确认实际世界预设、启用的数据包和模组版本。这里不宣称其他预设走同一生成链。
2. 检查 JSON、资源引用和矿床导出一致性；`python3 Scripts/worldgen/deposits/export_deposits.py --check` 不写配置，不一致时返回非零。
3. 多种子、固定区块范围比较三维群系覆盖、空腔比例、材料与装饰数量、生成时间和接缝。
4. 配置更新不会自动重塑旧区块；在新世界/未生成区块验证，并单独检查旧新区块边界。

本次没有新增自然世界采样、性能或矿量实测；算法设计尺寸不能当作实测覆盖率。
