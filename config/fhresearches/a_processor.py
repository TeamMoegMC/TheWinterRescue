import json
import os

def load_json(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)
        return data

def save_json(file_path, data):
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=2)

def process_research(file):
# skip non-json files
    if not file.endswith('.json'):
        return
    # process the file
    data = load_json(file)
    # print(data)
    # print('Processing:', file)

    # get the value of the key 'name'
    if ('name' in data):
        name = data['name']
    else:
        name = '@'
    # if name does not starts with '@', change it to '@'
    if not name.startswith('@'):
        name = '@'
    # update the value of the key 'name'
    data['name'] = name

    # get the value of the key 'desc'
    if ('desc' in data):
        desc = data['desc']
    else:
        desc = ['@']
    # desc is an array, loop through it
    for i in range(len(desc)):
        # if the element does not starts with '@', change it to '@'
        if not desc[i].startswith('@'):
            desc[i] = '@'
    # update the value of the key 'desc'
    data['desc'] = desc

    # get the value of the key 'descAlt'
    if ('descAlt' in data):
        desc_alt = data['descAlt']
    else:
        desc_alt = ['@']
    # desc is an array, loop through it
    for i in range(len(desc_alt)):
        # if the element does not starts with '@', change it to '@'
        if not desc_alt[i].startswith('@'):
            desc_alt[i] = '@'
    # update the value of the key 'descAlt'
    data['descAlt'] = desc_alt
    data['showAltDesc'] = True

    # get the value of the key 'effects'
    if ('effects' in data):
        effects = data['effects']
        # effects is an array, loop through it
        for i in range(len(effects)):
            # if exists key 'tooltip' in effects
            if 'tooltip' in effects[i]:
                # get the value of the key 'tooltip'
                tooltip = effects[i]['tooltip']
                for j in range(len(tooltip)):
                    # if the element does not starts with '@', change it to '@'
                    if not tooltip[j].startswith('@'):
                        effects[i]['tooltip'][j] = '@'
                        print('Replaced tooltip to @ in effects: ', file)
            # if exists key 'name' in effects
            if 'name' in effects[i]:
                # get the value of the key 'name'
                name = effects[i]['name']
                # if the element does not starts with '@', change it to '@'
                if not name.startswith('@'):
                    effects[i]['name'] = '@'
                    print('Replaced name to @ in effects: ', file)
        # update the value of the key 'effects'
        data['effects'] = effects

    
    # get the value of the key 'clues'
    if ('clues' in data):
        clues = data['clues']
        # clues is an array, loop through it
        for i in range(len(clues)):
            # if exists key 'name' in clues
            if 'name' in clues[i]:
                # get the value of the key 'name'
                name = clues[i]['name']
                # if the element does not starts with '@', change it to '@'
                if not name.startswith('@'):
                    clues[i]['name'] = '@'
                    print('Replaced name to @ in clues: ', file)
            # if exists key 'desc' in clues
            if 'desc' in clues[i]:
                # get the value of the key 'desc'
                desc = clues[i]['desc']
                # if the element does not starts with '@', change it to '@'
                if not desc.startswith('@'):
                    clues[i]['desc'] = '@'
                    print('Replaced desc to @ in effects: ', file)
            # if exists key 'hint' in clues
            if 'hint' in clues[i]:
                # get the value of the key 'hint'
                hint = clues[i]['hint']
                # if the element does not starts with '@', change it to '@'
                if not hint.startswith('@'):
                    clues[i]['hint'] = '@'
                    print('Replaced hint to @ in effects: ', file)
        # update the value of the key 'clues'
        data['clues'] = clues

    # save the file
    save_json(file, data)

if __name__ == '__main__':
    # loop through all files in the current directory
    for file in os.listdir(os.getcwd()):
        process_research(file)