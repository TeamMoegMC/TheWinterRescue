*start
@delay t=10
#@eval let=prelogue exp=0
@if exp="1-prelogue"
@eval let=prelogue exp=1
@startAct c=chapter1 a=act1 s=prelogue
@endif
@call s=langinit
@waitPlayerStart l=*st
@wa
*st
@startSystem
@s