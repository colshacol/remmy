export const mergeRules = (ruleSets: ValidatorRuleSetType[]) => {
  const rules = ruleSets.map(Object.values);
  return Object.values(ruleSets).reduce((final, rules) => {
    final = [...final, ...rules];
    return final;
  }, []);
};
