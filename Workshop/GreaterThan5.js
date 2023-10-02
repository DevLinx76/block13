// Block13: Question #3 "GreaterThanFive"

// [Using if/else statements, JavaScript code in a script tag 
//that prints true if both parameters are greater or equal to 5.]



function greaterThanFive(num1, num2) {
  if (num1 >= 5 && num2 >= 5) {
    console.log(true);
  } else {
    console.log(false);
  }
}


// Test the function with various input "num1 & num2":

greaterThanFive(5, 6); // true

greaterThanFive(10, 11); // true

greaterThanFive(0, 0); // false

greaterThanFive(1000, -1000); // false

greaterThanFive(6, 4); // false

greaterThanFive(5, 5); // true
