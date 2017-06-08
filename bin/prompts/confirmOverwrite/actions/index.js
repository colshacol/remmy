
const actions = [
  require('./action0'),
  require('./action1')
]

module.exports = ({ input }) => actions[input]()
