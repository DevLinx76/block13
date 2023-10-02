// Block13: Question #2 "Number Line"

// [Using if/else if/else statements, JavaScript code in a script 
// tag that takes the sum of two numbers and prints the corresponding result:

// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";]


function checkSum(num1, num2) {
    const sum = num1 + num2;
    if (sum < -1000) {
      console.log(sum + " is less than -1000");
    } else if (sum < 0) {
      console.log(sum + " is a negative number");
    } else if (sum === 0) {
      console.log(sum + " is equal to 0");
    } else if (sum > 0 && sum < 100) {
      console.log(sum + " is larger than 0");
    } else if (sum > 100) {
      console.log(sum + " is greater than 100");
    }
  }

  // Test the function with various input "num1 & num2":

checkSum(50, 51); // "101 is greater than 100"

checkSum(99, -2); // "-3 is a negative number"

checkSum(0, 101); // "101 is greater than 100"

checkSum(500, -500); // "0 is equal to 0"

checkSum(-1000, 0); // "-1000 is less than -1000"

checkSum(-5, 0); // "-5 is a negative number"
