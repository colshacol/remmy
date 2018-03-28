export const setValidation = self => (result: boolean, index: number) => {
	const which = result ? 'validations' : 'failures'

	self.setState(state => ({
		[which]: [Number(index), ...state[which]]
	}))
}
