const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = "") {
    this.chain.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      this.chain[position - 1] === undefined
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain[position - 1] = "";
      this.chain = this.chain.filter((item) => item !== "");
      return this;
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join("~~");
    this.chain = [];
    return res;
  },

  chain: [],
};

module.exports = {
  chainMaker,
};
