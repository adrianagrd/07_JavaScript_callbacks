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
 */

export const transformStringToCollection = (value, onError, onSuccess) => {
    if (typeof value !== "string" || value === "") {
        return onError();
    }
    return onSuccess(value); 
};

