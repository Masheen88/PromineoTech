//try catch blocks
//Catch exceptions and how to handle them.
//Code can be wrapped in a tri block. Follow this a catch block will define what happens if exceptsion occur.

//This will try to run the code.
try {
  //Try to execute code.
  list.push("Try to say Hello");
  //If the error is caught 'catch' it will then console.log the error.
} catch (err) {
  //Code to execute.
  console.log("OOPS THERE BE AN ERROR!", err);
  //This is not for surrounding code.
  //All code should not be wrapped but should instead be put in place for things we can't control
  //ie. code pull from a libray or api.
} finally {
  //The program continues to run.
  console.log("Finally the code ran!");
}

console.log("Code beyond the try catch has ran!");

countSheeps([true, false, false, true, true]);

function countSheeps(arrayofsheeps) {
  return console.log(arrayofsheeps.filter(Boolean));
}
