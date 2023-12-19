const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let currentCounter = 0;
  for (let i = 0; i < str.length; i++) {
    currentCounter++;
    if (str[i] !== str[i + 1]) {
      if (currentCounter === 1) {
        result += str[i];
      } else {
        result += currentCounter + str[i];
      }

      currentCounter = 0;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
