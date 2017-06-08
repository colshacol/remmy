const replaceVars = require('./replaceVars')
const readFile = require('./readFile')

module.exports = (filePath) => {
  const content = readFile(filePath)
  return replaceVars(content)
}
