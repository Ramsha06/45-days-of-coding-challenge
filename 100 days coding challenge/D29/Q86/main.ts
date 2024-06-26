//Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given
// string. It should return true if found, otherwise false.

function checktextpresent(sentence :string):boolean
{
    return sentence.includes("Javascript");
}

console.log(checktextpresent("I love coding in Javascript"));