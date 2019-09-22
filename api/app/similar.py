import numpy as np
import pandas as pd


def similar():
	data = pd.read_csv('app/static/data/oil/train.csv')

	data[' depth.  m '] = (data[' depth.  m '] - data[' depth.  m '].min()) / (data[' depth.  m '].max() - data[' depth.  m '].min())

	sc_all = set(data[' well  id '])

	sc = {i: [[0. for u in range(12)] for j in range(10)] for i in sc_all}

	for i in data.iterrows():
		sc[i[1][' well  id ']][int(i[1][' depth.  m '] * 10) // 10] = list(np.array(i[1][[
			'bk', 'GZ1', 'GZ2', 'GZ3', 'GZ4', 'GZ5',
			'GZ7', 'DGK', 'NKTD', 'NKTM', 'NKTR', 'ALPS',
		]]))

	scs = sorted(list(sc_all))

	matr = [[0 for i in range(len(scs))] for j in range(len(scs))]

	for i in scs:
		for j in scs:
			xxx = np.linalg.norm(np.array(sc[i]) - np.array(sc[j]))
			matr[scs.index(i)][scs.index(j)] = xxx
			# print('{:5f}\t\t'.format(xxx), end='')

		# print('-' * 100)

	st = np.array(matr).std()

	d = {i: [] for i in scs}

	for i, el in enumerate(matr):
		print(i, end=': ')

		for j, le in enumerate(el):
			if le < st and i != j:
				d[scs[i]].append(j)
				print(j, end=', ')

		print()

	dd = 0
	di = 0
	print(d)
	for i in d:
		if len(d[i]) > dd:
			dd = len(d[i])
			di = i

	return [int(i) for i in d[di]], list(set([int(i) for i in d if not len(d[i])]))[:7]