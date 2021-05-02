/**
 * ask the user for their choice
 * determine the computers choice
 * 
 * Create a start button that allows a user to start a new game.
 *  Should reset the game back to it's original state, all scores and counters back to init values 
 * play a round of the game with players choice and computer choice - DONE
 *  Record the winner of the round via a score
 *  End the game when one player reaches 5
 * select the winner based on a set of rules - DONE
 **/
const choiceArr = [ 'rock', 'paper', 'scissors' ]
const i = document.querySelector('i');
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#results');
const start = document.querySelector('#start-btn');

/** Need to establish an event handler(s) that determines the user choice based ont he icon that's selected 
 * Event handler should then capture user input and use it to play the round. 
 * Round should still identify a winner. 
*/

// document.body.addEventListener('click', (e) => {
//     if ( e.target.nodeName === "I") {
//         console.log(e.target.textContent);
//     }

// })



function playRound( e, comp) {
    
//     if ( e.target.nodeName === "I") {
//         console.log(e.target.textContent);
//     }
    user = e.target.value
    //user = user.toLowerCase()
    comp = computerPlay()

    let winLoseTie = winner ='are victorious',
    winningChoice = user,
    losingChoice = comp,
    verb = 'beats';

    if (user === comp){
        winLoseTie = 'tied'
        verb = 'ties'
    } else if (user === 'rock'){
        if (comp === "paper") {
            winLoseTie = 'lose';
        }
    } else if (user === 'paper'){
        if (comp === "scissors") {
            winLoseTie = 'lose';
        }
    } else {
        if (comp === "rock") {
            winLoseTie = 'lose';
        }
    }

    if(winLoseTie === 'lose'  ) {
        winningChoice = comp;
        losingChoice = user;
    }

    result.textContent = `You ${winLoseTie}! ${winningChoice} ${verb} ${losingChoice}`;

    console.log(`You ${winLoseTie}! ${winningChoice} ${verb} ${losingChoice}`);

    return true
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

start.addEventListener('click',game);