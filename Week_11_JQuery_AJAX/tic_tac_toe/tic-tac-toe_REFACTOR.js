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
  //return randomPlayerReturn as a positive number
  return Math.abs(randomPlayerReturn);
  //convert negative number to positive
}


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
        //remove event listener from all game tiles
        for (let i = 0; i <= 9; i++) {
          $(`.gameCell-${i}`).off("click");
        }

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

      //Winning combinations
      var winningCombo = [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 5, 9],
        [3, 5, 7],
      ];
      let finalResults = [];
      //console log every 3rd element in results array
      for (let i = 0; i < results.length; i += 3) {
        console.log("Cell Clicked:", results[i][0]);
        console.log("Player Turn:", results[i + 2][0]);
        finalResults.push(results[i][0], results[i + 2][0]);
      }
      console.log("finalResults", finalResults);
      let tempResults = [];

      for (let i = 0; i < winningCombo.length; i++) {
        for (let j = 0; j < finalResults.length; j += 2) {
          tempResults.push(finalResults[j]);

          let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          //remove duplicate values from tempResults array
          let unique = [...new Set(tempResults)];
          console.log("unique", unique);

          console.log(`
          combo:
          ${winningCombo[i]}
   
          ${unique}

          Final Results Testing:
          ${unique.includes(winningCombo[i][0])}
          ${unique.includes(winningCombo[i][1])}
          ${unique.includes(winningCombo[i][2])}
          `);
          //compare if unique array contains the winning combo
          if (
            unique.includes(winningCombo[i][0]) &&
            unique.includes(winningCombo[i][1]) &&
            unique.includes(winningCombo[i][2])
          ) {
            //check if div gameCell contains nested img class gameletter-x
            if (
              $(`.gameCell-${winningCombo[i][0]}`).has(".gameImg-x") &&
              $(`.gameCell-${winningCombo[i][1]}`).has(".gameImg-x") &&
              $(`.gameCell-${winningCombo[i][2]}`).has(".gameImg-x")
            ) {
              console.log("X Wins", unique, winningCombo[i]);
              winGame(playerId);
              return;
            }
            //check if div gameCell contains nested img class gameletter-o
            else if (
              $(`.gameCell-${winningCombo[i][0]}`).has(".gameImg-o") &&
              $(`.gameCell-${winningCombo[i][1]}`).has(".gameImg-o") &&
              $(`.gameCell-${winningCombo[i][2]}`).has(".gameImg-o")
            ) {
              console.log("O Wins", unique, winningCombo[i]);
              winGame(playerId);
              return;
            }
          } else if (unique.length == 9) {
            console.log("Draw Game");
            drawGame();
            return;
          }
        }
      }
    });
  }
}
