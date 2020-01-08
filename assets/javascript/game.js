
//Create array of words to be guessed//
var Words = ["centralperk", "monica", "rachel", "smellycat", "joey", "ross", "chandler", "phoebe"];

var wins = 0;
var losses = 0;
var correctLetters = [];
// var userGuess = [];
var lettersGuessed = [];
var gameEnds = false;

//generate a random word from array
var CurrentWord = Words[Math.floor(Math.random() * Words.length)];
var remainingGuesses = CurrentWord.length + 3;

//after user wins/loses, a new word should be automatically displayed for user to play*/
function reset() {
    CurrentWord = Words[Math.floor(Math.random() * Words.length)];
    correctLetters = [];
    // userGuess = [];
    lettersGuessed = [];
    answerArray = [];
    remainingGuesses = CurrentWord.length + 3;
    createBlank();
}

//display blank spaces where letters go   
var answerArray = [];

function createBlank() {
    for (var i = 0; i < CurrentWord.length; i++) {
        answerArray[i] = "_";
    }
}
createBlank();

  //display picture of current word
function img() {
        if (CurrentWord === Words[0]) {
            document.getElementById("friends").src = "assets/images/central-perk(grubstreet).jpg";
        } else if (CurrentWord === Words[1]) {
            document.getElementById("friends").src = "assets/images/Monica_Geller-wikipedia.jpg";
        } else if (CurrentWord === Words[2]) {
            document.getElementById("friends").src = "assets/images/Rachel_Green-wikipedia.jpg";
        } else if (CurrentWord === Words[3]) {
            document.getElementById("friends").src = "assets/images/smellycatyahoofinance(nbc).jpg";
        } else if (CurrentWord === [4]) {
            document.getElementById("friends").src = "assets/images/joeytribbiani-enews.jpg";
        } else if (CurrentWord === [5]) {
            document.getElementById("friends").src = "assets/images/ross-buzzfeed.jpg";
        } else if (CurrentWord === [6]) {
            document.getElementById("friends").src = "assets/images/Chandler_Bing-wikipedia.png";
        } else if (CurrentWord === [7]) {
            document.getElementById("friends").src = "assets/images/Friendsphoebe-wikipedia.jpg";
        }
    };

//Userguess input
document.onkeyup = function (event) {
    console.log("Entered on key up function");
    var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();
        img();
    //ensure userguess is a letter


    //Define number of guesses remaining
    remainingGuesses = remainingGuesses - 1;

    //if letter already guessed, it should not reduce guesses remaining


    //console.log("user's guess is: " + userGuess);
    //console.log(CurrentWord);

    //document.getElementById("current-word").innerHTML = correctLetters.join(" ");
    console.log(answerArray);
    console.log(remainingGuesses);

    //Whenever a letter from the array is pressed, display on appropriate space in word
    for (var j = 0; j < CurrentWord.length; j++) {
        if (CurrentWord[j] === userGuess) {
            answerArray[j] = userGuess;
            document.getElementById("current-word").innerHTML = answerArray.join(" ");
        }
    }

    //if userguess is not part of the current word, display in "letters guesed"  
    var n = CurrentWord.indexOf(userGuess);
    if (n == -1) {
        lettersGuessed.push(userGuess);
    }
    console.log(n);



    //cannot keep guessing after reaches 0 remaining guesses

    //new word after user wins or loses



    //add 1 point to wins if user completes word 
    var o = answerArray.indexOf("_");
    if (o === -1) {
        console.log("You win!!!");
        wins++;
        gameEnds = true;
        reset();
        img();
    }


    if (remainingGuesses <= 0) {
        console.log("Please try again!");
        losses++;
        gameEnds = true;
        reset();
        img();
    }


    //Display wins on page
    //Display letters guessed on page
    //Display current word on page//  */  
    var html = "Current Word: " + answerArray.join(" ") + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Remaining guesses: " + remainingGuesses + "</p>";

    var html2 = "Letters Guessed: " + lettersGuessed + "</p>";


    document.getElementById("current-word").innerHTML = html;
    document.getElementById("lettersguessed").innerHTML = html2;
    console.log("Exited on key up function");
}

 