
@actTitle t="Crashed on the frozen planet" st="Finish dialog"
@showTitle t="Chapter 1 Act 1" st="Crashed on the frozen planet"
@delay t=60

@if exp="client.preloguePlayed"
@displayTip id="scenario_tip"
Do you want to skip the prologue story cinematic?[r]
[link l=*intitle][&eSkip&r][endlink][r]
[link l=*beginprelogue][&eWatch&r][endlink]
@wa
@endif

*beginprelogue
@er
@setCookie k="preloguePlayed" exp="1"
@sendCookie
*begintext
@mobEffect e="frostedheart:insulation" a=0 t=3600 hide=1
@stopbgm
Ouch, Ouch, where am I? What happened? [l][er]
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
Ever since I could remember, the Earth was white. [l]
@startLayer
@freeLayer n=layer1
@showLayer t=20 trans=fadeout
@wtr
@er
@startLayer
@ImageLayer n=layer1 s=twr_scenario:2.jpg
@showLayer t=20 trans=fadeout
@wr

I live on Columbiat along with a million others. [l]It prides itself on being the largest among all. A self-sustaining space settlement orbiting the once-blue planet.[l][delay t=40]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:3.jpg
@FillRect n=overlay clr=0xFF000000 w=1024 x=1024
@showLayer t=60 trans=overdown
@wr
@er
It was meant to be an ark, but that never lasted.[l]
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
Memory fades too. People, the New Generation, started to forget the Apocalypse that froze everything. The bill has passed[l] - no support was going to Earth's people again.[l]
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
Thousands of others lived with the same sorrow.[l]
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
@TextLayer n=tl text="And I know, there is still hope, " resize=18 y=567 x=688 clr=0xFFFFFFFF
@showLayer t=20 trans=fadein
@wtr
@delay t=20 
@startLayer
@TextLayer n=tl text="And I know, there is still hope, a faint hope." resize=18 y=567 x=688 clr=0xFFFFFFFF
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
Twenty years ago, the bravest of humanity led an expedition of no return into the crust of the Earth. Their leader was my mother, whom I never said goodbye to.[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:7.jpg
@FillRect n=overlay1 clr=0xFF000000 w=566
@FillRect n=overlay2 clr=0xFF000000 x=1306 w=736
@FillRect n=overlay3 clr=0xFF000000 x=566 w=746
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
@freeLayer n=overlay3
@showLayer t=20 trans=fadeout
@wr
but only left us with prolonged despair.[l]

@startLayer
@ImageLayer n=layer1 s=twr_scenario:8.jpg
@FillRect n=overlay1 clr=0xFF000000       y=572 w=964  h=598
@FillRect n=overlay2 clr=0xFF000000 x=964 y=572 w=1084 h=598
@FillRect n=overlay3 clr=0xFF000000 x=964 w=1084 h=572
@showLayer t=40 trans=fadein
@wr
@er
I don’t believe in miracles, as I grew up as a scientist.[wc]
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
It was a simple word — my nickname — the one only two people in the world knew.[l]
*half
@startLayer
@ImageLayer n=layer1 s=twr_scenario:9.jpg
@showLayer t=60 trans=fadein
@wr
@er
I know it is her calling me… I’ve been waiting for twenty years.[l]
@wr
The anomaly was above Yellowstone, now a dangerous frost land above an ever-active volcano.[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:10.jpg
@showLayer t=60 trans=right
@wr
@er
A miracle that was my fantasy — that was their narrative. Thus I embark on a lone journey, with a few who believed in me, or hope.[l]
@startLayer
@ImageLayer n=layer1 s=twr_scenario:11.jpg
@showLayer t=40 trans=up
@wr
@er
“CS Frosted Heart” — that was the name of the shuttle we boarded. But our hearts were never frozen — our hearts were burning like coal.[l]
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
@delay t=60
@fullScreenDialog show=0
@stopbgm
@speed v=2
*endcutsence
@delay t=20
[NoWait] :[EndNoWait]Finally you are awake.@p
[NoWait]Me: [EndNoWait]Who are you? @p 
[NoWait] :[EndNoWait]I'm your Integrated Intelligent Assistant, also known as IIA. Crash detected, perform crash checklist? @p
[NoWait]Me :[EndNoWait]Perform.@p
*chk
[NoWait]IIA :[EndNoWait]Thrusters :[delay t=20][NoWait]&cNo response. &r[EndNoWait]Navigation :[delay t=20][NoWait]&cNo response. &r[EndNoWait]
Reactors :[delay t=20][NoWait]&cNo response. &r[EndNoWait]Radio :[delay t=20][NoWait]&cNo response. &r[EndNoWait]Radar :[delay t=20][NoWait]&eBasically functional. &r[EndNoWait].@p
[link l=*sel1]&e[Click to Perform again][endlink][r]
[link l=*sel2]&c[Click to Abandon ship][endlink]
@displayTip id="scenario_tip_2"
@wa
*sel1
@p
[NoWait]IIA :[EndNoWait]Reinitiating crash checklist...@p
@jump l=*chk
*sel2
@p
[NoWait]Me :[EndNoWait]Well, we have to abandon ship, before that, let's take down the intact radar. Hopefully it can provide us with a basic weather forecast. [l]Ok, let's turn it on. [wc][setResearchAttribute k=has_forecast v=1]@p
[NoWait]Me :[EndNoWait]Weather forecast is now available, looks like a snowstorm is coming in three days, what should we do? @p
[NoWait]IIA :[EndNoWait]Suggestion: seek rescue.@p
[NoWait]Me :[EndNoWait]No one can save us, we have to save ourselves@p
*demotemperature
@hudDialog show=1
@startLayer
@DrawLine name=l1 sx="@1024+(uiScale)*16;" sy="@1152-(uiScale)*83;" dx=1224 dy=700 w="@uiScale*2;" clr=0xffeeee00
@DrawLine name=l2 sx=1224 sy=700 dx=1324 dy=700 w="@uiScale*2;" clr=0xffeeee00
@TextLayer n=tl text="&eApparent temperature" x=1330 y=684 resize=18 shadow=1
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
@hudDialog show=0
@p
[NoWait]Me：[EndNoWait]Before I leave, I should check what resources and tools I have.[l]
@r
（Checking the ship...）
@delay t=40
@p

# skip tutorial if wanted
@if exp="client.preloguePlayed"
（Skip the tutorial to obtain initial resources?）[r]
[link l=resources][&eSkip, I am a Pro.&r][endlink][r]
[link l=heat_tutorial][&eProceed, I am new. (Highly recommended!)&r][endlink][r]
@wa
@endif

@label name=heat_tutorial
@mobEffect e="frostedheart:insulation" a=0 t=6000 hide=1
@p
[NoWait]Me：[EndNoWait]The spacesuit is severely damaged, but the battery can still keep me warm for five minutes.[l]
@r
（Press [E] to open Inventory. You obtained Insulation, unaffected by any temperature effect for five minutes.）
@r
[link l=water_tutorial]&e[Understood, click to continue checking for resources.]&r[endlink]@wa

@label name=water_tutorial
@giveItem i=frostedheart:iron_bottle n="{Damage:0,Fluid:{FluidName:\"frostedheart:purified_water\",Amount:1000}}"
@p
[NoWait]Me：[EndNoWait]I also found a water bottle. There's clean water inside. But what about later?[l]
@r
（The blue hemisphere on the right of the Feeling Temperature Orb represents the Water Level in your body.）
@r
（You can Sneak-R-Click a water source to drink unclean water, but you may get poisoned.）
@r
[link l=nutrition_tutorial]&e[Understood, click to continue checking for resources.]&r[endlink]@wa

@label name=nutrition_tutorial
@giveItem i=frostedheart:military_rations c=16
@p
[NoWait]Me：[EndNoWait]Military Rations from Columbiat aren't the best, but they can keep me healthy for some time.[l]
@r
（Press [E] to open Inventory, move the mouse over the food item, and press [N] to view its nutritional info.）
@r
@displayTip id="wheel_menu"
（Press [TAB] to open the Radial Menu, select Health Info to check your Nutrition Level.）
@r
（Keeping it in a healthy range can prevent disease and provide buffs.）
@r
[link l=clothing_tutorial]&e[Completed, click to continue checking for resources.]&r[endlink]@wa

@label name=clothing_tutorial
@giveItem i=frostedheart:rabbit_fur_gloves c=1
@p
[NoWait]Me：[EndNoWait]This pair of Rabbit Fur Gloves were a gift from my best friend before I left.[l]
@r
（Press [TAB] to open the Radial Menu, select View Clothing, and place the Rabbit Fur Gloves on both hands.）
@r
[link l=clothing_properties]&e[Completed, click to continue.]&r[endlink]@wa

@label name=clothing_properties
@p
(On any body part, outer clothes have a greater effect on Fluid Resistance, which can help when encountering Water or Wind.)@p
@r
(On the contrary, inner clothes have a greater effect on Insulation. You should design your outfit based on different properties.)@p
@r
[link l=tools_tutorial]&e[Understood, click to continue checking for resources.]&r[endlink]@wa

@label name=tools_tutorial
@giveItem i=minecraft:iron_shovel
@giveItem i=frostedheart:magnesium_nugget c=3
@p
[NoWait]Me：[EndNoWait]This Fire Shovel has been in the corner for a while. Time to take it.[l]
@r
[NoWait]Me：[EndNoWait]There are also some Magnesium Nuggets, useful for making a fire.[l]
@r
（Shovels can uncover Besnowed Twigs and Debris.）
@r
（Magnesium Nuggets can assist Flints to make a fire.）
@r
[link l=ending]&e[Enter the Frostland.]&r[endlink]@wa

@label name=resources
@call s=prelogue_rewards

@label name=ending
@completequest q=4E2B2FEBD5031A2C

@er
@showTitle t="Chapter 1 Act 1" st="Completed"
@actTitle t="" st=""
You can follow the Quest Book, or follow the next Tutorial Act.@p
@displayTip id="sensible_temperature"
@s
# @call s="quest:744D35762CD9BD26?call"
@p
