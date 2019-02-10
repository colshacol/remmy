#!/usr/bin/env node

import Ink, { h, Text } from 'ink'
import path from 'path'
import cli from './cli'
import getPaths from './getPaths'

import { Provider } from '@components/Provider'
import { Remmy } from './Remmy'

const DEFAULT_STATUS = {
	configValidation: 'PENDING',
	configError: null,
	instanceName: null,
	templateName: null,
	outputDir: null
}

const pkg = require(process.cwd() + '/package.json')
const rootDir = path.resolve(process.cwd(), pkg.remmy.rootDir)
const templates = path.resolve(process.cwd(), pkg.remmy.templates)
const { outputOptions, inputOptions } = getPaths(rootDir, templates)
const appStatus = DEFAULT_STATUS

Ink.render(
	<Provider
		{...cli}
		pkg={pkg}
		config={pkg.remmy}
		rootDir={rootDir}
		templates={templates}
		outputOptions={outputOptions}
		inputOptions={inputOptions}
		appStatus={appStatus}
	>
		<Remmy />
	</Provider>
)

// {
// 	templatesPath: 'src/_templates',
// 	sourcePath: 'src',

// }
