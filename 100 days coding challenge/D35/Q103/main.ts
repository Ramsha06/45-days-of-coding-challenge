//Question 103: Write a function that returns a random boolean value, true or false.

function boolean ():boolean
{
    return Math.random()>0.5;
}

console.log(boolean());