//Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer 
//knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list 
//and show them.

let programmer={
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"],
  };
  
  // Getting specific skills from the list
  let { languages, frameworks, tools } = programmer;
  
  // Showing a skill from each category
  
  console.log(
    `Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`
  );

