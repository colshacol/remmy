const fs = require('fs')
const path = require('path')

const [
  _node,
  _remmy,
  templateName,
  instanceName
] = process.argv

function cleanPath(pathStr) {
  if (pathStr[0] == '/') {
    pathStr = pathStr.substr(1)
  }
  if (pathStr.indexOf('./') == 0) {
    pathStr = pathStr.substr(2)
  }
  if (pathStr[pathStr.length - 1] !== '/') {
    pathStr = pathStr + '/'
  }
  return pathStr
}

module.exports = (() => {
  const remmyConfig = JSON.parse(fs.readFileSync('./remmy.json', 'utf-8'))
  const template = remmyConfig.templates[templateName]
  const nameVariable = { '$NAME': instanceName }
  const variables = Object.assign(remmyConfig.variables, nameVariable)
  const destinationPath = cleanPath(template.dest)
  const instanceExists = fs.existsSync(destinationPath + instanceName)

  return {
    templatePath: cleanPath(template.path),
    destinationName: instanceName,
    instanceExists,
    templateName,
    destinationPath,
    variables,
  }
})()
