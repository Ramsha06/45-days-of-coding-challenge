//Question 132: Discuss the difference between default and named exports in JavaScript modules.

import { func1, func2 } from "./function";

// Importing a default export:
import Calculator from "./calculator";

const calc = new Calculator();

console.log(calc.add(5));         // Outputs: 5
console.log(calc.subtract(2));    // Outputs: 3
console.log(calc.multiply(3));    // Outputs: 9
console.log(calc.divide(3));      // Outputs: 3
console.log(calc.reset());