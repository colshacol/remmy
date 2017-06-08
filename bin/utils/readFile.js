const fs = require('fs')

module.exports = (filePath) => {
  const content = fs.readFileSync('./' + filePath, 'utf-8')
  if (!!content) { return content }
}
