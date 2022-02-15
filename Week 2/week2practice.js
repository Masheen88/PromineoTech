/*

-Conditionals

Equal to: ===
//Not Equal to: !==
//Greater Than: >
//Less Than: <
Greater Than or Equal: =
Less Than or Equal: =
Not: !
And: &&
Or: ||
Convert a string to a number: parseInt()
Allows you to parse a boolean includes.
converts to lower case: toLowerCase()

Ask the user a question: prompt()
Shows the user: alert()

The Modulo is used to divide a number by the second number and return the remainder: %

*/

/*
Uses

- How old someone is? ie. 18 years or older to login to a banking system.
ie. george >= 18

- if!Sunny (//execute some code)

*/

/*
Check Security Level using an IF ELSE IF statement

console.log("- Check Security Level Example");

let clearance = parseInt(prompt("What is your clearance level?"));

if (clearance === 1) {
  alert("Clearance Level 1");
} else if (clearance === 2) {
  alert("Clearance Level 2");
} else {
  alert("No Clearance");
}
*/

/*
Check Security Level using a SWITCH statement
- default must always be present in a switch case.


switch (clearance) {
  case 1:
    alert("Clearance Level 1");
    console.log("Clearance Level Test");
    break;
  case 2:
    alert("Clearance Level 2");
    break;
  default:
    alert("No Clearance");
}
*/
/*
Jaded Pessimistic Magic 8 Ball
*/
/*
let questions = prompt("What is your question?").toLowerCase;

if (questions.includes("love") || questions.includes("like")) {
  alert("Your chances of love are Null!");
} else if (questions.includes("hate")) {
  alert("Yeah");
} else {
  alert("Maybe.");
}
*/
//Contain single statement
// if(question.includes("yes"))
//Contains multiple statements must be wrapped in paranthesis ().
// if((i >  5 || i < 3))

/*
Loops
*/

// For Loops
// Useful for anything you know must be ran a set number of times.
// Example - You want to count to 10!.
/*
for (let i = 0; i < 10; i++) {
  //Code To Run
  alert(i);
}
*/
// While Loops
//Will run until the condition is true.
/*
let running = true;
while(running) {
    running = false
}
*/
//Do While
/*
do {
    //running code
} while {
    //Condition is running.
}*/

//Arrays a collection of variables: ie.let students = ("Student 1", "Student 2", "Student 3", etc..)

let question = parseInt(prompt("Please enter a number"));
//Always have the most specific cast first and the simple statements last.
for (let i = 1; i <= question; i++) {
  //Code To Run
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i + " " + "FizzBUzz");
  } else if (i % 5 === 0) {
    console.log(i + " " + "Buzz");
  } else if (i % 3 === 0) {
    console.log(i + " " + "Fizz");
  } else {
    console.log(i);
  }
}
