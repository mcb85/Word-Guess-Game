
//Create array of words to be guessed//
var Words = ["central perk", "monica", "rachel", "smelly cat", "joey", "ross", "chandler", "phoebe"];

var wins = 0;
var correctLetters = 0;
var userGuess = [];
var lettersGuessed = [];
var remainingLetters=[];
//generate a random word from array
var CurrentWord = Words[Math.floor(Math.random() * Words.length)];
remainingGuesses = CurrentWord.length + 3;
    

    document.onkeyup = function (event) {
        console.log("Entered on key up function");
        var userGuess = String.fromCharCode(event.keyCode).
            toLowerCase();
        //Define number of guesses remaining
        remainingGuesses = remainingGuesses-1;
       
        console.log("user's guess is: " + userGuess);
     

        //if (userGuess=== CurrentWord [i]); {
         //return CurrentWord;
         //console.log
     //}
      
        console.log(CurrentWord);
        //display blank spaces where letters go
        var answerArray = [];
        for (var i = 0; i < CurrentWord.length; i++) {
            answerArray[i] = "_";
        }
        console.log(answerArray);

        

        
        console.log(remainingGuesses);
        //Whenever a letter from the array is pressed, display on appropriate space in word
        //new word after user wins or loses
        
        //while (remainingGuesses > 0) {
        //document.getElementById("lettersguessed").innerHTML = answerArray.join(" ");
        //}

        for (var j = 0; j < CurrentWord.length; j++) {
            if (CurrentWord[j] === userGuess) {
                answerArray[j] = userGuess;
                remainingGuesses--;   
            }
        }
        /*} else {
        document.write(userGuess);
        }/*

    document.write(answerArray.join(""));
    }/*


 
*///needs to match in html file
        //Display wins on page
        //Display letters guessed on page
        //Display current word on page//  */  

        var html = "<p>Current Word:" + answerArray + "</p>" +
        "<p>Wins:" + wins + "</p>" +
        "<p>Remaining guesses: " + remainingGuesses + "</p>";

        document.getElementById("current-word").innerHTML = html;
        console.log("Exited on key up function");
    }





//create conditional statements
//Code from


//after user wins, display picture of item
//after user wins/loses, a new word should be automatically displayed for user to play*/}
