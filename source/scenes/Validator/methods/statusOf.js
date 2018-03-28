export const statusOf = self => index => {
	return self.state.validations.includes(index)
		? 'validations'
		: self.state.failures.includes(index) ? 'failures' : 'pending'
}
