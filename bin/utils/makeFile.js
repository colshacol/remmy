const fs = require('fs')
const remmy = require('../remmy')
const path = require('path')

module.exports = (fileName, content, dirPath) => {
  const fullPath = path.join(
    remmy.destinationPath,
    remmy.destinationName,
    !!(Array.isArray(dirPath)) ? dirPath.join('') : dirPath,
    fileName
  )

  const err = fs.writeFile(fullPath, content)
  if (!!err) { console.error('GOT ERR') }
  else { console.log(`[remmy] Successfully created file: ${fullPath}`) }
}
