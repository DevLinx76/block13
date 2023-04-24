// Block13: Question #4 "Pair and Compare"

// [Using if/else statements and strict equality operators, JavaScript 
//code in a script tag that compares two sets of two values. Print true 
//if at least one of the pairs is truthy.]


function pairAndCompare(param1A, param1B, param2A, param2B) {
    if ((param1A && param1B) || (param2A && param2B)) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  
  // Test the function with various input "param1A, param1B, param2A, & param2B":

  pairAndCompare("cat", "cat", 6, ""); 
  // true

pairAndCompare("five", 5, "dog", "horse"); 
// true

pairAndCompare(0, false, "horse", "ate"); 
// false

pairAndCompare("eight", "eight", "ate", "four"); 
// true

pairAndCompare(11, "eleven", "four", "pie"); 
// true

pairAndCompare("cake", "cake", "pie", ""); 
// true
