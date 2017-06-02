const remmy = require('./remmy')

module.exports = (filePath) => {
  const dirExp = new RegExp(/([\w]*)\//g)
  const parentDirs = filePath.replace(
    remmy.templatePath,
    remmy.destinationPath
  ).match(dirExp)

  const destinationDirs = remmy.destinationPath.match(dirExp)
  return parentDirs.filter(dir => {
    return !destinationDirs.includes(dir)
  })
}
