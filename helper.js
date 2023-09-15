/**
 * @param {*} value
 * @returns {number}
 */
function parseNumber(value) {
  value = Number(value);

  if (isNaN(value) || value < 0) {
    throw new Error("n must be a number and bigger or equal than 0.");
  }

  return value;
}

module.exports = { parseNumber };
