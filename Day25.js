// Write a function getData that returns a Promise. 
// Use this function to fetch data from two different 
// APIs sequentially, and return the combined result.
// Use any random API that you want
// Solution Approach:
// Utilize the .then method to chain promises.


function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
  }
  
  function getData() {
    let result = [];
  
    // First API call
    return fetchData('https://jsonplaceholder.typicode.com/todos/1')
      .then(data1 => {
        result = result.concat(data1);
  
        // Second API call
        return fetchData('https://jsonplaceholder.typicode.com/todos/1');
      })
      .then(data2 => {
        result = result.concat(data2);
  
        // Return the combined result
        return result;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error; // Propagate the error further if needed
      });
  }
  
  // Usage
  getData()
    .then(combinedData => {
      console.log('Combined Data:', combinedData);
    })
    .catch(error => {
      console.error('Error in main process:', error);
    });
  