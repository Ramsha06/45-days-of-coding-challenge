// //Q24 - More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one False result 
//for each of the following:
// Tests for equality and inequality with strings

// Tests using the lower case function

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// Tests using "and" and "or" operators

// Test whether an item is in a array

// Test whether an item is not in a array

// Tests for equality and inequality with strings


console.log(` Tests for equality and inequality with strings`);
console.log("apple" == "apple"); // True
console.log("apple" == "Apple"); // False

// Tests using the lower case function


console.log("Tests using the lower case function");
console.log( "Apple".toLowerCase() == "apple");

// Numerical tests involving equality and inequality,

console.log("Numerical tests involving equality and inequality, greater than and less than ");
console.log( 10 > 0 );
console.log( 10 < 0 );

//, greater than or equal to, and less than or equal to

console.log(" greater than or equal to, and less than or equal to ");
console.log( 10 >= 0 );
console.log( 10 <= 0 );

// Tests using "and" and "or" operators

console.log("Tests using and and or operators");
console.log(false && true);
console.log(true || false);

// Test whether an item is in a array

console.log("Test whether an item is in a array");
let fruits : string[]=["Banana" , "Apple", "strawberry"];
console.log(`Is "Apple" is in "fruits"? ` );
console.log(fruits.includes("Apple"));

// Test whether an item is not in a array

console.log(`Is "mango" is in "fruits"? ` );
console.log(!fruits.includes("mango"));

// Test whether an item is not in a array

console.log("Test whether an item is not in a array");
let cars :string[]=["GLI","pardo","civic"];
console.log(`Is "fortuner in "cars"?`);
console.log(cars.includes("fortuner"));