import './setup/types'

import Ink, { h, Text } from 'ink'
import Box from 'ink-box'
import path from 'path'
import cli from './cli'
import set from 'set-value'
import get from 'get-value'

import getUserConfig from '@utilities/getUserConfig'
import { Provider } from '@components/Provider'
import { Remmy } from './Remmy'

const DEFAULT_STATUS = {
	configValidation: 'PENDING',
	configError: null,
	instanceName: null,
	templateName: null,
	outputDir: null
}

const rootDirValue = cli.pkg.remmy.rootDir

cli.pkg.remmy.rootDir = path.resolve(process.cwd(), rootDirValue)
cli.pkg.remmy.appStatus = DEFAULT_STATUS

Ink.render(
	<Provider
		{...cli}
		templates={cli.pkg.remmy.templates}
		rootDir={cli.pkg.remmy.rootDir}
		appStatus={DEFAULT_STATUS}
		config={cli.pkg.remmy}
	>
		<Remmy />
	</Provider>
)
