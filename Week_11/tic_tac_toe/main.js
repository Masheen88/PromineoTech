// Declares a button to reset the game.
const replayButton = document.getElementById("replayGame");

//onclick function to reload the window
replayButton.onclick = function (replay) {
  // console.log(replay);
  window.location.reload();
};
// console.log(replayButton);

//Declares all game tiles. 9 in total for tic-tac-toe
const gameTiles = document.querySelectorAll(".gameCell");
console.log(gameTiles);

let maxTurns = 0;
let players = [1, 2];

//function to andomly select a players turn
function randomTurn(players) {
  console.log("players:", players);
  let p1 = players[0];
  let p2 = players[1];
  console.log(p1, p2);
  return Math.floor(Math.random() * (p2 - p1 + 1) + p1);
}

let randomPlayersTurn = randomTurn(players);

//Displays the current players turn
let div = $(".playerTurn");
div.append(`<p>Player <a class=gt>${randomPlayersTurn}</a> it's your turn!</>`);

console.log(
  "Testing Random Player Turn:",
  "Player:",
  randomPlayersTurn,
  "it's your turn!"
);

//onclick add a class to track and flip buttons.
let test = $(".gameCell").click(function () {
  $(".gameCell").addClass("gameHover");
});
// console.log(test);

function gameTurns(turns) {
  for (let i = 0; i < 9; i++) {
    turns++;
    console.log(i, "test ", turns);
  }
}

gameTurns(maxTurns);

//need logic to take turns
//need logic to display image based on the turn

//need logic to calculate cells, if 3 in a row match - game ends (win/lose).
//if no tiles match - game ends (draw).

//need logic to display the final results ie win / lose or draw.
