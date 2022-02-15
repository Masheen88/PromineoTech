console.log("Game Begin");
/* - Question

Let's play a game. 
1. The game will consist of 100 turns. 
2. If the number of turns is even, you gain 5 points. 
3. If it's odd, you gain 3 points. 
4. If ever your score is equal to 125, you are reset back to 25 points. 
5. This will only be allowed to happen once. 
6. The game ends if you are able to make it through 100 turns or you reach more than 290 points, whichever comes first.
7. Using a for loop, create the game.

*/

// Question broken into chunks.
//Using a for loop, create the game.

//The game will consist of 100 turns.
var points = 0;
var pointsReset = false;
let turns = 100;
for (let i = 0; i < 100; i++) {
  //2. If the number of turns is even, you gain 5 points.
  if (i % 2 === 0) {
    points += 5;
    console.log("Turns: " + i + " " + "Score: " + points);
  }
  //3. If it's odd, you gain 3 points
  else if (i % 2 !== 0) {
    points += 3;
    console.log("Turns: " + i + " " + "Score: " + points);
  }

  if (points === 125) {
    points = 22;
  }

  if (points >= 290) {
    break;
  }
  /*
//4. If ever your score is equal to 125, you are reset back to 25 points.
//5. This will only be allowed to happen once. 
//6. The game ends if you are able to make it through 100 turns or you reach more than 290 points, whichever comes first.

*/
}

console.log("Game Over");

//Game using instruction Code.
console.log("New instructor game begin!");
var points = 0;
var pointsReset = false;

// Index starts at 0 or 'turn 1' and increments until 100.
for (var i = 0; i < 100 && points < 290; i++) {
  // The if statements sets points to 125 and pointsReset to true but ONLY if it is initially false.
  if (points == 125 && pointsReset === false) {
    points = 25;
    pointsReset = true;
  } else if (i % 2 === 0) {
    points = points + 5;
  } else {
    points = points + 3;
  }

  console.log("Turns: " + i + " Score: " + points);
}
