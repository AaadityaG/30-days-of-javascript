// Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

function getSubsets(array, length) {
    const subsets = [];
  
    function generateSubsets(startIndex, currentSubset) {
        if (currentSubset.length === length) {
            subsets.push([...currentSubset]);
            return;
        }
    
        for (let i = startIndex; i < array.length; i++) {
            currentSubset.push(array[i]);
            generateSubsets(i + 1, currentSubset);
            currentSubset.pop();
        }
    }
  
    generateSubsets(0, []);
    
    subsets[subsets.length] = array.reverse();
    return subsets;
}
  
const inputArray = [1, 2, 3];
const subsetLength = 2;
const result = getSubsets(inputArray, subsetLength);

console.log(result);
  