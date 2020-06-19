import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import matplotlib.pyplot as plt
import seaborn as sns
import matplotlib.ticker as ticker
import os
import json
from itertools import chain

def read_data_without_genre():
    return pd.read_csv('data/data.csv')


def read_data_with_genre():
    return pd.read_csv('data/spotify_data_by_genres.csv')


def get_top_ten_artists():
    data_without_genre = read_data_without_genre()
    del data_without_genre['Unnamed: 0']

    # get data of year 2020
    data_of_year_2020 = data_without_genre[data_without_genre['year'] == 2020]

    # cleaning the memory
    del data_without_genre

    # data cleaning
    data_of_year_2020['artists'] = data_of_year_2020.artists.str.replace('[', '').str.replace(
        ']', '').str.replace('\'', '').str.replace('"', '').str.strip()

    # data conversion to required format and conversion into new dataframe
    artists_popularity_of_year_2020 = pd.concat([pd.Series(row['popularity'], row['artists'].split(','))            
                    for _, row in data_of_year_2020.iterrows()]).reset_index()
                    
    del data_of_year_2020
    artists_popularity_of_year_2020.columns = ['Artists', 'Popularity']

    # data cleaning
    artists_popularity_of_year_2020['Artists'] = artists_popularity_of_year_2020['Artists'].str.title().str.strip()

    # calculation of popularity and sorting in required format
    top_ten_artists_df = artists_popularity_of_year_2020.groupby('Artists').mean().reset_index().sort_values(['Popularity'],
                         ascending=[0]).head(10)
    
    # cleaning the memory
    del top_ten_artists_df['Popularity'], artists_popularity_of_year_2020
    return list(chain.from_iterable(json.loads(top_ten_artists_df.to_json(orient='values'))))



def get_average_duration_of_songs(number_of_popular_songs=10):
    data_without_genre = read_data_without_genre()
    del data_without_genre['Unnamed: 0']

    # get data of year 2020
    data_of_year_2020 = data_without_genre[data_without_genre['year'] == 2020]
    del data_without_genre
    # data cleaning
    name_popularity_duration_of_year_2020 = pd.concat([data_of_year_2020['name'], data_of_year_2020['popularity'],
                                                      data_of_year_2020['duration_ms']], axis=1)
    del data_of_year_2020
    name_popularity_duration_of_year_2020['name'] = name_popularity_duration_of_year_2020['name'].str.title().str.strip()
    top_songs_df = name_popularity_duration_of_year_2020.groupby('name').mean().reset_index().sort_values(['popularity'],
                                                                ascending=[0])
    del top_songs_df['name'], top_songs_df['popularity'], name_popularity_duration_of_year_2020
    return (sum(list(chain.from_iterable(json.loads(top_songs_df.to_json(orient='values'))))[0: number_of_popular_songs])
                    / number_of_popular_songs)

