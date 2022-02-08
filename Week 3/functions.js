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
