const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = String(n);
  let numberArray = [];
  for (let i = 0; i < number.length; i++) {
    numberArray.push(
      +(number.slice(0, i) + number.slice(i + 1, number.length))
    );
  }
  return Math.max.apply(null, numberArray);
}

module.exports = {
  deleteDigit,
};
