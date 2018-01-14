export const firstObject = (checks: any[]): Object | void => {
	return checks.find(check => {
		return typeof check === 'object';
	})
}