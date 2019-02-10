const __DEV__ = (global.__DEV__ = process.env.NODE_ENV === 'development')

module.exports = api => {
	api.cache(false)

	const presets = [
		'@babel/preset-flow',
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current'
				},
				loose: true
			}
		]
	]

	const plugins = [
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-class-properties',
		'babel-plugin-dev-expression',
		'babel-plugin-jsx-control-statements',
		[
			'babel-plugin-module-resolver',
			{
				root: ['./source'],
				alias: {
					'@utilities': './source/utilities',
					'@components': './source/components',
					'@features': './source/features',
					'@scenes': './source/scenes',
					'@types': './flow-typed/custom-definitions'
				}
			}
		],
		[
			'@babel/plugin-transform-react-jsx',
			{
				pragma: 'h'
			}
		]
	]

	return {
		presets,
		plugins
	}
}
