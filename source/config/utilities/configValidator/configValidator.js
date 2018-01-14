import { firstObject } from '@utilities'
import * as configProperties from './configProperties'

export const configValidator = (config: BaseConfigType) => {
	return firstObject([
		configProperties.validator(config)(configProperties.ruleSets)
	])
}