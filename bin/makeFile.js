const fs = require('fs')
const remmy = require('./remmy')
const path = require('path')
const log = require('./log')

module.exports = (fileName, content, dirPath) => {
  const fullPath = path.join(
    remmy.destinationPath,
    remmy.destinationName,
    !!(Array.isArray(dirPath)) ? dirPath.join('') : dirPath,
    fileName
  )

  fs.writeFileSync(fullPath, content, (err) => {
    if (err) throw err
    log(`Successfully created file: ${fullPath}`)
  })
}
