# 1.20 热液矿床与大型洞厅

- 状态：配置与源码核对完成；几何数值为设计参数，非本次实测尺寸。
- 最后核对：2026-11-14；TWR `826284a7`，FH `4853812fa`。
- 范围：normal 预设的区域热液矿床，不推断其他矿床群系也使用同样区域分布。
- 锚点：`DepositRegions`、`DepositLayout`、`DepositDensity`、`DepositBiomeSource`、`export_deposits.py`。

## 放置概率与中心

输入由 [placement.json](../../Scripts/worldgen/deposits/placement.json) 和 [hydrothermal_deposits profile](../../Scripts/worldgen/deposits/profiles/hydrothermal_deposits.json) 提供，正式 [regions.json](../../kubejs/data/the_winter_rescue/worldgen/density_function/deposits/regions.json) 消费这些参数。

| 配置 | 当前值 | 单位/含义 |
|---|---|---|
| cell_size | 512 | 方块；水平网格单元边长 |
| jitter | 32 | 中心相对单元中心，每水平轴 -32..32 整数偏移 |
| chance | 0.35 | 每单元存在布局的机会，不是每区块 35% |
| min_y / max_y | -40 / -32 | 中心高度，含端点 |
| salt | 48151623 | 随机盐 |

[DepositRegions](../../../FrostedHeart/src/main/java/com/teammoeg/frostedheart/content/world/features/deposit/DepositRegions.java) 用种子噪声、单元坐标与盐决定存在性、中心、旋转和布局种子。理论中心数期望约为 `0.35 × (1000/512)^2 = 1.335` 个/百万平方格；不是实际覆盖面积，也不保证有限区域都达到平均值。

## 大洞厅如何形成

[DepositLayout](../../../FrostedHeart/src/main/java/com/teammoeg/frostedheart/content/world/features/deposit/DepositLayout.java) 直接定义主厅、三侧室、连通脊线通道、支路、水池及岩脊；局部几何随种子旋转、起伏和轻微扭曲。

| 部分 | 名义参数 |
|---|---|
| 主厅 | 水平半尺寸 34×18 格，约 68×36 格 |
| 主厅顶面 | 相对区域中心主要约 19..22 格，叠加渐变、起伏及夹限 |
| 三侧室 | 水平半尺寸 14×9、13×9、11×6 格 |
| 主通道 | 中心线局部 U=-87..87；半宽 3.6 或 4 格；名义净高约 9 格 |
| 群系包络 | 水平超椭圆半轴 104、60，中心相对高度 -22..+44；不是完整空腔尺寸 |

[DepositDensity](../../../FrostedHeart/src/main/java/com/teammoeg/frostedheart/content/world/features/deposit/DepositDensity.java) 在有限区域内混合专用空腔密度，区域外返回原密度；含水层分支向局部 -1 混合，降低整体淹水倾向，不表示绝对无水。水池另有布局。

因此大洞厅不依赖 wide_cave 随机成功；去掉 carver 不会删除专用密度链，但可能改变额外支洞和交叉空腔。成品受插值、基础地形、雕刻及装饰共同影响，不能把上述参数当作固定测量尺寸。

## 群系与装饰共享布局

[DepositBiomeSource](../../../FrostedHeart/src/main/java/com/teammoeg/frostedheart/content/world/features/deposit/DepositBiomeSource.java) 读取同一 sampler.depth 区域对象，在 containsBiome 内覆盖为预设的热液矿床群系；其余位置继续普通多噪声查询。群系和洞厅不是分别随机抽签。

profile 当前材料为 `minecraft:calcite`、`create:limestone`、`minecraft:deepslate`。导出器产生 `frostedheart:deposit` 的 main/surface feature：分别由 Forge biome modifier 挂入 local_modifications 与 vegetal_decoration 阶段，placed feature 的 placement 为空，由算法自身使用区域布局。carvers 列表不是矿床全部生成逻辑。

## 修改入口与验证

`python3 Scripts/worldgen/deposits/export_deposits.py --check` 检查产物，`--write` 才写入；默认不带参数也只报告差异。改 placement/profile 后需导出并确认 normal 原有气候行保持不变。

改出现机会用 chance，改间距用 cell_size，中心深度用 min_y/max_y；字段受 FH Codec 范围约束。主厅宽高在 FH DepositLayout 中，不是 TWR profile 的通用缩放参数。

验收用多个种子的新区块，记录中心分布、洞厅截面、液体、矿物产量和生成耗时；修改尺度或单元间距后额外检查边界。既有区块不会自动更新，本次未新增世界生成测试。
