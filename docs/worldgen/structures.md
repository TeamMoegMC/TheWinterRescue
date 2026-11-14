# 1.20 建筑结构与遗迹生成

- 状态：结构 JSON、标签、模板池及本地 NBT 文件引用已核对；未进行自然生成或结构放置实测。
- 最后核对：2026-11-14；TWR `1.20` 配置基线 `826284a7`，FH 本地源码/资源 `4853812fa`。
- 范围：TWR 自定义自然结构、原版结构覆盖及其与模组资源的关系，不是城镇建筑房间判定或玩家多方块搭建说明。
- 锚点：`worldgen/structure`、`structure_set`、`template_pool`、`tags/worldgen/biome/has_structure`、`structures/*.nbt`。

## 生成链和职责

结构集 `structure_set` 决定候选分布；`structure` 决定群系、生成阶段、起始高度、起始池及拼图限制；`template_pool` 决定模板选择、处理器和投影；NBT 保存实际建筑方块。拥有 NBT 或池文件不等于该结构已挂到自然生成。

这些结构使用原版 `minecraft:jigsaw`，不应与挖空地形的 noise density、carver 或装饰 Feature 混淆。TWR 提供结构分布、池和群系覆盖，部分 NBT 则由 FH 提供；实际游戏还需加载兼容版本模组。

## 当前七组自定义结构

以下结构 ID 均以 `the_winter_rescue:` 为前缀。配置入口见 [structure](../../kubejs/data/the_winter_rescue/worldgen/structure) 与 [structure_set](../../kubejs/data/the_winter_rescue/worldgen/structure_set)。

| ID | spacing / separation（区块） | salt | 群系约束 | 起点高度偏移 | terrain_adaptation |
|---|---|---:|---|---:|---|
| beach/lighthouse | 32 / 8 | 771843370 | #the_winter_rescue:has_structure/beach | 0 | beard_thin |
| beach/whale | 64 / 32 | 830331279 | #the_winter_rescue:has_structure/whale | -1 | none |
| wood/wood | 32 / 8 | 450026132 | #the_winter_rescue:has_structure/wood | 0 | beard_box |
| stone/stone | 32 / 8 | 771843370 | #the_winter_rescue:has_structure/stone | 0 | beard_box |
| snow_rooms/snow_rooms | 32 / 8 | 830331279 | #the_winter_rescue:has_structure/snow_rooms | 0 | none |
| observatory | 10 / 8 | 92019 | the_winter_rescue:nature/slabback_massif | -1 | beard_thin |
| wireless_power_relay_station | 48 / 32 | 92020 | #the_winter_rescue:has_structure/snow_rooms | -4 | none |

所有结构集使用 `minecraft:random_spread`，单条结构权重为 1。spacing 是候选分布网格参数，不表示每隔相同方块距离必有建筑；separation 也不能直接当作任意两座成品边缘的最小间距。群系、高度、地形和拼图放置仍影响成功率，不能据 spacing 单独给出实测稀有度。

全部结构在 `surface_structures` 阶段，起始点投影至 `WORLD_SURFACE_WG`；所以 `start_height.absolute=-4` 在这里不是固定生成于世界 Y=-4，而是结合高度图定位。`size=1` 是拼图扩展深度参数，不是建筑长宽或模板数。观测站/中继站的 `max_distance_from_center=16`，其余为 80；这是拼图范围约束，不是 spacing 或洞穴半径。实际成品尺寸应读取 NBT 并实机放置检查，本文不凭这些限制值推断。

## 群系资格与覆盖

TWR 自定义 [has_structure 标签](../../kubejs/data/the_winter_rescue/tags/worldgen/biome/has_structure) 控制结构能出现在哪些群系：

- beach 列出 snowy_beach 与 the_winter_rescue:tidewater_glacier。
- whale 还覆盖 stony_shore、frozen_ocean、deep_frozen_ocean 和 ice_cap。
- wood 包含多类自定义森林/灌丛、tundra 和 snowy_taiga。
- snow_rooms 包含雪坡、冰刺、雪原及若干冰川/森林；中继站复用同一标签。
- stone 文件为 `replace=false` 且 values 为空：本仓库没有在此添加候选群系。其他资源包可继续合并，不能仅因结构和模板存在就断言自然生成正常。

原版 [has_structure 标签覆盖](../../kubejs/data/minecraft/tags/worldgen/biome/has_structure) 与 TWR 标签不是同一个资源。例如 village_plains、village_snowy 当前 `replace=true` 且 values 为空，而 village_taiga 为显式群系列表；这是本包对这些原版结构资格的覆盖，不能据此宣称所有村庄都禁用。最终集合仍需考虑其他更高优先级数据包。igloo 也有独立显式列表。

标签中的资源 ID 要按原文核对，不能将 `the_winter_rescue:tidewater_glacier` 和 `the_winter_rescue:nature/tidewater_glacier` 自动视作同一个群系。本文核对了引用字符串，不宣称所有标签在完整安装环境均已成功解析；启动日志和生效标签仍需运行验证。

## 模板池、材料和权重

[自定义模板池](../../kubejs/data/the_winter_rescue/worldgen/template_pool) 均使用 `fallback=minecraft:empty`；当前列出的元素使用 rigid 投影与 minecraft:empty 处理器。没有配置处理器不表示模板本身没有残破、冰雪或方块实体，实际内容在 NBT 中。

- 灯塔：两种废弃模板，各 weight=1。
- 雪屋：三种模板，各 weight=1。
- 木屋：九种模板，各 weight=1；石屋：一种模板。
- 鲸体/鲸骨：七种模板，依次权重 1、2、1、1、2、3、4，合计 14；严重破损鲸骨条目权重 4，不代表世界上 4/14 的区块生成鲸骨。
- 观测站、中继站各使用一份 `frostedheart:relic/...` NBT，来自 [FH relic 资源](../../../FrostedHeart/src/main/resources/data/frostedheart/structures/relic)。其他 TWR 池引用的 NBT 在 [整合包 structures](../../kubejs/data/the_winter_rescue/structures)。

池权重只控制该池选择，不改变结构集的候选频率。生成概率和模板变体比例必须分开调。

`destroyed_generator/start_pool` 和 `side_pool` 也有 FH 废塔、烧毁房屋/研究所/仓库模板引用，但本包未提供对应的同名自然 structure/structure_set。仅凭池存在不能认定废塔按固定间距自然刷新，需继续核对实际 FH 或剧情调用入口。

## 原版建筑覆盖与多方块蓝图

本包覆盖六份 [village 模板池](../../kubejs/data/minecraft/worldgen/template_pool/village)：雪原 houses/僵尸 houses 各 27 条，针叶林 houses 24、僵尸 houses 23、decor 11、僵尸 decor 8。这些修改房屋/装饰候选，村庄自然出现仍取决于对应结构、结构集和群系资格。

此外覆盖原版 igloo/top、igloo/bottom 及掠夺者前哨站帐篷 NBT，并有村庄箱子战利品数据；建筑外形、自然频率、箱子物品是独立层。

`structures/multiblocks` 下的能量塔、加热器及其他模组机器 NBT 是多方块相关资源，不能仅凭位于 structures 目录就将其统计为自然建筑。城镇仓库/住宅等房间扫描资格也不属于本节。

## 调参和验证

- 调频率：structure_set 的 spacing/separation/salt；调区域：structure 的 biomes 与标签；调变体：池元素 weight；调外形：NBT。改 salt 会改变候选布局，不只是改出现率。
- 检查结构集引用、start_pool、fallback、processors、模板 NBT 和群系 ID；跨模组引用应在正式安装环境校验。
- 在新生成区块中用多个种子验证自然频率，并分别检查山坡投影、埋深、基座、接缝、方块实体、战利品及模板拼接。手动放置成功不能替代自然分布验证。
- 本次静态检查确认 7 个 start_pool 均存在，自定义池直接引用的模板能在 TWR 或当前 FH main 资源中找到，且 spacing>separation；未验证 NBT 内容、完整第三方资源解析或游戏内生成。
