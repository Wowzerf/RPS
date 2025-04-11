let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let getChoice = Math.floor(Math.random() * 3) + 1;

    if(getChoice === 1) {
        return console.log("rock");
    } else if (getChoice === 2) {
        return console.log("paper");
    } else {
        return console.log("scissors")
    }
    
}

function getHumanChoice() {
    let getChoice = prompt("Rock, Paper, or Scissors?");

    if (getChoice === "rock") {
        return console.log("You chose Rock!");
    } else if (getChoice === "paper") {
        return console.log("You chose Paper!");
    } else if (getChoice === "scissors") {
        return console.log("You chose Scissors!");
    }

}

getHumanChoice();

function playRound (humanChoice, computerChoice) {
    
}