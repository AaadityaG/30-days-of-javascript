// Write a generator function range that takes two arguments, 
// start and end, and yields all the numbers in that range.
// Solution Approach:
// Use the function* syntax for generator functions and the yield keyword.

function* rangeGenerator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const s = 1;
const e = 5;

const generator = rangeGenerator(s, e);

for (const num of generator) {
    console.log(num);
}
