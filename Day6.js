function sumOrTriple(num1, num2) {
    if (num1 === num2) {
        return 3 * (num1 + num2);
    } else {
        return num1 + num2;
    }
}

var firstNumber = 5;
var secondNumber = 5;

var result = sumOrTriple(firstNumber, secondNumber);
console.log("Result:", result);
