//For Loops
console.log("For Loops");
//Increment from 0 - 10
//i is typically used and stands for index.
console.log("Count from 1-10: ");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
//Display's only even numbers
// % is the Remainder Operator
console.log("Even Numbers: ");
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
//Display's only odd numbers
console.log("Odd Numbers: ");
for (let i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Shows items in an array.
console.log("Shows Names: ");
let names = ["Daniel", "Matthew", "Sam"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//While Loops
//Condition is checked first!
/*Useful for doing something over and 
over but less knowledge of number of iterations
 is needed*/
console.log("While Loops");

let a = 0;

//While Loop Example
console.log("While Loop Rice example");
var requiredCupsOfRice = 5;
var currentCupsOfRice = 0;
//While the current Cups of Rice is NOT equal to the required cups of rice, run the logic.
while (currentCupsOfRice != requiredCupsOfRice) {
  console.log("The bowl contains " + ++currentCupsOfRice + " cups of rice.");
}
console.log("We have enough rice!");

//DO NOT CREATE INFINITE LOOPS such as below.
/*
while (a < 10) {
  console.log(a);
}
*/

while (a <= 10) {
  console.log(a);
  a++;
}

//Do While Loop
//Iterates at least once and checks the condition at the end.
console.log("Do While Loops");

do {
  console.log(a);
} while (a <= 10);

//For In Loop
//Iterates for each element or item in an array.
//Array ie. a list of values such as strings or numbers.
console.log("For In Loops: ");

for (i in names) {
  console.log(names[i]);
}

//For Of Loop
/*Instead of looping through the index it will loop through the object. 
ie Value. */
console.log("For Of Loops: ");

for (i of names) {
  console.log(i);
}

let userNumber = 4;

/*

//Increment a number by 6.
do {
  console.log(userNumber);
  userNumber = userNumber + 6;
} while (userNumber <= 100);

//For Loop to increment by nth number.
for (let i = 0; i <= 100; i += 3) {
  console.log(i);
}

//do while with an IF statements to also increment by nth number.
var i = 0;
do {
  if (i % 3 === 0) {
    console.log(i);
  }
  i++;
} while (i <= 99);

*/

//To determine if a number is between a number. If it is output all numbers.
// This is useful if the number of iterations is unknown.
let userNumber2 = 2;

// You need to create a variable set as the base value ie. userNumber2 in this example.
var counter = userNumber2;

if (userNumber2 <= 100 && userNumber2 >= 1) {
  // This will run while the counter is less than or equal to 100.
  while (counter <= 100) {
    // Counter++ will increment in value.
    console.log(counter++);
  }
} else {
  console.log("Your number was not between 1 and 100.");
}

//Outputs 0 to 1 ie. up to the value of X.
var x = 1;
for (var input = 0; input <= x; input++) {
  console.log(input);
}

// The i++ operator increments and returns the value before incrementing.
// If the condition is true in a While Loop it will indefinitly run!!!

//For Loop for a multiplication table
console.log("Multiplication Table");
var input = 3;
var num = 3;

for (var input = 1; input <= 10; input++) {
  let total = input * num;
  console.log(num, "x", input, "=", total);
}

/*
Write a while loop that does a countdown from the variable countdown.
This number represents the number that a user enters.
Check to make sure the number is not larger than 10, but greater than or equal to 3.
Each time the loop runs, print to the console the value of the counter followed by three periods (…).
Once out of the loop, print to the console "We have lift off!".
If a number is less than 3 or greater than 10, then the only message printed to the console is "We have lift off!"
*/
//Countdown from 5 to Blast Off! Example

console.log("- Blast Off Example: ");
let input2 = 5;
let countDown = 5;
/* Incorrect Usage
while (countDown > 10 || countDown >= 2) {
  //Decraments input by 1 each loop

  countDown = input2--;
  console.log(countDown + "...");
}
if (countDown < 3 || countDown > 10) {
  console.log("We have lift off!");
} else {
  console.log("We have lift off!");
}
*/

//Correct Usage
//If the count down timer is less than or equal to 10 AND it is greater than 3 execute code.
//While the count down timer is greater than or equal to 1 execute code.
//Log the count down timer to console and decrement count down.
//Repeat these steps until the if condition is NOT met and outputs to console. "We have lift off!"

if (countDown <= 10 && countDown >= 3) {
  while (countDown >= 1) {
    console.log(countDown + "...");
    countDown--;
  }
}

console.log("We have lift off!");
