import Ink, { h, Color } from 'ink'
import Input from 'ink-text-input'

export class VariablesInput extends Ink.Component {
	state = {
		instanceName: ''
	}

	setInstanceName = value => {
		this.setState({
			instanceName: value
		})
	}

	onComplete = () => {
		this.context.appStatus.instanceName = this.state.instanceName
		this.props.onComplete(true)
	}

	render(props, state, context) {
		return (
			<div>
				<Color green>instanceName: </Color>
				<Input
					placeholder="enter instanceName here"
					value={state.instanceName}
					onChange={this.setInstanceName}
					onSubmit={this.onComplete}
				/>
			</div>
		)
	}
}
