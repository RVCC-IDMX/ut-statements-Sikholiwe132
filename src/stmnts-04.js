/*
 * stmnts-04.js
 * Language: javascript
 * Test: tests/stmnts-04.test.js
 * Path: src/stmnts-04.js
 * Temperature Calculator
 */

/**
 * Converts a temperature in Fahrenheit to Celsius rounded to 2 decimal places
 * @param {number} fahrenheit - temperature in Fahrenheit
 * @returns {number} - temperature in Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
  // Calculate the temperature in Celsius
  const celsius = (fahrenheit - 32) * (5 / 9);

  // Round the result to 2 decimal places
  const roundedCelsius = parseFloat(celsius.toFixed(2));

  return roundedCelsius;
}

/**
 * Converts a temperature in Celsius to Fahrenheit rounded to 2 decimal places
 * @param {number} celsius - temperature in Celsius
 * @returns {number} - temperature in Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  // Calculate the temperature in Fahrenheit
  const fahrenheit = (celsius * 9 / 5) + 32;

  // Round the result to 2 decimal places
  const roundedFahrenheit = parseFloat(fahrenheit.toFixed(2));

  return roundedFahrenheit;
}

module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};
