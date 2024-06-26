// Q35 - Animals: Think of at least three different animals that have a common characteristic. Store the names of 
//these animals in a list, and then use a for loop to print out the name of each animal.

// Modify your program to print a statement about each animal, such as A dog would make a great pet.

// Add a line at the end of your program stating what these animals have in common. You could print a sentence such 
//as Any of these animals would make a great pet!


let animal : string[]= ["Lion", "Horse","Cat","Goat"];

animal.forEach((animal)=>{
console.log(animal);
//console.log(` \n`);
if (animal == "Lion")
    {
        console.log("A lion would make a great cub");  //  different sentences  with each animal
    }
    else if(animal == "Horse")
        {
            console.log("A horse would make a great poni");
        }
        else if(animal == "Cat")
            {
                console.log("A cat would make a great kitten");
            }
            else if(animal == "Goat")
                {
                    console.log("A goat would make a great cub");
                }
                
}
);
console.log(`\n All these animals have four legs in common!`);


//---------------------------------------------------------------------------------------------------------------------//


let Animals : string[]= ["Lion", "Horse","Cat","Goat"];

Animals.forEach((Animals)=>{
console.log(`An ${Animals} would make a great pet!`);
});
console.log("Have four legs in common");