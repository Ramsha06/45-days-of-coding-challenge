let myUsers: string[]= ["Sifra","Sofia","Albert","Einstien"," ","Bill","Gates"];

myUsers.push("Denim");
console.log(myUsers);
myUsers.pop();
myUsers.pop();
myUsers.push("linda");
myUsers.shift();
myUsers.unshift("R");
console.log(myUsers);
for(let i =0; i <= myUsers.length; i ++)
    {
        console.log(myUsers[i]);
    }
