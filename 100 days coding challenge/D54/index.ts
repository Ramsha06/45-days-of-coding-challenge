// 1.Declare two variables: admin and name.
// 2.Assign the value "John" to name.
// 3.Copy the value from name to admin.
// 4.Show the value of admin using alert (must output “John”).



let admin , myname ;
myname = "John";
admin = myname ;
alert (admin);



// 1. Create a variable with the name of our planet. How would you name such a variable?

let ourplanet : string = "Earth" ;


// 2. Create a variable to store the name of a current visitor to a website. How would you name that variable?

let currentvisitor = "Sifra";


// Examine the following code:

// const birthday = '18.04.1982';

// const age = someCode(birthday);


const birthday = '18.04.1982';

function someCode(birthday) {
    // Split the birthday string into day, month, and year
    const [day, month, year] = birthday.split('.').map(Number);
    
    // Create a date object for the birthday
    const birthDate = new Date(year, month - 1, day);
    
    // Get the current date
    const today = new Date();
    
    // Calculate the age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
    
    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    
    return age;
}

const age = someCode(birthday);
console.log(age);  // Outputs the calculated age

// Parse the Birthday String: The birthday string is split into an array of strings representing the day, month, and year. Each part is then converted to a number.
// Create a Date Object for the Birthday: Using the parsed values, a new Date object is created for the birthday.
// Get the Current Date: A new Date object is created for the current date.
// Calculate the Initial Age: The initial age is calculated by subtracting the birth year from the current year.
// Adjust the Age if Necessary: If the current date has not yet reached the birthday in the current year, the age is decremented by one.


//.....................................................................................................................................................


// Would it be right to use upper case for birthday? For age? Or even for both?

// const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

// const AGE = someCode(BIRTHDAY); // make age uppercase?


//Ans  ✔


// We generally use upper case for constants that are “hard-coded”. Or, in other words, when the value is known prior to execution and directly written into the code.

// In this code, birthday is exactly like that. So we could use the upper case for it.

// In contrast, age is evaluated in run-time. Today we have one age, a year after we’ll have another one. It is constant in a sense that it does not change through the code execution. But it is a bit “less of a constant” than birthday: it is calculated, so we should keep the lower case for it.


