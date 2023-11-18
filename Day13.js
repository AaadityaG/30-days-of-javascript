function memoize(func) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache[key]) {
        console.log("Fetching stored -", args);
        return cache[key];
        }

        const result = func(...args);
        cache[key] = result;
        console.log("Calculating -", args);

        return result;
    };
}
  
function add(a, b) {
    console.log("Performing calculation - ");
    return a + b;
}
  
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(3, 4)); 
console.log(memoizedAdd(3, 4)); 
  