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
div.append(`<p>Player <a class=gt>${randomPlayersTurn}</a> it's your turn!</>`);

//Condition to call a function based on which player is going first.
if (randomPlayersTurn <= 1) {
  flipTiles("game_cell_o", "game_cell_x", `gameletter-o`, `gameletter-x`, "X");
} else if (randomPlayersTurn > 1) {
  flipTiles(`game_cell_x`, `game_cell_o`, `gameletter-x`, `gameletter-o`, "O");
}

//function to flip the game tiles, iterate turns, and win/lose/draw conditions.
function flipTiles(firstTurn, secondTurn, firstTurnID, secondTurnID, playerId) {
  //Declares a blank array all tile data is passed in.
  let cellsClicked = [];

  //Declares a blank array that will be sorted later in the code.
  let cellsClickedSorted = [];

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
      } else if (maxTurns % 2 == 0) {
        maxTurns++;

        img.append(
          `<img class="${secondTurnID}" src="./images/${secondTurn}.gif" />`
        );
        cellsClicked.push(secondTurn);

        imgback.remove();
      }

      for (let i = 0; i < 3; i++) {
        cellsClickedSorted.push([cellsClicked[0]]);
        cellsClicked.shift();
      }

      //Removes any instance of undefined from array.
      let results = cellsClickedSorted.filter(function (index) {
        return index !== undefined;
      });
      console.log("results", results);
      // //filters the results and outputs an array with no duplicates.
      // uniqueResults = [...new Set(results)];

      if (
        (results[0] == 1 && results[6] == 2 && results[12] == 3) ||
        (results[0] == 3 && results[6] == 2 && results[12] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 4 && results[6] == 5 && results[12] == 6) ||
        (results[0] == 6 && results[6] == 5 && results[12] == 4)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 7 && results[6] == 8 && results[12] == 9) ||
        (results[0] == 9 && results[6] == 8 && results[12] == 7)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 3 && results[6] == 6 && results[12] == 9) ||
        (results[0] == 9 && results[6] == 6 && results[12] == 3)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 && results[6] == 4 && results[12] == 7) ||
        (results[0] == 7 && results[6] == 4 && results[12] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 2 && results[6] == 5 && results[12] == 8) ||
        (results[0] == 8 && results[6] == 5 && results[12] == 2)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 1 && results[6] == 5 && results[12] == 9) ||
        (results[0] == 9 && results[6] == 5 && results[12] == 1)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 3 && results[6] == 5 && results[12] == 7) ||
        (results[0] == 7 && results[6] == 5 && results[12] == 3)
      ) {
        winGame(playerId);
      } else if (
        (results[0] == 3 && results[6] == 5 && results[12] == 7) ||
        (results[0] == 7 && results[6] == 5 && results[12] == 3)
      ) {
        winGame(playerId);
      } else {
        console.log("Game is a Draw!");
      }

      if (cellsClicked.length >= 18) {
        console.log("gameEnd");
      }
    });
  }

  function winGame(playerId) {
    console.log(`Player ${playerId} Wins!`);
    let gameTable = $("#gameOver");
    // console.log(gameTable);
    gameTable.addClass("modal");
    gameTable.prepend(`<p>"Testing"</p>`);

    return gameTable;
  }

  function drawGame() {}
}

//if no tiles match - game ends (draw).

//need logic to display the final results ie win / lose or draw.
