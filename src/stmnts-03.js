/*
 * stmnts-03.js
 * Language: javascript
 * Test: tests/stmnts-03.tests.js
 * Path: src/stmnts-03.js
 * Arithmetic Expressions

/**
 * Calculates the perimeter of the rectangle rounded to 2 decimal places
 * @param {number} width - the width of the rectangle
 * @param {number} height - the height of the rectangle
 * @returns {number} - the perimeter of the rectangle rounded to 2 decimal places
 *
 */

function rectanglePerimeter(width, height) {
  // Calculate the perimeter
  const perimeter = 2 * (width + height);

  // Round the result to 2 decimal places
  const roundedPerimeter = parseFloat(perimeter.toFixed(2));

  return roundedPerimeter;
}

/**
 * Calculates the area of a rectangle rounded to 2 decimal places
 * @param {number} width - the width of the rectangle
 * @param {number} height - the height of the rectangle
 * @returns {number} - the area of the rectangle rounded to 2 decimal places
 *
 */
function rectangleArea(width, height) {
  // Calculate the area
  const area = width * height;

  // Round the result to 2 decimal places
  const roundedArea = parseFloat(area.toFixed(2));

  return roundedArea;
}

/**
 * Calculates the circumference of a circle with a known radius
 * rounded to 2 decimal places
 * @param {number} radius - the radius of the circle
 * @returns {number} - the circumference of the circle rounded to 2 decimal places
 *
 * The math equation is c = 2 * pi * radius
 *
 * Hint: use toFixed()
 */
function circleCircumference(radius) {
  // Define the value of pi (π)
  const pi = Math.PI;

  // Calculate the circumference
  const circumference = 2 * pi * radius;

  // Round the result to 2 decimal places
  const roundedCircumference = parseFloat(circumference.toFixed(2));

  return roundedCircumference;
}

/**
 * Calculates the area of a circle with a known radius
 * rounded to 2 decimal places
 * @param {number} radius - the radius of the circle
 * @returns {number} - the area of the circle rounded to 2 decimal places
 */
function circleArea(radius) {
  // Define the value of pi (π)
  const pi = Math.PI;

  // Calculate the area
  const area = pi * radius ** 2;

  // Round the result to 2 decimal places
  const roundedArea = parseFloat(area.toFixed(2));

  return roundedArea;
}

/**
 * Calculates the area of a triangle with three sides
 * rounded to 2 decimal places
 *
 * @param {number} base - the base of the triangle
 * @param {number} height - the height of the triangle
 * @returns {number} - the area of the triangle rounded to 2 decimal places
 */
function triangleArea(base, height) {
  // Calculate the area using the formula
  const area = (base * height) / 2;

  // Round the result to 2 decimal places
  const roundedArea = parseFloat(area.toFixed(2));

  return roundedArea;
}

/**
 * Calculates the hypotenuse of a right triangle with two sides,
 * rounded to 2 decimal places
 * @param {number} sideA - the length of side A
 * @param {number} sideB - the length of side B
 * @returns {number} - the hypotenuse of the triangle rounded to 2 decimal places
 */
function pythagorean(sideA, sideB) {
  // Calculate the hypotenuse using the Pythagorean theorem
  const hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);

  // Round the result to 2 decimal places
  const roundedHypotenuse = parseFloat(hypotenuse.toFixed(2));

  return roundedHypotenuse;
}

module.exports = {
  rectanglePerimeter,
  rectangleArea,
  circleCircumference,
  circleArea,
  triangleArea,
  pythagorean,
};
