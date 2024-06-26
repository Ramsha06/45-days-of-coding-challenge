// Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a 
//method describe() that logs a sentence about the laptop.


let laptop = {
    make: "Dell",
    model: "New Elite Series",
    year: 2024,
    describe: function () {
      console.log(`This laptop is a => ${this.year}, ${this.make} and ${this.model}.`);
    },
  };
  laptop.describe();
  
//......................


function laptopmy (make:string, year:number,model:string)
{   
  
        console.log(`The laptop with enhanced features are ${make},${year} and ${model}`); 

}
laptopmy("dell",2024,"intell_core_i5");

    
