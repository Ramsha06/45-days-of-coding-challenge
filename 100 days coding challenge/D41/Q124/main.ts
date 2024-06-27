//Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

for (let num = 0; num <= 10; num++) {
    if (num === 5) {
        continue;
    }
    console.log(num);
}