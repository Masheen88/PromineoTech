const replayButton = document.getElementById("replayGame"); // Declares a button to reset the game.

//Function to reload the window
replayButton.onclick = function (replay) {
  window.location.reload();
};

let maxTurns = 0; //Declares max number of turns (9) start at 0.

let players = [1, 2]; //Declares the number of players

//Function to randomly select a player turn
function randomTurn(players) {
  let p1 = players[0];
  let p2 = players[1];
  return Math.floor(Math.random() * (p2 - p1 + 1) + p1);
}

let randomPlayersTurn = randomTurn(players); //Declares the randomly selected players turn

//Displays the current players turn in html
let div = $(".playerTurn");
div.append(
  `<p class="playerTurnContainer">Player <span class="playerTurnID p${randomPlayersTurn}">${randomPlayersTurn}</span> goes first!</>`
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
          `<img class="${firstTurnID}" src="./images/${firstTurn}.gif" />`
        );
        cellsClicked.push(firstTurn);

        imgback.remove();
        // img.remove();
      } else if (maxTurns % 2 == 0) {
        maxTurns++;

        img.append(
          `<img class="${secondTurnID}" src="./images/${secondTurn}.gif" />`
        );

        cellsClicked.push(secondTurn);

        imgback.remove();
        // img.remove();
      }

      for (let i = 0; i < 3; i++) {
        cellsClickedSorted.push([cellsClicked[0]]);
        cellsClicked.shift();
      }

      //Removes any instance of undefined from the cellsClickedSorted array.
      let results = cellsClickedSorted.filter(function (index) {
        return index !== undefined;
      });
      console.log("results", results);

      //A condition to check if the player won or the game was a draw.

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

  function winGame(playerId) {
    console.log(`Player ${playerId} Wins!`);
    let gameTable = $(".card-body");

    gameTable.prepend(
      `<p> <span class = "${playerId}">${playerId}</span>'s Win!</p>`
    );
    $("div.playerTurn").addClass("playerTurnContainer");
    div.remove();
    // img.remove();
  }

  function drawGame() {
    console.log("Game is a Draw!");
    let gameTable = $(".card-body");
    gameTable.prepend(`<p>The Game is a Draw!</p>`);
    div.remove();
  }
}
