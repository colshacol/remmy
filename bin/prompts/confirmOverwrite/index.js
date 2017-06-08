const inquirer = require('inquirer')

const { ChoiceList } = require('../utils')
const actions = require('./actions')

const choices = new ChoiceList(
  { name: "Yes, I am sure.", value: 1 },
  { name: "No, do not overwrite it.", value: 0 }
)

const message = `[remmy] This can NOT be undone. Continue overwriting?`

module.exports = () => {
  inquirer.prompt([{
    type: 'list',
    name: 'input',
    choices,
    message,
  }]).then(actions)
}
