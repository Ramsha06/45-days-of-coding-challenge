// //Q1 Convert a tradional functiional expression into an arrow function.

// const traditional=function(g,h)
// {
//     return g+h;

// };

// // converting tradiotional into arrow function

// const tradition=(e,f) =>{
//     return e+f;
// };

// //further simplify

// const trad = (c,d) => c+d;

// //Q2 create an arrow function that tkes multiple 
// //perameters and return the product of all perameters.

// const productofnumbers=(...numbers)=>
// {
//     return numbers.reduce((accumulator,currentvalue)=>accumulator*currentvalue,1);
// };
// console.log(productofnumbers(2,3,4));
// console.log(productofnumbers(4,5,6,7));

//Q3 Explain how this behaves difffernetly 
//in arrow function compared to tradiotinal function.


const obj={
    name:"obj",
    getname:function(){
        console.log(this);
        const arrowfunction=()=>{
            console.log(this);
        };
        arrowfunction();
    }
};
obj.getname();

// tradional function

const objj={
    name:"obj",
    getname:function(){
        console.log(this);
        function tradionalfunction (){
            console.log(this);
        };
        tradionalfunction();
    }
};

obj.getname();