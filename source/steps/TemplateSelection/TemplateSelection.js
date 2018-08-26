import Ink, { h, Color } from 'ink'

import { trimPathToRootDir, lastObject, getDirectoryNames } from '@utilities'
import { AutoComplete } from '@components/AutoComplete'
import Scrollbar from 'ink-scrollbar'

const getDirectories = rootDir => {
	// console.log(rootDir)
	return getDirectoryNames(rootDir, false).map(name => {
		return {
			label: trimPathToRootDir(name),
			value: name
		}
	})
}

export class TemplateSelection extends Ink.Component {
	state = {
		template: ''
	}

	templates = getDirectories(this.props.context.templates, false)
	selectedItem = ''

	setTemplate = template => {
		if (template.endsWith('\t')) {
			return this.setState({ template: this.selectedItem })
		}

		this.setState({ template })
	}

	accept = item => {
		this.props.context.appStatus.templateDir = item.value
		return this.props.onComplete(true)
	}

	setSelected = item => {
		this.selectedItem = item.label
	}

	render(props, state) {
		return (
			<div>
				<Color green>{'Template to use: '}</Color>
				<AutoComplete
					onSelectionChange={this.setSelected}
					items={this.templates}
					onChange={this.setTemplate}
					onSubmit={this.accept}
					value={state.template}
				/>
			</div>
		)
	}
}
