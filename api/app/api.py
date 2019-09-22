from flask import request, jsonify
from app import app
import csv


def read(name='app/static/data', sign=','):
	with open(name+'.csv', 'r') as file:
		return [i for i in csv.reader(file, delimiter=sign, quotechar=' ')]

@app.route('/')
def get():
	name = request.args.get('name')

	return '<html><body><h1>Hello, {}!</h1></body></html>'.format(name)

@app.route('/', methods=['POST'])
def post():
	x = request.json
	
	data = {
		'result': read(),
	}

	return jsonify(data)