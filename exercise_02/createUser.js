/**
 * Define 'createUser' function and signature (JSDocs)
 *
 * input:
 *  - email: string
 *  - onError: function
 *  - onSuccess: function
 *
 * It will generate a random number in between 0 and 1
 * If random number is less than 0.5 or email is empty, then call onError callback
 * Otherwise, call onSuccess function
 *
 * output
 *  - string
 */

/**
 * 
 * @param {string} email
 * @param {Function} onError
 * @param {Function} onSuccess
 */

export const createUser = (email, onError, onSuccess) => {
    if (typeof email !== "string" || email === "") {
        return onError();
    }
    return onSuccess(email);
}