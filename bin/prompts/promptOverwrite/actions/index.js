
const actions = [
  require('./action0'),
  require('./action1'),
  require('./action2')
]

module.exports = ({ input }) => actions[input]()
