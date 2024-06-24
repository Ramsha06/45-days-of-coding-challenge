// Q29 - Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
//independent if statements that check for certain fruits in your array.

// Make a array of your three favorite fruits and call it favorite_fruits.

// Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits : string[]=["Apple","Banana","Avacado","Mango","Strawberry","Sapota"];

if(favorite_fruits.includes("Apple"))
    {
        console.log(` Is ${favorite_fruits[0]} your favorite fruit?`);
    }
    if(favorite_fruits.includes("Banana"))
        {
            console.log(` Is ${favorite_fruits[1]} your favorite fruit?`);
        }
        if(favorite_fruits.includes("Avocado"))
            {
                console.log(` Is ${favorite_fruits[2]} your favorite fruit?`);
            }
            if(favorite_fruits.includes("Mango"))
                {
                    console.log(` Is ${favorite_fruits[3]} your favorite fruit?`);
                }
                if(favorite_fruits.includes("Strawberry"))
                    {
                        console.log(` Is ${favorite_fruits[4]} your favorite fruit?`);
                    }
                    if(favorite_fruits.includes("Sapota"))
                        {
                            console.log(` Is ${favorite_fruits[5]} your favorite fruit?`);
                        }
    

