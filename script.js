let humanScore = 0;
let computerScore = 0;

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
}

function winMessage(humanStr, computerStr) {
    console.log(`You Win! ${humanStr} beats ${computerStr}`);
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
    }
}

