export const validator = (config) => (ruleSets) => {
	for (const ruleSet of ruleSets) {
		if (!config.hasOwnProperty(ruleSet.property)) {
			return {
				reason: ruleSet.reason,
				reference: ruleSet.reference
			}
		}
	}
}