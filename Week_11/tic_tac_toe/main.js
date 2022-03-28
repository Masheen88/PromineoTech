let test = $(".gameCell").click(function () {
  $(".gameCell").addClass("gameHover");
});

// console.log(test);

let maxTurns = 9;

function gameTurns(turns) {
  for (let i = 0; i < turns; i++) {
    while (i < 9) {
      console.log(i, "test,");
    }
  }
}

gameTurns(maxTurns);
