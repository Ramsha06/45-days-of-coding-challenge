//Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it
// into an arrow function.
function rectangle(width:number,height:number)
{   
    return width*height;

}


let calculatearea = (width:number,height:number) :number => width * height;



console.log(calculatearea(20,15));