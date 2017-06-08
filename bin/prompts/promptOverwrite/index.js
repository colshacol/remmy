const inquirer = require('inquirer')

const { ChoiceList } = require('../utils')
const remmy = require('../../remmy')
const actions = require('./actions')

const choices = new ChoiceList(
  { name: "Yes, please.", value: 2 },
  { name: "No, thank you.", value: 0 }
  // { name: "Rename instance.", value: 2 }
)

const message = `[remmy] ${remmy.destinationName} already exists. Overwrite?`

module.exports = () => {
  console.log('PROMPTING OVERWRITE')
  inquirer.prompt([{
    name: 'input',
    type: 'list',
    message,
    choices,
  }]).then(actions)
}
