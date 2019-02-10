import path from 'path'
import Ink, { h, Color } from 'ink'
import Select from '@components/SelectInput'
import { trimPathToRootDir, lastObject } from '@utilities'

const config = require(path.resolve(process.cwd(), 'package.json')).remmy

const filterTruthy = (target: any[]) => {
	return target.filter(item => !!item)
}

const Item = props => {
	return (
		<Color blue={props.isSelected}>
			<span>{props.label}</span>
		</Color>
	)
}

const generateAcceptanceOption = dirPath => {
	return (
		dirPath && {
			value: dirPath,
			label: 'ACCEPT: ' + trimPathToRootDir(dirPath),
			variant: 'ACCEPT'
		}
	)
}

const generatePreviousOption = dirPath => {
	return (
		dirPath && {
			value: dirPath,
			label: 'PREVIOUS: ' + trimPathToRootDir(dirPath),
			variant: 'PREVIOUS'
		}
	)
}

const generateOption = (dirPath: string) => {
	return {
		label: '  /' + dirPath.substr(dirPath.lastIndexOf('/') + 1),
		value: path.resolve(process.cwd(), dirPath)
	}
}

export class DirectorySelection extends Ink.Component {
	previousStates = []

	state = {
		selectedDirectory: config.rootDir,
		previousDirectory: null
	}

	get options() {
		return filterTruthy([
			generatePreviousOption(this.state.previousDirectory),
			generateAcceptanceOption(this.state.selectedDirectory),
			...this.context.config._paths
		])
	}

	handleSelection = option => {
		if (option.variant === 'ACCEPT') {
			this.context.appStatus.selectedDirectory = option.value
			return this.context.onComplete(true)
		}

		if (option.variant === 'PREVIOUS') {
			return this.restorePreviousState()
		}

		this.previousStates.push(this.state)
		this.setPreviousDirectory(this.state.selectedDirectory)
		this.setSelectedDirectory(option.value)
	}

	restorePreviousState = () => {
		const previousState = this.previousStates.pop()

		return this.setState({
			...previousState
		})
	}

	setPreviousDirectory = dirPath => {
		this.setState({
			previousDirectory: dirPath
		})
	}

	setSelectedDirectory = dirPath => {
		this.setState({
			selectedDirectory: dirPath
		})
	}

	render(props, state, context) {
		return (
			<div>
				<Select
					items={this.options}
					onSelect={this.handleSelection}
					itemComponent={Item}
				/>
			</div>
		)
	}
}
