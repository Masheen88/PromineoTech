//promises solves the same as problem as a callback but the code is much cleaner.
//It is an object that represents the eventual completion or failure of an asynchronous operation.
//Asynchronous functions can return a promise.
//ie return something if successful or if failed return something else.

//Uses Then and Catch methods allow to handle these processes.

doSomethingThatReturnsAPromise()
  .then(
    //pass function
    (value) => {
      console.log(value);
    }
  )
  .catch((err) => {
    console.error(err);
  });
//You can chain on the then and the catch values.

function handleEvent(value) {
  console.log(value);
}

function handleError(err) {
  console.log(err);
}

doSomethingElseThatReturnsAPromise().then(handleEvent).catch(handleError);

//If you intent to use a function multiple times it needs a name.
//Promises can also return other promises to return asynchronous code the LOOKS like it runs linear.
