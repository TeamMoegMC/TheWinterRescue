*start
@delay t=40
@actTitle t="冰星迫降" st="完成剧情"
@showTitle t="第一章 第一节" st="冰星迫降"
@delay t=60
头好疼，这是，哪里？我怎么会在这里？[l][er]
这里是...飞船船舱，我是...[delay t=20]我是...[l][er]
@bgm n="frostedheart:the_fall_of_arcana"
@fullScreenDialog show=1
@startLayer
@ImageLayer n=bg s=twr_scenario:white.png tw=256 th=256 uw=256 uh=256 z=-999
@TextLayer n=tl text="我是..." cv=1 ch=1 resize=4 clr=0
@showLayer t=20 trans=crossfade
@speed v=0.6
@delay t=20

@startLayer
@freeLayer n=tl
@showLayer t=20 trans=fadein

@delay t=20

@startLayer
@ImageLayer n=layer1 s=twr_scenario:1c.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=20 trans=fadein
@delay t=20
几乎从我拥有记忆的那一天起，地球就是白色的。[l][er]

@startLayer
@ImageLayer n=layer1 s=twr_scenario:2.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=20 trans=fadeout
@delay t=20
我与上百万人一同在哥伦比亚特生活。[delay t=20]一座围绕着曾经的蓝色星球的自给自足的太空城，它以其为所有空间站中最大的为荣。[l][er]

@startLayer
@ImageLayer n=layer1 s=twr_scenario:3.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=60 trans=left
它本应是一座方舟，不过它很快就变了。[delay t=20]它成为了少数人的天堂，悬浮在冰封的地狱之上，那里有数亿人慢慢消失。[l][er]

@startLayer
@ImageLayer n=layer1 s=twr_scenario:4.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=40 trans=left
记忆同样会消退。人们，新一代，开始忘记那场冻结一切的大灾难。法案已经通过——空间站不再向地球上的人们提供援助。[l][er]

@startLayer
@ImageLayer n=layer1 s=twr_scenario:5_1.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=40 trans=fadeout

不能这样，这对我来说太残酷了。[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:5_2.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=20 trans=fadeout
我所有的亲人都被这场寒潮夺走了。[l]
@startLayer

@ImageLayer n=layer1 s=twr_scenario:5_3.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=20 trans=fadeout
数以万计的人生活在同样的痛苦里。[l][er]
@startLayer
@freeLayer n=layer1
@ImageLayer n=bg s=twr_scenario:black.png tw=256 th=256 uw=256 uh=256 z=-999
@showLayer t=20 trans=fadein
@delay t=20

@startLayer

@TextLayer n=tl text="而且我知道，地球仍有一个渺茫的希望。" cv=1 ch=1 resize=2 clr=0xFFFFFF
@showLayer t=20 trans=fadein
@delay t=80
@startLayer
@freeLayer n=tl
@showLayer t=40 trans=crossfade
*midhalf
@startLayer
@ImageLayer n=layer1 s=twr_scenario:6.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=40 trans=nup
二十年前，人类中最勇敢的一群人踏上了一场没有归途的冒险——向着地壳深处进发。我的母亲领导他们走向雪原深处。我从未来得及和她说过再见。[l][er]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:7_1.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=20 trans=fadeout
「解决危机，[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:7_2.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=20 trans=fadeout
揭示其根源。」[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:7_3.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=20 trans=fadeout
他们带着悲伤的野心离开，[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:7.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=20 trans=fadeout
但只给我们留下了拉长的绝望。[l][er]

@startLayer
@ImageLayer n=layer1 s=twr_scenario:8_1.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=20 trans=fadeout
我不相信奇迹，因为我是一名科学家。[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:8_2.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=20 trans=fadeout
但奇迹发生了：一次偶然的观测，一块区域大气的异常温度波动，[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:8_3.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=20 trans=fadeout
重复的摩斯电码。[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:8.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=20 trans=fadeout
它只是两个简单的字，全世界现在只有两个人知道：我的乳名。[l][er]
*half
@startLayer
@ImageLayer n=layer1 s=twr_scenario:9_1.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=20 trans=fadein
我知道她在呼唤我… 我已经等了二十年。[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:9.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=40 trans=fadein
大气异常在黄石上方，那里现在是一片危险的冻土，火山活动也从未比以往更活跃，[l][er]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:10.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=40 trans=left
大家都认为这不是奇迹，而是我的幻想。我只得独自踏上旅程，与几个相信我，或者相信着希望的人。[l][er]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:11b.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=40 trans=up
我们登上「哥伦比亚特太空船 寒霜之心号」。但是我们的心不冷，我们的心从未如此暖和，从未如此燃烧过。[l][er]
@startLayer
@freeLayer n=layer1
@showLayer t=40 trans=fadeout
@delay t=40
@startLayer
@ImageLayer n=layer1 s=twr_scenario:title.png tw=2048 th=2048 uw=2048 uh=1170
@showLayer t=40 trans=fadein
@delay t=160
@startLayer
@freeLayer n=layer1
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
[NoWait]我：[EndNoWait]好吧，我们只能弃船了，把还能用的雷达拆下来吧。[l]已经拆下来了。@p
[NoWait]IIA：[EndNoWait]建议：设法寻求救援@p
[NoWait]我：[EndNoWait]没人能够救我们了，我们只能自救了。@p
查看任务书以继续后续剧情。@p
@s
@call s="quest:744D35762CD9BD26?call"
@p
