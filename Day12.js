// Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output:
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"


function Clock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const currentTime = `${hours}:${minutes}:${seconds}`;
    console.log(currentTime);
  }
  
  // Update the clock every second (1000 milliseconds)
  setInterval(Clock, 1000);
  