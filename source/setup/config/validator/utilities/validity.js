export const validity = ruleSet => {
	return {
		reason: ruleSet.reason,
		reference: ruleSet.preference
	}
}