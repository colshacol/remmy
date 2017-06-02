const replaceVars = require('./replaceVars')

module.exports = (filePath) => {
  return replaceVars(
    filePath.substr(filePath.lastIndexOf('/') + 1)
  )
}
