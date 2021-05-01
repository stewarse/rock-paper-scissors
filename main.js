/**
 * ask the user for their choice
 * determine the computers choice
 * 
 * play a round of the game with players choice and computer choice
 * select the winner based on a set of rules 
 **/
const choiceArr = [ 'rock', 'paper', 'scissors' ]

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

function playRound(user, comp) {
    let winLoseTie = 'win',
    winningChoice = user,
    losingChoice = comp
    let verb = 'beats'


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

    if(winLoseTie === 'lose'){
        winningChoice = 'comp'
        losingChoice = 'player'
    }

    let result = `You ${winLoseTie}! ${winningChoice} ${verb} ${losingChoice}`

    return result
}

//Write a game function that plays a 5 round game 
function game() {
        userChoice = getUserChoice();
        compChoice = computerPlay();
        window.addEventListener('click', playRound( userChoice, compChoice ))
        counter++
}


//Create a function that takes input from the user and returns that input
function getUserChoice() {
    let choice = ''
    let keepGoing = true

    choice = prompt('Rock, Paper, or Scissors? ')
    //Looping through until a user inputs an acceptable answer
    while(keepGoing) {
        if ((choice.toLowerCase().trim() === 'rock') || 
        (choice.toLowerCase().trim() === 'paper') || 
        (choice.toLowerCase().trim() === 'scissors')) {
            keepGoing = false;
        } else {
            choice = prompt('You must select Rock, Paper, or Scissors. Try again:')
        }

    }

    return choice
}

//game()