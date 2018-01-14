export const rules = [
	{
		test: config => typeof config.rootDir === 'string',
		title: `Config has rootDir property.`,
		reason: 'config.rootDir must be a string.',
		reference: 'https://github.com/colshacol/remmy/'
	}
]