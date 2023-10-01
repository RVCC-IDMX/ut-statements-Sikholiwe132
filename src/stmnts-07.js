/*
 * stmnts-07.js
 * Language: javascript
 * Test: tests/stmnts-07.test.js
 * Path: src/stmnts-07.js
 */

/**
 * Checks to make sure 2 parameters both are truthy
 * @param {*} a - first parameter
 * @param {*} b - second parameter
 * @returns {boolean} - true if a and b are both true, false otherwise

 */
function logicalAnd(a, b) {
  // Use the logical AND operator && to check if both a and b are truthy
  return a && b;
}

/**
 * Checks if at least one of the parameters is truthy
 * @param {*} a - first parameter
 * @param {*} b 0 second parameter
 * @returns {boolean} - true if a or b is truthy, false if both are falsy
 */
function logicalOr(a, b) {
  return a || b;
}

/**
 * Takes a boolean and returns the opposite
 * @param {boolean} bool - the boolean to invert
 * @returns {boolean} - the opposite of the given boolean
 */
function invertBoolean(bool) {
  return !bool;
}

/**
 * Count the number of odd numbers from 0 to num (exclusive)
 * @param {number} num  - the number to count to
 * @returns {number} - the number of odd numbers from 0 to num
 * ? num is a positive integer greater than 0
 * ? using a for loop from 0 to num, iterating by 1
 * ? this required to be a for loop
 * ? return the count of odd numbers
 * ? for example, if num is 9 you will check 0,1,2,3,4,5,6,7,8
 * ? and count of the odd values is 4
 * ?

 */
function numberOfOdds(num) {
  // Initialize a variable to keep track of the count of odd numbers
  let count = 0;

  // Use a for loop to iterate from 0 to num - 1
  for (let i = 0; i < num; i++) {
    // Check if the current number (i) is odd by checking if it's not divisible by 2
    if (i % 2 !== 0) {
      count++; // Increment the count if the number is odd
    }
  }

  // Return the final count of odd numbers
  return count;
}

// Example usage:
const number = 9;
const results = numberOfOdds(number);

/**
 * Calculates the sum of all the numbers from 0 to num (inclusive)
 * @param {number} num - the number to add up to
 * @returns {number} - the sum of all numbers from 0 to num
 * ? num is a positive integer greater than 0
 * ? this required to be a for loop
 * ? using a for loop from 0 to num, iterating by 1
 * ? For example, num is 4 then return 10 because 1 + 2 + 3 + 4 = 10.
 */
function addUpTheNumbers(num) {
  // Initialize a variable to store the sum
  let sum = 0;

  // Use a for loop to iterate from 0 to num
  for (let i = 0; i <= num; i++) {
    sum += i; // Add the current number (i) to the sum
  }

  // Return the final sum
  return sum;
}

// Example usage:
const num = 4;
const outcome = addUpTheNumbers(num);

/**
 * Calculates the letter grade for a given score
 * @param {number} score - the numeric grade score for a student
 * @returns {string} - the letter grade for that score
 * ? score is a positive integer 0 through 100
 * ? generate a letter grade based on the following
 * ? table
 * ? < 60	F
 * ? < 70	D
 * ? < 80	C
 * ? < 90	B
 * ? <= 100	A
 * ? return the letter grade as a string
 * ?
 */
function gradeGenerator(score) {
  if (score < 0 || score > 100) {
    // Handle out-of-range scores (less than 0 or greater than 100)
    return 'Invalid Score';
  } if (score < 60) {
    return 'F';
  } if (score < 70) {
    return 'D';
  } if (score < 80) {
    return 'C';
  } if (score < 90) {
    return 'B';
  }
  return 'A';
}

// Example usage:
const score = 75;
const result = gradeGenerator(score);

/**
 * Calculates a string of the student's name and grade
 * @param {string} name - the name of the student
 * @param {number} score - the numeric grade score for a student
 * @returns {string} - the student's name and their letter grade
 * ? name is a string and score is a number
 * ? 0 through 100
 *
 * ? MUST CALL the above gradeGenerator() from above
 * ? to find a letter grade with that score
 * ? return a string written like:
 * ? Francine got an A
 * ? David got a B
 * ? note: you have to use English grammar's correct indefinite article
 * ? it's 'an A' (not a A) and 'an F' (not a F)
 */
function getGrade(name, studentScore) {
  // Call the gradeGenerator function to get the letter grade
  const letterGrade = gradeGenerator(studentScore);

  // Determine the correct indefinite article based on the letter grade
  const indefiniteArticle = letterGrade === 'A' || letterGrade === 'F' ? 'an' : 'a';

  // Construct and return the output string
  const gradeResult = `${name} got ${indefiniteArticle} ${letterGrade}`;
  return gradeResult;
}

// Example usage:
const studentName = 'Francine';
const studentScore = 95;
const studentGrade = getGrade(studentName, studentScore);

module.exports = {
  logicalAnd,
  logicalOr,
  invertBoolean,
  numberOfOdds,
  gradeGenerator,
  getGrade,
  addUpTheNumbers,
};
