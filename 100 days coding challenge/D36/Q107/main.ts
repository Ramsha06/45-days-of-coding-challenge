//Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

function devisible(num : number):boolean
{
     return num % 2 ==0 && num %3 ==0
        
}

console.log(devisible(12));
console.log(devisible(14));
console.log(devisible(3));
console.log(devisible(20));