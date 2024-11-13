ServerEvents.highPriorityData(event => {
    event.addJson('the_winter_rescue:advancements/generator_core_t1.json', {
        parent: 'the_winter_rescue:root',
        display: {
            icon: {
                item: 'frostedheart:generator_core_t1',
                nbt: '{Damage:0}'
            },
            title: {
                translate: 'advancements.the_winter_rescue.generator_core_t1.title'
            },
            description: {
                translate: 'advancements.the_winter_rescue.generator_core_t1.description'
            },
            frame: 'task',
            show_toast: true,
            announce_to_chat: true,
            hidden: false
        },
        criteria: {
            get_stone: {
                trigger: 'minecraft:inventory_changed',
                conditions: {
                    items: [
                        {
                            item: 'frostedheart:generator_core_t1'
                        }
                    ]
                }
            }
        }
    });
});
