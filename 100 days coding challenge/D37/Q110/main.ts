//Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function grade(score:number)
{
    if(score >= 80)
        {
            console.log("Garde A+");
        }
        else if (score >= 70)
            {
                console.log("Garde A");

            }
            else if (score >= 60)
                {
                    console.log("Garde B");
    
                }
                else if (score >= 50)
                    {
                        console.log("Garde C");
        
                    }
                    else if (score >= 40)
                        {
                            console.log("Garde D");
            
                        }
                        else 
                          {
                            
                             console.log("You are Fail");
                
                            }

}

grade(85);
grade(82);
grade(70);