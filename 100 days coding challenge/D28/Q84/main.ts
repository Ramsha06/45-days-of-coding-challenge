//Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word 
//"JavaScript" with "TypeScript".

function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
    // Uses a regular expression with the 'g' flag for a global replacement
  }
  
  console.log(
    replaceJavaScriptWithTypeScript(
      "I love JavaScript and JavaScript is awesome!"
    )
  );