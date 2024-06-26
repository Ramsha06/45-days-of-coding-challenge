//Q42 - Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
//that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
// to see that the list has actually been modified.

 let Magicians:string[]=["yoyo","joker","chika"];

function make_great(Magicians:string[])
{
    Magicians.forEach((Magicians)=>{
        console.log(`The Great ${Magicians}`);

    }
        
    );

    
}
function show_magician(showit:String[]){
    for(let i=0; i<=Magicians.length;i++)
        {
            Magicians[i]=Magicians[i]+"The Great";
        }
}

make_great(Magicians); // Modifies the original array
show_magician(Magicians); // Shows modified names

