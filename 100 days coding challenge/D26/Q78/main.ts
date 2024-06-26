//Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by 
//creating one of each that performs the same task, such as squaring a number.

function squarenumber (num1 :number, num2 : number = 2) : number
{
    return num1 ** num2;
}
{
    //function expression
let squareexpression = function(num1 : number, num2 : number): number
{
    return num1 ** num2 ;
}

}
console.log(squarenumber(10));
console.log(squarenumber(10));

//............................................


function squareDeclaration(number: number): number {
    return number * number;
  }
  
  
  const squareExpression = function (number: number): number {
    return number * number;
  };
  
  console.log(squareDeclaration(4)); 
  console.log(squareExpression(4));
