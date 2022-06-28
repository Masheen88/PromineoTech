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

//Declares the deck of cards to be used in the game - Begin
alert("Click OK to get a deck of cards.");
let newDeckOfCards = new deckOfCards();
let gameDeckOfCards = newDeckOfCards.cardDeck;

//Function to Shuffle the deck of cards - Begin
function shuffleDeckOfCards(gameDeckOfCards) {
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
alert("Click OK shuffle your deck of cards.");
let shuffledGameDeckOfCards = shuffleDeckOfCards(
  gameDeckOfCards,
  newDeckOfCards.cardValues
);

//Function to equally deal the cards to each player - Begin
function dealCards(shuffledGameDeckOfCards) {
  let half = Math.ceil(shuffledGameDeckOfCards.length / 2);
  let player1Hands = shuffledGameDeckOfCards.slice(0, half);
  let player2Hands = shuffledGameDeckOfCards.slice(-half);

  return [player1Hands, player2Hands];
}

//Declares what each player hand will be - Begin
alert("Click OK to deal the cards to each player.");
let playerHands = dealCards(shuffledGameDeckOfCards);
let player1Hands = playerHands[0]; // Player 1 Card Hand
let player2Hands = playerHands[1]; // Player 2 Card Hand
alert(`\n Let the WAR begin! \n`);

//Determines each turn for the game - Begin
function takeTurns(player1HandArr, player2HandArr, Player1, Player2) {
  let player1Score = 0; // Player 1 Score
  let player2Score = 0; // Player 1 Score

  for (let i = 0; i < player1HandArr.length; i++) {
    if (player1HandArr[i][0] < player2HandArr[i][0]) {
      console.log(
        "\n",
        Player1,
        "Loses:",
        player1HandArr[i][1],
        "-VS-",
        Player2,
        "Wins:",
        player2HandArr[i][1]
      );
      player2Score += 1; // Adds 1 Point for Player 2
      console.log(Player1, "gives a point to", Player2, ":", player2Score);
    } else if (player1HandArr[i][0] > player2HandArr[i][0]) {
      console.table(
        "\n",
        Player2,
        "Loses:",
        player2HandArr[i][1],
        "-VS-",
        Player1,
        "Wins:",
        player1HandArr[i][1]
      );

      player1Score += 1; // Adds 1 point for Player 1
      console.table(Player2, "gives a point to", Player1, ":", player1Score);
    } else if (player1HandArr[i][0] === player2HandArr[i][0]) {
      console.table(
        // No players are rewards a point.
        `
        Player Hands are equal: We are going to card WAR! Both players lose! :("\n
        ${Player1}: ${player1HandArr[i][1]} vs ${Player2}: ${player2HandArr[i][1]}`
      );
      player1HandArr.shift();
      player2HandArr.shift();
    }
  }
  return [player1Score, player2Score];
}

//Declares the player turns totals - Begin
let finalScore = takeTurns(player1Hands, player2Hands, Player1, Player2);

//Function to count and output the player score and who won. - Begin
function countPlayerScore(finalScore, player1name, player2name) {
  if (finalScore[0] > finalScore[1]) {
    console.log(`\n
    Game Over!
    ${player1name}'s score is: ${finalScore[0]}
    ${player2name}'s score is: ${finalScore[1]}
    ${player1name} Wins!
    `);
  } else if (finalScore[0] < finalScore[1]) {
    console.log(`\n
    Game Over!
    ${player1name}'s score is: ${finalScore[0]}
    ${player2name}'s score is: ${finalScore[1]}
    ${player2name} Wins!
    `);
  } else {
    `\n
    Game Over!
    ${player1name}'s score is: ${finalScore[0]}
    ${player2name}'s score is: ${finalScore[1]}
    The game was a draw.
  `;
  }
}
//Function to run and call the game.
countPlayerScore(finalScore, Player1, Player2);
