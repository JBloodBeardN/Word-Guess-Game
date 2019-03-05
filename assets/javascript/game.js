//global variables
var word;
var guesses = [];
var guessesNum = 0;
var incorrectGuessesNum= 0;
var exposed; 
var wordList = ["primary", "secondary", "tertiary"];
var userGuess;
var currentIndex;


//all of my functions
//randomWordChooser, event.key(onKeyUp), guesses.push(event.key), update guesses display, iterate guesses var,

//sets the word to be guessed
function randomWordChooser(){
    word = wordList[Math.floor(Math.random()* wordList.length)];
    
}

//tracks the guesses
function pushToGuessesArray(userGuess){
    guesses.push(userGuess);
}

function updateGuessesDisplay(){
    document.getElementById("guesses").innerHTML= guesses;
}

function iterateGuessesVariable(){
    guessesNum++;
}
//set exposed if guesses zero, Splice exposed and concat, update exposed display
function setExposedIfGuessesNumEqualsZero(){
    //only does this the first time round
    if(guessesNum == 0){
        exposed = "";
        // console.log("guessesNum is equal to zero check");
        for (i=0; i < word.length; i++){
            exposed = exposed + "_";
            //this makes a word the length of the wordChosen that only has underscores _
        }
    }
}

function updateExposedDisplay(){
    document.getElementById("exposed").innerHTML = exposed;
}

function spliceExposedAndConcat(){
    
//this allows us to work with the index value in our splice steps
currentIndex = word.indexOf(userGuess);

    if(currentIndex >=0){
        while (currentIndex >=0){
            // console.log("inside while loop:"+ currentIndex)
            //this allows us to not error handle in the concat step
            var firstHalf = "";
            var secondHalf = "";
            //error handle for first letter
            if(currentIndex!=0){
                firstHalf = exposed.slice(0,(currentIndex))
            }
            //error handle for the last letter
            if(currentIndex!= (word.length-1)){
                secondHalf = exposed.slice((currentIndex+1),(word.length));
            }
            //concat back together with user guess
            exposed = firstHalf + userGuess + secondHalf;
            updateExposedDisplay();
            // iterate the current Index
            currentIndex = word.indexOf(userGuess, (currentIndex+1));

            //print a bunch of stuff to check the variables during operation
            // console.log("start of slice");
            // console.log("word " +word);
            // console.log("exposed "+exposed)
            console.log("firstHalf " +firstHalf);
            console.log("secondHalf "+secondHalf);
            console.log("exposed "+exposed);
        }

    // if index >= 0, then we can iterate counters here as well
    }else{
        //we can assume that index == -1 and the guess was wrong, and iterate the counter
        incorrectGuessesNum++;
    }
}

//update incorrect guesses- done above in same index>=0 check, update incorrectGuesses display, alert fail or succeed
function updateIncorrectGuessesDisplay(){
    document.getElementById("incorrectGuesses").innerHTML = "Incorrect Guesses:" + incorrectGuessesNum;
}

function alertFailSucceed(){
    if (word === exposed){
        alert("You Win!!");
    } else if (incorrectGuessesNum === 10){
        alert("You Failed. Better Luck Next Time.")
    }
}

// start of event listener for key up
randomWordChooser();
setExposedIfGuessesNumEqualsZero();
//word set to 'start' for troubleshooting
// word = "start"
// exposed = "_____"
console.log(word);
console.log(exposed);

document.onkeyup = function (GameStep){
    //one guess per letter assertion
    
    if(guesses.indexOf(event.key)<0){
        userGuess = event.key;
        pushToGuessesArray(userGuess);
        updateGuessesDisplay();
        iterateGuessesVariable();
        spliceExposedAndConcat();
        updateIncorrectGuessesDisplay();
        alertFailSucceed();

    }
    else{
        //do nothing
    }
};