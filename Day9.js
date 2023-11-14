// Write a JavaScript function to find the first not repeated character.
// input : 'abacddbec'
// output : 'e'


function NonRepeating(str){
    let charCount = {};

    // Iterate through the string to count the occurrences of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through the string again to find the first character with count 1
    for (let j = 0; j < str.length; j++) {
        if (charCount[str[j]] === 1) {
            return str[j];
        }
    }

    // If no non-repeated character is found, return null or any other appropriate value
    return null;
}

let result = NonRepeating('abacddbec');
console.log(result); // Output: 'e'