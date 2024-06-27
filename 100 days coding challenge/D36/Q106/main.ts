//Question 106: Determine if a given year is a leap year using comparison operators.

function leapyear(year:number):boolean
{
    return (year %4 == 0 && year %100 !== 0 || year %400 == 0)

}

console.log(leapyear(2015));
console.log(leapyear(2014));