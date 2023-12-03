// Create a proxy object that intercepts and logs all property access.
// Solution Approach:
// Use the Proxy object to create a wrapper around another object.

// Original object
const originalObject = {
    property1: 'value1',
    property2: 'value2'
  };
  
  // Proxy handler
  const propertyAccessLogger = {
    get: function(target, property, receiver) {
      // Log the property access
      console.log(`Accessed property: ${property}`);
      
      // Return the actual property value
      return Reflect.get(target, property, receiver);
    }
  };
  
// Create a Proxy object
const proxiedObject = new Proxy(originalObject, propertyAccessLogger);

// Access properties through the proxy
console.log(proxiedObject.property1); // This will log: "Accessed property: property1"
console.log(proxiedObject.property2); // This will log: "Accessed property: property2"
  