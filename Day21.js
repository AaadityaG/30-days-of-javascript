// Problem Statement: Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element.
// Description: The function should take an array and an async function, applying the async function to each element in the array in sequence.
// Solution Approach: Use async/await within a for...of loop.


async function asyncLoop(arr, asyncFunction) {
    for (const element of arr) {
      await asyncFunction(element);
    }
}

async function asyncOperation(value) {
    return new Promise((resolve) => {
        console.log(` ${value}`);
        resolve();
    });
}

const arrayToProcess = [1, 2, 3, 4, 5];

asyncLoop(arrayToProcess, asyncOperation)
.then(() => {
    console.log("All operations completed.");
})
.catch((error) => {
    console.error("An error occurred:", error);
});