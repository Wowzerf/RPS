function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;

    if(x === 1) {
        return console.log("rock");
    } else if (x === 2) {
        return console.log("paper");
    } else {
        return console.log("scissors")
    }
    
}
