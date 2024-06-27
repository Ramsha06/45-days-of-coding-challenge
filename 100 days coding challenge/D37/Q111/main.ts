//Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function agegroup(age:number)
{
    console.log("Whats your age?")
    if(age <= 12)
        {
            console.log(`${age} You are a child.`);
        }
        else if(age <=13 || age <=19)
            {
                console.log(`${age} You are a teenager.`);
            }
            else if(age >=18 )
                {
                    console.log(`${age} You are a adult.`);
                }
    

}

agegroup(18);
agegroup(22);
agegroup(25);
agegroup(15);
agegroup(2);
agegroup(7);

//...............................................

function categorizeAge(age: number): string {
    if (age < 13) {
      return "child";
    } else if (age <= 19) {
      return "teenager";
    } else {
      return "adult";
    }
  }
  
  console.log(categorizeAge(12)); // Outputs: child
  console.log(categorizeAge(18)); // Outputs: teenager
  console.log(categorizeAge(25));
   
