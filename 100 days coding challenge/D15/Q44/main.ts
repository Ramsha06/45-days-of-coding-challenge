//Q44 - Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, using
// a different number of arguments each time.

function get_order(...items:string[])
{   
    console.log(`Making a sandwitch with ${items.join(", ")}.`);

}

get_order("mayonese","chicken slices");
get_order("mayonese","catchup","vegies","corn");
get_order("mayonese","chicken slices","catchup","tomato","onion");
get_order("mayonese","chicken slices","lattuce","onion",);

