var expect = chai.expect;

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
  });
});
