//Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter
// and say hello. If no name is given, it should greet an anonymous user.

function greet (name ? : string  )
{
    if (name)
        {
            console.log(`HELLO ! ${name}`);
        }else if (name == null)
        {
            console.log(`HELLO! Anonymous User`);
        }
    
}

greet("Sifra");
greet();

//..............................

function greetUser(name: string = "anonymous") {
    
    console.log(`Hello, ${name}!`);
  }
  
  
  greetUser("Alice"); 
  greetUser(); 