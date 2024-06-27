//Question 92: Write a function to remove the last element from an array and return the removed element.



function removelastelement<T>(arr : T[]): T|undefined
{
    return arr.pop();
    
}

const fruits:string[]=["Apple" , "Banana" , "Avocado", "Melon"];
console.log(removelastelement(fruits));
console.log(fruits);