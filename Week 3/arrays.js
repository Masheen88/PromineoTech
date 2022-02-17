//Arrays

//Customer Data ie. CRM
//Prints out customer names using a loop. You can utilize any loop though the FOR Loop is common
console.log("- List of names using a FOR LOOP");
let customerNames = [];
customerNames.push("Matthew Cox");
customerNames.push("John Doe");

for (let i = 0; i < customerNames.length; i++) {
  console.log(customerNames[i]);
}

//For OF Loop
console.log("- List of names using a FOR OF LOOP");
for (name of customerNames) {
  console.log(name);
}

//Practice
//Array using an if statement and a FOR OF Loop
let pets = [];
pets.push("Dog");
pets.push("Cat");
pets.push("Fish");
pets.push("Turtle");

if (1 + 2 == 3) {
  for (pet of pets) {
    console.log(pet);
  }
} else {
  console.log("You need to buy pets from the store!");
}

/*
Write a function called *sortArray* that accepts an array as an argument. 
Within the function, sort the array alphabetically or numerically. Return the sorted array.
*/

let input = ["Banana", "Apple", "Melon", "Zucchini"];

function sortArray(arr1) {
  return arr1.sort();
}

console.log(sortArray(input));

/*
Write a function called printArray that accepts an array as an argument. 
Create a loop that will print each value of the passed in array.
*/

let input2 = [1, 2, 3, 4];

function printArray(arr1) {
  //A for looop to itereate through the array length.
  for (let i = 0; i < arr1.length; i++) {
    //Outputs each element of they array to console.
    console.log(arr1[i]);
  }
}

printArray(input2);

/*
Using the given function, gradList, add the following names to the passed array: 
Mary, Steven, Eddie. Sort the remaining students from Z-A.
*/

let grads = ["Sarah", "Brock", "Greg", "Gerty"];

function gradList(arr1) {
  arr1.push("Mary", "Steven", "Eddie");
  arr1.sort();
  arr1.reverse();
  return arr1;
}

console.log(gradList(grads));

let arrayTest = ["bob", "bill", "jill", 2, true];

console.log(arrayTest);
arrayTest.shift(0);
console.log(arrayTest);
arrayTest.push("Bobby");
console.log(arrayTest);

console.log(arrayTest.length); //Returns the number of total elements in the array

// arrayTest.map(); //Goes through each element in the array and calls a function. It will then return the new array.
// arrayTest.reduce(); // Performs a function on each element, returns a value.
// arrayTest.forEach(); // Calls a function on each element, modifies the array.
// arrayTest.filter(); // Calls a function on each element, returns a new array where only the elements return true.
// arrayTest.splace(); //Adds, receives, or replaces elements in an array.

// var runners = ["Bill", "Richard", "Simon", "Mandy", "Paula"];
// alert(runners[0], "is the winner!"); // Calls the index in the array.
// alert(runners[runners.length - 1]); //Outputs last element in the array

// runners.push["Sammy"];
// runners.push[("Georgia", "is the winner!")];
// alert(runners[runners.length - 1], "is the loser.");

/*Example unsecure messaging server*/

let message = {
  from: "Katherine",
  to: "Bob",
  text: "Hello there!",
  toSstring: function () {
    return this.from, ":", this.to, ":", this.text;
  },
};

let newObject = {
  name: "Bob",
  age: "24",
};

//= //Declares a variable ie. let doctor = "Dr. Bob"
//== //Are two elemenmts equal? Types does not matter.
//=== //Are two elements equal? Checks if the two items are the same type.

console.log(message.toSstring());

let reducedArray = [1, 3, 5, 6, 7, 8, 9];
let initialValue = 0;
reducedArray.reduce(function(previousValue,
  currentValue){return previousValue + currentValue}
  initialValue
  };

console.log(reducedArray);
