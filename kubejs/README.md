# Contributing to Translation Files
We welcome any player to contribute to our translation files. Here are some instructions.
## Folder Structure
The main resource Folder located in `kubejs/assets/`.
Each folder in this folder represent a mod and named after modid. Before contributing to these files, please check out that coresponding mod does NOT contains your language, and always consider contributing to the original mod first.  

These following folders are related to our project:
1. `ponderjs_generated/lang` is our own ponder translation folder.
2. `kubejs/lang` is items, fluid and tooltip translation folder.
3. `the_winter_rescue/lang` is hints and advancements translation folder.
4. `tips/lang` is in-game tips translation folder.
5. `twr_quests/lang` is quest book translation folder.
7. `twr_researches/lang` is research text translation folder.

You are welcomed to contribute to these folders. 
## Contributing
You can do the translations on your local path, Just copy `en_us.json` or `zh_cn.json` and modify to your own language. If you finished, just make a pull-request to our project and we would review and merge asap.  
You can use any tool or editor if you like, just keep the json file pretty formatted so anyone else could easily edit it.  
If you find something wrong or inproper, feel free to send issue(Question) including correct translation or prs to us, we would review and change asap.
## Reminders
- Please DO NOT change or translate any folder name.   
- You should keep file extensions the same with the original file name. Such as, Source file is `en_us.json` and translated file should be name after `<locale code>.json`, and its encoding must be utf-8.
- If you want to leave a blank text, do NOT just leave it empty or delete it, fill a space inside. 
 
Above are essential rules. __Not following these rules would cause your files INVALID and NOT being able to take effect!__

Also, we recommend to follow these rules:
- Test your translations in your own game before uploading to ensure no language problem or file syntax error.
- You should state What you have done in commit message or pull-request message, so that we could easily review and merge. 
  
Following these rules would make our work easier.  
__Thank you for your cooperation.__
## Testing And Debuging
### General
Use in-game command `/kubejs reload lang` to reload language files.    
This take effect instantly for most things, except quest(see following).
### Quest
Use command `/ftbquests editing_mode true` to change to editor mode, which is able to view all quests.   
Quest book require a reload theme after reload lang (Gear button at the bottom right, click and select reload theme).    
Some quests require complete to show text. you can complete it in editor mode by right click the task and select complete.   
### Research
There are two description for a single research: description(`desc`) or alternative description(`desc_alt`). Alternative ones shows before complete while normal ones shows after complete.    
Use command `/frostedheart research complete all` to complete all tasks for display.   
Use command `/frostedheart research reset <id>` or `/frostedheart research reset all` to reset progress of specific or all tasks.   
Use command `/frostedheart edit true` to enable edit and view all researches.   
## Other mods
Some of the mods are made by us:
1. [Immersive Industry](https://github.com/TeamMoegMC/ImmersiveIndustry)
2. [Steam Powered](https://github.com/TeamMoegMC/SteamPowered)
3. [Weather Forecast](https://github.com/TeamMoegMC/WeatherForecast)
4. [Frosted Heart](https://github.com/TeamMoegMC/FrostedHeart)
5. [Thermopolium](https://github.com/TeamMoegMC/Thermopolium)
6. [With Her Eyes](https://github.com/TeamMoegMC/WithHerEyes)(still in draft)

And These are mods we forked and changed for our modpack:

7. [TWR Charcoal Pit](https://github.com/TeamMoegMC/CharcoalPit2)
8. [TWR Stone Age](https://github.com/TeamMoegMC/StoneAge)

You can check them out and contribute to them.  
## Credits
We would give credits for everyone who actively contribute to any of our mods or this modpack. Thank you in advance.
