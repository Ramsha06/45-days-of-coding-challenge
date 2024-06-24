//Q10 - Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t 
//have anything specific to write because your programs are too simple at this point, just add your name and the 
//current date at the top of each program file. Then write one sentence describing what the program does.


// Rimsha    Date:8th March 2024 

let person:string = "Rimsha";
console.log(`${person} would you like to learn some typescript today? `);



// Q11 - Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing
// each element in the list, one at a time.
// let Friends:string[]=["Ali","Bina","Sifra","Anamta"];

// for(let index=0; index<=Friends.length; index++)
// {
//     console.log('${index+1}. ${Friends}');

// }

///////////////////////////////////////////////////////////////////////////

let friendsArray: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

 console.log("List of Friends:");
 friendsArray.forEach((friendsArray, index) => {
   console.log(`${index + 1}. ${friendsArray}`);
});

// program of printing friends name using array with a short message of your choice.

let friendArray: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log("List of Friends:");
friendsArray.forEach((friendArray, index) => {
  console.log(`${index + 1}.Hi there ${friendArray}`);
  
});

/////////////////////////////////////////////////////////////////////////

let names: string[] = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}



// Q12 - Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be personalized with 
//the person’s name.

let name1: string[] = ["Alice", "Bob", "Charlie"];
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}



