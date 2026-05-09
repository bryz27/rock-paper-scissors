let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else if (choice == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let hand = prompt("Please type 'rock', 'paper', 'scissors'");
    return hand;
}

function loseMessage(humanStr, computerStr) {
    console.log(`You Lose! ${computerStr} beats ${humanStr}`);
    computerScore = computerScore + 1;
}

function winMessage(humanStr, computerStr) {
    console.log(`You Win! ${humanStr} beats ${computerStr}`);
    humanScore = humanScore + 1;
}

function tieMessage(humanStr, computerStr) {
    console.log(`You have tied! ${humanStr} vs ${computerStr}`)
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock" && computerChoice == "paper") {
        loseMessage(humanChoice, computerChoice);
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        winMessage(humanChoice, computerChoice);
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        tieMessage(humanChoice, computerChoice);
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        winMessage(humanChoice, computerChoice);
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        tieMessage(humanChoice, computerChoice);
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        loseMessage(humanChoice, computerChoice);
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        loseMessage(humanChoice, computerChoice);
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        winMessage(humanChoice, computerChoice);
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        tieMessage(humanChoice, computerChoice);
    }
}

function playGame() {
    // for (i = 1; i <= 5; i++) {
    //     hChoice = getHumanChoice();
    //     cChoice = getComputerChoice();
    //     playRound(hChoice, cChoice);
    // }
    // if (humanScore > computerScore) {
    //     console.log(`You win the game! Your score: ${humanScore} Opponent score: ${computerScore}`);
    // } else if (computerScore > humanScore) {
    //     console.log(`You lose the game! Your score: ${humanScore} Opponent score: ${computerScore}`);
    // } else if (humanScore == computerScore) {
    //     console.log(`You have tied the game! Your score: ${humanScore} Opponent score: ${computerScore}`)
    // }
}

playGame();