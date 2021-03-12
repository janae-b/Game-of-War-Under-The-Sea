
# Under the Sea War

## Instructions
* There are two players each with their own deck of 26 cards (a full deck split in half)
* Each person draws a card from their deck and reveal the face value.
* Whoever has the higher card value wins that round (Aces being the highest score)
* If there is a tie, the players face off in a "war."  They each pull another card from the top of their deck and see which card is of higher value.  Whoever has the higher value wins all four cards that round.
* The winner is whoever gets all of the cards in the end.
* Bonus in my game: if you feel that the game is dragging a bit, you can hit the "Bored?" button and whoever is in the lead with their score wins the game!

[Here is the game!](http://war-game_jb.surge.sh/)

## Why I chose it:
Growing up, my family would take a lot of two week vacations across the country in our van.  That meant a lot of freetime for my sister and me and we would try to find ways to pass the time in the van.  One of the games that was easier to play in the van was war.  War can also take a bit of time to play so it was also a good time waster when sitting in the car for hours on end. I’ve also always liked the simplicity of War and that it is easy to teach to others.

# PseudoCode for War

1) Define the required constants:
    * Define an object with keys of 'null' (when the two cards are both face down) and the two players 1 & -1. The value assigned to each key represents which deck the player clicks on.
    * Assign each card with a value .  

2) Define the required variables used to track the state of the game:
   * Have two decks of cards that both pull from Math.random logic - split the card in half that would equal one full deck   
    * Have a winner variable to represent three different possibilities - one for if they win the first time cards are drawn, one for the second time cards and one for when all the cards have gone through
    * Use a war variable for when the players get a tie.

3) Cached Elements: Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:
    * Store the card values.

4) Upon loading, the app should:
    * Initialize the state variables:
        * Initialize the two card decks, face down with 26 cards in each
        * Initialize the draw button (player’s deck)
        * Initialize winner to null to show that there is no winner yet. 	
        * Initialize winner to null to represent that there is no winner or tie yet. Winner will hold the player value (1 or -1) if there's a winner. 
        * Initialize war to null to represent that no war has been drawn yet.
    * Render those state variables to the page:
        * Render the decks:
            * Loop over each of the 26 elements that represent the cards in the decks
        * Render a message:
            * If winner has a value other than null (game still in progress), render a message on what the score is.
            * If winner is equal to 'W’' (War), render a War message.
		* Render the decks to pull another card.
			* Render a message for who the winner is
            * Otherwise, render a congratulatory message to which player has won
* If all of the cards have been played, render a message for the winner who has the highest score to tell them that they are the winner
    * Wait for the user to click the player deck to start drawing cards

5) Handle a player clicking the player deck:
    * Have the index change by not using the same index twice
        *"Extracting" the index from an id assigned to the element in the HTML
     
    * If there are no more cards, immediately return because the game is over.
    * Flip turns by multiplying turn by -1 (flips a 1 to -1, and vice-versa).
    * Set the winner variable if there's a winner:
        * Loop through and compare the values of the cards to see which one is higher.
        * If the cards are a tie, then go to a War
	* Go back to Step 5.5.1
        * Add the total points 
        * Change the card amounts for each deck 
    * All state has been updated, so render the state to the page (step 4.2).
        

6) Handle a player clicking the replay button:
    * Do steps 4.1 (initialize the state variables) and 4.2 (render).

# Screenshots

![Getting Started](Getting%20Started.png)
When you click draw, the first card will flip from each deck and these two cards will compete.

![First Draw](FirstCard.png)
The winner is whoever has a higher card value.  

![War](War.png)
If the two cards drawn are tied, then each player draws another card from the top of their deck.  Whoever has the higher value card from that wins all four cards.

## Technologies Used:

JavaScript, HTML, CSS

## Things to add in the future:

* Better animations
* More creative layout
* Hide the war pile until it is used
* Include audio
* Add more “splash” to the cards
* Tackle adding more cards when there is more than one war
* Add flair for when there is a winner

