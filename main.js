let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3) + 1;

    if(computerSelection === 1) {
        return console.log("rock");
    } else if (computerSelection === 2) {
        return console.log("paper");
    } else {
        return console.log("scissors")
    }
    
}

function getHumanChoice() {
    let humanSelection = prompt("Rock, Paper, or Scissors?");

    if (humanSelection === "rock") {
        return console.log("You chose Rock!");
    } else if (humanSelection === "paper") {
        return console.log("You chose Paper!");
    } else if (humanSelection === "scissors") {
        return console.log("You chose Scissors!");
    }

}

getHumanChoice();

function playRound (humanChoice, computerChoice) {
    
}