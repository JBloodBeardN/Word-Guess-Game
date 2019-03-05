//global variables
var word;
var guesses = "";
var guessesNum = 0;
var incorrectGuessesNum= 0;
var exposed; 
var wordList = ["primary", "secondary", "tertiary"];
var userGuess;
var currentIndex;
var winCount = 0;
var lossCount = 0;


//all of my functions
//randomWordChooser, event.key(onKeyUp), guesses.push(event.key), update guesses display, iterate guesses var,

//sets the word to be guessed
function randomWordChooser(){
    word = wordList[Math.floor(Math.random()* wordList.length)];
    
}

//tracks the guesses
function pushToGuessesArray(userGuess){
    guesses = guesses+userGuess+" ";
    guesses = guesses.toUpperCase();
}

function updateGuessesDisplay(){
    document.getElementById("guesses").innerHTML= guesses;
}

function iterateGuessesVariable(){
    guessesNum++;
}
//set exposed to all underscores if guesses zero, Splice exposed and concat, update exposed display
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

// This function uses splice and concat in combo with the indexOf return in order to selectively add letters to the display through a variable called expose
// it also has a while loop that makes sure it gets all instances of a userGuess letter
function spliceExposedAndConcat(){
    
    //this allows us to work with the index value in our splice steps
    currentIndex = word.indexOf(userGuess);

    if(currentIndex >=0){
        while (currentIndex >=0){
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
        }
    // if index >= 0, then we can iterate counters here as well
    }else{
        //we can assume that index == -1 and the guess was wrong, and iterate the counter
        incorrectGuessesNum++;
    }
}

//update incorrect guesses- done above in same index>=0 check, update incorrectGuesses display, alert fail or succeed
function updateIncorrectGuessesDisplay(){
    document.getElementById("incorrectGuesses").innerHTML = "Incorrect Guesses:" + incorrectGuessesNum +" /10";
}

function reset(){
    //reset word
    randomWordChooser();
    //reset counters
    guesses = " ";
    guessesNum = 0;
    incorrectGuessesNum = 0;
    updateGuessesDisplay();
    updateIncorrectGuessesDisplay();
    document.getElementById("winCounter").innerHTML = "Wins: "+winCount;
    document.getElementById("lossCounter").innerHTML = "Losses: "+lossCount;
    //reset display of word to user
    setExposedIfGuessesNumEqualsZero();
    updateExposedDisplay();
}

function alertFailSucceed(){
    if (word === exposed){
        winCount++;
        reset();
        document.getElementById("audioSource").setAttribute("src","https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/video-and-audio-content/viper.mp3")
        alert("You Win!! ..also there is an attribute added to the <audio> tag in the DOM element for a sound file that is 'provided' by Mozilla on their page for the <audio>, but I could not get any filepath to it to work.. so inspect the DOM? please?");
        
    } else if (incorrectGuessesNum === 10){
        lossCount++;
        reset();    
        alert("You Failed. Better Luck Next Time.")
        
    }
}





// start of actual script and setup for event listener for key up

randomWordChooser();
setExposedIfGuessesNumEqualsZero();

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
        //do nothing and wait
    }
};