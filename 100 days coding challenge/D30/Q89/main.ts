//Question 89: Rounding Numbers: Create a function that takes a number with decimals (e.g., 3.14159) and rounds it 
//to two decimal places.

function roundingnumbers(num : number) :number

{
    return Number(num.toFixed(2));

}
console.log(roundingnumbers(2.345));