import Ink, { h, Color } from 'ink'

import { trimPathToRootDir, lastObject } from '@utilities'
import { AutoComplete } from '@components/AutoComplete'

export class DirectorySelection extends Ink.Component {
	state = {
		path: ''
	}

	outputOptions = this.props.context.outputOptions
	selectedItem = ''

	setPath = path => {
		if (path.endsWith('\t')) {
			return this.setState({ path: this.selectedItem })
		}

		this.setState({ path })
	}

	accept = item => {
		this.props.context.appStatus.outputDir = item.value
		return this.props.onComplete(true)
	}

	setSelected = item => {
		this.selectedItem = item.label
	}

	render(props, state) {
		return (
			<div>
				<Color green>{'Output Directory: '}</Color>
				<AutoComplete
					placeholder={'type to fuzzy search directories'}
					onSelectionChange={this.setSelected}
					items={this.outputOptions}
					onChange={this.setPath}
					onSubmit={this.accept}
					value={state.path}
				/>
			</div>
		)
	}
}
