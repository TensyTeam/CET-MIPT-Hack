import joblib
import numpy as np


def predict(x, compilation):
	# Обработка данных

	x = [x] # [[1] + x]

	# Загрузка модели

	model = joblib.load('data/{}/model.txt'.format(compilation))

	# Прогноз

	res = model.predict(x)[0] # _proba

	return res


if __name__ == '__main__':
	x = np.loadtxt('data/{}/test.csv'.format('oil'), delimiter=',', skiprows=1)

	# print(x.shape)
	# x = x.T

	# x = dataset[:, outs:]
	# y = dataset[:, :outs]

	# model = LogisticRegression(C=1000.0, random_state=0)
	# model.fit(x, y)

	with open('result.csv', 'w') as file:
		for i in x:
			print(predict(i, 'oil'), file=file)