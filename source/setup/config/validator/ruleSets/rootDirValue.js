export const rules = [
	{
		test: config => typeof config.rootDir === 'string',
		reason: 'config.rootDir must be a string.',
		reference: 'https://github.com/colshacol/remmy/'
	}
]