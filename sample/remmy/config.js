// remmy create -t stateful -d components
const path = require('path')

export default {
  rootDir: path.resolve(__dirname, "../"),

  templates: {
    stateful: {
      sourcePath: "<rootDir>/remmy/templates/stateful"
    },
    stateless: {
      sourcePath: "<rootDir>/templates/stateless"
    }
  },

  destinations: {
    components: "<rootDir>/source/components",
    features: "<rootDir>/source/features",
    scenes: "<rootDir>/source/scenes"
  }
};
