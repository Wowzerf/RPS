let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let askChoice = Math.floor(Math.random() * 3) + 1;

    if(askChoice === 1) {
        return console.log("rock");
    } else if (askChoice === 2) {
        return console.log("paper");
    } else {
        return console.log("scissors")
    }
    
}

function getHumanChoice() {
    let askChoice = prompt("Rock, Paper, or Scissors?");

    if (askChoice === "rock") {
        return console.log(`You chose ${askChoice}! `);
    } else if (askChoice === "paper") {
        return console.log(`You chose ${askChoice}! `);
    } else if (askChoice === "scissors") {
        return console.log(`You chose ${askChoice}!`);
    }

}

getHumanChoice();

function playRound (humanChoice, computerChoice) {
    if(humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}. `);
        return ++humanScore;
    } else if(humanChoice === "rock" && computerChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}. `);
        return ++computerScore;
    } else if(humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}. `);
        return ++humanScore;
    } else if(humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}. `);
        return ++computerScore;
    } else if(humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}. `);
        return ++humanScore;
    } else if(humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}. `);
        return ++computerScore;
    } else {
        return console.log("Its a draw!");
    }
}
