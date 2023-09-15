const { parseNumber } = require("./helper.js");

/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 *
 * @returns {Array}
 */
function generateFibonacciUsingLoop(sequence) {
  sequence = parseNumber(sequence);

  let result = [];

  for (let index = 0; index < sequence; index++) {
    if ([0, 1].includes(index)) {
      result.push(index);
      continue;
    }

    let lastIndex = result.length - 1;
    let currentNumber = result[lastIndex] + result[lastIndex - 1];

    result.push(currentNumber);
  }

  return result;
}

/**
 * Create an array filled by fibonacci sequence using recursive way.
 *
 * @param {number} sequence
 * @param {Array} result
 * @param {number} index
 *
 * @returns {Array}
 */
function generateFibonacciUsingRecursive(sequence, result = [], index = 0) {
  sequence = parseNumber(sequence);

  if (sequence - index <= 0) {
    return result;
  }

  if ([0, 1].includes(index)) {
    result.push(index);
    index++;

    return generateFibonacciUsingRecursive(sequence, result, index);
  }

  let lastIndex = result.length - 1;
  let currentNumber = result[lastIndex] + result[lastIndex - 1];

  result.push(currentNumber);
  index++;

  return generateFibonacciUsingRecursive(sequence, result, index);
}

module.exports = {
  generateFibonacciUsingLoop,
  generateFibonacciUsingRecursive,
};
