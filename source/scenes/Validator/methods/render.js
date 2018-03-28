import Ink, { h, Text } from 'ink'
import { BlankLine, Space, Tab } from 'ink-spaces'
import Console, { LogCatcher } from 'ink-console'
import symbols from 'log-symbols'

import { Validation } from '../components/Validation'

export const render = self => (props, state, context) => {
	self.confirmCompletion()

	return (
		<div>
			<Text>Validating User Config...</Text>
			<BlankLine />
			<BlankLine />
			<For each="rule" of={self.rules} index="index">
				<Validation status={self.statusOf(index)} rule={rule} />
			</For>
		</div>
	)
}
