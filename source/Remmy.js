import Ink, { h, Color } from 'ink'

import { Provider } from '@components/Provider'
import { Stepper } from '@components/Stepper'
import { ConfigVerification } from './steps/ConfigVerification'
import { VariablesInput } from './steps/VariablesInput'
import { DirectorySelection } from './steps/DirectorySelection'
import { TemplateSelection } from './steps/TemplateSelection'
import { Confirmation } from './steps/Confirmation'

export class Remmy extends Ink.Component {
	componentDidUnmount() {
		process.exit(0)
	}

	onStepUp = (step: number) => {
		// this.context.
	}

	render(props, state, context) {
		const { configValidation, configError } = this.context.appStatus

		return (
			<div>
				<Choose>
					<When condition={configValidation === 'PASSED'}>
						<div>
							<Color green>Config validation passed.</Color>
							<br />
						</div>
					</When>
					<When condition={configValidation === 'FAILED'}>
						<div>
							<Color red>oooooConfig validation failed:</Color>
							<br />
							<Color red>error: '{configError}'</Color>
						</div>
					</When>
				</Choose>
				<If condition={['PENDING', 'PASSED'].includes(configValidation)}>
					<Stepper
						provide={context}
						onStepUp={this.onStepUp}
						steps={[
							ConfigVerification,
							TemplateSelection,
							VariablesInput,
							DirectorySelection,
							Confirmation
						]}
					/>
				</If>
			</div>
		)
	}
}
