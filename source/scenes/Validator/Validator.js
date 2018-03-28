import Ink from 'ink'

import { rules as configProperties } from './ruleSets/configProperties'
import { rules as rootDirValue } from './ruleSets/rootDirValue'
import * as methods from './methods'

type Props = {
	onComplete(): void
}

export class Validator extends Ink.Component<Props> {
	rules = [...configProperties, ...rootDirValue]

	state = {
		validations: [],
		failures: []
	}

	componentDidMount = methods.componentDidMount(this)
	statusOf = methods.statusOf(this)
	setValidation = methods.setValidation(this)
	confirmCompletion = methods.confirmCompletion(this)
	render = methods.render(this)

	get allRulesPassed() {
		return this.state.validations.length === this.rules.length
	}

	get rulesCompleted() {
		return this.state.validations.length + this.state.failures.length === this.rules.length
	}
}
