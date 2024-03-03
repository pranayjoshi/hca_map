import csv
import pandas as pd

data = pd.read_csv('HCA_Data.csv')
states = data['state'].unique()

state_list = []
for state in states:
    state_dict = {'value': state, 'label': state}
    state_list.append(state_dict)

print(state_list)