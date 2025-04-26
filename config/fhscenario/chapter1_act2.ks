@eval var=chapter1act2 exp=1
@act a=act2 c=chapter1

# Starting
@call s="chapter1_act2_title.ks"

@call s="quest:56E5FD2809882B5F?call" n=chapter_guide

@call s="quest:32E5D942F1FE8645?call" n=garbage

@call s="quest:14D7D98FC5264B03?call" n=knife

@call s="quest:1233EF3CDF5E33F8?call" n=tinder

@call s="quest:1D7F2824DAF3BB7B?call" n=drying

@call s="quest:29BC87594650152D?call" n=straw

@call s="quest:4B6FFA5A9140019F?call" n=grass_lead

@call s="quest:6B7D4F59C921C1FC?call" n=axe

@call s="quest:3B7B7A0BC0CF3CE0?call" n=ignition

@call s="quest:20E34B234337C28A?call" n=campfire

@call s="quest:45E2EF843333B846?call" n=pickaxes

@call s="quest:1837531DB19C9023?call" n=cooblestones

@call s="quest:4BD8236FEEBD7D3A?call" n=stones

@call s="quest:7E3F0C805E2BBB9F?call" n=stump

@call s="quest:19603323EAAFF726?call" n=planks

@call s="quest:03A553EBD453466A?call" n=crafting

@label name=ending
@p
@call s=chapter1_act2_end
# Must add this
@p