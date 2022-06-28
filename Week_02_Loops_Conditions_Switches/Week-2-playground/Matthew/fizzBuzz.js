/**
 *
 * 1. Ask the user for a number
 * 2. Count to that number in the console
 * 3. For each multiple of 3, print "Fizz"
 * 4. For each multiple of 5, print "Buzz"
 * 5. For each multiple of 3 and 5, print "FizzBuzz"
 *
 */

var destinationNumber = prompt("Pick a number.");

/**
 * % = modulo
 */

for (let i = 1; i <= destinationNumber; i++) {
  if (i % 5 !== 0 && i % 3 !== 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
