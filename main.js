/**
 * ask the user for their choice
 * determine the computers choice
 * 
 * Create a start button that allows a user to start a new game.
 *  Should reset the game back to it's original state, all scores and counters back to init values - -DONE (needs testing)
 * play a round of the game with players choice and computer choice - DONE
 *   Record the winner of the round and increment that players score
 *   Update the score in the DOM 
 *   End the game when one players score reaches 5
 * select the winner based on a set of rules - DONE
 **/
const choiceArr = [ 'rock', 'paper', 'scissors' ]
const i = document.querySelector('i');
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#results');
const start = document.querySelector('#start-btn');
const compScoreLabel = document.querySelector('div#computer-score')
const userScoreLabel = document.querySelector('div#user-score')

let activeGame = false;
let alreadyPlayed = false;
let userScore = 0;
let compScore = 0;

/** Need to establish an event handler(s) that determines the user choice based ont he icon that's selected 
 * Event handler should then capture user input and use it to play the round. 
 * Round should still identify a winner. 
*/

// document.body.addEventListener('click', (e) => {
//     if ( e.target.nodeName === "I") {
//         console.log(e.target.textContent);
//     }

// })



function playRound( e ) {
    
//     if ( e.target.nodeName === "I") {
//         console.log(e.target.textContent);
//     }
    let userChoice = e.target.value
    //user = user.toLowerCase()
    // compChhoice = computerPlay()

    let winLoseTie = 'are victorious'
    , winningChoice = userChoice
    , losingChoice = compChoice
    , verb = 'beats'
    , roundWinner = 'user';

    if (userChoice === compChoice){
        winLoseTie = 'tied'
        verb = 'ties'
    } else if (userChoice === 'rock'){
        if (compChoice === "paper") {
            winLoseTie = 'lose';
            roundWinner = 'comp'
        }
    } else if (userChoice === 'paper'){
        if (compChoice === "scissors") {
            winLoseTie = 'lose';
            roundWinner = 'comp'
        }
    } else {
        if (compChoice === "rock") {
            winLoseTie = 'lose';
            roundWinner = 'comp'
        }
    }

    if(winLoseTie === 'lose'  ) {
        winningChoice = compChoice;
        losingChoice = userChoice;
    }

    result.textContent = `You ${winLoseTie}! ${winningChoice} ${verb} ${losingChoice}`;

    console.log(`You ${winLoseTie}! ${winningChoice} ${verb} ${losingChoice}`);
    if ( winLoseTie !== 'tied') {
        updateScore(roundWinner);
    }
}

//Determine the computers choice by selecting from the choices 
function computerPlay() {
    return choiceArr[Math.floor(Math.random() * choiceArr.length)]
}

//Write a game function that plays a 5 round game 
function game() {
    compChoice = computerPlay();
    buttons.forEach((button) => {
        button.addEventListener('click', playRound);
    });
}

start.addEventListener('click',startGame);

function startGame() {
    //Need to add a counter to only run play round while scores <5
    if (activeGame === true) {
        alert('Please choose your weapon')      
    } else if(alreadyPlayed === true) {
        activeGame = true;
        //reset the scores
        resetScore()
        //initialize the game
        game();
    } else {
        activeGame = true;
        game();  
    }

    declareWinner()
}

function resetScore () {
    userScore = 0;
    compScore = 0;
}

function updateScore(winner){
    if(winner === 'user') {
        userScore += 1;
        userScoreLabel.textContent = `${userScore}`
    } else {
        compScore += 1; 
        compScoreLabel.textContent = `${compScore}`;
    }
}

function declareWinner(){

}