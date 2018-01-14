export const firstObject = (checks: any[]): Object | null => {
	return checks.find(check => {
		return typeof check === 'object';
	})
}