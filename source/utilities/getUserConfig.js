import path from 'path'

const getUserConfig = () => {
	const { config } = require(path.resolve(
		process.cwd(),
		'sample/remmy/config.js'
	))
	return config
}

export default getUserConfig
