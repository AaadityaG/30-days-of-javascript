// Problem Description:
// Write a JavaScript function named allPositive that checks whether all numbers in a given array are positive using the every() method.
// Inputs:
// An array of numbers.
// Outputs:
// A boolean value. Return true if all numbers are positive, otherwise false.
// Hints:
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// Solution Approach:
// Use the every() method and provide a callback that checks if the number is positive.

function allPositive(numbers) {
    // Use the every() method to check if all numbers are positive
    const areAllPositive = numbers.every(function(number) {
      return number > 0;
    });
  
    return areAllPositive;
}

const numbersArray = [1, 2, -3, 4, 5];
const result = allPositive(numbersArray);
console.log(result);