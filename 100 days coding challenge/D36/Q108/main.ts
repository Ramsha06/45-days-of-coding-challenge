//Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

function chekstring(word1 : string , word2 : string):boolean
{
    return word1.toLowerCase() === word2.toLowerCase();
}

console.log(chekstring("Sifra", "sifra"));
console.log(chekstring("Sifra", "siFra"));
console.log(chekstring("Sifra", "word"));
console.log(chekstring("Hello", "HELLO"));