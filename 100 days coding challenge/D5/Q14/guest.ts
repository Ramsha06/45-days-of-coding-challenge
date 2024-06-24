let guests:string[]=["sifra","sofia","Dany"];
guests.forEach((guest)=>{
console.log(` Hi ${guest} would you like to join me in dinner today?`);
});

    //Q14

let cantmake= "Dany";
console.log(`${cantmake} can't make to the dinner today..`);

//new guest
let newguest = "Dazil";
guests[guests.indexOf(cantmake)]=newguest;

//invitation

guests.forEach((guest)=>
{
    console.log(` ${guest} would like to come to the dinner today?`);
});
