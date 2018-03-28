import Ink, { h, Text } from 'ink'
import { BlankLine, Space, Tab } from 'ink-spaces'
import SelectInput from 'ink-select-input'
import dir from 'node-dir'

import { Provider } from '@components/Provider'
import { Validator } from '@scenes/Validator'
import * as Errors from '@components/Errors'

const excludeDir = /(\.git|node_modules)/

const dirs = (config, root = './') => {
	return new Promise((resolve, reject) => {
		dir.subdirs(config.rootDir, (err, subdirs) => {
			if (err) throw err
			const dirs = new Map()

			subdirs.filter(d => !d.match(excludeDir)).forEach((d, i) => {
				dirs.set(i, new Set())
				const dd = dirs.get(i)
				d
					.replace(config.rootDir, '.')
					.replace('./', '')
					.split('/')
					.reduce((final, dir, ii) => {
						ii === 0 && dirs.set(ii)
						final += `${dir}/`
						dirs.get(ii) ? dirs.get(ii).add(final) : dirs.set(ii, final)
						return final
					}, '')
			})

			console.log({ dirs })

			resolve(dirs)
		})
	})
}

export class App extends Ink.Component {
	chosenTemplate = ''

	state = {
		validated: false,
		templateChosen: false
	}

	get templates() {
		return Object.keys(this.context.config.templates).map(template => ({
			label: template,
			value: template
		}))
	}

	chooseTemplate = async template => {
		this.chosenTemplate = template.label
		this.dirNames = await dirs(this.context.config)

		this.setState(state => ({
			templateChosen: true
		}))
	}

	render(props, state, context) {
		return (
			<div>
				<Choose>
					<When condition={!state.validated}>
						<Validator onComplete={this.passValidation} />
					</When>
					<When condition={state.validated && !state.templateChosen}>
						<Text green>Config is valid.</Text>
						<Space />
						<Text>Which template would you like to use?</Text>
						<BlankLine />
						<BlankLine />
						<SelectInput items={this.templates} onSelect={this.chooseTemplate} />
					</When>
					<When condition={state.templateChosen}>
						<Text>Navigate to where you would like the clone to live.</Text>
						<BlankLine />
						<BlankLine />
						<SelectInput items={this.dirNames} onSelect={this.chooseTemplate} />
					</When>
				</Choose>
			</div>
		)
	}

	passValidation = () => {
		this.setState(state => ({
			validated: true
		}))
	}
}
