console.log("Conditions and Loops Testing");
/* - Practice Code Begin

var costOfChips = 4;

if (costOfChips < 2) {
  console.log("Purchase 1 Chip.");
} else if (costOfChips < 4) {
  console.log("Purchase 2 Chips.");
} else {
  console.log("Do not Purchase Chips!");
}

//Switch Variable ie. Grade Ranges

var grade = "A";

switch (grade) {
  case "A":
    console.log("90-100");
    break;
  case "B":
    console.log("80-89");
    break;
  case "C":
    console.log("70-79");
    break;
  default:
    console.log("0-69");
}

var a = 5;
var b = 6;

//Double If Statement with a divergent path ie. else.
if (a == 5) {
  if (b == 6) {
    console.log("a is 5 and b is 6");
  } else {
    console.log("a is 5 but b is not 6.");
  }
}

//Flattened If Statement Code
if (a == 5 && b == 6) {
  console.log("a is 5 and b is 6");
}

- Practice Code End */

// Loops Practice Begin
//for (variable; condition; what happens after the iteration)
// Allows you to count up or down in number value.
for (let i = 10; i >= -10; i--) {
  break;
  console.log(i);
}
// Loops Practice End

// ---- Conditions

// Allows you to set a Condition based on the speed limit
var speedLimit = 50;
var mySpeed = 49;

// If, If Else Condition
if (mySpeed > speedLimit) {
  console.log("Slow Down!");
} else if (mySpeed == speedLimit) {
  console.log("Your Driving the Speed Limit!");
} else {
  console.log("Speed Up!");
}

// If, Else condition for setting an Alarm
var alarmSet = true;
var openDoor = true;

if (alarmSet && openDoor == true) {
  console.log("Sound the Alarm!");
} else {
  console.log("All is quiet.");
}

let username;
let password;

if (
  (username === "Tommy123" && password === "12345") ||
  (username === "TImmy456" && password === "6789")
) {
  console.log("Admin Login Successful");
} else {
  console.log("Admin Access Denied");
}

// Switch Loop
let Studentgrade = 1;
let studentClass;

switch (Studentgrade) {
  case "K":
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    studentClass = "Elemntary";
    break;
  case 7:
  case 8:
    studentClass = "Middle";
    break;
  case 9:
    studentClass = "Freshman";
    break;
  case 10:
    studentClass = "Sophomore";
    break;
  case 11:
    studentClass = "Junior";
    break;
  case 12:
    studentClass = "Senior";
    break;
  default:
    console.log("Error");
}

// User Input
/*
var name = window.prompt("What is your name?");
window.alert(`Hello, ${name}` + "!");
*/

// Credentials Mechanism Test

//While Loop to continuously prompt the user

var loggedIn = false;
let logInAttempts = 0;
let logInAttemptsLimit = 3;

//! = not loggedIn in this example or loggedIn = false

while (!loggedIn === true) {
  let username2 = prompt("Enter Your Username:");
  if (username2 == null) {
    console.log("null");
    break;
  }
  let password2 = prompt("Enter Your Password:");
  if (password2 == null) {
    console.log("null");
    break;
  }

  if (username2 == "Matthew123" && password2 == "12345") {
    console.log("Login Successful");
    alert("Welcome back", username2);
    //Sets the LoggedIn variable to true to break the loop
    loggedIn = true;
  } else if (logInAttempts < logInAttemptsLimit) {
    console.log("Login Failed", logInAttempts);
    logInAttempts++;
  } else if (logInAttempts > logInAttemptsLimit) {
    console.log("Login Failed", logInAttempts);
    alert("You have exceeded the number of login attempts.");
    break;
  }
}
