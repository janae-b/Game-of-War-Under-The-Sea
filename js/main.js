//----------------variables & constants---------------------
let fullDeck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
const CARD_VALUES = {
    "dA": 14 ,"dQ": 12, "dK": 13, "dJ": 11,"d10": 10,"d09": 9,"d08": 8,"d07":7,"d06":6,"d05":5,"d04":4,"d03":3,"d02":2,"hA":14,"hQ":12,"hK":13,"hJ":11,"h10":10,"h09":9,"h08":8,"h07":7,"h06":6,"h05":5,"h04":4,"h03":3,"h02":2,"cA":14,"cQ":12,"cK":13,"cJ":11,"c10":10,"c09":9,"c08":8,"c07":7,"c06":6,"c05":5,"c04":4,"c03":3,"c02":2,"sA":14,"sQ":12,"sK":13,"sJ":11,"s10":10,"s09":9,"s08":8,"s07":7,"s06":6,"s05":5,"s04":4,"s03":3,"s02":2
}
let drawnCardPileP1 = [] 
let drawnCardPileP2 = []
let warDrawnCardPileP1 = []
let warDrawnCardPileP2 = []
let cardPickedP1  
let cardPickedP2 
let warCardPickedP1
let warCardPickedP2
let deckP2 = []
let deckP1 = []
//----------------Cached Element References-----------------
let deckP1El = document.getElementById('deckP1')
let deckP2El = document.getElementById('deckP2')
let drawnCardPileP1El = document.getElementById('drawnCardPileP1')
let drawnCardPileP2El = document.getElementById('drawnCardPileP2')
let scoreP1El = document.getElementById('scoreP1')
let scoreP2El = document.getElementById('scoreP2')
let warDrawnCardPileP1El = document.getElementById('warDrawnCardPileP1')
let warDrawnCardPileP2El = document.getElementById('warDrawnCardPileP2')
let drawBtn = document.getElementById('btn')
let shuffleBtn = document.getElementById('shuffleBtn')
let messageDiv = document.getElementById('message')
let endGameBtn = document.getElementById('endGameBtn') 
//---------------------------------Event Listeners------------------------//
drawBtn.addEventListener('click', drawClick)
shuffleBtn.addEventListener('click', newShuffle)
endGameBtn.addEventListener('click', endGame)
//-------------------------------Original Shuffle--------------------------//
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
//----------------------Beginning of game------------------------//
shuffle(fullDeck)

//-----------Splitting the big deck into two decks-----------------//    
let halfOfDeck = Math.floor(fullDeck.length / 2)
deckP1 = fullDeck.splice(halfOfDeck)
deckP2 = fullDeck.splice(-halfOfDeck)

//-------------------Drawing the two cards----------------------------//
function drawClick(){
  removeWarCards()
  if (deckP1.length > 0) {
    cardPickedP1 = deckP1.splice(0, 1);
    drawnCardPileP1.push(cardPickedP1)
  }
  if (deckP2.length > 0) {
    cardPickedP2 = deckP2.splice(0, 1);
    drawnCardPileP2.push(cardPickedP2)
  }
  render(cardPickedP1, cardPickedP2)
  roundWinner(cardPickedP1, cardPickedP2)
}
//------------------------Render(Logic for the Cards)----------------------//
function render(cardPickedP1, cardPickedP2) {
//Player1 
  if (drawnCardPileP1.length > 0) {
    drawnCardPileP1El.classList.remove('outline')
  }  
  if (drawnCardPileP1.length > 1) {
    drawnCardPileP1El.classList.remove(drawnCardPileP1[drawnCardPileP1.length -2])
  }
  drawnCardPileP1El.classList.add(cardPickedP1)
  if (drawnCardPileP1.length === 13) {
    drawnCardPileP1El.classList.add('shadow')
    deckP1El.classList.remove('shadow')
  }
  if (deckP1.length === 0) {
    deckP1El.classList.add('outline')
    deckP1El.classList.remove('back-blue')
  }
//Player 2       
  if (drawnCardPileP2.length > 0 ) {
    drawnCardPileP2El.classList.remove('outline')
  }  
  if (drawnCardPileP2.length > 1) {
    drawnCardPileP2El.classList.remove(drawnCardPileP2[drawnCardPileP2.length -2])
  }
  drawnCardPileP2El.classList.add(cardPickedP2,)
  if (drawnCardPileP2.length === 13) {
    drawnCardPileP2El.classList.add('shadow')
    deckP2El.classList.remove('shadow')
  }
  if (deckP2.length === 0) {
    deckP2El.classList.add('outline')
    deckP2El.classList.remove('back-blue')
  }    
}  
//---------------------Logic for winner of the round------------------------------//
function roundWinner(card1, card2) {
const card1Value = CARD_VALUES[card1]
const card2Value = CARD_VALUES[card2]
  if (card1Value < card2Value) {
    player1HighCard(card1, card2)
    updateScores()
    isGameOver()
  } else if (card1Value > card2Value) {
    player2HighCard(card1, card2)
    updateScores()
    isGameOver()
  } else {
    cardsTie(card1, card2)
    updateScores()
    isGameOver()
  }      
} 
function player1HighCard(card1, card2) {
  messageDiv.innerText = "Player ???? wins this round"
  deckP1.push(card1, card2)
}
function player2HighCard(card1, card2) {
  messageDiv.innerText = "Player ???? wins this round"
  deckP2.push(card1, card2)
} 
//-------------------------Drawing for the War Card-------------------------//
function cardsTie(card1, card2) {
  messageDiv.innerText = "WAR!!!!!"
    if (deckP1.length > 0) {
      warCardPickedP1 = deckP1.splice(0, 1);
      warDrawnCardPileP1.push(warCardPickedP1)
    }
    if (deckP2.length > 0) {
      warCardPickedP2 = deckP2.splice(0, 1);
      warDrawnCardPileP2.push(warCardPickedP2)
    }
  warRender(warCardPickedP1, warCardPickedP2)
  warRoundWinner(warCardPickedP1, warCardPickedP2, card1, card2)
}
function warRender(warCardPickedP1, warCardPickedP2) {
//Player 1  
  if (warDrawnCardPileP1.length > 0 ) {
    warDrawnCardPileP1El.classList.remove('outline')
  }  
//remove previous card's CSS Selector
  if (warDrawnCardPileP1.length > 1) {
    warDrawnCardPileP1El.classList.remove(warDrawnCardPileP1[warDrawnCardPileP1.length -2])
  }
    warDrawnCardPileP1El.classList.add(warCardPickedP1, 'animate__flipInY')
    setTimeout (function() {
    warDrawnCardPileP1El.classList.remove('animate__flipInY')
    }, 1000)
  if (deckP1.length === 0) {
    deckP1El.classList.add('outline')
    deckP1El.classList.remove('back-blue')
  }
//Player 2       
  if (warDrawnCardPileP2.length > 0) {
    warDrawnCardPileP2El.classList.remove('outline')
  }  
  if (warDrawnCardPileP2.length > 1) {
    warDrawnCardPileP2El.classList.remove(warDrawnCardPileP2[warDrawnCardPileP2.length -2])
  } 
  warDrawnCardPileP2El.classList.add(warCardPickedP2, 'animate__flipInY')
  warDrawnCardPileP2El.classList.remove('animate__flipInY')
  if (deckP2.length === 0) {
    deckP2El.classList.add('outline')
    deckP2El.classList.remove('back-blue')
  }    
} 
function warRoundWinner(warCardPickedP1, warCardPickedP2, card1, card2) {
const warCard1Value = CARD_VALUES[warCardPickedP1]
const warCard2Value = CARD_VALUES[warCardPickedP2]
  if (warCard1Value < warCard2Value) {
    setTimeout (function() {
      messageDiv.innerText = "Player ???? wins this war!"
    }, 1000)
    deckP1.push(warCardPickedP1, warCardPickedP2, card1, card2)
  }  else if (warCard1Value > warCard2Value) {
    setTimeout (function() {  
      messageDiv.innerText = "Player ???? wins this war!"
    }, 1000)
    deckP2.push(warCardPickedP1, warCardPickedP2, card1, card2)
  } else {
    setTimeout (function() { 
      messageDiv.innerText = "War again? Player ???? stole the cards!!!"
    }, 1000)
    deckP2.push(warCardPickedP1, warCardPickedP2, card1, card2)
  }
}
//-------------------------------Removing cards----------------------------//
function removeWarCards () {
  if (warDrawnCardPileP1.length > 0) {
    setTimeout (function() {
      warDrawnCardPileP1El.classList.remove(warDrawnCardPileP1[0])
      warDrawnCardPileP1El.classList.add('outline', 'animate__flipOutY')
      warDrawnCardPileP1 = [];
    }, 1000)
  }
  if (warDrawnCardPileP2.length > 0) {
    setTimeout (function() {
      warDrawnCardPileP2El.classList.remove(warDrawnCardPileP2[0])
      warDrawnCardPileP2El.classList.add('outline', 'animate__flipOutY')
      warDrawnCardPileP2 = [];
    }, 1000)
  }
}
function removeRegularCards () {
  if (drawnCardPileP1.length > 0) {
    setTimeout (function() {
      drawnCardPileP1El.classList.add( 'animate__flipOutY', 'outline')
      drawnCardPileP1El.classList.remove(drawnCardPileP1[drawnCardPileP1.length - 1])
      drawnCardPileP1 = [];
    }, 1000)
  }
  if (drawnCardPileP2.length > 0) {
    setTimeout (function() {
      drawnCardPileP2El.classList.add('animate__flipOutY', 'outline')
      drawnCardPileP2El.classList.remove(drawnCardPileP2[drawnCardPileP2.length - 1])
      drawnCardPileP2 = [];
    }, 1000)
  }
}
 //--------------------------Updating the Scores--------------------//
function updateScores () {
  scoreP1El.innerHTML = `Player ???? Score: ${deckP1.length}`
  scoreP2El.innerHTML = `Player ???? Score: ${deckP2.length}`
}
 //----------------------Check if there is a winner---------------------/
function isGameOver() {
  if (deckP1.length === 0) {
    messageDiv.innerHTML = "Player ???? is the Champion!"
  } else if (deckP2.length === 0) {
    messageDiv.innerHTML = "Player ???? is the Champion!"
  }
}
 //--------------------------Resetting the game------------------//
function newShuffle () {
  removeWarCards()
  removeRegularCards()
  let newDeck = []
  newDeck.push(...deckP1,...deckP2)
  shuffle(newDeck)
  let halfOfDeck = Math.floor(newDeck.length / 2)
  deckP1 = newDeck.splice(halfOfDeck)
  deckP2 = newDeck.splice(-halfOfDeck)
  updateScores()
  drawBtn.disabled = false
}
//---------------------------Bored Button-----------------------//
function endGame () {
  if (deckP1.length > deckP2.length) {
    deckP1.push(...deckP2)
    deckP2 = []
    updateScores()
    isGameOver()
    drawBtn.disabled = true
  } else if (deckP1.length < deckP2.length) {
    deckP2.push(...deckP1)
    deckP1 = []
    updateScores()
    isGameOver()
    drawBtn.disabled = true
  }
}






