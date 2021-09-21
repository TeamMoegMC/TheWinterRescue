onEvent('server.datapack.high_priority', (event) => {
    event.addJson('the_winter_rescue:advancements/root.json',

        {
            "display": {
                "icon": {
                    "item": "weatherforecast:temperature_probe"
                },
                "title": {
                    "translate": "advancements.the_winter_rescue.root.title"
                },
                "description": {
                    "translate": "advancements.the_winter_rescue.root.description"
                },
                "frame": "task",
                "show_toast": false,
                "announce_to_chat": false,
                "hidden": false,
                "background": "frostedheart:textures/block/generator_brick_top.png"
            },
            "criteria": {
                "item1": {
                    "trigger": "minecraft:inventory_changed",
                    "conditions": {
                        "items": [
                            {
                                "item": "minecraft:stick"
                            }
                        ]
                    }
                }
            }
        }
    );
});
