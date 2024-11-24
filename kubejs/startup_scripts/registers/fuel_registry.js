let fuel_procs=[
    "anthracite_dust",
    "bituminous_coal_dust",
    "subbituminous_coal_dust",
    "lignite_dust",
    "coal_dust",
    "charcoal_dust",
    "limed_coal",
    "wet_coal_dust",
    "bound_charcoal_briquette",
    "bound_coal_briquette",
    "creosoted_charcoal_briquette",
    "creosoted_coal_briquette",
    "creosoted_sawdust_briquette",
    "wet_coal_briquette",
    "wet_straw_briquette",
    "charcoal_briquette",
    "coal_briquette",
    "sawdust_briquette",
    "straw_briquette"
]
let fuel_vals= {
    "anthracite_dust":2600,
    "bituminous_coal_dust":2000,
    "subbituminous_coal_dust":1300,
    "lignite_dust":1100,
    "coal_dust":1300,
    "charcoal_dust":1100,
    "limed_coal":0,
    "wet_coal_dust":0,
    "bound_charcoal_briquette":1400,
    "bound_coal_briquette":1400,
    "creosoted_charcoal_briquette":1300,
    "creosoted_coal_briquette":1300,
    "creosoted_sawdust_briquette":1300,
    "wet_coal_briquette":1200,
    "wet_straw_briquette":400,
    "charcoal_briquette":1800,
    "coal_briquette":1800,
    "sawdust_briquette":1600,
    "straw_briquette":800
}

StartupEvents.registry('item', (event) => {

    fuel_procs.forEach((item) => {
        let fv=fuel_vals[item];
        if(fv==0)
            event.create(item).texture(`kubejs:item/${item}`);
        else
            event.create(item).texture(`kubejs:item/${item}`).burnTime(fv);
    });

});