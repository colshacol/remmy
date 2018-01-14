export const rules = [
	{
		test: config => config.hasOwnProperty('rootDir'),
		success: `Config has rootDir property.`,
		reason: 'No "rootDir" property found inside remmy configutation object.',
		reference: 'https://github.com/colshacol/remmy/docs/errors#01'
	},
	{
		test: config => config.hasOwnProperty('templates'),
		success: `Config has templates property.`,
		reason: 'No "templates" property found inside remmy configutation object.',
		reference: 'https://github.com/colshacol/remmy/docs/errors#02'
	},
	{
		test: config => config.hasOwnProperty('destinations'),
		success: `Config has destinations property.`,
		reason: 'No "destinations" property found inside remmy configutation object.',
		reference: 'https://github.com/colshacol/remmy/docs/errors#03'
	}
]