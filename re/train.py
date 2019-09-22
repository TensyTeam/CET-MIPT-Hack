import sys

import numpy as np
# from sklearn import preprocessing
# from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
import joblib


OUTS = 1


def logistic_regression(outs=OUTS):
	# Данные

	dataset = np.loadtxt('test.csv', delimiter=',', skiprows=1)

	print(outs)

	x = dataset[:, :-outs]
	y = dataset[:, -outs:]

	print(x, y)

	# Преобразование y

	y = [1 if row else 2 for row in y]

	# Стандартизация

	# x = preprocessing.normalize(x)

	# Рассчёт весов

	# sc = StandardScaler()
	# sc.fit(x)
	# x_std = sc.transform(x)
	# x_test_std = sc.transform(x_test)
	x_std = x
	# x_test_std = x_test

	model = LogisticRegression(C=1000.0, random_state=0)
	model.fit(x_std, y)

	#

	return model

def test(outs, model):
	dataset = np.loadtxt('test.csv', delimiter=',', skiprows=1)
	x = dataset[:, outs:]
	y = dataset[:, :outs]

	y = [np.where(row == 1.)[0][0] for row in y]
	result = [model.predict([row])[0] == y[num] for num, row in enumerate(x)]

	return sum(result), len(result)


if __name__ == '__main__':
	# outs = np.genfromtxt('categories.csv', delimiter=',').shape[0]
	outs = 1

	model = logistic_regression(outs)

	# Сохранение модели

	joblib.dump(model, 'model.txt')
	# print(model)

	# Тестирование

	answ_right, answ_all = test(outs, model)
	print('Test: {}%'.format(answ_right * 100 // answ_all))