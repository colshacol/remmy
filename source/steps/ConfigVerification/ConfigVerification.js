import Ink, { h, Color } from 'ink'

const PENDING = 'PENDING'
const PASSED = 'PASSED'
const FAILED = 'FAILED'

const verifications = [
	[config => 'variables' in config, 'no variables in config'],
	[
		config => 'instanceName' in config.variables,
		'no instanceName in config.variables'
	],
	[
		config => typeof config.variables.instanceName === 'string',
		'instanceName is not a string'
	],
	[config => 'rootDir' in config, 'no rootDir in config'],
	[config => typeof config.rootDir === 'string', 'rootDir is not a string']
]

export class ConfigVerification extends Ink.Component {
	componentDidMount() {
		this.verify(this.context.config)
		this.props.onComplete(true)
	}

	state = {
		verificationStep: 0
	}

	results = []

	verify = config => {
		const error = verifications.reduce((final, test) => {
			if (final == null) return final

			final = test[0](config) ? final : test[1]
		}, null)

		this.context.appStatus.configValidation = error ? FAILED : PASSED
		this.context.appStatus.configError = error
	}

	render(props, state, context) {
		return (
			<div>
				<Color green>Validating configuration.</Color>
			</div>
		)
	}
}
