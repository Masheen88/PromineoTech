/*
Map - invokes function for each element in an array and creates a new array from the returned values of each iterations function invocations.
Useful when needing to transform data in an array
Useful if you need to modify values and store them in an array.
ie. You have an array of names and want to create an array containing the length of each name.
*/

// A variable with an array that declares the names.
let names = ["Matthew", "Ashley", "Bob", "Jenny", "Santa", "odd", "even"];
// A variable that maps a function to the names.
let nameLengths = names.map(function (element) {
  // Returns the function 'element' character length for each element in the array.
  return element.length;
});

console.log(nameLengths);

/*
reduce - Takes all of the values in an array and reduces them to a single value.
This final value is the result of the reducer function passed in as an argument.
ie. You want to find the sum of a lengths array.
*/

/*
Accumulator - If no inital value to start at is declared the first element of the array will be used.
ie. Index in the array.
Each time the Accumulator is used it will return what was used by the previous execution
CurrentValue - Is the element in the array
ie. Array element itself.
*/
let plus = 11;
let sum = nameLengths.reduce(function (accumlator, currentValue) {
  // Returns the sum of the values.
  return accumlator + currentValue;
  //In this example, plus is a variable that Adds 10 to the total value.
}, plus);

//33 Characters in the nameLengths arrow and plus 10 from our given variable.
console.log(`Name Lengths Reduced: ${sum}`);

/*
for each - Invokes a function for each element in the array but does not return a new array from the results of the invocation.
Useful if you only need to perform an action for each element in an array and don't care about storing results.
ie. you want to log out each element in an array.
*/
names.forEach(function (element) {
  console.log(element);
});

/*
filter - Allows you to invoke a function to return a boolean value for each element in the array.
It will return a new array that contains all elements where the invoke method returns true.
Only keep elements that pass the boolean expression.
*/

//ie. Names that only have EVEN characters.
let evens = names.filter(function (element) {
  return element.length % 2 == 0;
});

console.log("Even Character Names: " + evens);

//ie. Names that only have ODD characters.
let odds = names.filter(function (element) {
  //Modulo %
  return element.length % 2 !== 0;
});

console.log("Odd Character Names: " + odds);

//splice
//Can be used to alter the contents of an array by
// adding, modifying, or removing elements from an array at a specific location in the array
//Removing an element from an array

//First parameter is the location to start at
//Second parameter is how many elements to remove.

let names2 = ["Matthew1", "Tim2", "Tommy3", "Jenny4"];
console.log("Names Before Being Removed: " + names2);
let removeElements = names2.splice(1, 1);
console.log("New Names List with removed name: " + names2);

let names3 = ["Matthew1", "Tim2", "Tommy3", "Jenny4"];
console.log("Names Before Being Replaced: " + names3);
//Splice method variation to 'Replace' an element that was removed.
let replacePerson = names3.splice(1, 1, "Steven");
console.log("New Names List with name replace: " + names3);

//Array to Concatenate Two arrays together
let firstNames = ["Bob", "Jill", "Bill", "Robert"];
let lastNames = ["Bobby", "Jilly", "Billy", "Roberty"];

//write your code here
function joinArrays(in1, in2) {
  newArr = in1.concat(in2);
  return newArr;
}

console.log(joinArrays(firstNames, lastNames));

//Reverse the characters in an Array
function reverseArray(in1) {
  newArr = in1.reverse(in1);
  return newArr;
}

// do not change
// for testing purposes

console.log("First Names Array in Reverse: " + reverseArray(firstNames));

//Merge and Omit Duplicate Elements from a merged Array
arr1 = [1, 3, 5, 7, 9];
arr2 = [1, 3, 10, 12, 9, 11];

// Sort numbers alphaNumerically

var numArray = [140000, 104, 99];
//A and B are argument objects
numArray.sort(function (a, b) {
  return a - b;
});

console.log(numArray);
