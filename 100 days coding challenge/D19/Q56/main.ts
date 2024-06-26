// Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number 
//is twice its original value.

let numbers:number[]=[1,2,3,4,5];

let doublenumbers=(numbers.map((numbers)=> numbers*2));

console.log(numbers);
console.log("Double of old list",doublenumbers);