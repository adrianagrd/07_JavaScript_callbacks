import { validateString } from "../helpers/validateString.js";

/**
 * Define 'transformStringToArray' function and signature (JSDocs)
 *
 * input:
 *  - value: any
 *  - onError: function
 *  - onSuccess: function
 *
 * If received value is not a string or it is an empty string, then call onError callback
 * Otherwise, call onSuccess function
 *
 * output
 *  - array
 */

/**
 *
 * @param {*} value
 * @param {Function} onError
 * @param {Function} onSuccess
 * @return {Array}
 */

export const transformStringToArray = (value, onError, onSuccess) => {
  if (!validateString(value)) {
    return onError();
  }
  return onSuccess(value);
};
