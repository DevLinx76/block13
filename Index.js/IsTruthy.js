// Block13: Question #1 "isTruthy"

// [Using if/else statements, create a JavaScript code in a script tag that follows the following rules:

// If the value is truthy, print true;
// If the value is falsy, print the corresponding result:
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";]



function checkTruthy(value) {
    if (value) {
      console.log(true);
    } else if (value === false) {
      console.log("The boolean value false is falsy");
    } else if (value === null) {
      console.log("The null value is falsy");
    } else if (value === undefined) {
      console.log("undefined is falsy");
    } else if (value === 0) {
      console.log("The number 0 is falsy (the only falsy number)");
    } else if (value === "") {
      console.log("The empty string is falsy (the only falsy string)");
    } else {
      console.log(value);
    }
  }

    // Test the function with various input "values":
    
      checkTruthy("I am a string");
      checkTruthy(false);
      checkTruthy(null);
      checkTruthy(undefined);
      checkTruthy(0);
      checkTruthy("");

