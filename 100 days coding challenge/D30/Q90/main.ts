//Question 90: Generating Random Numbers: Write a function that generates a random number between 1 and 10, inclusive.

function generateRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1; // Scales up and rounds down
  }
  
  // Example: Getting a random number
  console.log(generateRandomNumber());