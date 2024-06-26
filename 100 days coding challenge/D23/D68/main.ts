//Q68 - Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. 
//Round the result to two decimal places.

function multiplyDecimals(num1: number , num2 : number):number
{
    // Multiplies the numbers and rounds the result to two decimal places
    return Math.round(num1 * num2 * 100) / 100;
  }
  
 
  console.log(multiplyDecimals(0.1, 0.2));
{

}
