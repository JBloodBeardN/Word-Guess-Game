// ## Option Two: Word Guess Game (Challenge - Recommended)

// 1. [Watch the demo](https://youtu.be/W-IJcC4tYFI).

// 2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

// 3. Use key events to listen for the letters that your players will type.

document.onkeyup = function(event){
    var keyPressed = event.key;
}

// 4. Display the following on the page:

// 5. Press any key to get started!

// 6. Wins: (# of times user guessed the word correctly).

var winCount;

//    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
//JAMES: I can use document.innerHTML or something to swap from a "_" to the letter of the word

// JAMES: create a list of words to choose from
var listOfWords = ["Sheriff", "Radio", "Dimension", "Telekenectic"]

//JAMES: randomly chooses a word from the list of words
var wordChosen = listOfWords(Math.floor(Math.random + listOfWords.length));

//creating each letter of the wordChosen as its own object with values of index so that I can reference the letter by its position in the word, also captures the value to referece when I expose and a flag for if the letter has been successfully guessed.
var letter = function (index, value, exposed){
    this.index = index;
    this.value = value;
    this.exposed = exposed;

}

for (i = 0; i < wordChosen.length; i++){



}

//    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

//I assume something like accessing a index in the array of the letters of the word.

document.getElementById('hiddenWord'[i])
document.getElementById('hiddenWord')

// 7. Number of Guesses Remaining: (# of guesses remaining for the user).

// 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

// 9. After the user wins/loses the game should automatically choose another word and make the user play it.

// ##### Word Guess Game Bonuses

// 1. Play a sound or song when the user guesses their word correctly, like in our demo.
// 2. Write some stylish CSS rules to make a design that fits your game's theme.
// 3. **HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
// 4. Save your whole game and its properties in an object.
// 5. Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
// 6. Don't forget to place your global variables and functions above your object.
//    * Remember: global variables, then objects, then calls.
// 7. Definitely talk with a TA or your instructor if you get tripped up during this challenge.

