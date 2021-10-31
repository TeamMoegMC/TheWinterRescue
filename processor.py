import os
import json
import shutil

should_replace_key = [
    "			title",
    "			subtitle"
]

context_dict = {}
total_lines = 0


def check_dir(path):
    for file in os.listdir(path):
        file_path = path + "/" + file
        if (os.path.isdir(file_path)):
            check_dir(file_path)
        else:
            read_snbt(file_path, file)


def read_snbt(full_path, file_name):
    f = open(full_path, "r+", encoding='utf-8')
    f_list = f.readlines()
    file_name = file_name.split(".snbt")[0]
    f.close()

    chapter_id = ""
    # replace chapter translation keys
    for i, line in enumerate(f_list):
        if line.startswith("\tid"):
            first_quote_index = line.find("\"")
            last_quote_index = line.rfind("\"")
            chapter_id = line[first_quote_index + 1:last_quote_index]
            print("=======================================")
            print("Found chapter with ID \"%s\"" % (chapter_id))
        if line.startswith("\ttitle"):
            replace_with_lang_key(line, "title", f_list, i, chapter_id, "chapter")
        if line.startswith("\tsubtitle"):
            replace_with_lang_key(line, "subtitle", f_list, i, chapter_id, "chapter")

    # enumerate file and collect quest list
    quests_list = []
    quests_start_index_list = []
    quest_start_line = 0
    quest_end_line = 0
    found_quest_start = False
    found_quest_end = False
    for i, line in enumerate(f_list):

        if found_quest_start and found_quest_end:
            quests_list.append(f_list[quest_start_line:quest_end_line + 1])
            quests_start_index_list.append(quest_start_line)

        if line.startswith("		{"):
            quest_start_line = i
            found_quest_start = True

        if line.startswith("		}"):
            quest_end_line = i
            found_quest_end = True

    # enumerate quest list and replace translation keys
    for k, quest in enumerate(quests_list):
        q_start_line_index = quests_start_index_list[k]
        quest_id = ""

        for m, find_id in enumerate(quest):
            if find_id.startswith("			id"):
                first_quote_index = find_id.find("\"")
                last_quote_index = find_id.rfind("\"")
                quest_id = find_id[first_quote_index + 1:last_quote_index]
                print("------------------------------------")
                print("Found quest with ID %s" % (quest_id))

        flag = False  # is true when this is a multiple line description
        j = 0
        for n, quest_line in enumerate(quest):

            # checks whether this line is a single-line description
            if quest_line.startswith("			description: [\""):
                text_key = "description.1"
                replace_with_lang_key(quest_line, text_key, f_list, q_start_line_index + n, quest_id, "quest")

            # checks whether this line ends a multiple-line description
            if quest_line.startswith("			]"):
                flag = False
                j = 0

            # checks whether last line is the start of a multiple-line description
            # or part of the multiple-line description
            # if it is, starts replacing
            if flag:
                j += 1
                text_key = "description." + str(j)
                replace_with_lang_key(quest_line, text_key, f_list, q_start_line_index + n, quest_id, "quest")
                continue

            # checks whether this line is a title or subtitle
            for key in should_replace_key:
                if quest_line.startswith(key):
                    replace_with_lang_key(quest_line, key.lstrip(), f_list, q_start_line_index + n, quest_id, "quest")

            # checks whether this line is the start of a multiple-line description
            if quest_line == "\t\t\tdescription: [\n":
                flag = True

    f = open(full_path, "w+", encoding="utf-8")
    f.writelines(f_list)
    f.close()


def replace_with_lang_key(line, key, f_list, index, file_name, key_type):
    global total_lines
    total_lines += 1
    first_quote_index = line.find("\"")
    last_quote_index = line.rfind("\"")
    head = line[0:first_quote_index]
    content = line[first_quote_index + 1:last_quote_index]
    tail = line[last_quote_index + 1:len(line)]
    # if not translated already
    if not (content.startswith("{") and content.endswith("}")):
        lang_key = "%s.twr.%s.%s" % (key_type, file_name, key)
        print("Found translation key \"%s\", value = \"%s\"" % (lang_key, content))
        new_content = head + "\"{" + lang_key + "}\"" + tail
        f_list[index] = new_content
        context_dict[lang_key] = content.replace("\\", "")


def write_json(path):
    copy = context_dict.copy()
    if len(copy) == 0:
        return

    original_dict = {}
    with open(path, encoding="utf-8") as inputfile:
        original_dict = json.load(inputfile)
        inputfile.close()

    original_dict.update(copy)
    with open(path, "w", encoding="utf-8") as outfile:
        json.dump(original_dict, outfile, indent=2, ensure_ascii=False)

    global total_lines
    print("Successfully translated " + str(total_lines) + " lines in " + path)


# for translating, second param must be ISO 639-1 language code. exmaples: en, zh-CN
# google api only exists on my computer, don't run this function
def translate_json(path, target):
    from runners import google_api

    original_dict = {}
    with open(path, encoding="utf-8") as inputfile:
        original_dict = json.load(inputfile)
        for key in original_dict.keys():
            original_value = original_dict[key]
            final_result = google_api.translate_text(target, original_value).replace('&amp;', '&').replace('&quot;',
                                                                                                           '\"').replace(
                '&#39;', '\'')
            original_dict[key] = final_result
        inputfile.close()

    with open(path, 'w', encoding="utf-8") as outputfile:
        json.dump(original_dict, outputfile, indent=2, ensure_ascii=False)
        outputfile.close()


# Must run before any assemble functions run
def bump_version(ver, kjspath, lastverpath, manifestpath):
    if not os.path.exists(kjspath) or not os.path.exists(lastverpath) or not os.path.exists(manifestpath):
        print("/kubejs/config/client.properties or /.twrlastversion or manifest.json file does not exist")
        return
    with open(kjspath, encoding="utf-8") as f:
        f_list = f.readlines()
        for i, line in enumerate(f_list):
            if line.startswith("title"):
                newline = "title=The Winter Rescue"
                if ver.startswith("0"):
                    newline += " [Beta] "
                else:
                    newline += " "
                f_list[i] = newline + ver + "\n"
    f.close()
    f = open(kjspath, "w+", encoding="utf-8")
    f.writelines(f_list)
    f.close()

    t = open(lastverpath, "w+", encoding="utf-8")
    t.writelines([ver])
    t.close()

    with open(manifestpath, encoding="utf-8") as m:
        m_list = m.readlines()
        for i, line in enumerate(m_list):
            if line.startswith("  \"version\""):
                newline = "  \"version\": \""
                m_list[i] = newline + ver + "\",\n"
    m.close()
    m = open(manifestpath, "w+", encoding="utf-8")
    m.writelines(m_list)
    m.close()


# We need three types of packages, one is a standard CurseForge format package assembled in CurseForge Client
# The rest three types of packages:
# 1. CurseForge format package with all mods in overrides
# 2. Server files
# 3. Simple fat package of /.minecraft directory with everything necessary
# Which are assembled here
def assembleCurseFormatWithMods(modpack_name):
    try:
        # Copy to temporary location
        os.mkdir("runners/pack/")
        os.mkdir("runners/pack/.minecraft")
        shutil.copytree('config', 'runners/pack/.minecraft/config')
        shutil.copytree('defaultconfigs', 'runners/pack/.minecraft/defaultconfigs')
        shutil.copytree('kubejs', 'runners/pack/.minecraft/kubejs')
        shutil.copytree('mods', 'runners/pack/.minecraft/mods')

        # Get version and archive files
        if not os.path.exists("runners/manifest.json"):
            print("Error: manifest.json does not exist! Stopping assemble.")
            return
        shutil.copy('runners/manifest.json', 'runners/pack/manifest.json')
        with open("runners/manifest.json", encoding="utf-8") as manifest:
            dict = json.load(manifest)
            shutil.make_archive(modpack_name + "-V" + dict["version"], 'zip', "runners/pack")
        manifest.close()
        shutil.rmtree("runners/pack")
    except OSError as error:
        print(error)


# Assemble Server files
def assembleServerFiles(modpack_name, pack_location_url):
    try:
        # Update pack location url
        with open("serverfiles/server-setup-config.yaml", encoding="utf-8") as m:
            m_list = m.readlines()
        for i, line in enumerate(m_list):
            if line.startswith("    modpackUrl"):
                newline = "    modpackUrl: " + pack_location_url + "\n"
                m_list[i] = newline
        m.close()
        m = open("serverfiles/server-setup-config.yaml", "w+", encoding="utf-8")
        m.writelines(m_list)
        m.close()

        # Get version and archive files
        if not os.path.exists("runners/manifest.json"):
            print("Error: manifest.json does not exist! Stopping assemble.")
            return
        with open("runners/manifest.json", encoding="utf-8") as manifest:
            dict = json.load(manifest)
            shutil.make_archive(modpack_name + "-Server-V" + dict["version"], 'zip', "serverfiles")
        manifest.close()
    except OSError as error:
        print(error)


# Simple fat package of /.minecraft directory with everything necessary
def assembleFatPackage(modpack_name, instances_abs_loc, extra_package_rel_loc, processor_rel_loc):
    try:
        # Copy modifications to temporary location
        os.mkdir("runners/pack/")
        os.mkdir("runners/pack/.minecraft")
        shutil.copytree('config', 'runners/pack/.minecraft/config')
        shutil.copytree('defaultconfigs', 'runners/pack/.minecraft/defaultconfigs')
        shutil.copytree('kubejs', 'runners/pack/.minecraft/kubejs')
        shutil.copytree('mods', 'runners/pack/.minecraft/mods')

        # Copy extra libraries
        os.chdir(instances_abs_loc)
        shutil.copy(extra_package_rel_loc + "/HMCL-3.4.203.exe", processor_rel_loc + "/runners/pack/HMCL-3.4.203.exe")
        shutil.copy(extra_package_rel_loc + "/hmcl.json", processor_rel_loc + "/runners/pack/hmcl.json")
        shutil.copytree(extra_package_rel_loc + "/.minecraft/assets", processor_rel_loc + "/runners/pack/.minecraft/assets")
        shutil.copytree(extra_package_rel_loc + "/.minecraft/CustomSkinLoader", processor_rel_loc + "/runners/pack/.minecraft/CustomSkinLoader")
        shutil.copytree(extra_package_rel_loc + "/.minecraft/libraries", processor_rel_loc + "/runners/pack/.minecraft/libraries")
        shutil.copytree(extra_package_rel_loc + "/.minecraft/versions", processor_rel_loc + "/runners/pack/.minecraft/versions")
        shutil.copy(extra_package_rel_loc + "/.minecraft/servers.dat", processor_rel_loc + "/runners/pack/.minecraft/servers.dat")
        shutil.copy(extra_package_rel_loc + "/.minecraft/servers.dat_old", processor_rel_loc + "/runners/pack/.minecraft/servers.dat_old")
        shutil.copy(extra_package_rel_loc + "/.minecraft/launcher_profiles.json", processor_rel_loc + "/runners/pack/.minecraft/launcher_profiles.json")

        # Get version and archive files
        os.chdir(instances_abs_loc + "/" + processor_rel_loc)

        if not os.path.exists("runners/manifest.json"):
            print("Error: manifest.json does not exist! Stopping assemble.")
            return
        with open("runners/manifest.json", encoding="utf-8") as manifest:
            dict = json.load(manifest)
            shutil.make_archive(modpack_name + "-V" + dict["version"], 'zip', "runners/pack")
        manifest.close()
        shutil.rmtree("runners/pack")
    except OSError as error:
        print(error)