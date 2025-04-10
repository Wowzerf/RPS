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
