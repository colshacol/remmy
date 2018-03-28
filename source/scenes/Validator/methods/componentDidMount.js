export const componentDidMount = self => () => {
	self.rules.forEach((rule, index) => {
		setTimeout(() => {
			self.setValidation(rule.test(self.context.config), index)
		}, 200 * index)
	})
}
