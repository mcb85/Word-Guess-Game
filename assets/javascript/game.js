 
    /* wins = 0;
    var guessCount = 0;
    var correctLetters= 0;*/
   
    //Create array of words to be guessed//
    var Words = ["central perk", "monica", "rachel", "smelly cat", "joey", "ross", "chandler", "phoebe"];

    var CurrentWord = Words[Math.floor(Math.random() * words.length)];
    
    //create a forloop of letters to be displayed for each letter
    
    //display blank spaces where letters go
    var answerArray = [];
    for (var i = 0; i <CurrentWord.length; i++) {
        answerArray[i] = "_";
    }

//Display # of guesses remaining for user, array length plus 3
    var remainingGuesses = CurrentWord.length + 3;

    while (remainingGuesses > 0) {
        document.write(answerArray.join(""));
       
    }
 
    
    
    //var getRandomWord = function(currentWord) {
        //return currentWord[Math.floor(Math.random()*currentWord.length)];
    }

    //var RandomWord = getRandomWord(currentWord);
    //console.log('randomWord', RandomWord);

    //textform.addEventListener('submit,', function(event) {
        //event.preventDefault()
    }/*



    }



//create a forloop of words to be displayed


//Whenever a letter from the array is pressed, display on appropriate space in word
    //document.onkeyup = function(event) {
        //var userGuess =String.fromCharCode(event.keycode).
            //toUpperCase();






//letters not on the array to be displayed below in "guessed letters"


//create conditional statements
//if (userGuess)

//Display wins on page

//Define number of guesses allowed


//after user wins, display picture of item
//after user wins/loses, a new word should be automatically displayed for user to play



}



/*var html ="<p>Press any key to get started</p>" +
"<p>currentword:" + currentWord + "</p>"
"<p>wins:" + wins + "</p>";
"<p>lettersguessed:" + guessCount + "</p>";

document.querySelector('#game').innerHTML=html;*/

}