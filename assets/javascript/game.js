
//Create array of words to be guessed//
var Words = ["central perk", "monica", "rachel", "smelly cat", "joey", "ross", "chandler", "phoebe"];

var wins = 0;
var correctLetters = [];
var userGuess = [];
var lettersGuessed = [];
gameEnds = false; 

//generate a random word from array
var CurrentWord = Words[Math.floor(Math.random() * Words.length)];
var remainingLetters=CurrentWord.length;
var remainingGuesses = CurrentWord.length + 3;
//var alphabet="abcdefghijklmnopqrstuvwxyz".split("");
 //display blank spaces where letters go   
        var answerArray = [];
        for (var i = 0; i < CurrentWord.length; i++) {
            answerArray[i] = "_";
        }
    
        document.onkeyup = function (event) {
        console.log("Entered on key up function");
        var userGuess = String.fromCharCode(event.keyCode).
            toLowerCase();
        
        //ensure userguess is a letter
        
        /*function allLetter(inputtxt) {
        var letters = /^[A-Za-z]+$/;
         if(inputtxt.value.match(letters)) {
            return true;
           } else {
           alert("Please enter a letter");
           return false;
           }
        }*/
    
        //Define number of guesses remaining
        remainingGuesses = remainingGuesses-1;

        //if letter already guessed, it should not reduce guesses remaining
       
        
        console.log("user's guess is: " + userGuess);
        console.log(CurrentWord);
         
        document.getElementById("current-word").innerHTML = correctLetters.join(" ");
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
        
        //while (remainingGuesses > 0) {
        //document.getElementById("lettersguessed").innerHTML = answerArray.join(" ");
        //}


      
  //add 1 point to wins if user completes word  
    /*if (answerArray.join[i] == CurrentWord[i]) {
        alert ("You win!!!");
        wins++;
    }*/
    
    var o = answerArray.indexOf("_");
    if (o === -1) {
        alert("You win!!!")
        wins++;
        gameEnds = true;
    }
    

    if (remainingGuesses <= 0) { 
                alert("Please try again!");  
                gameEnds = true;
            }



    

 
//after user guesses = 0 or word is guessed, display picture of item
//after user wins/loses, a new word should be automatically displayed for user to play*/



        //Display wins on page
        //Display letters guessed on page
        //Display current word on page//  */  
        var html = "Current Word: " + answerArray.join(" ") + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Remaining guesses: " + remainingGuesses + "</p>";
        
        var html2 = "Letters Guessed: " + lettersGuessed + "</p>";

        document.getElementById("current-word").innerHTML = html;
        document.getElementById("lettersguessed").innerHTML = html2;
        console.log("Exited on key up function");
}
