//Q22 - Intentional Error: If you haven’t received an array index error in one of your programs yet, 
//try to make one happen. Change an index in one of your programs to produce an index error. 
//Make sure you correct the error before closing the program.



let person:string[]=["Einstien","Bill gates", "J.J thomson"];
console.log(person[3]);  // error , undefined

//---------------------------------------------------------//

let person1:string[]=["Einstien","Bill gates", "J.J thomson"];
console.log(person1[2]);  // J.J thomson
person1[2]= "J.J thomson";
