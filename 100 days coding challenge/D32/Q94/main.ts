//Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

let array : string[]=["Sifra","Safa","Alia","Fatima"];

console.log(array);

const arraylength :number[]= array.map((array)=>array.length);
console.log(arraylength);