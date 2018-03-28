export const confirmCompletion = self => () => {
	if (self.rulesCompleted) {
		self.allRulesPassed ? self.props.onComplete() : setTimeout(() => process.exit(), 1000)
	}
}
