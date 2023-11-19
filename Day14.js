// Write a JavaScript function to concatenate a given string n 
// times (default is 1). Go to the editor
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));

// Outputs
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"



function repeat(str, num = 1){
    return str.repeat(num);
}

console.log(repeat('Ha!'));      // Output: "Ha!"
console.log(repeat('Ha!', 2));    // Output: "Ha!Ha!"
console.log(repeat('Ha!', 3));  