const inquirer = require('inquirer')

class ChoiceList extends Array {
  constructor(...choices) {
    super(...choices.reduce((arr, item) => {
      return [ ...arr, new inquirer.Separator(), item]
    }, []))
  }
}

module.exports = {
  ChoiceList,
}
