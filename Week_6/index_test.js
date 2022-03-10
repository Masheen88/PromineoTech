var expect = chai.expect;
<<<<<<< HEAD
describe("#createDeckOfCards ", () => {
  it("should see if the length of the card deck is equal to 52.", function (done) {
    let testDeck = new deckOfCards();
    let cards = testDeck.cardDeck;
    console.log("Test", cards);
    expect(cards.length).to.eql(52);
    done();
=======

describe("Is the Player's name a string?", function () {
  describe("#createPlayers", function () {
    it("should see if players returned in the prompt are a string.", (done) => {
      var string = ["Matthew", "Test"];
      var newPlayers = new Players();
      let gamePlayers = newPlayers.createPlayers();
      // console.log("Test", gamePlayers);
      expect(gamePlayers).to.eql(string);
      done();
    })
      .timeout(10000)
      .catch(done);

    it("should throw an error if the Player name is not a string.", (done) => {
      expect(function () {
        newPlayers.createPlayers("Matthew123", "Test123");
      }).to.throw(Error);
      done();
    })
      .timeout(10000)
      .catch(done);
>>>>>>> e1cc1cd0f7082ea77d6e94eb445e0b5ad0d03114
  });
});

describe("#createPlayers", () => {
  it("should see if players returned in the prompt are a string.", (done) => {
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

    console.log(testPlayers);

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
