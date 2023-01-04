var expect = chai.expect;

//Checks if the number of cards in a deck.
describe("#createDeckOfCards ", () => {
  // (done) is a parameter used to tell Mocha that this test is asynchronous.
  it("should see if the length of the card deck is equal to 52.", function (done) {
    let testDeck = new deckOfCards(); //Creates a new deck of cards from the war.js game itself.
    let cards = testDeck.cardDeck; //Creates a variable that holds the card deck.
    let numberOfCards = cards.length; //Creates a variable that holds the number of cards in the deck.
    console.log("Test", cards); //Prints the cards to the console.
    expect(numberOfCards).to.eql(52); //Checks if the number of cards is equal to 52.
    done(); //Tells Mocha that the test is done.
  });
});

//Checks if the prompt input contains numbers.
describe("#createPlayers", () => {
  it("should see if players returned in the prompt is a string with no numbers.", (done) => {
    var newPlayers = new Players();
    var testPlayers = [];

    let gamePlayers = newPlayers.createPlayers();

    for (let i = 0; i < gamePlayers.length; i++) {
      let lettersNumbers = /^[a-zA-Z]+$/; //regex to check for letters only
      if (gamePlayers[i].match(lettersNumbers)) {
        console.log(gamePlayers[i], "is", true);
        testPlayers.push(true, gamePlayers[i]); //pushes true and the player name to the testPlayers array
      } else {
        alert("This contains invalid characters");
        console.log(gamePlayers[i], "is", false); //This is not working
        s;
        testPlayers.push(false, gamePlayers[i]); //This is not working
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
