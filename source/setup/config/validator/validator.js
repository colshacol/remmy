import { validate } from './utilities/validate';
import { firstObject } from "@utilities";
import ruleSets from "./ruleSets/*.js";

export const validator = (config: UserConfigType) => {
  return firstObject(Object.values(ruleSets).map(validate));
};
