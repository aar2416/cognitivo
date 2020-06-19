from flask import Flask
from flask import (Blueprint, flash, g, redirect, request, session, url_for)
from .functions import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

print(app)

@app.route('/hello', methods=['GET'])
def get_top_ten_artists_in_2020():
    if request.method == 'GET':
        number_of_songs = int(request.args.get('params', 10))
        return {"top_ten_artists": get_top_ten_artists(), "songs_avg": get_average_duration_of_songs(number_of_songs)}
