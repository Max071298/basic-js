const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let minTurns = 3;
  for (let i = 3; i <= disksNumber; i++) {
    minTurns = minTurns * 2 + 1;
  }
  return {
    turns: minTurns,
    seconds: Math.floor(minTurns / (turnsSpeed / 3600)),
  };
}

module.exports = {
  calculateHanoi,
};
