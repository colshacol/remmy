export const rules = [
	{
		test: config => config.hasOwnProperty('rootDir'),
		reason: 'No "rootDir" property found inside remmy configutation object.',
		reference: 'https://github.com/colshacol/remmy/docs/errors#01'
	},
	{
		test: config => config.hasOwnProperty('templates'),
		property: 'templates',
		reason: 'No "templates" property found inside remmy configutation object.',
		reference: 'https://github.com/colshacol/remmy/docs/errors#02'
	},
	{
		test: config => config.hasOwnProperty('destinations'),
		reason: 'No "destinations" property found inside remmy configutation object.',
		reference: 'https://github.com/colshacol/remmy/docs/errors#03'
	}
]