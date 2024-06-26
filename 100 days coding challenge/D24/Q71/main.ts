//Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. 
//Try to reassign a const-declared variable and catch the error.

let num = 2;
num=50;
console.log(num);
const num2 = "sara";
try{
    num2 = "sifra"
}
catch (error)
{
    console.log("you can't reassign a const declared variable ");
}

