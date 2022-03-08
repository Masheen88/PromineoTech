var expect = chai.expect;

describe("Is the Player's name a string?", function () {
  describe("#createPlayers", function () {
    it("should see if the characters in the prompt submitted are a string.", function () {
      var newPlayers = new Players();
      var gamePlayers = newPlayers.createPlayers();
      console.log("Test", gamePlayers);
      expect().to.equal("Matthew", "Test");
    });

    it("should throw an error if the Player name is not a string.", function () {
      expect(function () {
        newPlayers.createPlayers("Matthew123", "Test123");
      }).to.throw(Error);
    });
  });
});
