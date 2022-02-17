/* 1a.
Create an array called ages that contains the following values: 
3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in 
the last element of the array 
(do not use numbers to reference the last element, find it programmatically, 
ages[7] – ages[0] is not allowed). 
Print the result to the console.
*/

//A variable to declare an array of ages.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//A variable to subtract the first ages array element from the last ages array element.
let minusAges = ages[ages.length - 1] - ages[0];

//Logs out the results of minusAges variable to the browser console.
console.log("1a. Subjecting first array from last array:", minusAges);

/* 1b.
Add a new age to your array and repeat the step above to ensure it is dynamic.
(works for arrays of different lengths).
*/

//This will add two additional values to our ages variable above.
ages.push(100, 110);

//Logs out the results of minusAges variable to the browser console but include our added ages from above.
console.log("1b. Adding to the array then repeat step 1:", minusAges);

/* 1c.
Use a loop to iterate through the array and calculate the average age. 
Print the result to the console.
 */

//Declares a variable with a number of zero.
let total = 0;

//Runs a lop to iterate through the ages array.
for (let i = 0; i < ages.length; i++) {
  //We then call the total variable and sum the values of each element in the array to the total.
  total += ages[i];
  /*Sets a variable called average and divides total by
  the length of the ages array to get the average of the array.*/
  average = total / ages.length;
}

//Logs out the results of the average variable to the browser console.
console.log("1c. The average of all ages:", average);

/* 2a.
Create an array called names that contains the following values: 
‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
Use a loop to iterate through the array and calculate the average number of letters per name.
Print the result to the console.
 */

//Sets a variable to an array of names.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
//Sets a variable to equal zero.
let totalNamesAverage = 0;

//Runs a loop to iterate through the names array.
for (let i = 0; i < names.length; i++) {
  //Sums the characters in each name element and divides by the array length.
  totalNamesAverage += names[i].length / names.length;
}

//Logs out the results of the totalNamesAverage variable to the browser console.
console.log("2a. The average of all names:", totalNamesAverage);

/*2b.
Use a loop to iterate through the array again and concatenate all the names together, 
separated by spaces, 
and print the result to the console.
 */

//Sets a variable containing an empty string.
let concatNames = "";

//Runs a loop to iterate through the names length array.
for (let i = 0; i < names.length; i++) {
  concatNames = concatNames.concat(names[i], " ");
}

//Logs out the results of the concatNames to the browser console.
console.log("2b. Names Concatenated:", concatNames);

/*3
How do you access the last element of any array?
 */
let lastArrayElement = names.slice(-1);

//Logs out the results of the lastArrayElement variable to the browser console.
console.log("3. Last Element:", lastArrayElement);

/*4
How do you access the first element of any array?
 */
let firstArrayElement = names.slice(0, 1);

//Logs out the results of the firstArrayElement variable to the browser console.
console.log("4. First Element:", firstArrayElement);

/*5
Create a new array called nameLengths. 
Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array
 */
let nameLengths = [];

//Runs a loop to iterate through the names length array.
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}

//Logs out the results of the nameLengths variable to the browser console.
console.log("5. Names character lengths add to new array:", nameLengths);

/*6
Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
Print the result to the console.
 */

//Sets a blank variable for the total name array length.
let totalNameArrLength;

//Runs a loop to iterate through the names length array.
for (let i = 0; i < nameLengths.length; i++) {
  totalNameArrLength = nameLengths.length;
}

//Logs out the results of the totalNameArrLength variable to the browser console.
console.log("6. Total of nameLength Array elements:", totalNameArrLength);
/*7
Write a function that takes two parameters, 
word and n, as arguments and returns the word concatenated to itself n number of times. 
(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
 */

/*Creates a function to repeat a string by a given number of times.
This accepts two parameters. A string and a number.*/
function parAddition(word, n) {
  wordRep = word.repeat(n);
  return wordRep;
}
//Sets a variable to call the function parAddition
let wordRepeating = parAddition("Hello", 3);

//Logs out the results of the wordRepeating variable to the browser console.
console.log("7. Word Concatenating based on n number of times:", wordRepeating);

/*8
Write a function that takes two parameters, firstName and lastName, and returns a full name 
(the full name should be the first and the last name separated by a space).
 */

/*Creates a function to display a full name.
This accepts two parameters. A First Name and Last Name ie. John, Doe*/
function fullName(firstName, lastName) {
  fullNameMerged = firstName + " " + lastName;
  return fullNameMerged;
}
//Sets a variable to call the function fullName
let yourFullName = fullName("Matthew", "Cox");

//Logs out the results of the yourFullName variable to the browser console.
console.log("8. First name and last name:", yourFullName);

/*9
Write a function that takes an array of numbers and returns true 
if the sum of all the numbers in the array is greater than 100.
 */

//Sets a variable to an array of numbers.
let yourArray = [10, 20, 30, 40, 1];

/*Creates a function to return true/false if the array is greater than 100.
This accepts one array parameter.*/
function trueArray(arr1) {
  arrayTotal = 0;
  for (let i = 0; i < arr1.length; i++) {
    arrayTotal += arr1[i];
  }
  arrayIsTrue = arrayTotal > 100;
  return arrayIsTrue;
}

//sets a variable to call a function.
let yourSummedArray = trueArray(yourArray);

//Logs out the results of the yourSummedArray variable to the browser console.
console.log("9. Is array sum greater than 100?", yourSummedArray);

/*10
Write a function that takes an array of numbers and returns the average of all the elements in the array.
 */

/*Creatse a function to output the average of all numbers in the array.
This accepts one array parameter.*/
function averageArray(arr1) {
  let total = 0;
  arr1.forEach(function (num, index) {
    total += num;
  });
  return total / arr1.length;
}

//Logs out the results of the averageArray function to the browser console.
console.log(
  "10. Average of all numbers in the array:",
  averageArray(yourArray)
);

/*11
Write a function that takes two arrays of numbers and returns true if 
the average of the elements in the first array is greater than the average of the elements in the second array.
 */

//Two arrays are declared below.
let array1 = [10, 10, 10];
//Feel free to change the 9 to a 10.
let array2 = [10, 10, 9];

/*Creates a function to compare the average of the first array vs the second array.
This accepts two array parameters.*/
function averageTwoArrays(arr1, arr2) {
  //Two variables are set to 0 and will be added to later in the function.
  let totalarr1 = 0;
  let totalarr2 = 0;

  //Uses a forEach loop to iterate through each arr1's element and index.
  arr1.forEach(function (arr1Element, index) {
    //Adds each of arr1's elements together and adds them to variable totalarr1
    totalarr1 += arr1Element;
  });
  //Sets a variable that divides arr1's total by the length of arr1.
  array1Average = totalarr1 / arr1.length;

  //Uses a forEach loop to iterate through each arr2's element and index.
  arr2.forEach(function (arr2Element, index) {
    //Adds each of arr2's elements together and adds them to variable totalarr1
    totalarr2 += arr2Element;
  });
  //Sets a variable that divides arr2's total by the length of arr2.
  array2Average = totalarr2 / arr2.length;

  //Returns true if array1 is greater than array2
  return array1Average > array2Average;
}

//Logs out the results of the averageTwoArrays function to the browser console.
console.log(
  "11. Is the first array greater than the second array?",
  averageTwoArrays(array1, array2)
);

/*12
Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and 
returns true if it is hot outside and if moneyInPocket is greater than 10.50.
 */

/*Creates a function to determine if it is hot outside and if you have enough money to buy a drink.
This accepts two parameters. Parameter one is true or false. Parameter two is the amount of money you have.*/
function willBuyDrink(isHotOutside, moneyInPocket) {
  let buyADrink = isHotOutside == true && moneyInPocket > 10.5;

  return buyADrink;
}

//Logs out the results of the willBuyDrink function to the browser console.
console.log("12. Should I buy a drink?", willBuyDrink(true, 10.51));

/*13
Create a function of your own that solves a problem. 
In comments, write what the function does and why you created it.
*/

/*
Problem: We are driving the worlds worst car! :) You use 1 gallons of gas per mile. We need to calculate 
if you have enough gallons of gas to get to your destination.

Solution: I chose to create a function containg an IF statment that will tell you if you need to fill up 
based on the amount of fuel you have "gallonsOfFuel" and the miles you have left to drive "milesLeftToDrive"
*/

//Creates a function called buyGas and accepts two parameters.
function buyGas(gallonsOfFuel, milesLeftToDrive) {
  //Sets a blank variable
  let goBuyGas;

  //If Your gallons of fuel are less than or euqal to the miles you have left let the user know they need gas.
  if (gallonsOfFuel <= milesLeftToDrive) {
    goBuyGas =
      "You have " +
      gallonsOfFuel +
      " gallons left and " +
      milesLeftToDrive +
      " miles to drive. Please go get fuel!";
    //If Your gallons of fuel are more than the miles you have left let the user know they do not need gas.
  } else {
    goBuyGas = "You do not need to get any gas. Keep Driving!";
  }

  return goBuyGas;
}

//Sets a variable to prompt the user on how many gallons they have left.
let gasLeft = prompt("How many gallons of gas do you have left?");
//Sets a variable to prompt the user on how many miles they have left.
let milesLeft = prompt("How many miles do you need to drive?");

//Logs out the results of the buyGas function to the browser console.
console.log("13. Should I buy gas?", buyGas(gasLeft, milesLeft));
