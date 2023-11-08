// Write a JavaScript program to check whether two given 
// integer values are in the range 50..99 (inclusive). 
// Return true if either of them falls within the range.

function check(num1, num2) {
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(check(1, 4));
console.log(check(66, 88));