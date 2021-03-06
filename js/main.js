//variables & constants

let fullDeck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

let deck1Drawn = []
let deck2Drawn = []
let war1 = []
let war2 = []
//Cached Element References

// let deck1El = document.getElementById('deck1')
// let deck2El = document.getElementById('deck2')
// let deck1DrawnEl = document.getElementById('deck1Drawn')
// let deck2DrawnEl = document.getElementById('deck2Drawn')
// let war1El = document.getElementById('war1')
// let war2El = document.getElementById('war2')
// let flipBtn = document.getElementById('btn')
// let flipBtn = document.getElementById('btn')
//Event Listeners

// flipBtn.addEventListener('click', handleClick)
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


  console.log(deck1)
  console.log(deck2)
    
    
    // Call render function (refresh card being displayed)
