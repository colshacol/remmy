#! /usr/bin/env node
const remmy = require('./remmy')
const prompts = require('./prompts')
const execute = require('./execute')

if (remmy.instanceExists) { prompts.promptOverwrite() }
else { execute() }
