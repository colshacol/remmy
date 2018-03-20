export const statusOf = self => index => {
	return index in self.state.validations
		? 2
		: index in self.state.failures
			? 0
			: 1;
}