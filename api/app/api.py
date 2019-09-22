from flask import request, jsonify
from app import app
import csv
import random

from app.similar import similar


def read(name='app/static/data', sign=','):
	with open(name+'.csv', 'r') as file:
		return [i for i in csv.reader(file, delimiter=sign, quotechar=' ')]


@app.route('/')
def test():
	return 'Test'

@app.route('/', methods=['POST'])
def post():
	x = request.json

	data = [{
		'x': float(el[0]) + random.randint(-1000, 1000) / 100,
		'y': float(el[1]) + random.randint(-1000, 1000) / 100,
		'z': float(el[2]) + random.randint(-1000, 1000) / 100,
	} for i, el in enumerate(read()[1:])]

	sim, hu = similar()

	res = {
		'result': data,
		'similar': sim,
		'huevye': hu,
	}

	return jsonify(res)