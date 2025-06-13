
@actTitle t="霜星迫降" st="完成剧情"
@showTitle t="第一章 第一节" st="霜星迫降"
@delay t=60

@displayTip id="scenario_tip"
@if exp="client.preloguePlayed"
是否跳过序章剧情？[r]
[link l=*intitle][&e跳过&r][endlink][r]
[link l=*beginprelogue][&e观看&r][endlink][r]
@wa
@endif

*beginprelogue
@er
@setCookie k="preloguePlayed" exp="1"
@sendCookie
*begintext
@mobEffect e="frostedheart:insulation" a=0 t=3600 hide=1
@stopbgm
头好疼，这是，哪里？我怎么会在这里？[l][er]
这里是...飞船船舱，我是...[delay t=20]我是...[l][er]

*tesst
@fullScreenDialog show=1
@startLayer
@FillRect n=bg clr=0xFFFFFF z=-999
@showLayer t=20 trans=fadein
@wr
@bgm n="frostedheart:the_fall_of_arcana"
@wtr

@startLayer
@FillRect n=bg clr=0xFFFFFF z=-999
@TextLayer n=tl text="&0我是…&r" resize=72 x=916 y=540 clr=0xFF000000
@showLayer t=20 trans=fadein

@wtr
@speed v=0.7
@startLayer
@freeLayer n=tl
@showLayer t=20 trans=fadein
@wtr

@startLayer
@FillRect n=bg clr=0xFF000000 z=-999
@ImageLayer n=layer1 s=twr_scenario:1.jpg
@showLayer t=20 trans=fadein
@wtr
地球打我记事起就是一片雪白。[l]
@startLayer
@freeLayer n=layer1
@showLayer t=20 trans=fadeout
@wtr
@er
@startLayer
@ImageLayer n=layer1 s=twr_scenario:2.jpg
@showLayer t=20 trans=fadeout
@wr

这颗曾经蔚蓝的行星上空环绕着哥伦比亚特[l]——我与其他百万人的住所。这是一座自给自足、规模睥睨其他空间站的太空城。[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:3.jpg
@FillRect n=overlay clr=0xFF000000 w=1024 x=1024
@showLayer t=60 trans=overdown
@wr
@er
成为人类的方舟曾是这里的使命，但好景不长。[l]
@startLayer
@freeLayer n=overlay
@showLayer t=60 trans=overup
@wr
如今它只是少数人的港湾，冷漠地俯瞰着这片冰结的地狱，任由其上数十亿人的命运如风中残烛。[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:4.jpg tw=1024 th=1024 uw=2048 uh=1170
@showLayer t=40 trans=left
@wr
@er
记忆也如残烛般熄灭。那场冻结一切的浩劫已在新世代的记忆中荡然无存。[l]于是法案通过得堪称自然：再不会向留在地上的人投送援助了。[l]
@startLayer
@freeLayer n=layer1
@showLayer t=20 trans=fadeout
@wtr
@er
@startLayer
@ImageLayer n=layer1 s=twr_scenario:5.jpg
@FillRect n=overlay1 clr=0xFF000000 w=578
@FillRect n=overlay2 clr=0xFF000000 w=734 x=1314
@showLayer t=40 trans=fadeout
@wr

这于我又是何等残酷。[wc]
@startLayer
@freeLayer n=overlay1
@showLayer t=40 trans=overdown
@wr
我的所有至亲消逝在那场严寒中，[wc]
@startLayer
@freeLayer n=overlay2
@showLayer t=40 trans=overup
@wr
与我同命相怜者也岂止百千。[l]
@startLayer
@freeLayer n=layer1
@FillRect n=bg clr=0xFF000000 z=-999
@showLayer t=40 trans=overright
@wr
@er
@wtr
@startLayer
@TextLayer n=tl text="何况" resize=36 y=558 x=772
@showLayer t=20 trans=fadein
@wtr
@delay t=20
@startLayer
@TextLayer n=tl text="何况希望还未消逝，" resize=36 y=558 x=772
@showLayer t=20 trans=fadein
@wtr
@delay t=20 
@startLayer
@TextLayer n=tl text="何况希望还未消逝，虽然微茫。" resize=36 y=558 x=772
@showLayer t=20 trans=fadein
@wtr
@delay t=40 

@startLayer
@freeLayer n=tl
@showLayer t=20 trans=fadein
@wtr
*midhalf
@startLayer
@ImageLayer n=layer1 s=twr_scenario:6.jpg
@showLayer t=80 trans=overup
@wr
二十年前，一群勇敢的人踏上了一条无归之路，一场指向地壳深处的冒险。领导他们的是我的母亲，我甚至来不及向她道别。[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:7.jpg
@FillRect n=overlay1 clr=0xFF000000 w=566
@FillRect n=overlay2 clr=0xFF000000 x=1306 w=736
@FillRect n=overlay3 clr=0xFF000000 x=566 w=746
@showLayer t=20 trans=fadeout
@wr
@er
他们想要解决危机、[wc]
@startLayer
@freeLayer n=overlay1
@showLayer t=20 trans=fadeout
@wr
找出一切的祸根。[wc]
@startLayer
@freeLayer n=overlay2
@showLayer t=20 trans=fadeout
@wr
他们化悲恸为雄心离开；[wc]
@startLayer
@freeLayer n=overlay3
@showLayer t=20 trans=fadeout
@wr
可在留下来的我们之间，日久天长，雄心发酵成了绝望。[l]

@startLayer
@ImageLayer n=layer1 s=twr_scenario:8.jpg
@FillRect n=overlay1 clr=0xFF000000       y=572 w=964  h=598
@FillRect n=overlay2 clr=0xFF000000 x=964 y=572 w=1084 h=598
@FillRect n=overlay3 clr=0xFF000000 x=964 w=1084 h=572
@showLayer t=40 trans=fadein
@wr
@er
「奇迹」不是像我这样的科学家该相信的东西，[wc]
@startLayer
@freeLayer n=overlay1
@showLayer t=20 trans=fadeout
@wr
但就是发生了，调制在区域气温的起伏消长上，[l]
@startLayer
@freeLayer n=overlay2
@showLayer t=20 trans=fadeout
@wr
那是一串以摩斯电码编码的ASCII字符。[wc]
@startLayer
@freeLayer n=overlay3
@showLayer t=20 trans=fadeout
@wr
不过是一个词而已，但世上只剩两个人知道。那是我的小名。[l]
*half
@startLayer
@ImageLayer n=layer1 s=twr_scenario:9.jpg
@showLayer t=60 trans=fadein
@wr
@er
是她在叫我。为此我已等了二十年。[l]
@wr
异常信号出现的地方是黄石，那里的火山活动如今依然活跃，虽然也已是一片冰封的险境。[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:10.jpg
@showLayer t=60 trans=right
@wr
@er
他们笑我把自己的幻想当成了奇迹。于是我只得找少数几位仍相信我、或仍相信希望的人一起，开始一趟孤独的旅程。[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:11.jpg
@showLayer t=40 trans=up
@wr
@er
我们登上了「哥伦比亚特太空船 · 寒霜之心号」。坐在这艘「寒霜之心号」中，我们的心潮却炽烈如炭火。[l]
@startLayer
@freeLayer n=layer1
@showLayer t=40 trans=fadeout
@wr
@er
@wtr

*intitle
@er
@fullScreenDialog show=1
@startLayer
@FillRect n=bg clr=0xFF000000 z=-999
@ImageLayer n=layer1 s=twr_scenario:twr_logo_title.png x=512 y=200 w=1024 h=256
@ImageLayer n=layer2 s=twr_scenario:teammoeg_logo.png x=702 y=700 w=512 h=128
@TextLayer n=tl text="出品" resize=32 y=748 x=1170
@showLayer t=40 trans=fadein
@wtr
@delay t=120
@startLayer
@freeLayer n=layer1
@freeLayer n=layer2
@freeLayer n=tl
@showLayer t=20 trans=fadeout
@wtr
@delay t=60
@fullScreenDialog show=0
@stopbgm
@speed v=1
*endcutsence
@delay t=20
[NoWait]：[EndNoWait]您终于醒来了。@p
[NoWait]我：[EndNoWait]是谁？@p
[NoWait]：[EndNoWait]我是您的嵌入式智能助手（IIA），检测到您刚刚遇到了坠机，是否要进行坠机检查表？@p
[NoWait]我：[EndNoWait]执行@p
*chk
[NoWait]IIA：[EndNoWait]推进器：[delay t=20][NoWait]&c无响应&r[EndNoWait]，导航：[delay t=20][NoWait]&c无响应&r[EndNoWait]
，反应堆：[delay t=20][NoWait]&c无响应&r[EndNoWait]，无线电：[delay t=20][NoWait]&c无响应&r[EndNoWait]，雷达：[delay t=20][NoWait]&e基本可用&r[EndNoWait].@p
[link l=*sel1]&e[点击再次检查][endlink][r]
[link l=*sel2]&c[点击弃船][endlink]
@displayTip id="scenario_tip_2"
@wa
*sel1
@p
[NoWait]IIA：[EndNoWait]正在重新执行坠机检查表...@p
@jump l=*chk
*sel2
@p
[NoWait]我：[EndNoWait]好吧，我们只能弃船了，把还能用的雷达拆下来吧，它应该能给我们提供一个天气预报。[l]好了，打开一下。[wc][setResearchAttribute k=has_forecast v=1]@p
[NoWait]我：[EndNoWait]天气预报接通了，似乎3天后会有一次暴风雪，接下来我应该干嘛呢？@p
[NoWait]IIA：[EndNoWait]建议：设法寻求救援。@p
[NoWait]我：[EndNoWait]没人能够救我们了，我们只能自救了。@p
*demotemperature
@hudDialog show=1
@startLayer
@DrawLine name=l1 sx="@1024+(uiScale)*16;" sy="@1152-(uiScale)*83;" dx=1224 dy=700 w="@uiScale*2;" clr=0xffeeee00
@DrawLine name=l2 sx=1224 sy=700 dx=1324 dy=700 w="@uiScale*2;" clr=0xffeeee00
@TextLayer n=tl text="&e体感温度" x=1330 y=684 resize=32 shadow=1
@DrawLine name=l3 sx=1094 sy="@20*uiScale;" dx=1224 dy=250 w="@uiScale*2;" clr=0xffeeee00
@DrawLine name=l4 sx=1224 sy=250 dx=1324 dy=250 w="@uiScale*2;" clr=0xffeeee00
@TextLayer n=t2 text="&e最近5天天气预报" x=1330 y=234 resize=32 shadow=1
@DrawLine name=l5 sx="@920-140*uiScale;" sy="@20*uiScale;" dx=412 dy=250 w="@uiScale*2;" clr=0xffeeee00
@DrawLine name=l6 sx=412 sy=250 dx=320 dy=250 w="@uiScale*2;" clr=0xffeeee00
@TextLayer n=t3 text="&e当前气温" x=172 y=234 resize=32 shadow=1 
@DrawLine name=l7 sx="@980-100*uiScale;" sy="@20*uiScale;" dx=412 dy=296 w="@uiScale*2;" clr=0xffeeee00
@DrawLine name=l8 sx=412 sy=296 dx=320 dy=296 w="@uiScale*2;" clr=0xffeeee00
@TextLayer n=t4 text="&e游戏天数" x=172 y=280 resize=32 shadow=1
@showLayer trans=overright t=40
@delay t=40
[link l=*cla]&e[点击以继续]&r[endlink]
@wa
*cla
@hudDialog show=0
@p
[NoWait]我：[EndNoWait]离开之前，我来整理一下现有的物资和装备吧。[l]
@r
（正在检查飞船。）
@delay t=40
@p

# skip tutorial if wanted
@if exp="client.preloguePlayed"
（是否跳过教程，直接领取初始物资？）[r]
[link l=resources][&e跳过，我是老手。&r][endlink][r]
[link l=heat_tutorial][&e继续，我是新手。（强烈建议观看教程！）&r][endlink][r]
@wa
@endif

@label name=heat_tutorial
@mobEffect e="frostedheart:insulation" a=0 t=6000 hide=1
@p
[NoWait]我：[EndNoWait]身上的宇航服，虽然破损严重，但是电池还在工作，足以维持五分钟的温暖。[l]
@r
（按下 [E] 打开背包，您已获得「极温抗性」，五分钟内不受任何温度影响。）
@r
[link l=water_tutorial]&e[已了解，点击继续整理物资]&r[endlink]@wa

@label name=water_tutorial
@giveItem i=frostedheart:leather_water_bag n="{Damage:0,Fluid:{FluidName:\"frostedheart:purified_water\",Amount:1000}}"
@p
[NoWait]我：[EndNoWait]水袋也找到了，里面的水很干净，但以后怎么办呢？[l]
@r
（「体感温度球」右侧的蓝色半球代表了您身体中的「水分」。）
@r
（空手潜行右击水源可以喝脏水，不过可能会中毒。）
@r
[link l=nutrition_tutorial]&e[已了解，点击继续整理物资]&r[endlink]@wa

@label name=nutrition_tutorial
@giveItem i=frostedheart:military_rations c=16
@p
[NoWait]我：[EndNoWait]空间站派发的「军用口粮」虽然不好吃，但是能维持我一段时间的健康。[l]
@r
（按 [E] 打开背包，将鼠标移至在食品上按 [N]，查看营养内容。）
@r
@displayTip id="wheel_menu"
（按下 [TAB] 打开轮盘，选择「健康信息」，查看营养水平。）
@r
（营养处于健康的范围内，就能避免疾病，获得正面增益。）
@r
[link l=clothing_tutorial]&e[完成后，点击继续整理物资]&r[endlink]@wa

@label name=clothing_tutorial
@giveItem i=frostedheart:rabbit_fur_gloves c=1
@p
[NoWait]我：[EndNoWait]这双「兔毛手套」，是我的挚友临行前送给我的礼物。[l]
@r
（按下 [TAB] 打开轮盘，选择「穿戴衣物」，将「兔毛手套」穿在双手。）
@r
[link l=clothing_properties]&e[完成后，点击继续]&r[endlink]@wa

@label name=clothing_properties
@p
（每个身体部位上，越靠外的衣物越能体现「流体隔离性」，在遇水和遇风时更具效果。）
@r
（反之，越靠内的衣物越能体现「保温系数」，您应该根据不同衣物属性合理搭配。）
@r
[link l=tools_tutorial]&e[已了解，点击继续整理物资]&r[endlink]@wa

@label name=tools_tutorial
@giveItem i=minecraft:iron_shovel
@giveItem i=frostedheart:magnesium_nugget c=3
@p
[NoWait]我：[EndNoWait]这只「消防锹」，在飞船角落也有多时了，没想到现在能派上用场。[l]
@r
[NoWait]我：[EndNoWait]这里还有几颗「镁粒」，生火的时候应该有用。[l]
@r
（「锹」能够发掘「雪掩的枝桠」和「雪掩的残片」。）
@r
（「镁粒」则能和燧石配合，双手生火。）
@r
[link l=ending]&e[进入雪原]&r[endlink]@wa

@label name=resources
@call s=prelogue_rewards

@label name=ending
@completequest q=4E2B2FEBD5031A2C

@er
@showTitle t="第一章 第一节" st="已完成"
@actTitle t="" st=""
您可以查看任务书度过后续剧情，也可以跟随下一幕的引导。@p
@displayTip id="sensible_temperature"
@s
# @call s="quest:744D35762CD9BD26?call"
@p
