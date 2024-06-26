//Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses
// both let and const. Show how variables declared inside the block are not accessible outside of it.

{
    let a= "sofia";
    const b = "sifra";
    console.log(` variable inside the block is accessible=> a`);
    console.log(` variable inside the block is accessible=> b`);
    
}

try{
    console.log(a);
}
catch (error)
{
    console.log("variable can not accessible outside the block");
}

try{
    console.log(b);
}
catch (error)
{
    console.log("variable can not accessible outside the block");
}



