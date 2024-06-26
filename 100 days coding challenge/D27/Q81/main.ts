//Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of 
//its properties and values.

function logObjectProperties(obj: Record<string, any>): void {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

// Example usage:
const exampleObject = {
    name: 'Alice',
    age: 30,
    occupation: 'Developer'
};

logObjectProperties(exampleObject);

