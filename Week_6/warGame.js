/*

*/

//Class declares an unshuffled default deck of playing cards - Begin
class deckOfCards {
  constructor() {
    this.cardDeck = [];

    const cardSuits = ["clubs", "diamonds", "hearts", "spades"];
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

    //For loop to iterate through each card.
    for (let cardSuit in cardSuits) {
      for (let cardRank in cardRanks) {
        this.cardDeck.push(`${cardRanks[cardRank]} of ${cardSuits[cardSuit]}`);
      }
    }
  }
}
//Class declares the cards for the game - Begin
class cards {
  constructor() {
    cardSuit = [];
    cardRank = [];
  }
}

//Class declares the players for the game - Begin
class Players {
  constructor() {
    this.player = [];
  }

  //Function to create players for the game.
  createPlayers() {
    let maxPlayers = 2;
    for (let i = 0; i < maxPlayers; i++) {
      let playerName = prompt(`The name for Player ${[i + 1]}`);
      this.player.push(playerName);
    }
    return this.player;
  }
}

//>---- Game of War Starts Here! ----<

//Declares the players to be created for the game - Begin
let startPlayers = new Players();
let gamePlayers = startPlayers.createPlayers();
console.log("Players:", gamePlayers);

//Declares the deck of cards to be used in the game - Begin
alert("Click Ok to get a deck of cards.");
let newDeckOfCards = new deckOfCards();
let gameDeckOfCards = newDeckOfCards.cardDeck;
console.log("Deck of Cards:", gameDeckOfCards);

//Shuffles the deck of cards
function shuffleDeckOfCards(deckOfCards) {
  for (
    let indexOfCards = deckOfCards.length - 1;
    indexOfCards > 0;
    indexOfCards--
  ) {
    let indexOfShuffledCards = Math.floor(Math.random() * (indexOfCards + 1));
    let shuffledCardDeck = deckOfCards[indexOfCards];
    deckOfCards[indexOfCards] = deckOfCards[indexOfShuffledCards];
    deckOfCards[indexOfShuffledCards] = shuffledCardDeck;
  }
  return shuffleCardDeck;
}
