import test from 'ava'

import getDirectoryNames from '../getDirectoryNames'

test('getDirectoryNames', t => {
	const names = getDirectoryNames('./sample')
	const expectedNames = ['remmy']

	t.deepEqual(expectedNames, names)
})
