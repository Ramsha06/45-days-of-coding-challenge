// Q47 - Array Destructuring: Given an array of objects representing different laptops, each with properties make, model,
// and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let laptops=[
{make:"Dell",year:2020,model:"core i5"},
{make:"HP",year:2022,model:"Mini book"},
{make:"Dell",year:2024,model:"elite book"}   
];

let [laptop1, laptop2,laptop3]=laptops;

console.log(laptop1);
console.log(laptop2);
console.log(laptop3);