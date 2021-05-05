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

let score = [0,0]
let user = 0;
let comp = 1;



const choiceArr = [ 'rock', 'paper', 'scissors' ]
const i = document.querySelector('i');
const buttons = document.querySelectorAll('button.selection');
const result = document.querySelector('#results');
const start = document.querySelector('#start-btn');
const compScoreLabel = document.querySelector('div#computer-score')
const userScoreLabel = document.querySelector('div#user-score')

let activeGame = false;
let alreadyPlayed = false;


/** Need to establish an event handler(s) that determines the user choice based ont he icon that's selected 
 * Event handler should then capture user input and use it to play the round. 
 * Round should still identify a winner. 
*/

// document.body.addEventListener('click', (e) => {
//     if ( e.target.nodeName === "I") {
//         console.log(e.target.textContent);
//     }

// })

start.addEventListener('click',init);

function playRound( e ) {

    if(score[0] !== 5 && score[1] !== 5) {
    //check if there's a winner yet

            let userChoice = e.target.value
            //user = user.toLowerCase()
            compChoice = computerPlay()

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
                roundWinner = roundWinner.replace(/^"|"$/g, '');
                updateScore(roundWinner);
            }
            
            setupGame();
    } else{
        declareWinner();
    }
}
//Determine the computers choice by selecting from the choices 
function computerPlay() {
    return choiceArr[Math.floor(Math.random() * choiceArr.length)]
}

//Write a game function that plays a 5 round game 
function setupGame() {
        buttons.forEach((button) => {
            button.addEventListener('click', playRound);
        });
    }

function startGame() {
    //Need to add a counter to only run play round while scores <5
    if(alreadyPlayed === true) {
        activeGame = true;
        //reset the scores
        resetScore()
        //initialize the game
        game();  
    } else if(activeGame === true) {
            alert('Please choose your weapon')   
    } else {
        activeGame = true;
        setupGame(); 
    }
}

function resetScore () {
    score = [0,0];
    userScoreLabel.textContent = `${score[user]}`
    compScoreLabel.textContent = `${score[comp]}`;
}

function updateScore(winner){
    if(winner === 'user') {
        score[user] += 1;
        userScoreLabel.textContent = `${score[user]}`
    } else {
        score[comp] += 1; 
        compScoreLabel.textContent = `${score[comp]}`;
    }
}


function declareWinner(){
    alert('Someone has won!')
}

function init(){
    resetScore();
    setupGame();
}