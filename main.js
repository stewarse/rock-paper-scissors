/**
 * ask the user for their choice
 * determine the computers choice
 * 
 * play a round of the game with players choice and computer choice
 * select the winner based on a set of rules 
 **/
const choiceArr = [ 'rock', 'paper', 'scissors' ]
const i = document.querySelector('i');
const button = document.querySelector('button');
const result = document.querySelector('#results');

//Determine the computers choice by selecting from the choices 
function computerPlay() {
    return choiceArr[Math.floor(Math.random() * choiceArr.length)]
}

//Play a single round of Rock Paper Scissors
//function takes two parameters (compChoice, userChoice)
//return a string that declares the winner of the round (i.e. You suck! Paper beats rock)

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

    let winLoseTie = 'win',
    winningChoice = user,
    losingChoice = comp,
    verb = 'beats'

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

    if(winLoseTie === 'tie'){
        winningChoice = 'comp'
        losingChoice = 'player'
    }

    result.textContent = `You ${winLoseTie}! ${winningChoice} ${verb} ${losingChoice}`;

    console.log(`You ${winLoseTie}! ${winningChoice} ${verb} ${losingChoice}`);

    return true
}

//Write a game function that plays a 5 round game 
function game() {
        compChoice = computerPlay();
        button.addEventListener('click', playRound);
        //counter++
}

game()