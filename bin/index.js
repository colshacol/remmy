#! /usr/bin/env node
const fs = require('fs')
const path = require('path')
const makeDir = require('mkdirp')
const readDir = require('recursive-readdir')
const inquirer = require('inquirer')

const remmy = require('./remmy')
const makeDirectory = require('./makeDirectory')
const makeFile = require('./makeFile')
const getFileName = require('./getFileName')
const getParentDirs = require('./getParentDirs')
const getFileContents = require('./getFileContents')
const log = require('./log')

if (fs.existsSync(remmy.destinationPath + remmy.destinationName)) {
  inquirer.prompt([{
    type: 'list',
    name: 'instanceOverwrite0',
    choices: [{ name: "Yes, please.", value: true }, new inquirer.Separator(), { name: "WHAT?! Hell no!", value: false }],
    message: `![remmy] Directory for a "${remmy.templateName}" named "${remmy.destinationName}"\
      at "${remmy.destinationPath + remmy.destinationName}" already exists. Overwrite it?`
  }]).then((answer) => {
    if (!!answer.instanceOverwrite0) {
      inquirer.prompt([{
        type: 'list',
        name: 'instanceOverwrite1',
        choices: [{ name: "Yup.", value: true }, new inquirer.Separator(), { name: "Eh, maybe not.", value: false }],
        message: `![remmy] Are you absolutely sure? This can not be undone.`
      }]).then((answer) => {
        if (!!answer.instanceOverwrite1) {
          execute()
        }
      })
    }
  })
} else {
  execute()
}

function execute() {
  readDir(remmy.templatePath).then(files => {
    makeDirectory('root')
    files.map((file) => {
      log(`Beginning operations on: ${file}`)
      const fileName = getFileName(file)
      const parentDirs = getParentDirs(file)
      const contents = getFileContents(file)
      makeDirectory(parentDirs)
      makeFile(fileName, contents, parentDirs)
    })
  })
}
