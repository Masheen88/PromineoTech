var expect = chai.expect;

//Checks if the number of cards in a deck.
describe("#createDeckOfCards ", () => {
  it("should see if the length of the card deck is equal to 52.", function (done) {
    let testDeck = new deckOfCards();
    let cards = testDeck.cardDeck;
    console.log("Test", cards);
    expect(cards.length).to.eql(52);
    done();
  });
});

//Checks if the prompt input contains numbers.
describe("#createPlayers", () => {
  it("should see if players returned in the prompt are a string with no numbers.", (done) => {
    var newPlayers = new Players();
    var testPlayers = [];

    let gamePlayers = newPlayers.createPlayers();

    for (let i = 0; i < gamePlayers.length; i++) {
      let lettersNumbers = /^[a-zA-Z]+$/;
      if (gamePlayers[i].match(lettersNumbers)) {
        console.log(gamePlayers[i], "is", true);
        testPlayers.push(true, gamePlayers[i]);
      } else {
        alert("This contains invalid characters");
        console.log(gamePlayers[i], "is", false);
        testPlayers.push(false, gamePlayers[i]);
      }
    }

    if (testPlayers.includes(false)) {
      console.log("Players is false:", testPlayers);
      expect(gamePlayers).to.eql(testPlayers);
      done();
    } else {
      var index = true;
      for (var i = testPlayers.length - 1; i >= 0; i--) {
        if (testPlayers[i] === index) {
          testPlayers.splice(i, 1);
        }
      }
      console.log("Players is true:", testPlayers);
      expect(gamePlayers).to.eql(testPlayers);
      done();
    }
  })
    .timeout(20000)
    .catch("consoleTest", done);
})
  .timeout(20000)
  .catch(done);
