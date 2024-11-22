*start
@delay t=10

# Prologue
@eval var=prelogue exp=0
@if exp="1-prelogue"
@eval var=prelogue exp=1
@startAct c=chapter1 a=act1 s=prelogue
@endif

# Init languauge
@call s=langinit
@waitPlayerStart l=*st
@wa
*st

# Act 2 Tutorial
@if exp="1-chapter1act2"
@waitQuestComplete s=chapter1_act2 q=4E2B2FEBD5031A2C
@endif

@startSystem
@s