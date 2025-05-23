@eval var=chapter1act2 exp=1
@act a=act2 c=chapter1

# Starting
@showTitle t="Chapter 1 Act 2" st="Survive In The Snow"
*started
@delay t=60

@if exp="client.preloguePlayed"
If you know how to follow the quest book, you can skip this immersive tutorial.[r]
[link s=chapter1_act2_end l=end][&eSkip, I am a Pro!&r][endlink][r]
[link s=chapter1_act2][&eProceed, I am New.&r][endlink]
@wa
@endif
@p