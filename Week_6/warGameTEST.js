//Class declares an unshuffled default deck of playing cards - Begin
class deckOfCards {
  constructor() {
    this.cardDeck = [];
    const cardSuits = [
      "clubs \u2663",
      "diamonds \u2666",
      "hearts \u2665",
      "spades \u2660",
    ];
    const cardRanks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    //For in loop to iterate through each card. Each Suit/Rank of a card has a value of 1-13.
    for (let cardSuit in cardSuits) {
      for (let cardRank in cardRanks) {
        this.cardDeck.push([
          cardValues[cardRank],
          cardRanks[cardRank] + " of " + cardSuits[cardSuit],
        ]);
      }
    }
  }
}

//Class declares the players for the game - Begin
class Players {
  constructor() {
    this.player = []; // Player 1 and Player 2 Array
    this.playerHands = []; // Player 1 and Player 2 Hands to hold cards.
  }

  //Function to create players for the game
  createPlayers() {
    for (let i = 0; i < 2; i++) {
      let playerName = prompt(`The name for Player ${[i + 1]}`);
      this.player.push(playerName);
    }
    return this.player;
  }
}

//Declares the players to be created for the game - Begin
let startPlayers = new Players();
let gamePlayers = startPlayers.createPlayers();

let Player1 = gamePlayers[0]; // Declares Player 1 for the game.
let Player2 = gamePlayers[1]; // Declares Player 2 for the game.

//Display who player 1 and player 2 is by name.
console.log("Player 1 is:", Player1);
console.log("Player 2 is:", Player2);
