//Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let mixitems=[1,"apple",2,"cat", true,"chair"]

let arrayofwords=mixitems.filter((items)=> typeof items == "string");

console.log(arrayofwords);
