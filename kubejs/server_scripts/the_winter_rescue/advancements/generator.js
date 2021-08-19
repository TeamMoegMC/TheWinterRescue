onEvent('server.datapack.high_priority', (event) => {
    event.addJson('the_winter_rescue:advancements/generator/generator_core_t1.json', {
        parent: 'minecraft:story/root',
        display: {
            icon: {
                item: 'frostedheart:generator_core_t1',
                nbt: '{Damage:0}'
            },
            title: {
                translate: 'advancements.the_winter_rescue.generator.generator_core_t1.title'
            },
            description: {
                translate: 'advancements.the_winter_rescue.generator.generator_core_t1.description'
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
