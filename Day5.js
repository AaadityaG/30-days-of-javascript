function getFileExtension(filename) {
    // Find the position of the last dot in the filename
    let dotPosition = -1;
    for (let i = filename.length - 1; i >= 0; i--) {
      if (filename[i] === '.') {
        dotPosition = i;
        break;
      }
    }
  
    return dotPosition !== -1 ? filename.substring(dotPosition + 1) : "No extension found";
  }
  
  // Example usage:
  const filename1 = "example.txt";
  
  console.log(getFileExtension(filename1)); // Output: txt
  