/***
 * ask the user for their choice
 * determine the computers choice
 * 
 * play a round of the game with players choice and computer choice
 * select the winner based on a set of rules 
 */
const choiceArr = [ 'rock', 'paper', 'scissors' ]

//const compChoice = computerPlay();
//console.log(compChoice);
//const userChoice = "Rock"

//console.log( userChoice, compChoice )
//console.log(playRound(userChoice,compChoice));

//Determine the computers choice by selecting from the choices 
function computerPlay() {
    return choiceArr[Math.floor(Math.random() * choiceArr.length)]
}

//Play a single round of Rock Paper Scissors
//function takes two parameters (compChoice, userChoice)
//return a string that declares the winner of the round (i.e. You suck! Paper beats rock)
//ensure that player input is case insensitve
function playRound(user, comp) {
    user = user.toLowerCase()

    let winLoseTie,
    winningChoice = user,
    losingChoice = comp
    let verb = 'beats'


    if (user === 'rock'){
        if (comp === "scissors") {
            winLoseTie = 'win';
            winningChoice = user;
            losingChoice = comp;
        }
        else if (comp === "paper") {
            winLoseTie = 'lose';
            winningChoice = comp;
            losingChoice = user;
        }
        else {
            winLoseTie = 'tied'
            verb = 'ties'
        }
    } else if (user.toLowerCase === 'paper'){
        if (comp === "rock") {
            winLoseTie = 'win';
            winningChoice = user;
            losingChoice = comp;
        }
        else if (comp === "scissors") {
            winLoseTie = 'lose';
            winningChoice = comp;
            losingChoice = user;
        }
        else {
            winLoseTie = 'tied'
            verb = 'ties'
        } 
    } else {
        if (comp === "paper") {
            winLoseTie = 'win';
            winningChoice = user;
            losingChoice = comp;
        }
        else if (comp === "rock") {
            winLoseTie = 'lose';
            winningChoice = comp;
            losingChoice = user;
        }
        else {
            winLoseTie = 'tied'
            verb = 'ties'
        }
    }

    let result = `You ${winLoseTie}! ${winningChoice} ${verb} ${losingChoice}`

    return result
}

//Write a game function that plays a 5 round game 

//Need to debug  this to figure out why it's no longer working
function game() {
    counter = 0
    while(counter < 5){
        userChoice = getUserchoice();
        compChoice = computerPlay();
        console.log(playRound( userChoice, compChoice ))
        counter++
    }
}





//Create a function that takes input from the user and returns that input
function getUserchoice() {
    let choice = ''
    let keepGoing = true

    choice = prompt('Rock, Paper, or Scissors? ')

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

game()