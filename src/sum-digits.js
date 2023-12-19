const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = n.toString();

  while (result.length > 1) {
    let sumDigit = 0;
    for (let i = 0; i < result.length; i++) {
      sumDigit += +result[i];
    }
    result = sumDigit.toString();
  }

  return +result;
}

module.exports = {
  getSumOfDigits,
};
