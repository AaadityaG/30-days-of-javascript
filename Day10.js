
// Write a JavaScript function to apply the Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple 
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing 
// each pair of adjacent items and swapping them if they are in the wrong order".
// Input : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function sort(arr) {
    let s;
    do {
        s= false;
        for (var i = 0; i < arr.length- 1; i++) {
            if (arr[i] < arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                s= true;
            }
        }
    } while (s);
    return arr;
}
var array1= [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log("Before:")
console.log(array1);
console.log("After:")
var sa= sort(array1);
console.log(sa);