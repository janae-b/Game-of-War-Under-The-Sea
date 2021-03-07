//variables & constants

let fullDeck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

const CARD_VALUES = {
    "dA": 14 ,"dQ": 12, "dK": 13, "dJ": 11,"d10": 10,"d09": 9,"d08": 8,"d07":7,"d06":6,"d05":5,"d04":4,"d03":3,"d02":2,"hA":14,"hQ":12,"hK":13,"hJ":11,"h10":10,"h09":9,"h08":8,"h07":7,"h06":6,"h05":5,"h04":4,"h03":3,"h02":2,"cA":14,"cQ":12,"cK":13,"cJ":11,"c10":10,"c09":9,"c08":8,"c07":7,"c06":6,"c05":5,"c04":4,"c03":3,"c02":2,"sA":14,"sQ":12,"sK":13,"sJ":11,"s10":10,"s09":9,"s08":8,"s07":7,"s06":6,"s05":5,"s04":4,"s03":3,"s02":2
}

let drawnCard1 = []
let drawnCard2 = []
// let war1 = []
// let war2 = []
let cardPicked1 = []
let cardPicked2 = []

//Cached Element References

let deck1El = document.getElementById('deck1')
let deck2El = document.getElementById('deck2')
let drawnCard1El = document.getElementById('drawnCard1')
let drawnCard2El = document.getElementById('drawnCard2')
// let war1El = document.getElementById('war1')
// let war2El = document.getElementById('war2')
let flipBtn = document.getElementById('btn')
// let restartBtn = document.getElementById('restartBtn')
// let messageDiv = document.getElementById('message')

//Event Listeners

flipBtn.addEventListener('click', handleClick)
// restartBtn.addEventListener('click' init)
// Functions



function shuffle(fullDeck) {
    let currentIndex = fullDeck.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = fullDeck[currentIndex];
        fullDeck[currentIndex] = fullDeck[randomIndex]
        fullDeck[randomIndex] = temporaryValue
    }

    return fullDeck;
}

shuffle(fullDeck)
    
let halfOfDeck = Math.floor(fullDeck.length / 2)
let deck1 = fullDeck.splice(halfOfDeck)
let deck2 = fullDeck.splice(-halfOfDeck)

// function handleClick() {
//     let cardPicked1 = deck1.shift()
//     let cardPicked2 = deck2.shift()
//     console.log(cardPicked1)  
//     console.log(cardPicked2)  
//     deck1Drawn.push(cardPicked1)
//     deck2Drawn.push(cardPicked2)
//     console.log(deck1Drawn)
//     console.log(deck2Drawn)

    function handleClick(){
        if (deck1.length > 0) {
          // Assign a random card to a variable
          cardPicked1 = deck1.splice(0, 1);
          console.log(`Player1 card is  + ${cardPicked1}`)
          // Add the picked card to deck 2
          drawnCard1.push(cardPicked1)
          console.log(drawnCard1)}
         if (deck2.length > 0) {
           cardPicked2 = deck2.splice(0, 1);
           console.log(`Player2 card is + ${cardPicked2}`)
           drawnCard2.push(cardPicked2)
           console.log(drawnCard2)
         }
          render(cardPicked1, cardPicked2)
        }
      

      function render(cardPicked1, cardPicked2) {
        let cardToRemove1
        let cardToRemove2  
        //Player1      
        if (drawnCard1.length === 1) {
            drawnCard1El.classList.remove('outline')
        }  
        //remove previous card's CSS Selector
        if (drawnCard1.length > 1) {
              drawnCard1El.classList.remove(cardToRemove1)
          }
          cardToRemove = cardPicked1
          drawnCard1El.classList.add(cardPicked1)
          if (drawnCard1.length === 26) {
              drawnCard1El.classList.add('shadow')
              deck1El.classList.remove('shadow')
          }
          if (deck1.length === 0) {
              deck1El.classList.add('outline')
              deck1El.classList.remove('back-blue')
          }
       //Player 2       
        if (drawnCard2.length === 1) {
            drawnCard2El.classList.remove('outline')
        }  
        
        if (drawnCard2.length > 1) {
              drawnCard2El.classList.remove(cardToRemove2)
          }
          cardToRemove = cardPicked2
          drawnCard2El.classList.add(cardPicked2)
          if (drawnCard2.length === 26) {
              drawnCard2El.classList.add('shadow')
              deck2El.classList.remove('shadow')
          }
          if (deck2.length === 0) {
              deck2El.classList.add('outline')
              deck2El.classList.remove('back-blue')
          }

      }
    
    // WORK ON function isRoundWinner(card1, card2) {
            //return CARD_VALUES[card1.value] 
    //     if (isRoundWinner(deck1Drawn, deck2Drawn)) {
    //     messageDiv.innerText = "Player 1 wins this round" 
    //     deck1
    //     } else {
    //     messageDiv.innerText = "Player 2 wins this round"
    //     }
    // }


//  function isRoundWinner(card, card2) {
//      return CARD_VALUES[card.value] < CARD_VALUES[card2.value]
//  }

// 

//  pop() {
//      return this.deck1.shift()
//  }

//  push() {
//      return this.deck1.push()
//  }
 

// Function for keeping the score 
//  function keepingScore () {
//      score1El = deck1.length
//      score2El = deck2.length
//  } 
// Game Over function
// function gameOver(x) {
//     return x.numberOfCards === 0
// }    
    // Call render function (refresh card being displayed)
