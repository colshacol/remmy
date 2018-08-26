const __DEV__ = (global.__DEV__ = process.env.NODE_ENV === 'development')

const PRESET_ENV = [
	'@babel/preset-env',
	{
		targets: {
			node: 'current'
		},
		loose: true
	}
]

const PLUGIN_MODULE_ALIAS = [
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
]

const PRESET_STAGE_0 = ['@babel/preset-stage-0', { decoratorsLegacy: true }]

const PLUGIN_INK_PRAGMA = [
	'@babel/plugin-transform-react-jsx',
	{
		pragma: 'h'
	}
]

const PLUGIN_RUNTIME = [
	'@babel/plugin-transform-runtime',
	{
		helpers: false,
		polyfill: false,
		regenerator: true
	}
]

module.exports = api => {
	api.cache(true)

	const presets = ['@babel/preset-flow', PRESET_ENV, PRESET_STAGE_0]

	const plugins = [
		'babel-plugin-dev-expression',
		'babel-plugin-jsx-control-statements',
		'babel-plugin-transform-glob-import',
		'@babel/plugin-syntax-dynamic-import',
		PLUGIN_MODULE_ALIAS,
		PLUGIN_INK_PRAGMA
	]

	if (__DEV__) {
		plugins.push(PLUGIN_RUNTIME)
	}

	return {
		presets,
		plugins
	}
}
