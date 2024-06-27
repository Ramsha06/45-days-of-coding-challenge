//Question 135: Explain how you can format a JSON string with proper indentation for readability.

const jsonobject =
{
    name :"Sifra",
    age : 25,
    isstudent :false,
    courses :["Maths" , "Science"],
    address : {"City" : "Saudia" , "zip" :100030},

}

const jsonsidentation = JSON.stringify(jsonobject , null , 2);
console.log(jsonsidentation);