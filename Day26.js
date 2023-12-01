// Write a function calculateTotal that takes an array of numbers,
// filters out the even numbers, squares the remaining numbers, 
// and then calculates their sum.
// Solution Approach:
// Combine map, filter, and reduce array methods.

function calculateTotal(numbers) {
    const filteredNumbers = numbers.filter(number => number % 2 !== 0);
  
    const squaredNumbers = filteredNumbers.map(number => number ** 2);
  
    const total = squaredNumbers.reduce((acc, curr) => acc + curr, 0);
  
    return total;
}
  
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = calculateTotal(numbers);
console.log(result);  // Output: 165 (1^2 + 3^2 + 5^2 + 7^2 + 9^2)
