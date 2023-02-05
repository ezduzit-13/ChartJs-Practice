import pandas as pd

list = list(
    pd
    .read_csv("player-stats.csv")
    .to_dict('index')
    .values())

def clean_data(item):
    output = {}
    output['name'] = item['Player']
    output['goals'] = item['G']
    output['assist'] = item['A']
    output['app'] = item['Apps']
    return output


goal_arr = [clean_data(i) for i in list]
assist_arr =  sorted(goal_arr, key=lambda x: x['assist'],reverse=True)

