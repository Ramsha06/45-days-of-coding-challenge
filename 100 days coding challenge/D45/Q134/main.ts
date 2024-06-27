//Question 134: Take a JSON string and parse it into a JavaScript object.

const jsonString = '{"name": "John", "age": 30, "isStudent": false, "courses": ["Math", "Science"], "address": {"city": "New York", "zip": "10001"}}';


const jsonobject = JSON.parse(jsonString);
console.log(jsonobject);



