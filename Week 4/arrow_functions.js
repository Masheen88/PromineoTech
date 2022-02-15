//Makes codes less verbose and easier to read.
//It adds the current scope to the current function.
//If it is a standalone it must be assigned to a variable.

// => create the arrow or fat arrow function
//To help minimize more code you can also use the template literal ${} in the full name example below
let createFullName = (firstName, lastName) => `${firstName}, ${lastName}`;

console.log(createFullName("Matthew", "Cox"));

//If you have multiple lines or curly braces are needed the return key would be needed.
//If you only have one parameter you do not need any paranthesis.
//If you zero parameters you would just use a blank paranthesis ()

let exampleFunction = (a, b) => {
  let result = "";
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
};

console.log(exampleFunction("Hi.. ", 3));

//It is recommended to create a const for the arrow function
//This prevents the value of the function from being change later on in the code.

//Conver the function below to an arrow function.
console.log("******", `\n\n`);
let a = 150;

function myFunction(yearlyPayment) {
  let monthly = yearlyPayment / 12;
  return monthly.toFixed(2);
}

console.log(myFunction(a));

let monthlyPayment = (yearlyPayment) => {
  monthly = yearlyPayment / 12;
  return monthly.toFixed(2);
};

console.log(monthlyPayment(a));

//Correct syntax if no arguments are passed.
let newFunction = () => {
  return "Test Successful!";
};

console.log(newFunction());

//Example 1
let fancyAlgorithm = (num1, num2, num3) => {
  value = 0;
  for (let i = 0; i < num3; i++) {
    value = (value + num2) * num1;
  }
  return value / (num1 * (num3 * 10));
};

//Example 2
let returnNumber = (num) => {
  return `Your number is $(num)`;
};

//Example 3 Xor
let xor = (num1, num2) => {
  return num1 ^ num2;
};
