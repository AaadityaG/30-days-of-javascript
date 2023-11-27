function deepEqual(obj1, obj2) {
    // Check if both arguments are objects
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return obj1 === obj2;
    }
  
    // Check if both objects have the same set of keys
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length || !keys1.every(key => keys2.includes(key))) {
      return false;
    }
  
    // Recursively compare values for each key
    for (const key of keys1) {
      if (!deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  
    // If all checks pass, the objects are deeply equal
    return true;
  }
  
  // Example usage:
  const obj1 = { a: 1, b: { c: 2, d: { e: 3 } } };
  const obj2 = { a: 1, b: { c: 2, d: { e: 3 } } };
  
  console.log(deepEqual(obj1, obj2)); 