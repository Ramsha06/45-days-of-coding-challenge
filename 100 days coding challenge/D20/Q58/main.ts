// Q58 - Write a simple program that can take lots of scores and find their average.

function averaescores(...score:number[]):number
{
    let total = score.reduce((sum, score)=>sum +score,0);
    return total/score.length;
}

console.log(averaescores(10,30,60,10));