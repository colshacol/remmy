const fs = require('fs')
const path = require('path')
const makeDir = require('mkdirp')

const remmy = require('../remmy')

const {
  destinationPath: destPath,
  destinationName: destName,
} = remmy

function createDir(parentPath, outPath) {
  const dirPath = path.join(parentPath, outPath)
  if (!fs.existsSync(outPath)) {
    console.log(`[remmy] Creating directory: ${dirPath}`)
    makeDir.sync(dirPath)
  }
  return dirPath
}

module.exports = (dirs) => {
  if (dirs.length < 1) {

  }

  if (dirs === 'root') {
    return createDir(`${destPath}${destName}`, '')
  }

  if (typeof dirs === 'string') {
    return createDir(`${destPath}${destName}`, dirs)
  }

  return dirs.reduce((parentPath, dir, i) => {
    if (i > 10) { return false }
    return createDir(parentPath, dir)
  }, `${destPath}${destName}`)
}
