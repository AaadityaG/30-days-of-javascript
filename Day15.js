// create a string_chop function that takes a string and chop factor(size) and chops out the string into the factor(size) that has been passed
// Test Data :
// console.log(string_chop('Scaler'));
// console.log(string_chop('Scaler',2));
// ["Scaler"]
// ['Sc' , 'al' ,'er']

function string_chop(str, size) {
    if (size === undefined || size <= 0) {
      // If size is not provided or is invalid, return the original string as an array with one element.
      return [str];
    }
  
    const result = [];
    for (let i = 0; i < str.length; i += size) {
      result.push(str.slice(i, i + size));
    }
  
    return result;
}
  
  // Test cases
  console.log(string_chop('Scaler'));
  console.log(string_chop('Scaler', 2));
  console.log(string_chop('Scaler', 3));
  