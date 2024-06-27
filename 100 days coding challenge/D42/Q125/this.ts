
//Q1 create a function inside an object that return the objects own property using the this statement.

const object={
    name:"object",
    getname:function(){
        return this.name;
    }
};
console.log(object.getname());

//Q2  Modift a methode in an object to use the this keyword to access another property in the same object.

const anotherObject={
    name:"anotherObject",
    age :25,
    getname:function(){
        return "My name is " + this.name + " and i am " +this.age + "years old.";
    }
};
console.log(anotherObject.getname());

//Q3  Explain how the this keyword changes its value when used inside a nested function within a methode.

//1.Regular function: 
//if the nested function is a reguler function (declared with "function"
// keyword then, this inside that function will refer to the global object(window in a browser 
//`globa;` in Node.js)  or " undefines"  in strict mode ("use struct :") regardless of where its defined.

const myObject={
    name:"myObject",
    age :25,
    nestedfunction:function(){
        function innerfunction(){
console.log(this.name);  //undefined
        }
        innerfunction();
    }
};
myObject.nestedfunction();



//2.Arrow function. 
//if the nested function ia an arrow function . it doesn't have its own `this` binding. instead  it retains the `this`
// value from the enclosing lexical scope. so, when used inside a methode, `this` inside an arrow function will still
// refer to the ` this` value of the outer methode.   

const thisObject={
    name:"thisObject",
    age :25,
    nestedfunction:function(){
        function innerfunction =() => {
        console.log(this.name);  //thisobject
        }
        innerfunction();
    }
};
thisObject.nestedfunction();