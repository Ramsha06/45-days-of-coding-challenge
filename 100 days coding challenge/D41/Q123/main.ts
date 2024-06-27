//Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

let word = "Hello World";
const vowels = ["a", "e", "i", "o", "u"];
for (let i = 0; i <= word.length; i++) {
    const char = word[i].toLowerCase(); // it will convert each charactor into lowercase to remove case sensitvity
    if (vowels.includes(char)) // checking is their found any vowel
     {
        console.log("First vowel is", char);
        break;
    }
}
export {};
