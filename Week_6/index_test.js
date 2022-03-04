var expect = chai.expect;

describe("Is Player name a string?", function () {
  describe("#doSomething", function () {
    it("should see if the characters in the prompt submitted are a string.", function () {
      var playerName = doSomething("Ashley", "Matthew");
      expect(playerName).to.equal("Ashley", "Matthew");
    });

    it("should throw an error if the Player name is not a string.", function () {
      expect(function () {
        doSomething(123);
      }).to.throw(Error);
    });
  });
});
