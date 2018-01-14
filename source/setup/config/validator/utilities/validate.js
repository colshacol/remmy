import { validity } from './validity';

export const validate = config => rules => {
  for (const rule of rules) {
    return rule.test(config) || validity(rule);
  }
};