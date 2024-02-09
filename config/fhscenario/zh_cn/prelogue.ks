
@actTitle t="霜星迫降" st="完成剧情"
@showTitle t="第一章 第一节" st="霜星迫降"
@delay t=60
@stopbgm
头好疼，这是，哪里？我怎么会在这里？[l][er]
这里是...飞船船舱，我是...[delay t=20]我是...[l][er]
@bgm n="frostedheart:the_fall_of_arcana"
@fullScreenDialog show=1
@startLayer
@FillRect n=bg clr=0xFFFFFFFF z=-999
@TextLayer n=tl text="&0我是…&r" resize=72 x=916 y=540
@showLayer t=20 trans=fadein
@speed v=0.6
@delay t=20

@startLayer
@freeLayer n=tl
@showLayer t=20 trans=fadein

@delay t=20

@startLayer
@ImageLayer n=layer1 s=twr_scenario:1.jpg
@showLayer t=20 trans=fadein
@delay t=20
地球打我记事起就是一片雪白。[l][er]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:2.jpg
@showLayer t=20 trans=fadeout
@delay t=20
这颗曾经蔚蓝的行星上空环绕着哥伦比亚特[l]——我与其他百万人的住所。这是一座自给自足、规模睥睨其他空间站的太空城。[l][er]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:3.jpg
@FillRect n=overlay clr=0xFF000000 w=1024 x=1024
@showLayer t=60 trans=overdown
成为人类的方舟曾是这里的使命，但好景不长。[l]
@startLayer
@freeLayer n=overlay
@showLayer t=60 trans=overup
如今它只是少数人的港湾，冷漠地俯瞰着这片冰结的地狱，任由其上数十亿人的命运如风中残烛。[l][er]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:4.jpg tw=1024 th=1024 uw=2048 uh=1170
@showLayer t=40 trans=left
记忆也如残烛般熄灭。那场冻结一切的浩劫已在新世代的记忆中荡然无存。[l]于是法案通过得堪称自然：再不会向留在地上的人投送援助了。[l][er]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:5.jpg tw=1024 th=1024 uw=2048 uh=1170
@FillRect n=overlay1 clr=0xFF000000 w=694
@FillRect n=overlay2 clr=0xFF000000 w=694 x=1354
@showLayer t=40 trans=fadeout
可这于我又是何等残酷。[wc]
@startLayer
@freeLayer n=overlay1
@showLayer t=40 trans=overdown
我的所有至亲消逝在那场严寒中，[wc]
@startLayer
@freeLayer n=overlay2
@showLayer t=40 trans=overup
与我同命相怜者也岂止百千。[l][er]
@startLayer
@freeLayer n=layer1
@FillRect n=bg clr=0xFF000000 z=-999
@showLayer t=40 trans=overright
@delay t=40
@startLayer
@TextLayer n=tl text="何况" resize=36 y=558 x=772
@showLayer t=20 trans=fadein
@delay t=40
@startLayer
@TextLayer n=tl text="何况希望还未消逝，" resize=36 y=558 x=772
@showLayer t=20 trans=fadein
@delay t=40 
@startLayer
@TextLayer n=tl text="何况希望还未消逝，虽然微茫。" resize=36 y=558 x=772
@showLayer t=20 trans=fadein
@delay t=60 

@startLayer
@freeLayer n=tl
@showLayer t=20 trans=fadein
@delay t=20 
*midhalf
@startLayer
@ImageLayer n=layer1 s=twr_scenario:6.jpg
@showLayer t=80 trans=overup
二十年前，一群勇敢的人踏上了一条无归之路，一场指向地壳深处的冒险。领导他们的是我的母亲，但我甚至来不及向她道别。[l][er]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:7a.jpg
@FillRect n=overlay1 clr=0xFF000000 w=846
@FillRect n=overlay2 clr=0xFF000000 x=1500 w=548
@showLayer t=20 trans=fadeout
他们想要解决危机、[wc]
@startLayer
@freeLayer n=overlay1
@showLayer t=20 trans=fadeout
找出一切的祸根。[wc]
@startLayer
@freeLayer n=overlay2
@showLayer t=20 trans=fadeout
他们化悲恸为雄心离开；[wc]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:7.jpg
@showLayer t=20 trans=fadeout
可在留下来的我们之间，日久天长，雄心发酵成了绝望。[l][er]

@startLayer
@ImageLayer n=layer1 s=twr_scenario:8.jpg
@FillRect n=overlay1 clr=0xFF000000       y=592 w=914  h=578
@FillRect n=overlay2 clr=0xFF000000 x=914 y=578 w=1134 h=578
@FillRect n=overlay3 clr=0xFF000000 x=988 w=1060 h=578
@showLayer t=60 trans=fadein
「奇迹」不是像我这样的科学家该相信的东西，[wc]
@startLayer
@freeLayer n=overlay1
@showLayer t=20 trans=fadeout
但就是发生了，调制在区域气温的起伏消长上，[l]
@startLayer
@freeLayer n=overlay2
@showLayer t=20 trans=fadeout
那是一串以摩斯电码编码的ASCII字符。[wc]
@startLayer
@freeLayer n=overlay3
@showLayer t=20 trans=fadeout
不过是一个词而已，但世上只剩两个人知道。那是我的小名。[l][er]
*half
@startLayer
@ImageLayer n=layer1 s=twr_scenario:9.jpg
@FillRect n=overlay1 clr=0xFF000000 w=1134
@showLayer t=20 trans=fadein
是她在叫我。为此我已等了二十年。[l]
@startLayer
@freeLayer n=overlay1
@showLayer t=80 trans=overleft
异常信号出现的地方是黄石，那里的火山活动如今依然活跃，虽然也已是一片冰封的荒原。[l][er]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:10.jpg
@showLayer t=40 trans=right
他们笑我把自己的幻想当成了奇迹。于是我只得找少数几位仍相信我、或仍相信希望的人一起，开始一趟孤独的旅程。[l][er]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:11.jpg
@showLayer t=40 trans=up
我们登上了「哥伦比亚特太空船 · 寒霜之心号」。但坐在这艘「寒霜之心号」中，我们的心潮炽烈如炭火。[l][er]
@startLayer
@freeLayer n=layer1
@showLayer t=40 trans=fadeout
@delay t=40
@startLayer
@FillRect n=bg clr=0xFF000000
@ImageLayer n=layer1 s=twr_scenario:twr_logo_title.png x=512 y=200 w=1024 h=256
@ImageLayer n=layer2 s=twr_scenario:teammoeg_logo.png x=702 y=700 w=512 h=128
@TextLayer n=tl text="出品" resize=32 y=748 x=1170
@showLayer t=40 trans=fadein
@delay t=160
@startLayer
@freeLayer n=layer1
@freeLayer n=layer2
@freeLayer n=tl
@showLayer t=20 trans=fadeout
@delay t=40
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
[link l=*sel1]&e再次检查[endlink][r]
[link l=*sel2]&c弃船[endlink]
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
[link l=*cla]&e点击以继续&r[endlink]
@wa
*cla
@hudDialog show=0
@er
[NoWait]我：[EndNoWait]取下飞船的物资吧！[l]
@call s=prelogue_rewards
@p
@showTitle t="第一章 第一节" st="已完成"
@actTitle t="" st=""
查看任务书以继续后续剧情。@p
@s
@call s="quest:744D35762CD9BD26?call"
@p
