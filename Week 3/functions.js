//Code you want to use over and over again at different times. ie sending an email.

//Simply writing a function does not result in any code being executed.
//You have to Call or Use the code for it to function.
//More than 3 parameters in a function should have you consider re-evaluating the code and split into multiple functions.
//Parameter part of the declaration of a function, an Argument is used when Invoking the function.
//Parameters are placeholders for values you have to pass in later and do not know what the value is UNTIL the function is called.
function myFunction() {
  //Code that will be executed
  //Any programs can go inside of the function.
  //ie. Count from 0 to 100
  for (let i = 0; i <= 100; i++) {
    console.log(i);
  }
}

//The command below "Calls" the function or "Invoking" a function.
myFunction();

//Function to return the values.
function createFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

var fullName = createFullName("Bilbo", "Baggins");
console.log("Welcome,", fullName);

//Write a function called sumOfTwo that takes two numbers as parameters and returns the sum.
var num1 = Math.floor(Math.random() * 10 + 1);
var num2 = Math.floor(Math.random() * 10 + 1);

function sumOfTwo(num1, num2) {
  sum = num1 + num2;
  return sum;
}
console.log(num1 + " plus " + num2 + " equals " + (num1 + num2));
console.log(sumOfTwo(num1, num2));

//Create a function called isBlue. It takes one parameter.
// Return true if it is passed "blue", otherwise return false.

var a = "red";

function isBlue(aColor) {
  var color = aColor.toLowerCase();
  if (color === "blue") {
    return true;
  } else {
    return false;
  }
}
console.log(isBlue(a));

//Instructor Version
console.log("Instructor Answer: ");
function isBlue(var1) {
  return var1.toLowerCase() === "blue";
}

console.log(isBlue(a));

//Find circumference of a Circle
var ab = 7;

function findCircumference(circleRadius) {
  return 2 * Math.PI * circleRadius;
}

console.log(findCircumference(ab));

//Function to display the average of an Array
arr = [2, 3, 5, 6, 7];

// Function to calculate the average of numbers
function avg(arr) {
  var sum = 0;

  // Iterate the elements of the array
  arr.forEach(function (item, idx) {
    sum += item;
  });

  // Returning the average of the numbers
  return sum / arr.length;
}

console.log(avg("The average of the array is:", arr));

/*
Write a function called speakFriend that takes one parameter. 
Return the string "Access Denied". But, if the passed in value is "Mellon", return "Enter"
*/
var a = "awesome";

function speakFriend(par1) {
  if (par1 === "Mellon") {
    return "Enter";
  } else {
    return "Access Denied";
  }
}

console.log(speakFriend(a));

/*
Create a function named checkout that accepts 2 variables named cardBalance and price. 
If the price is more than the card balance, return false. Otherwise, return the new card balance.
*/
var a = 11;
var b = 7;

function checkout(cardBalance, price) {
  if (price > cardBalance) {
    return false;
  }
  return cardBalance - price;
}

console.log(checkout(a, b));

/*
Create a function named *returnSum* that accepts 3 integer variables named
 *num1*, *num2*, and *num3*. **Return** the sum of the three variables.
*/

let d = 5;
let e = 6;
let f = 4;

function returnSum(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(returnSum(d, e, f));

/*
Write a function called loopUntilX that takes one parameter.
Within the function, write a loop that loops as many times as the passed in value, starting at 0.
 Within the loop, print the number of iterations to the console. Once the loop is done, return true.
*/

let x = 5;

function loopUntilX(par1) {
  for (let i = 0; i < par1; i++) {
    console.log(i);
  }
  return true;
}

console.log(loopUntilX(x));

let x = 5;
let y = "testing";

function loopUntilX(par1) {
  for (let i = 0; i < par1; i++) {
    console.log(i);
  }
  return true;
}

console.log("Test 1", loopUntilX(x));
console.log("Test 2", loopUntilX(y));
