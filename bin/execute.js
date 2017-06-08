#! /usr/bin/env node
const fs = require('fs')
const readDir = require('recursive-readdir')

const remmy = require('./remmy')
const makeDirectory = require('./utils/makeDirectory')
const makeFile = require('./utils/makeFile')
const getFileName = require('./utils/getFileName')
const getParentDirs = require('./utils/getParentDirs')
const getFileContents = require('./utils/getFileContents')

module.exports = () => {
  readDir(remmy.templatePath).then(files => {
    makeDirectory('root')
    files.map((file) => {
      console.log(`[remmy] Beginning operations on: ${file}`)
      const fileName = getFileName(file)
      const parentDirs = getParentDirs(file)
      const contents = getFileContents(file)
      makeDirectory(parentDirs)
      makeFile(fileName, contents, parentDirs)
    })
  })
}
