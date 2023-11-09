// Write a JavaScript program to find the area of a 
// triangle where three sides are 5, 6, 7.

// Function to calculate the area of a triangle
function calculateTriangleArea(side1, side2, side3) {
    // Calculate the semi-perimeter (half of the perimeter)
    const s = (side1 + side2 + side3) / 2;
  
    // Calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  
    return area;
  }
  
  // Input side lengths
  const side1 = 5;
  const side2 = 6;
  const side3 = 7;
  
  // Calculate the area of the triangle
  const area = calculateTriangleArea(side1, side2, side3);
  
  // Display the result
  console.log(`\nThe area of the triangle with side lengths ${side1}, ${side2}, and ${side3} is ${area}\n`);
  
