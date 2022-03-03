/*

*/

//Class declares an unshuffled default deck of playing cards - Begin
class deckOfCards {
  constructor() {
    this.cardDeck = [];
    // this.cardValues = [];

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

let Player1 = gamePlayers[0];
let Player2 = gamePlayers[1];

console.log("Player 1 is:", Player1);
console.log("Player 2 is:", Player2);

//Declares the deck of cards to be used in the game - Begin
alert("Click Ok to get a deck of cards.");
console.log("UnShuffled Card Deck:", new deckOfCards().cardDeck);
let newDeckOfCards = new deckOfCards();
let gameDeckOfCards = newDeckOfCards.cardDeck;
//Logs card values and each card in the deck.
// console.log("Deck of Cards:", newDeckOfCards.cardValues, gameDeckOfCards);

//Shuffles the deck of cards
function shuffleDeckOfCards(gameDeckOfCards, gameDeckOfCardsValue) {
  for (
    let indexOfCards = gameDeckOfCards.length - 1;
    indexOfCards > 0;
    indexOfCards--
  ) {
    let indexOfShuffledCards = Math.floor(Math.random() * (indexOfCards + 1));
    let shuffledGameDeckOfCards = gameDeckOfCards[indexOfCards];
    gameDeckOfCards[indexOfCards] = gameDeckOfCards[indexOfShuffledCards];
    gameDeckOfCards[indexOfShuffledCards] = shuffledGameDeckOfCards;
  }
  return gameDeckOfCards;
}

//Declares the shuffled game deck of cards - Begin
alert("Click Ok to get a shuffle your deck of cards.");
let shuffledGameDeckOfCards = shuffleDeckOfCards(
  gameDeckOfCards,
  newDeckOfCards.cardValues
);
console.log("Deck of ShuffledCards:", shuffledGameDeckOfCards);

//Equally deals the cards to each player.
function dealCards(shuffledGameDeckOfCards) {
  let half = Math.ceil(shuffledGameDeckOfCards.length / 2);
  let player1Hands = shuffledGameDeckOfCards.slice(0, half);
  let player2Hands = shuffledGameDeckOfCards.slice(-half);

  return [player1Hands, player2Hands];
}

//Declares what each player hand will be - Begin
alert("Click OK to deal the cards to each player.");
let playerHands = dealCards(shuffledGameDeckOfCards);
// console.log("Player Hands:", playerHands);
let player1Hands = playerHands[0];
let player2Hands = playerHands[1];

//Display Player 1 and 2 Hands.
console.log("Player 1 hand is:", player1Hands);
console.log("Player 2 hand is:", player2Hands);

//Display current element in the player hands array.
// console.log("P1", player1Hands[0][0], player1Hands[0], player1Hands[0][1]);
// console.log("P2", player2Hands[0][0], player2Hands[0], player2Hands[0][1]);

//Determines each turn for the game - Begin
function takeTurns(player1HandArr, player2HandArr) {
  console.log("takeTurns TEST", player1HandArr[0], "\n \n");
  let Player1NewHand = [];
  let Player2NewHand = [];

  for (let i = 0; i < player1HandArr.length; i++) {
    // console.log("TESTING", player1Hands[i]);
    if (player1HandArr[i][0] < player2HandArr[i][0]) {
      //   alert("Press OK to lay down your cards");
      console.log(
        "Player 1 Loses:",
        player1HandArr[i],
        "-VS-",
        "Player 2 Wins:",
        player2HandArr[i]
      );
      Player2NewHand.push(player1HandArr[i][0]);
      Player1NewHand.splice(0, 1);
      console.log("P1 gives card to P2");
    } else if (player1HandArr[i][0] > player2HandArr[i][0]) {
      //   alert("Press OK to lay down your cards");
      console.log(
        "Player 2 Loses:",
        player2HandArr[i],
        "-VS-",
        "Player 1 Wins:",
        player1HandArr[i]
      );
      Player1NewHand.push(player2HandArr[i][0]);
      Player2NewHand.splice(0, 1);
      console.log("P2 gives card to P1");
    } else if (player1HandArr[i][0] === player2HandArr[i][0]) {
      console.log(`
        Player Hands are equal: We are going to card WAR and both lose!"
        ${player1HandArr[i]} vs ${player2HandArr[i]}`);
      player1HandArr.shift();
      player2HandArr.shift();
    }
  }

  console.log(`
    Game Over!
    
    P1: ${Player1NewHand}
    
    P2: ${Player2NewHand}
  `);
  return [[Player1NewHand], [Player2NewHand]];
}

//Declares the player turns totals - Begin
let turns = takeTurns(player1Hands, player2Hands);
// console.log(turns);
console.log("\n \n Turn score arrays: ", "P1:", turns[0], "P2:", turns[1]);

function countPlayerScore(turns) {
  let player1total = 0;
  let player2total = 0;

  for (var i = 0; i < turns[0].length; i++) {
    player1total += turns[0][i].length;
    console.warn("p1test", player1total);
  }
  for (var i = 0; i < turns[1].length; i++) {
    player2total += turns[1][i].length;
    console.warn("p2test", player2total);
  }
  console.log("Count Player Scores Total:", player1total, player2total);
  return [player1total, player2total];
}

console.log(countPlayerScore(turns));
