import userConfig from '../../../sample/remmy/config.js'
// import { validator } from './validator'

export const config = ((config) => {
	return {
		// validity: validator(config),
		...config
	}
})(userConfig)

