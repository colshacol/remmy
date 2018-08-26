import Ink, { h, Color } from 'ink'

import { trimPathToRootDir, lastObject, getDirectoryNames } from '@utilities'
import { AutoComplete } from '@components/AutoComplete'
import Scrollbar from 'ink-scrollbar'

const getDirectories = rootDir => {
	return getDirectoryNames(rootDir, true).map(name => {
		return {
			label: trimPathToRootDir(name),
			value: name
		}
	})
}

export class DirectorySelection extends Ink.Component {
	state = {
		path: trimPathToRootDir(this.props.context.rootDir)
	}

	directories = getDirectories(this.props.context.rootDir)
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
					items={this.directories}
					onChange={this.setPath}
					onSubmit={this.accept}
					value={state.path}
				/>
			</div>
		)
	}
}
