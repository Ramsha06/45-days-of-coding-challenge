//Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

const students = new Map <number , string>();

students.set (1, "Sifra");
students.set (2, "Sara");
students.set (3, "Raha");
students.set (4, "sofia");

students . forEach((name , id)=>{
    console.log(`The student id is ${id} , and name is ${name}`);

});