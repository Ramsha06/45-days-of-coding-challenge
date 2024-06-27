//Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

function map(countries : Map<string , string>): void
{
   if (countries.has("Canada"))
    {
        console.log(`The capital of canada is ${countries.get("Canada")}`);
    }
    else 
    {
        console.log(`Canada is not in the map.`);
    }
    
    
}

const countries = new Map<string,string>();

    countries.set("Pakistan", "Islamabad");
    countries.set("USA","Washington , D.C");
    countries.set("France" , "Paris");
    countries.set("Japan" , "Tokyo");
    countries.set("Canada" , "Ottawa");

    console.log(countries);
    map(countries);