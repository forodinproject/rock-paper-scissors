function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*choice.length);
    console.log(`computerSelection is ${choice[randomIndex]} `)
    return(choice[randomIndex]);
}

function playRound(playerSelection, computerSelection) {
    if (checkWinner(playerSelection, computerSelection) === "tie") {
        return "It is a Tie!";
    }

    if (checkWinner(playerSelection, computerSelection) === "player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    if (checkWinner(playerSelection, computerSelection) === "computer") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    }
    if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock")
    || (playerSelection === "scissors" && computerSelection === "paper"))
    {
        return "player";
    }
    return "computer";
}


computerSelection = getComputerChoice();
const playerSelection = "rock";
console.log(`playerSelection is ${playerSelection}`)
console.log(playRound(playerSelection, computerSelection));
