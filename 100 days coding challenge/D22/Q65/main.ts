//Q65 - Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them
// using the % sign. For example, remainder(5, 2) should give 1.

function remainder(number1 : number , number2 : number): number
{
    let remain = number1 % number2;
    return remain;
}

console.log(remainder(7,3));