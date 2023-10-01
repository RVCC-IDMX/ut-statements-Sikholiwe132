/*
 * stmnts-02.js
 * Language: javascript
 * Test: tests/stmnts-02.test.js
 * Path: src/stmnts-02.js
 * Arithmetic Operators

 */

/**
 * Calculates the sum of two numbers
 * @param {number} a - First number to calculate
 * @param {number} b - Second number to calculate
 * @returns {number} - The sum of the two numbers
 */
function sum(a, b) {
  return a + b;
}

/**
 * Calculates the sum of two numbers (even if they are passed as strings)
 * @param {number|string} x - First number to calculate
 * @param {number|string} y - Second number to calculate
 * @returns {number} - The sum of the two numbers
 */
function betterSum(x, y) {
  // Convert the input values to numbers, then add them
  const num1 = parseFloat(x);
  const num2 = parseFloat(y);

  // Check if either conversion resulted in NaN (Not-a-Number)
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Invalid input. Both arguments must be numbers or number-like strings.');
  }

  return num1 + num2;
}

/**
 * Calculates the remainder of two numbers, the first divided by the second
 * @param {number} number - the number to be divided
 * @param {number} divisor - the divisor of the number
 * @returns {number} - the remainder of the number and the divisor
 *
 *
 * ? computes the first operand modulo the second operand
 */
function remainder(number, divisor) {
  return number % divisor;
}
module.exports = {
  sum,
  betterSum,
  remainder,
};
