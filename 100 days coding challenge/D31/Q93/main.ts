//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

function replacebananawithmango(arr : string[]):void
{
    const index = fruits.indexOf("Banana");
    if (index !== -1) fruits[index]="Mango";

}

const fruits:string[]=["Apple" , "Banana" , "Avocado", "Melon"];
replacebananawithmango(fruits);
console.log(fruits);