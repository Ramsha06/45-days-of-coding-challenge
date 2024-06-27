//Question 121: Use a for...of loop to iterate through an array of your favorite movies and log each one.

let movies : string[]=["KKHH","babies day out", "DDLJ","Hey baby"];

for (let i=0;i<=movies.length; i++)
    {
        console.log(movies[i]);
    }

    //------------------------------------------------------

    const favoritemovies : string[]=["KKHH","babies day out", "DDLJ","Hey baby"];

    for (const movie of favoritemovies)
        {
            console.log(movie);
        }
