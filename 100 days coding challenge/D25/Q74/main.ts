//Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5
// and b = 10, then swap their values so that a becomes 10 and b becomes 5.
function swap()
{

    let a ,b, c , d;
    a = 5;
    b = 10;
    console.log(`value of a before swapping a = ${a}`);
    console.log(`value of b before swapping b = ${b}`);
    c = a;
    d = b;
    b = c;
    a = d;
    console.log(`value of a after swapping a = ${a}`);
    console.log(`value of b after swapping b = ${b}`);
}
swap();


