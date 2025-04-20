
@actTitle t="Crashed in the frozen planet" st="Finish dialog"
@showTitle t="Chapter 1 Act 1" st="Crashed in the frozen planet"
@delay t=60

@if exp="client.preloguePlayed"
Do you want to skip the prelogue?[r]
[link l=*intitle][&eSkip&r][endlink][r]
[link l=*beginprelogue][&eWatch&r][endlink]
@wa
@endif

*beginprelogue
@er
@setCookie k="preloguePlayed" exp="1"
@sendCookie
@mobEffect e="frostedheart:insulation" a=0 t=3600 hide=1
*begintext
@stopbgm
Ouch, Ouch, where am I? What am I doing? [l][er]
This is ... shuttle cabin. I am ...[delay t=20]I am ...[l][er]

*tesst
@fullScreenDialog show=1
@startLayer
@FillRect n=bg clr=0xFFFFFF z=-999
@showLayer t=20 trans=fadein
@wr
@bgm n="frostedheart:the_fall_of_arcana"
@wtr
@startLayer
@FillRect n=bg clr=0xFFFFFFFF z=-999
@TextLayer n=tl text="&0I am...&r" resize=72 x=916 y=540
@showLayer t=20 trans=fadein

@wtr
@speed v=1.7
@startLayer
@freeLayer n=tl
@showLayer t=20 trans=fadein
@wtr

@startLayer
@FillRect n=bg clr=0xFF000000 z=-999
@ImageLayer n=layer1 s=twr_scenario:1.jpg
@showLayer t=20 trans=fadein
@wtr
Since I could remember, the Earth is white. [l]
@startLayer
@freeLayer n=layer1
@showLayer t=20 trans=fadeout
@wtr
@er
@startLayer
@ImageLayer n=layer1 s=twr_scenario:2.jpg
@showLayer t=20 trans=fadeout
@wr

I live in Columbiat along with a million of others. [l]It prides as the largest among all. A self-sustaining space settlement orbiting the once-blue planet.[l][delay t=40]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:3.jpg
@FillRect n=overlay clr=0xFF000000 w=1024 x=1024
@showLayer t=60 trans=overdown
@wr
@er
It was meant to be an ark, but it never lasts.[l]
@startLayer
@freeLayer n=overlay
@showLayer t=60 trans=overup
@wr
It became a paradise for the few, floating above the frozen hell underneath, where billions were left to fade.[l][delay t=40]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:4.jpg tw=1024 th=1024 uw=2048 uh=1170
@showLayer t=40 trans=left
@wr
@er
Memory fades too. People, the New Generation, started to forget the Apocalypse that froze everything. The bill has passed[l] - no support is going to Earth people again.[l]
@startLayer
@freeLayer n=layer1
@showLayer t=20 trans=fadeout
@wtr
@er
@startLayer
@ImageLayer n=layer1 s=twr_scenario:5.jpg tw=1024 th=1024 uw=2048 uh=1170
@FillRect n=overlay1 clr=0xFF000000 w=694
@FillRect n=overlay2 clr=0xFF000000 w=694 x=1354
@showLayer t=40 trans=fadeout
@wr

No, it’s too cruel for me.[l]
@startLayer
@freeLayer n=overlay1
@showLayer t=40 trans=overdown
@wr
All my loved ones were taken by the frost.[l]
@startLayer
@freeLayer n=overlay2
@showLayer t=40 trans=overup
@wr
Thousands of others lived with same sorrow.[l]
@startLayer
@freeLayer n=layer1
@FillRect n=bg clr=0xFF000000 z=-999
@showLayer t=40 trans=overright
@wr
@er
@wtr
@startLayer
@TextLayer n=tl text="And I know," resize=18 y=567 x=688 clr=0xFFFFFFFF
@showLayer t=20 trans=fadein
@wtr
@delay t=20
@startLayer
@TextLayer n=tl text="And I know, there is still a hope, " resize=18 y=567 x=688 clr=0xFFFFFFFF
@showLayer t=20 trans=fadein
@wtr
@delay t=20 
@startLayer
@TextLayer n=tl text="And I know, there is still a hope, a faint hope." resize=18 y=567 x=688 clr=0xFFFFFFFF
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
Twenty years ago, the bravest of humanity led an expedition of no return into the crust of Earth. Their leader was my mother, whom I never said goodbye too.[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:7a.jpg
@FillRect n=overlay1 clr=0xFF000000 w=846
@FillRect n=overlay2 clr=0xFF000000 x=1500 w=548
@showLayer t=20 trans=fadeout
@wr
@er
“Solve the crisis.[wc]
@startLayer
@freeLayer n=overlay1
@showLayer t=20 trans=fadeout
@wr
Unveil its roots.”[wc]
@startLayer
@freeLayer n=overlay2
@showLayer t=20 trans=fadeout
@wr
They left with a sorrow ambition,[wc]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:7.jpg
@showLayer t=20 trans=fadeout
@wr
but only left us with prolonged despair.[l]

@startLayer
@ImageLayer n=layer1 s=twr_scenario:8.jpg
@FillRect n=overlay1 clr=0xFF000000       y=592 w=914  h=578
@FillRect n=overlay2 clr=0xFF000000 x=914 y=578 w=1134 h=578
@FillRect n=overlay3 clr=0xFF000000 x=988 w=1060 h=578
@showLayer t=40 trans=fadein
@wr
@er
I don’t trust miracles, as I grow up as a scientist.[wc]
@startLayer
@freeLayer n=overlay1
@showLayer t=20 trans=fadeout
@wr
But it happened: encoded in regional atmospheric temperature fluctuation, [l]
@startLayer
@freeLayer n=overlay2
@showLayer t=20 trans=fadeout
@wr
morse code, ASCII characters.[wc]
@startLayer
@freeLayer n=overlay3
@showLayer t=20 trans=fadeout
@wr
It was a simple word — my nickname — that only two people in the world knows.[l]
*half
@startLayer
@ImageLayer n=layer1 s=twr_scenario:9.jpg
@FillRect n=overlay1 clr=0xFF000000 w=1134
@showLayer t=20 trans=fadein
@wr
@er
I know it is her calling me… I’ve been waiting for twenty years.[l]
@startLayer
@freeLayer n=overlay1
@showLayer t=80 trans=overleft
@wr
The anomaly was above the Yellowstone, now a dangerous frost land above an ever-active volcano.[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:10.jpg
@showLayer t=40 trans=right
@wr
@er
A miracle that was my fantasy — that was their narrative. Thus I embark on a lone journey, with a few who believed in me, or hope.[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:11.jpg
@showLayer t=40 trans=up
@wr
@er
“CS Frosted Heart” — the shuttle we onboard. But our hearts were never frozen — our hearts were burning as coal.[l]
@startLayer
@freeLayer n=layer1
@showLayer t=40 trans=fadeout
@wr
@er
@wtr
*intitle
@fullScreenDialog show=1
@delay t=40
@startLayer
@FillRect n=bg clr=0xFF000000 z=-999
@ImageLayer n=layer1 s=twr_scenario:twr_logo_title.png x=512 y=200 w=1024 h=256
@ImageLayer n=layer2 s=twr_scenario:teammoeg_logo.png x=702 y=700 w=512 h=128
@TextLayer n=tl text="Presents." resize=36 y=748 x=1122
@showLayer t=40 trans=fadein
@wtr
@delay t=120
@startLayer
@freeLayer n=layer1
@freeLayer n=layer2
@freeLayer n=tl
@showLayer t=40 trans=fadeout
@wtr
@fullScreenDialog show=0
@stopbgm
@speed v=2
*endcutsence
@delay t=20
[NoWait] :[EndNoWait]Finally you are awake.@p
[NoWait]Me: [EndNoWait]Who? @p 
[NoWait] :[EndNoWait]I'm your Integrated Intelligent Assistant, also as IIA. Crash detected, perform crashed checklist? @p
[NoWait]Me :[EndNoWait]Perform.@p
*chk
[NoWait]IIA :[EndNoWait]Thrusters :[delay t=20][NoWait]&cNo response. &r[EndNoWait]Navigation :[delay t=20][NoWait]&cNo response. &r[EndNoWait]
Reactors :[delay t=20][NoWait]&cNo response. &r[EndNoWait]Radio :[delay t=20][NoWait]&cNo response. &r[EndNoWait]Radar :[delay t=20][NoWait]&eBasically functional. &r[EndNoWait].@p
[link l=*sel1]&e[Click to Perform again][endlink][r]
[link l=*sel2]&c[Click to Abandon ship][endlink]
@wa
*sel1
@p
[NoWait]IIA :[EndNoWait]Reinitiating crashed checklist...@p
@jump l=*chk
*sel2
@p
[NoWait]Me :[EndNoWait]Well, we have to abandon ship, before that, let's take down the intact radar. Hopefully it can provide us a basic weather forecast. [l]Ok, let's turn it on. [wc][setResearchAttribute k=has_forecast v=1]@p
[NoWait]Me :[EndNoWait]Weather forecast is now available, seems a snowstorm is coming in three days, what should we do? @p
[NoWait]IIA :[EndNoWait]Suggest: seek for rescue.@p
[NoWait]Me :[EndNoWait]No one could save us, we have to save ourselves@p
*demotemperature
@hudDialog show=1
@startLayer
@DrawLine name=l1 sx="@1024+(uiScale)*16;" sy="@1152-(uiScale)*83;" dx=1224 dy=700 w="@uiScale*2;" clr=0xffeeee00
@DrawLine name=l2 sx=1224 sy=700 dx=1324 dy=700 w="@uiScale*2;" clr=0xffeeee00
@TextLayer n=tl text="&eEffective temperature" x=1330 y=684 resize=18 shadow=1
@DrawLine name=l3 sx=1094 sy="@20*uiScale;" dx=1224 dy=250 w="@uiScale*2;" clr=0xffeeee00
@DrawLine name=l4 sx=1224 sy=250 dx=1324 dy=250 w="@uiScale*2;" clr=0xffeeee00
@TextLayer n=t2 text="&eweather forecast within 5 days" x=1330 y=234 resize=18 shadow=1
@DrawLine name=l5 sx="@920-140*uiScale;" sy="@20*uiScale;" dx=540 dy=250 w="@uiScale*2;" clr=0xffeeee00
@DrawLine name=l6 sx=540 sy=250 dx=490 dy=250 w="@uiScale*2;" clr=0xffeeee00
@TextLayer n=t3 text="&eCurrent Temperature" x=172 y=234 resize=18 shadow=1 
@DrawLine name=l7 sx="@980-100*uiScale;" sy="@20*uiScale;" dx=524 dy=296 w="@uiScale*2;" clr=0xffeeee00
@DrawLine name=l8 sx=524 sy=296 dx=320 dy=296 w="@uiScale*2;" clr=0xffeeee00
@TextLayer n=t4 text="&eGame Day" x=172 y=280 resize=18 shadow=1
@showLayer trans=overright t=40
@delay t=40
[link l=*cla]&e[Click to continue]&r[endlink]
@wa
*cla
@er
@hudDialog show=0
[NoWait]Me :[EndNoWait]Taking out supplies from ship. [l]
@call s=prelogue_rewards
*rewardClaimed
啊！一枚一次性电池，应该足以维持五分钟的温暖。[p]
（按E打开背包，您已获得「极温抗性」，五分钟内不受任何温度影响。）@p
还有一颗镁锭，应该能帮助我生火。@p
（双手分别持起火金属和燧石可以打火。）@p
水袋也找到了，不过以后我大概得烧热水才能避免寄生虫。@p
（潜行右击水源可以喝脏水，不过可能会造成腹泻。）@p
@delay t=20

*nutritionTutorial
我：空间站派发的「军用口粮」虽然不好吃，但是能维持我一段时间的健康。@p
（按E打开背包，鼠标悬浮在食品上，可以查看营养内容。）@p
（按下TAB打开轮盘，选择「营养」打开营养均衡界面。）@p
（将营养保持在20%到80%之间，避免获得负面属性，并获得正面增益。）@p
（早期，您不需要对此担心，但必须将此任务提上长期日程。）@p
@delay t=20
[link l=*clothingTutorial]&e[点击以继续]&r[endlink]
@wa

*clothingTutorial
我：身上的宇航服具有「保温系数」和「流体隔离性」，但是可能会损坏，我以后应该穿多层衣服。@p
（按下TAB打开轮盘，选择「衣物」打开衣物穿戴界面；鼠标悬浮在衣物上，可以查看属性。）@p
（每个身体部位上，越靠外的衣物越能体现「流体隔离性」，在遇水和遇风时更具效果。）@p
（反之，越靠内的衣物越能体现「保温系数」，您应该根据不同衣物属性合理搭配。）@p
@delay t=20
[link l=*endingTutorial]&e[点击以继续]&r[endlink]
@wa

*endingTutorial
@showTitle t="Chapter 1 Act 1" st="Compelete"
@actTitle t="" st=""
Read quest book for further help.@p
@s
@call s="quest:744D35762CD9BD26?call"
@p
