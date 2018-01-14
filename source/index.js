import { h, render, Component, Text } from "ink";

import { config } from './config';
import * as Errors from '@features/Errors'

class Remmy extends Component {
	state = {
		loading: true
	}

	render(props, state) {
		return (
			<div>
				<Choose>
					<When condition={!props.config.validity}>
						<Text green>
							Config is valid: Prompt which template to use.
						</Text>
					</When>
					<Otherwise>
						<Errors.InvalidConfig
							reason={props.config.validity.reason}
							reference={props.config.validity.reference}
						/>
					</Otherwise>
				</Choose>
			</div>
		)
	}
}

render(<Remmy config={config} />)

