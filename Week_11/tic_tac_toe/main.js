const replayButton = document.getElementById("replayGame"); // Declares a button to reset the game.

//Function to reload the window
replayButton.onclick = function (replay) {
  window.location.reload();
};

let maxTurns = 0; //Declares max number of turns (9) start at 0.

let players = [1, 2]; //Declares the number of players
let p1X = []; //Player 1 = X
let p2O = []; //Player 2 = O

//Function to randomly select a player turn
function randomTurn(players) {
  let p1 = players[0];
  let p2 = players[1];
  let randomPlayerReturn = Math.floor(Math.random() * (p2 - p1 + 1) + p1);
  console.log("test", randomPlayerReturn);
  if (randomPlayerReturn == 1) {
    p1X.push("X");
    return p1X, randomPlayerReturn;
  } else if (randomPlayerReturn == 2) {
    p2O.push("O");
    return randomPlayerReturn;
  }
}

let randomPlayersTurn = randomTurn(players); //Declares the randomly selected players turn

//Function to write the game letter to the score area
function playerLetter(randomPlayersTurn) {
  if (randomPlayersTurn == 1) {
    return p1X;
  } else if (randomPlayersTurn == 2) {
    return p2O;
  }
}

//Displays the current players turn in html
let div = $(".playerTurn");
div.append(
  `<p class="playerTurnContainer">Player <span class="playerTurnID p${randomPlayersTurn}">${playerLetter(
    randomPlayersTurn
  )}</span> goes first!</>`
);

//Condition to call a function based on which player is going first.
if (randomPlayersTurn <= 1) {
  flipTiles("game_cell_o", "game_cell_x", `gameletter-o`, `gameletter-x`, "X");
} else if (randomPlayersTurn > 1) {
  flipTiles(`game_cell_x`, `game_cell_o`, `gameletter-x`, `gameletter-o`, "O");
}

//function to flip the game tiles, iterate turns, and win/lose/draw conditions.
function flipTiles(firstTurn, secondTurn, firstTurnID, secondTurnID, playerId) {
  let cellsClicked = []; //Declares a blank array all tile data is passed in.

  let cellsClickedSorted = []; //Declares a blank array that will be sorted later in the code.

  //A loop to iterate based on the player click on a game tile.
  for (let i = 0; i <= 9; i++) {
    $(`.gameCell-${i}`).click(function () {
      $(`.gameCell-${i}`).addClass("gameHover"); //class gameHover is referenced in main.css to flip a tile.

      cellsClicked.push(i, `.gameCell-${i}`);

      let img = $(`.gameCell-${i}`);
      let imgback = $(`.gameletter-back-${i}`);

      //Condition to display the x or o image on an existing game tile.
      if (maxTurns % 2 !== 0) {
        maxTurns++;

        img.append(
          `<img class="${firstTurnID} gameImg-${i}" src="./images/${firstTurn}.gif" />`
        );
        cellsClicked.push(firstTurn);

        imgback.remove();
      } else if (maxTurns % 2 == 0) {
        maxTurns++;

        img.append(
          `<img class="${secondTurnID} gameImg-${i}" src="./images/${secondTurn}.gif" />`
        );

        cellsClicked.push(secondTurn);

        imgback.remove();
      }

      //Removes duplicate images if same cell is clicked
      if (`.gameCell-${i}` === `.gameCell-1`) {
        $(`.gameImg-${i}`).eq(1).remove();
      } else if (`.gameCell-${i}` === `.gameCell-2`) {
        $(`.gameImg-${i}`).eq(1).remove();
      } else if (`.gameCell-${i}` === `.gameCell-3`) {
        $(`.gameImg-${i}`).eq(1).remove();
      } else if (`.gameCell-${i}` === `.gameCell-4`) {
        $(`.gameImg-${i}`).eq(1).remove();
      } else if (`.gameCell-${i}` === `.gameCell-5`) {
        $(`.gameImg-${i}`).eq(1).remove();
      } else if (`.gameCell-${i}` === `.gameCell-6`) {
        $(`.gameImg-${i}`).eq(1).remove();
      } else if (`.gameCell-${i}` === `.gameCell-7`) {
        $(`.gameImg-${i}`).eq(1).remove();
      } else if (`.gameCell-${i}` === `.gameCell-8`) {
        $(`.gameImg-${i}`).eq(1).remove();
      } else if (`.gameCell-${i}` === `.gameCell-9`) {
        $(`.gameImg-${i}`).eq(1).remove();
      }

      //Loop to pursh cells sort the cells clicked.
      for (let i = 0; i < 3; i++) {
        cellsClickedSorted.push([cellsClicked[0]]);
        cellsClicked.shift();
      }

      //Removes any instance of undefined from the cellsClickedSorted array.
      let results = cellsClickedSorted.filter(function (index) {
        return index !== undefined;
      });
      console.log("results", results);

      //Function if a player wins the game
      function winGame(playerId) {
        console.log(playerId);
        let gameTable = $(".card-body");
        if (playerId == "X") {
          gameTable.prepend(
            `<p> <span class = "btn btn-danger px ${playerId}">${playerId}</span>'s Win!</p>`
          );
          $("div.playerTurn").addClass("playerTurnContainer");
          div.remove();
        } else if (playerId == "O") {
          gameTable.prepend(
            `<p> <span class = "btn btn-primary po ${playerId}">${playerId}</span>'s Win!</p>`
          );
          $("div.playerTurn").addClass("playerTurnContainer");
          div.remove();
        }
      }

      //Function if game is a draw
      function drawGame() {
        let gameTable = $(".card-body");
        gameTable.prepend(`<p>The Game is a Draw!</p>`);
        div.remove();
      }

      //A condition to check if the player won or the game was a draw.
      //Turn combinations listed below - should have used an array instead :)

      //Win Conditions for 3 turns
      if (
        (results[0] == 1 && results[6] == 2 && results[12] == 3) ||
        (results[0] == 3 && results[6] == 2 && results[12] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 && results[6] == 4 && results[12] == 7) ||
        (results[0] == 7 && results[6] == 4 && results[12] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 && results[6] == 5 && results[12] == 9) ||
        (results[0] == 9 && results[6] == 5 && results[12] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 3 && results[6] == 6 && results[12] == 9) ||
        (results[0] == 9 && results[6] == 6 && results[12] == 3)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 7 && results[6] == 8 && results[12] == 9) ||
        (results[0] == 9 && results[6] == 8 && results[12] == 7)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 2 && results[6] == 5 && results[12] == 8) ||
        (results[0] == 8 && results[6] == 5 && results[12] == 2)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 4 && results[6] == 5 && results[12] == 6) ||
        (results[0] == 6 && results[6] == 5 && results[12] == 4)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 3 && results[6] == 5 && results[12] == 7) ||
        (results[0] == 7 && results[6] == 5 && results[12] == 3)
      ) {
        winGame(playerId);
      }
      //Win conditions for 5 turns
      else if (
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 7 &&
          results[9] == 2 &&
          results[12] == 4) ||
        (results[0] == 4 &&
          results[3] == 2 &&
          results[6] == 7 &&
          results[9] == 5 &&
          results[12] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 3 &&
          results[3] == 5 &&
          results[6] == 9 &&
          results[9] == 2 &&
          results[12] == 6) ||
        (results[0] == 6 &&
          results[3] == 2 &&
          results[6] == 9 &&
          results[9] == 5 &&
          results[12] == 3)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 7 &&
          results[3] == 5 &&
          results[6] == 9 &&
          results[9] == 1 &&
          results[12] == 8) ||
        (results[0] == 8 &&
          results[3] == 1 &&
          results[6] == 9 &&
          results[9] == 5 &&
          results[12] == 7)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 3 &&
          results[9] == 6 &&
          results[12] == 2) ||
        (results[0] == 2 &&
          results[3] == 6 &&
          results[6] == 3 &&
          results[9] == 5 &&
          results[12] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 3 &&
          results[3] == 5 &&
          results[6] == 1 &&
          results[9] == 9 &&
          results[12] == 2) ||
        (results[0] == 2 &&
          results[3] == 9 &&
          results[6] == 1 &&
          results[9] == 5 &&
          results[12] == 3)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 3 &&
          results[3] == 5 &&
          results[6] == 9 &&
          results[9] == 4 &&
          results[12] == 6) ||
        (results[0] == 6 &&
          results[3] == 4 &&
          results[6] == 9 &&
          results[9] == 5 &&
          results[12] == 3)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 3 &&
          results[3] == 5 &&
          results[6] == 9 &&
          results[9] == 1 &&
          results[12] == 6) ||
        (results[0] == 6 &&
          results[3] == 1 &&
          results[6] == 9 &&
          results[9] == 5 &&
          results[12] == 3)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 6 &&
          results[3] == 8 &&
          results[6] == 9 &&
          results[9] == 5 &&
          results[12] == 3) ||
        (results[0] == 3 &&
          results[3] == 5 &&
          results[6] == 9 &&
          results[9] == 8 &&
          results[12] == 6)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 4 &&
          results[3] == 8 &&
          results[6] == 7 &&
          results[9] == 5 &&
          results[12] == 1) ||
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 7 &&
          results[9] == 8 &&
          results[12] == 4)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 4 &&
          results[3] == 2 &&
          results[6] == 1 &&
          results[9] == 5 &&
          results[12] == 7) ||
        (results[0] == 7 &&
          results[3] == 5 &&
          results[6] == 1 &&
          results[9] == 2 &&
          results[12] == 4)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 6 &&
          results[3] == 2 &&
          results[6] == 3 &&
          results[9] == 5 &&
          results[12] == 9) ||
        (results[0] == 9 &&
          results[3] == 5 &&
          results[6] == 3 &&
          results[9] == 2 &&
          results[12] == 6)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 9 &&
          results[3] == 5 &&
          results[6] == 7 &&
          results[9] == 3 &&
          results[12] == 8) ||
        (results[0] == 8 &&
          results[3] == 3 &&
          results[6] == 7 &&
          results[9] == 5 &&
          results[12] == 9)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 7 &&
          results[9] == 3 &&
          results[12] == 4) ||
        (results[0] == 4 &&
          results[3] == 3 &&
          results[6] == 7 &&
          results[9] == 5 &&
          results[12] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 5 &&
          results[3] == 7 &&
          results[6] == 6 &&
          results[9] == 8 &&
          results[12] == 4) ||
        (results[0] == 4 &&
          results[3] == 8 &&
          results[6] == 6 &&
          results[9] == 7 &&
          results[12] == 5)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 5 &&
          results[3] == 1 &&
          results[6] == 6 &&
          results[9] == 2 &&
          results[12] == 4) ||
        (results[0] == 4 &&
          results[3] == 2 &&
          results[6] == 6 &&
          results[9] == 1 &&
          results[12] == 5)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 8 &&
          results[3] == 4 &&
          results[6] == 9 &&
          results[9] == 5 &&
          results[12] == 7) ||
        (results[0] == 7 &&
          results[3] == 5 &&
          results[6] == 9 &&
          results[9] == 4 &&
          results[12] == 8)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 2 &&
          results[3] == 4 &&
          results[6] == 3 &&
          results[9] == 5 &&
          results[12] == 1) ||
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 3 &&
          results[9] == 4 &&
          results[12] == 2)
      ) {
        winGame(playerId);
      }
      //Win conditions for 6 turns
      else if (
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 4 &&
          results[9] == 7 &&
          results[12] == 2 &&
          results[15] == 3) ||
        (results[0] == 3 &&
          results[3] == 2 &&
          results[6] == 7 &&
          results[9] == 4 &&
          results[12] == 5 &&
          results[15] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 8 &&
          results[3] == 5 &&
          results[6] == 6 &&
          results[9] == 3 &&
          results[12] == 9 &&
          results[15] == 7) ||
        (results[0] == 7 &&
          results[3] == 9 &&
          results[6] == 3 &&
          results[9] == 6 &&
          results[12] == 5 &&
          results[15] == 8)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 3 &&
          results[9] == 6 &&
          results[12] == 9 &&
          results[15] == 4) ||
        (results[0] == 4 &&
          results[3] == 9 &&
          results[6] == 6 &&
          results[9] == 3 &&
          results[12] == 5 &&
          results[15] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 9 &&
          results[3] == 5 &&
          results[6] == 7 &&
          results[9] == 2 &&
          results[12] == 6 &&
          results[15] == 8) ||
        (results[0] == 8 &&
          results[3] == 6 &&
          results[6] == 2 &&
          results[9] == 7 &&
          results[12] == 5 &&
          results[15] == 9)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 2 &&
          results[6] == 7 &&
          results[9] == 5 &&
          results[12] == 3 &&
          results[15] == 8) ||
        (results[0] == 8 &&
          results[3] == 3 &&
          results[6] == 5 &&
          results[9] == 7 &&
          results[12] == 2 &&
          results[15] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 7 &&
          results[9] == 4 &&
          results[12] == 9 &&
          results[15] == 6) ||
        (results[0] == 6 &&
          results[3] == 9 &&
          results[6] == 4 &&
          results[9] == 7 &&
          results[12] == 5 &&
          results[15] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 2 &&
          results[6] == 3 &&
          results[9] == 5 &&
          results[12] == 6 &&
          results[15] == 8) ||
        (results[0] == 8 &&
          results[3] == 6 &&
          results[6] == 5 &&
          results[9] == 3 &&
          results[12] == 2 &&
          results[15] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 3 &&
          results[6] == 5 &&
          results[9] == 9 &&
          results[12] == 7 &&
          results[15] == 6) ||
        (results[0] == 6 &&
          results[3] == 7 &&
          results[6] == 9 &&
          results[9] == 5 &&
          results[12] == 3 &&
          results[15] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 9 &&
          results[3] == 7 &&
          results[6] == 5 &&
          results[9] == 1 &&
          results[12] == 3 &&
          results[15] == 4) ||
        (results[0] == 4 &&
          results[3] == 3 &&
          results[6] == 1 &&
          results[9] == 5 &&
          results[12] == 7 &&
          results[15] == 9)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 8 &&
          results[3] == 4 &&
          results[6] == 6 &&
          results[9] == 7 &&
          results[12] == 5 &&
          results[15] == 1) ||
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 7 &&
          results[9] == 6 &&
          results[12] == 4 &&
          results[15] == 8)
      ) {
        winGame(playerId);
      }
      //Win conditions for 7 turns.
      else if (
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 7 &&
          results[9] == 2 &&
          results[12] == 9 &&
          results[15] == 3 &&
          results[18] == 4) ||
        (results[0] == 4 &&
          results[3] == 3 &&
          results[6] == 9 &&
          results[9] == 2 &&
          results[12] == 7 &&
          results[15] == 5 &&
          results[18] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 2 &&
          results[6] == 4 &&
          results[9] == 5 &&
          results[12] == 3 &&
          results[15] == 6 &&
          results[18] == 7) ||
        (results[0] == 7 &&
          results[3] == 6 &&
          results[6] == 3 &&
          results[9] == 5 &&
          results[12] == 4 &&
          results[15] == 2 &&
          results[18] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 4 &&
          results[9] == 2 &&
          results[12] == 6 &&
          results[15] == 3 &&
          results[18] == 7) ||
        (results[0] == 7 &&
          results[3] == 3 &&
          results[6] == 6 &&
          results[9] == 2 &&
          results[12] == 4 &&
          results[15] == 5 &&
          results[18] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 4 &&
          results[9] == 2 &&
          results[12] == 3 &&
          results[15] == 6 &&
          results[18] == 7) ||
        (results[0] == 7 &&
          results[3] == 6 &&
          results[6] == 3 &&
          results[9] == 2 &&
          results[12] == 4 &&
          results[15] == 5 &&
          results[18] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 2 &&
          results[3] == 3 &&
          results[6] == 7 &&
          results[9] == 5 &&
          results[12] == 9 &&
          results[15] == 6 &&
          results[18] == 8) ||
        (results[0] == 8 &&
          results[3] == 6 &&
          results[6] == 9 &&
          results[9] == 5 &&
          results[12] == 7 &&
          results[15] == 3 &&
          results[18] == 2)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 2 &&
          results[6] == 5 &&
          results[9] == 4 &&
          results[12] == 3 &&
          results[15] == 6 &&
          results[18] == 7) ||
        (results[0] == 7 &&
          results[3] == 6 &&
          results[6] == 3 &&
          results[9] == 4 &&
          results[12] == 5 &&
          results[15] == 2 &&
          results[18] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 3 &&
          results[9] == 9 &&
          results[12] == 7 &&
          results[15] == 6 &&
          results[18] == 4) ||
        (results[0] == 4 &&
          results[3] == 6 &&
          results[6] == 7 &&
          results[9] == 9 &&
          results[12] == 3 &&
          results[15] == 5 &&
          results[18] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 4 &&
          results[9] == 8 &&
          results[12] == 3 &&
          results[15] == 9 &&
          results[18] == 2) ||
        (results[0] == 2 &&
          results[3] == 9 &&
          results[6] == 3 &&
          results[9] == 8 &&
          results[12] == 4 &&
          results[15] == 5 &&
          results[18] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 2 &&
          results[9] == 3 &&
          results[12] == 7 &&
          results[15] == 6 &&
          results[18] == 4) ||
        (results[0] == 4 &&
          results[3] == 6 &&
          results[6] == 7 &&
          results[9] == 3 &&
          results[12] == 2 &&
          results[15] == 5 &&
          results[18] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 5 &&
          results[6] == 2 &&
          results[9] == 9 &&
          results[12] == 8 &&
          results[15] == 6 &&
          results[18] == 3) ||
        (results[0] == 3 &&
          results[3] == 6 &&
          results[6] == 8 &&
          results[9] == 9 &&
          results[12] == 2 &&
          results[15] == 5 &&
          results[18] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 3 &&
          results[6] == 4 &&
          results[9] == 8 &&
          results[12] == 6 &&
          results[15] == 7 &&
          results[18] == 5) ||
        (results[0] == 5 &&
          results[3] == 7 &&
          results[6] == 6 &&
          results[9] == 8 &&
          results[12] == 4 &&
          results[15] == 3 &&
          results[18] == 1)
      ) {
        winGame(playerId);
      }
      //Win conditions for 8 turns
      else if (
        (results[0] == 1 &&
          results[3] == 4 &&
          results[6] == 7 &&
          results[9] == 6 &&
          results[12] == 3 &&
          results[15] == 2 &&
          results[18] == 9 &&
          results[21] == 8) ||
        (results[0] == 8 &&
          results[3] == 9 &&
          results[6] == 2 &&
          results[9] == 3 &&
          results[12] == 6 &&
          results[15] == 7 &&
          results[18] == 4 &&
          results[21] == 1)
      ) {
        winGame(playerId);
      }
      //Win conditions for 9 turns
      else if (
        (results[0] == 1 &&
          results[3] == 4 &&
          results[6] == 7 &&
          results[9] == 6 &&
          results[12] == 3 &&
          results[15] == 8 &&
          results[18] == 9 &&
          results[21] == 2 &&
          results[24] == 5) ||
        (results[0] == 5 &&
          results[3] == 2 &&
          results[6] == 9 &&
          results[9] == 8 &&
          results[12] == 3 &&
          results[15] == 6 &&
          results[18] == 7 &&
          results[21] == 4 &&
          results[24] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 4 &&
          results[6] == 7 &&
          results[9] == 2 &&
          results[12] == 3 &&
          results[15] == 8 &&
          results[18] == 9 &&
          results[21] == 6 &&
          results[24] == 5) ||
        (results[0] == 5 &&
          results[3] == 6 &&
          results[6] == 9 &&
          results[9] == 8 &&
          results[12] == 3 &&
          results[15] == 2 &&
          results[18] == 7 &&
          results[21] == 4 &&
          results[24] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 &&
          results[3] == 4 &&
          results[6] == 7 &&
          results[9] == 2 &&
          results[12] == 3 &&
          results[15] == 6 &&
          results[18] == 9 &&
          results[21] == 8 &&
          results[24] == 5) ||
        (results[0] == 5 &&
          results[3] == 8 &&
          results[6] == 9 &&
          results[9] == 6 &&
          results[12] == 3 &&
          results[15] == 2 &&
          results[18] == 7 &&
          results[21] == 4 &&
          results[24] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 3 &&
          results[3] == 6 &&
          results[6] == 9 &&
          results[9] == 8 &&
          results[12] == 7 &&
          results[15] == 4 &&
          results[18] == 1 &&
          results[21] == 2 &&
          results[24] == 5) ||
        (results[0] == 5 &&
          results[3] == 2 &&
          results[6] == 1 &&
          results[9] == 4 &&
          results[12] == 7 &&
          results[15] == 8 &&
          results[18] == 9 &&
          results[21] == 6 &&
          results[24] == 3)
      ) {
        winGame(playerId);
        //If no cobinations match game is a draw.
      } else if (results.length == 27) {
        drawGame();
      }
    });
  }
}
