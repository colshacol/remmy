import Ink, { h, Text } from 'ink'
import './setup/types'

import { options } from './setup/options'
import { userConfig } from './setup/config'

import { Provider } from '@components/Provider'
import { App } from './App'

Ink.render(
	<Provider config={userConfig} options={options}>
		<App />
	</Provider>
)
