const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else
    return arr
      .reduce((arr, item, ind, array) => {
        if (typeof item === "string") {
          if (item === "--double-next") {
            arr.push(array[ind + 1] || "");
          } else if (item === "--double-prev") {
            arr.push(arr.at(-1) || "");
          } else if (item !== "--discard-next" && item !== "--discard-prev") {
            arr.push(item);
          }
        } else if (typeof item !== "string") {
          if (array[ind - 1] === "--discard-next") {
            arr.push("");
          } else if (array[ind + 1] === "--discard-prev") {
            arr.push("");
          } else arr.push(item);
        }

        return arr;
      }, [])
      .filter((item) => item !== "");
}

module.exports = {
  transform,
};
