// 1. Have the computer pick a number. Bonus points if you figure out how to make it a randomly chosen number
let randomNum = Math.floor((Math.random() * 100) + 1);
console.log(randomNum);

let num = prompt;

//Wrap everything in a loop so that the user is prompted until they get the answer right
while (num !== randomNum) {
    //Ask the user to guess what the number is 
    num = parseInt(prompt("Guess the number from 1-100:"));
    console.log(typeof num);
    //If the user is right, have the computer let the user know they won
    if (num == randomNum) {
        alert('You have guessed the right number! Congratulations!');
        break;
    }
    //If the user is wrong, have the computer say whether the guess was too high or too low
    else if (num < randomNum) {
        alert('Your guess was too low');
    }
    else if (num > randomNum) {
        alert('Your guess was too high');
    } // If user inputs string instead of a number it pops up mssg enter a number
    else if (num = typeof String) {
        alert('Please enter a number');
        alert('Thank you for playing');
        break;
    }
    else {
        alert('Thank you for playing');
        break;
    }
}
console.log("This is the number that you have picked", num);