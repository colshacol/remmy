import userConfig from '../../sample/remmy/config.js'
import { configValidator } from './utilities'

export const config = ((config) => {
	return {
		validity: configValidator(config),
		...config
	}
})(userConfig)

