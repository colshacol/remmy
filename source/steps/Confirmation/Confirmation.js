import Ink, { h, Color } from 'ink'
import TextInput from '@components/TextInput'
import { getMatchingFileNames } from '@utilities'
import copyDir from 'copy-dir'
import replace from 'replace'
import path from 'path'
import fs from 'fs'

export class Confirmation extends Ink.Component {
	state = {
		input: ''
	}

	componentDidMount() {
		const { appStatus, config } = this.context
		const outputDir = (this.outputDir = path.join(
			appStatus.outputDir,
			appStatus.instanceName
		))
		// console.log(this.context.appStatus)
		copyDir.sync(appStatus.templateDir, outputDir)

		replace({
			regex: config.variables.instanceName,
			replacement: appStatus.instanceName,
			paths: [outputDir],
			recursive: true,
			silent: true
		})

		const renamePaths = getMatchingFileNames(
			outputDir,
			config.variables.instanceName
		)

		renamePaths.forEach(file => {
			fs.renameSync(
				file,
				file.replace(config.variables.instanceName, appStatus.instanceName)
			)
		})
		this.setState(
			{
				done: true
			},
			this.props.onComplete
		)
	}

	render(props, state) {
		return (
			<div>
				<Choose>
					<When condition={!state.done}>
						<Color blue>Doing the work!</Color>
					</When>
					<Otherwise>
						<Color green>The deed is done.</Color>
						<br />
						<Color green>{this.outputDir}</Color>
					</Otherwise>
				</Choose>
			</div>
		)
	}
}
