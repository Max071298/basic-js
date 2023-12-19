const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  options.addition === null
    ? (options.addition = String(options.addition))
    : "";
  let addition = (
    String(options.addition ?? "") + String(options.additionSeparator || "|")
  ).repeat(options.additionRepeatTimes || 1);

  console.log(addition);

  let result = (
    str +
    addition.substring(
      0,
      addition.length - (options.additionSeparator || "0").length
    ) +
    (options.separator || "+")
  ).repeat(options.repeatTimes || 1);

  return result.substring(0, result.length - (options.separator || "0").length);
}

module.exports = {
  repeater,
};
