//Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and 
//the remainder. Use an object to return both values.

function calculate (devidend: number , divisor : number):
{
    quotient :Number;
    remainder:Number;
}
   { 
    let quotient = Math.floor(devidend / divisor);
    let remainder = (devidend % divisor);

    return { quotient , remainder};
    
   }

   console .log(calculate (15,2));