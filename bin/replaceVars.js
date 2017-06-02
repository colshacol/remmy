const remmy = require('./remmy')

module.exports = (content) => {
  return Object.entries(remmy.variables).reduce((content, pair) => {
    if (!!content) {
      return content.split(pair[0]).join(pair[1])
    } else { return '' }
  }, content)
}
