// Challenge 1:
// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example: 
// x = 32243;
// Expected Output: 34223

let num = 32243;
var reversedNum = 0;
while (num > 0) {
    reversedNum = reversedNum * 10 + num % 10;
    num = Math.floor(num / 10);
}

console.log( reversedNum);