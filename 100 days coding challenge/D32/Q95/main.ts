//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

 function filterarray(number :number[]):number[]
{
    return number.filter((number)=> number>10)
}

let array:number[]=[5,9,25,15,20,12,17,7,5,9,5,1];

console.log(array);
console.log(`when numbers are greater than 10`, filterarray(array));
