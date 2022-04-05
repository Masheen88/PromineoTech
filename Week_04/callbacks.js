//Callbacks allow you to read/write externally while code is running.

/*
This example would give an error since the Callback has not completed.
let userName = sentHttpRequestTEST("getUser");
console.log(userName);
*/

function getUserName(user) {
  console.log(user);
}

//getUserName passes in the function. The callback will then return the value based on the function.
//Similar to calling a variable.
sendHttpRequest("getUser", getUserName);

//This would gather data anonymously
sendHttpRequest("getUser", (user) => console.log(user));

//Do not make the mistake of passing a fuction with paranthesis such as yourFunction().
//This will cause the line of code to call the function but would not be able to return anything.
