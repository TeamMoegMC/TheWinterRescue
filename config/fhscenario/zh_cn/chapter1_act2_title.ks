@eval var=chapter1act2 exp=1
@act a=act2 c=chapter1

# Starting
@showTitle t="第一章 第二节" st="雪中求生"
*started
@delay t=60

@if exp="client.preloguePlayed"
如果你会跟随任务书的话，你可以跳过这一节教程。[r]
[link s=chapter1_act2_end l=end][&e跳过，我是老手。&r][endlink][r]
[link s=chapter1_act2][&e继续，我是新手。&r][endlink][r]
@wa
@endif
@p