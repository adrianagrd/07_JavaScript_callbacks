/**
 * @param {string} value
 * @returns {boolean}
 */

export const validateString = (value) => {
  if (value === undefined || typeof value !== "string" || value === "") {
    return false;
  }
  if (typeof value === "string") {
    return true;
  }
};
