/**
 *
 * Just to be clear, this is NOT HOMEWORK
 * This is just for fun to do when you're bored and want something to occupy your brain
 *
 * The challenge is:
 *
 * 1. Have the computer pick a number. Bonus points if you figure out how to make it a randomly chosen number
 * 2. Ask the user to guess what the number is
 * 3. If the user is wrong, have the computer say whether the guess was too high or too low
 * 4. If the user is right, have the computer let the user know they won
 * 5. Wrap everything in a loop so that the user is prompted until they get the answer right
 * 6. Brownie points if you can figure out how to make it possible for the user to exit the loop by pressing 'cancel' on the prompt instead of guessing
 *
 * I'll be uploading my solution to the problem right before next week's class. Again, there's no grade for this and it's not a part of the official coursework
 * it's just something fun to challenge yourself.
 *
 */

// A function is created with blank variables. These will be fileld in later when we call the function
/*
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
let question = getRandomNumber(0, 10);
*/

// 1. Have the computer pick a number. Bonus points if you figure out how to make it a randomly chosen number
let randomNum = Math.floor(Math.random() * 100 + 1);
//console.log(randomNum);
// 2. Ask the user to guess what the number is
let pickNum = prompt;

// Start of WHILE Loop
while (pickNum !== randomNum) {
  pickNum = parseInt(prompt("Guess a number 1 to 100"));
  console.log("Number computer picked: " + randomNum);
  if (pickNum < randomNum) {
    alert("Your guess is too low!");
    console.log("Your guess is too low!");
  } else if (pickNum > randomNum) {
    alert("Your guess is too high!");
    console.log("Your guess is too high!");
  } else if (pickNum == randomNum) {
    alert("You win!");
    console.log("You win!");
    break;
  } else if (pickNum !== randomNum) {
    alert("This is not a number: " + pickNum);
    console.log("This is not a number: " + pickNum);
    break;
  } else {
    break;
  }
  // End of WHILE Loop
}
alert("Game Over!");
console.log("Game Over!");

/*
console.log("Console Logging of: " + pickNum);
if (pickNum == randomNum) {
  console.log("You win!");
} else {
  console.log("This is not a number: " + pickNum);
}
*/
<<<<<<< HEAD

var x = 25;
var y = 3;
var z = "Z = " + x * 2;

console.log(z);
=======
>>>>>>> 64c86fe98dadd50118295c4a9203b9214b66073d
