//Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

let num = 10;
while (num >= 1) {
    console.log(num);
    if (num === 5) {
        break;
    }
    num--;
}