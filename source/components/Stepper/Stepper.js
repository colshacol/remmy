import Ink, { h, Color } from 'ink'

import { Provider } from '@components/Provider'

const exitApplication = () => {
	process.exit(0)
}

export class Stepper extends Ink.Component {
	state = {
		step: 0
	}

	data = {
		...this.props.provide
	}

	stepUp = () => {
		this.props.onStepUp(this.state.step)
		this.setState({
			step: this.state.step + 1
		})
	}

	get currentStep() {
		return this.state.step === this.props.steps.length
			? exitApplication
			: this.props.steps[this.state.step]
	}

	render(props, state, context) {
		const CurrentStep = this.currentStep

		return <CurrentStep onComplete={this.stepUp} context={this.data} />
	}
}
